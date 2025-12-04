import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Main } from "./pages/Main.tsx";
import { ListUsers } from "./pages/ListUsers.tsx";
import { UpdateUser } from "./pages/UpdateUser.tsx";

const router = createBrowserRouter([{
  path: "/",
  children: [
    {
      index: true,
      Component: Main,
    },
    {
      path: "users",
      Component: ListUsers,
    },
    {
      path: "users/update",
      Component: UpdateUser
    }
  ],
}]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
