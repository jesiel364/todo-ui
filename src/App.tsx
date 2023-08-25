import Home from "./pages/Home";
import { ViewController } from "./pages/Home/viewController";
import { Outlet, Link } from "react-router-dom";
import FixedBottomNavigation from './components/BottomBar/index'
function App() {
  const viewController = ViewController();
  

  return (
    <>
   
   <Outlet />
   <FixedBottomNavigation />
    </>
  );
}

export default App;
