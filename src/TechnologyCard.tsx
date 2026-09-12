import type { Technology } from "./types";

interface TechnologyCardProps{
    tech:Technology;
    isAdded:boolean;
    onAdd: (tech: Technology)=> void;
}

export default function TechnologyCard({tech, isAdded, onAdd}: TechnologyCardProps){
    return(
        <div className="border  border-gray-200 rounded-xl p-5 flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <img src={tech.icon} alt={tech.name} className="w-8 h-8"/>
                <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
          {tech.badge}
        </span>
            </div>

            <h3 className="font-semibold text-gray-900">{tech.name}</h3>
      <p className="text-sm text-gray-500 mt-1 flex-1">{tech.description}</p>

        <div className="flex items-center gap-3 text-xs text-gray-500 mt-4 mb-4">
        <span className="bg-gray-100 px-2 py-1 rounded">{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-gray-700">
          ★ {tech.rating}
        </span>
      </div>

      <button
        disabled={isAdded}
        onClick={() => onAdd(tech)}
        className={`w-full py-2.5 rounded-lg text-sm font-medium ${
          isAdded
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

        </div>
    )
}