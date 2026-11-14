import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { RecipeCard } from "../components/RecipeCard";
import { useLoading } from "../../hooks/useLoading";
import { useLoadingMore } from "../../hooks/useLoadingMore";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [dataTotal, setDataTotal] = useState(recipes.length);
  const [query, setQuery] = useState(null);
  const { loading, makeLoading, makeNoLoading } = useLoading();
  const { loadingMore, makeLoadingMore, makeNoLoadingMore } = useLoadingMore();
  
  // const [loadingMore, setLoadingMore] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const searchInputRef = useRef(null);

  async function fetchRecipes(skipCount = 0, searchQuery = query) {
    skipCount === 0 ? makeLoading() : makeLoadingMore();
    setErrorMsg(null);

    try {
      let url = `https://dummyjson.com/recipes?limit=6&skip=${skipCount}`;

      if (searchQuery) {
        url = `https://dummyjson.com/recipes/search?q=${encodeURIComponent(searchQuery)}&limit=6&skip=${skipCount}`;
      }

      let { data } = await axios.get(url);
      data.skip == 0
        ? setRecipes(data.recipes)
        : setRecipes((prev) => [...prev, ...data.recipes]);
      setDataTotal(data.total);
    } catch (error) {
      setErrorMsg(error);
    } finally {
      skipCount === 0 ? makeNoLoading() : makeNoLoadingMore();
    }
  }

  useEffect(() => {
    fetchRecipes(0, query);
  }, [query]);

  function handleSearch(e) {
    e.preventDefault();
    // console.log(e.target);
    const form = new FormData(e.target);
    let query = form.get("query").trim();
    setQuery(query);
    // console.log(query);
  }

  if (errorMsg) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-8">
        <p>Failed to fetch recipes: {errorMsg.message}</p>
      </main>
    );
  }
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {}
      {}
      <form
        className="flex gap-2 max-w-md mx-auto mb-8"
        onSubmit={(e) => {
          handleSearch(e);
        }}
      >
        <input
          type="text"
          name="query"
          ref={searchInputRef}
          placeholder="Search recipes..."
          // onInput={(e) => console.log(e.target.value)}
          className="flex-1 border border-border rounded px-3 py-2 bg-card text-text outline-none focus:border-accent"
        />
        <button
          type="submit"
          className="bg-accent hover:bg-accent-hover text-white rounded px-4 py-2 font-medium"
        >
          Search
        </button>
      </form>

      {loading ? <p>Loading......</p> : ""}
      {!loading && recipes.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>

          {}
          {loadingMore && (
            <p className="text-center mt-4">Loading more recipes...</p>
          )}
          {recipes.length < dataTotal && (
            <div className="text-center mt-8">
              <button
                type="button"
                disabled={loadingMore}
                className="bg-accent hover:bg-accent-hover text-white rounded px-6 py-2 font-medium"
                onClick={() => fetchRecipes(recipes.length, query)}
              >
                Load More
              </button>
            </div>
          )}
        </>
      ) : (
        ""
      )}

      {!loading && !recipes.length ? (
        <div className="flex flex-col text-center gap-2 max-w-md mx-auto mb-8 __web-inspector-hide-shortcut__">
          <p>No products found related to "{query}"</p>

          {/* <form class=""><input placeholder="Search recipes..." class="flex-1 border border-border rounded px-3 py-2 bg-card text-text outline-none focus:border-accent" type="text" name="query"><button type="submit" class="bg-accent hover:bg-accent-hover text-white rounded px-4 py-2 font-medium">Search</button></form> */}

          {/* //yet to do */}
          <button
            className="bg-red-600 hover:bg-red-700 text-white rounded px-4 py-2 font-medium "
            onClick={() => searchInputRef?.current?.focus()}
          >
            Search Again
          </button>
        </div>
      ) : (
        ""
      )}
      {}
      {}
      {}
      {}
    </main>
  );
}

export default Home;
