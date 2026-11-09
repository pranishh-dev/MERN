import NewFooter, { Footer as DefaultFooter } from "./Components/Footer"; //named import
import NavBar from "./Components/navbar"; //default import
import { Product } from "./Components/Product";
import { Products } from "./Components/Products";
import { Books } from "./Components/Books";
const products = [
  {
    title: "nike ka jutta",
    price: 1234,
  },
  {
    title: "goldstar ka jutta",
    price: 1234,
  },
  {
    title: "puma ka jutta",
    price: 1234,
  },
];
const user = {
  name: "pranish",
  isLoggedIn: true,
};
function App() {
  return (
    <>
      <NavBar user={user}/>
      {/* <NavBar></NavBar> */}
      <div>HIII</div>
      {/* <DefaultFooter/>
     <NewFooter/> */}

      <Products products={products} />
      <Books />
    </>
  );
}

export default App;
