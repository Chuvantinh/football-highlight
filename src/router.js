import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Home from "./components/Home";
import Highlight from "./components/Highlight";
export default [
    { path: "/", component: Home },
    { path: "/users" , component: Users},
    { path: "/highlight" , component: Highlight},
    { path: "/users/:id" , component: UserDetails},
    { path: "/users/add", component: Users},
]