import './App.css'
import Navbar from "./Navbar";
import Hero from "./Hero";
import TechnologyGrid from "./TechnologyGrid";
import type {Technology} from "./types";
import rawData from "./technologies.json";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {loading ? (
        <p className="text-center py-20">Loading technologies...</p>
      ) : (
        <TechnologyGrid
          technologies={technologies}
          stack={stack}
          onAdd={addToStack}
          onRemove={removeFromStack}
          onRemoveAll={removeAll}
        />
      )}
    </div>
  );
}

export default App