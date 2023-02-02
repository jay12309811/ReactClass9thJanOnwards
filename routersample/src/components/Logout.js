import { useNavigate } from "react-router-dom";

export default function Logout(props) {
  const navigate = useNavigate();
  function handleLogout() {
    props.setIsLoggedIn(false);
    navigate("/login");
  }
  return <button onClick={handleLogout}>Click to logout</button>;
}
