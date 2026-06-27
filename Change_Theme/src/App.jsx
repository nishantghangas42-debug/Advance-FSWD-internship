import UserContext from "./UserContext";
import Navbar from "./Navbar";
import { useState } from "react";
import "./App.css"

const App = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const user = "Geeta University";

  return (
    <UserContext.Provider
      value={{
        user,
        theme,
        changeTheme,
      }}
    >
      <div className={theme}>
        <Navbar />
      </div>
    </UserContext.Provider>
  );
};

export default App;