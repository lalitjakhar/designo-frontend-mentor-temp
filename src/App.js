import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Objectives from "./Components/Objectives/Objectives";
import { Footer } from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Objectives />
      <Footer/>
    </>
  );
}

export default App;
