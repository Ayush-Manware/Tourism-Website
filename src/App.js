import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/banner/Banner";
import Navigationbar from "./components/navlinks/Navigationbar";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Navigationbar />
      <Banner/>
    </div>
  );
}

export default App;
