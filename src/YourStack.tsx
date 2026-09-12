import type { Technology } from "./types";

interface YourStackProps{
    stack:Technology[];
    onRemove:(id:string)=>void;
    onRemoveAll:()=>void;
}

export default function YourStack({stack, onRemove,onRemoveAll}:YourStackProps){
    return(
        <div className="border border-gray-200 rounded-xl p-5 h-fit">
            <h3 className="font-semibold text-gray-900">Your Stack</h3>
      <p className="text-sm text-gray-400 mb-4">
        {stack.length === 0 ? "No technologies selected yet." : `${stack.length} Technology Selected`}
      </p>
            {stack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-lg py-10 text-center text-sm text-gray-400">
          Your stack is empty.
        </div>
            ):(
                <div className="flex flex-col gap-3">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2"
            >
              <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{tech.name}</p>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
              <button onClick={() => onRemove(tech.id)} className="text-gray-400 hover:text-gray-600">
                ✕
              </button>
            </div>
          ))}
<button
            onClick={onRemoveAll}
            className="mt-2 border border-red-200 text-red-500 text-sm font-medium py-2 rounded-lg hover:bg-red-50"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}