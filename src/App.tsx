import { useState, useEffect } from "react";
import './App.css'
import Navbar from "./Navbar";
import Hero from "./Hero";
import TechnologyGrid from "./TechnologyGrid";
import type {Technology} from "./types";
import rawData from "./technologies.json";
import Footer from "./Footer";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTechnologies(rawData as Technology[]);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const addToStack = (tech: Technology) => {
    if (stack.find((t) => t.id === tech.id)) return; 
    setStack([...stack, tech]);
  };

  const removeFromStack = (id: string) => {
    setStack(stack.filter((t) => t.id !== id));
  };

  const removeAll = () => setStack([]);

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
      <Footer />
    </div>
  );
}

export default App;