import Home from "./pages/Home";
import { ViewController } from "./pages/Home/viewController";
import { Outlet, Link } from "react-router-dom";

function App() {
  const viewController = ViewController();
  

  return (
    <>
   
   <Outlet />
    </>
  );
}

export default App;
