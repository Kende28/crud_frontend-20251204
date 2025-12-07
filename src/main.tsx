import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Main } from "./pages/Main.tsx";
import { ListUsers } from "./pages/ListUsers.tsx";
import { UpdateUser } from "./pages/UpdateUser.tsx";
import { NewUser } from "./pages/NewUser.tsx";

const router = createBrowserRouter([{
  path: "/",
  children: [
    {
      index: true,
      Component: Main,
    },
    {
      path: "users/update",
      Component: UpdateUser
    },
    {
      path: "users/new",
      Component: NewUser
    },
    {
      path: "users",
      Component: ListUsers,
    }
  ],
}]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
