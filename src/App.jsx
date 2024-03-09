import { useDispatch } from "react-redux";
import "./App.css";
import Router from "./Router/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "./Redux/Features/authSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("data") !== null) {
      dispatch(login(JSON.parse(localStorage.getItem("data"))));
    }
  }, []);
  return (
    <>
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
