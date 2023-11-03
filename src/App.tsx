import Home from "./pages/Home";
import { ViewController } from "./pages/Home/viewController";
import { Outlet, Link } from "react-router-dom";
import FixedBottomNavigation from './components/BottomBar/index'
import SideMenu from "./components/Drawer";
function App() {
  const viewController = ViewController();
  

  return (
    <>
    <SideMenu />
   
   <Outlet />
   <FixedBottomNavigation />
    </>
  );
}

export default App;
