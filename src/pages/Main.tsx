import { NavLink, Outlet} from "react-router";

export function Main() {
    return<>
        <NavLink to={"users"}>User list</NavLink>
        <NavLink to={"users/new"}>New user</NavLink>
        <Outlet></Outlet>
    </>
}