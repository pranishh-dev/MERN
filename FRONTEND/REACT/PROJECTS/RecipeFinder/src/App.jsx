import { Route, Routes } from "react-router";
import { NavBar } from "./components/NavBar";
import Home from "./pages/home";
import { RecipeDetail } from "./pages/RecipeDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Home />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
