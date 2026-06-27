import { useContext } from "react";
import UserContext from "./UserContext.jsx";
import Profile from "./Profile.jsx";

const Navbar = () => {
  const { theme, changeTheme } = useContext(UserContext);

  return (
    <div>
      <h2>Navbar</h2>

      <button
        onClick={changeTheme}
        style={{
          backgroundColor: theme === "light" ? "red" : "lightblue",
          color: theme === "light" ? "white" : "white",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>

      <Profile />
    </div>
  );
};

export default Navbar;
