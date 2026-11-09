const colors = ["red", "blue", "yellow", "black"];

let user = {
  name: "harivansh",
  isLoggedIn: true,
};
function printName() {
  console.log(user.name);
}
function App() {
  return (
    <>
      {/*  <React.Fragment></React.Fragment> */}
      <div>pran harivansh</div>
      <div>jiwan harivansh</div>
      <ul>
        {colors.map((c) => {
          return <li>{c}</li>;
        })}
      </ul>
      <p>
        {user.isLoggedIn
          ? `${user.name} is Logged In.`
          : `${user.name} is not Logged In.`}
      </p>
      <button onClick={printName}>Click me</button>
      <button onMouseOver={printName} className="">Hover over me</button>

      <img src="" alt="" />
      {/* open tags must be self closed here */}
      <br />
      <a href="">HIii</a>
    </>
  );
}

export default App;
