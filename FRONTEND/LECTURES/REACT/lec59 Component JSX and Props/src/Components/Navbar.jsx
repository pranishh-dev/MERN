import { Status } from "./Status";


function NavBar({user}) {
  return (
    <>
      <ul>
        <li>home</li>
        <li>gallery</li>
        <li>history</li>
        <li>about</li>
        <li>
          <Status name={user.name} isLoggedIn={user.isLoggedIn}/>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
