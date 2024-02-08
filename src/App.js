import "./App.css";
import Navbar from "./components/Navbar";
import Navigationbar from "./components/navlinks/Navigationbar";
import Routers from "./routes/Routes";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Navigationbar />
      <Routers/>
    </div>
  );
}

export default App;
