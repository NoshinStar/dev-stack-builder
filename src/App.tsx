import { useState, useEffect } from "react";
import './App.css'
import Navbar from "./Navbar";
import Hero from "./Hero";
import TechnologyGrid from "./TechnologyGrid";
import type { Technology } from "./types";
import rawData from "./technologies.json";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    const alreadyAdded = stack.find((t) => t.id === tech.id);

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack`);
      return;
    }

    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  const removeFromStack = (id: string) => {
    const removedTech = stack.find((t) => t.id === id);
    setStack(stack.filter((t) => t.id !== id));

    if (removedTech) {
      toast.info(`${removedTech.name} removed from your stack`);
    }
  };


  const removeAll = () => {
    setStack([]);
    toast.info("Your stack has been cleared.");
  };



  return (
    <div>
      <ToastContainer position="top-right" autoClose={2000} />
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