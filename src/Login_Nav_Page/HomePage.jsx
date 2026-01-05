import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
   
    localStorage.removeItem("user");
    navigate("/");
    alert("Logged out successfully");

    // yahan future me auth logout logic add kar sakte ho
  };

  return (
   <>
   <Navbar/>
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Home Page</h1>

      <p style={styles.text}>
        You are successfully logged in. This is your home page where you can
        see your dashboard, profile, and other features.
      </p>

      <button style={styles.button} onClick={handleLogout}>
        Logout
      </button>
    </div></>
  );
};
const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    marginLeft:"180px",
  },
  heading: {
    color: "#333",
  },
  text: {
    fontSize: "16px",
    margin: "20px 0",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default HomePage