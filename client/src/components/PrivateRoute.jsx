import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

// Outlet is leeting child component to render and in app.jsx we pack child as profile page
export default function PrivateRoute() {
    const {currentUser} = useSelector((state)=>state.user);
  return currentUser ? <Outlet/> : <Navigate to = '/sign-in'/>
}
