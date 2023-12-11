import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import './styles/Home.css';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Route>
    )
)

export default function App() {
  return <RouterProvider router={router}/>
}