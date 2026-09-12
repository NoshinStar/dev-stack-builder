import type {Technology} from "./types";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologyGridProps{
    technologies:Technology[];
    stack:Technology[];
    onAdd: (tech:Technology) =>void;
    onRemove: (id:string)=>void;
    onRemoveAll:()=>void;
}

export default function TechnologyGrid({
  technologies,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}: TechnologyGridProps) {
  return (
    <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900">
        Explore the <span className="bg-brand-gradient bg-clip-text text-transparent">Technologies</span>
      </h2>
      <p className="text-gray-500 mt-2 mb-8">Pick the technologies to build your ideal stack.</p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <TechnologyCard
              key={tech.id}
              tech={tech}
              isAdded={stack.some((t) => t.id === tech.id)}
              onAdd={onAdd}
            />
          ))}
        </div>

        <YourStack stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
      </div>
    </section>
  );
}