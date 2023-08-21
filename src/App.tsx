import Home from "./pages/Home";
import { ViewController } from "./pages/Home/viewController";

function App() {
  const viewController = ViewController();
  console.log(viewController.tasks);

  return (
    <>
    <Home />
  
    </>
  );
}

export default App;
