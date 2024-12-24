import './App.css';
import Home from "./components/user/Home";
import ForgotPassword from "./components/user/ForgotPassword"; 
import Header from './components/user/Header';
import SignUp from "./components/user/SignUp";
// import SignIn from './components/user/SignIn';
import ProfileManagement from "./components/user/ProfileManagement";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Define your routes correctly
const routes = createBrowserRouter([
  {
    path: "/",
    element: 
    <Home/>,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <>
      {/* Pass the correct `routes` to RouterProvider */}
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
