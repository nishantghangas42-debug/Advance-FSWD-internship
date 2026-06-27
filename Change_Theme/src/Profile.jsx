import { useContext } from "react";
import UserContext from "./UserContext";

const Profile = () => {
  const { user, theme } = useContext(UserContext);

  return (
    <div>
      <h3>{user}</h3>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default Profile;