import { Outlet } from "react-router"
import { Main } from "./pages/Main"


function App() {


  return (
    <>
      <Main/>
      <Outlet/>
    </>
  )
}

export default App
