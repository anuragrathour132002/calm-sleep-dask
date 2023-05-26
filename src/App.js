import "./App.css";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="app">
      <div className="app__navbar">
        <Navbar />
      </div>
      <div className="app__dashboard">
        <Dashboard
          image={"https://picsum.photos/seed/picsum/450/600"}
          unique_plays={6000}
          total_plays={8000}
          completion_rate={80}
          title={"Dashboard"}
        />
      </div>
    </div>
  );
}

export default App;
