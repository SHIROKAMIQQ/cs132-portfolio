import { useState } from "react";

interface Region {
  id: string;
  name: string;
  unemployment: string;
  color: string;
}

export function SimplePhilippinesMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions: Region[] = [
    { id: "ncr", name: "National Capital Region", unemployment: "5.2%", color: "#EF4444" },
    { id: "car", name: "Cordillera Administrative Region", unemployment: "3.8%", color: "#3B82F6" },
    { id: "i", name: "Ilocos Region", unemployment: "4.1%", color: "#EAB308" },
    { id: "ii", name: "Cagayan Valley", unemployment: "3.9%", color: "#10B981" },
    { id: "iii", name: "Central Luzon", unemployment: "4.7%", color: "#F59E0B" },
    { id: "iva", name: "CALABARZON", unemployment: "5.5%", color: "#EC4899" },
    { id: "ivb", name: "MIMAROPA", unemployment: "3.2%", color: "#8B5CF6" },
    { id: "v", name: "Bicol Region", unemployment: "4.3%", color: "#14B8A6" },
    { id: "vi", name: "Western Visayas", unemployment: "5.1%", color: "#F97316" },
    { id: "vii", name: "Central Visayas", unemployment: "4.8%", color: "#06B6D4" },
    { id: "viii", name: "Eastern Visayas", unemployment: "3.7%", color: "#84CC16" },
    { id: "ix", name: "Zamboanga Peninsula", unemployment: "4.6%", color: "#EAB308" },
    { id: "x", name: "Northern Mindanao", unemployment: "4.2%", color: "#3B82F6" },
    { id: "xi", name: "Davao Region", unemployment: "3.5%", color: "#10B981" },
    { id: "xii", name: "SOCCSKSARGEN", unemployment: "4.4%", color: "#EF4444" },
    { id: "xiii", name: "Caraga", unemployment: "3.6%", color: "#8B5CF6" },
    { id: "barmm", name: "BARMM", unemployment: "6.8%", color: "#DC2626" },
  ];

  const activeRegion = selectedRegion ? regions.find(r => r.id === selectedRegion) : null;

  return (
    <div className="flex flex-col h-full">
      {/* Selected region info */}
      {activeRegion ? (
        <div className="mb-4 backdrop-blur-xl bg-slate-900/60 border-2 rounded-xl p-4" style={{ borderColor: `${activeRegion.color}50` }}>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-mono text-xs opacity-60 uppercase mb-1">{activeRegion.id.toUpperCase()}</div>
              <div className="font-display text-lg" style={{ color: activeRegion.color }}>{activeRegion.name}</div>
            </div>
            <span className="text-3xl font-display" style={{ color: activeRegion.color }}>
              {activeRegion.unemployment}
            </span>
          </div>
        </div>
      ) : (
        <div className="mb-4 backdrop-blur-xl bg-slate-900/40 border border-slate-700/30 rounded-xl p-4">
          <p className="font-mono text-xs text-slate-500 uppercase tracking-wider text-center">
            Select a region below to view data
          </p>
        </div>
      )}

      {/* Simple map placeholder */}
      <div className="flex-1 relative min-h-0 backdrop-blur-xl bg-slate-900/20 border border-slate-700/30 rounded-2xl p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4" style={{ filter: 'grayscale(0.3)' }}>🇵🇭</div>
          <p className="text-slate-400 text-sm font-mono">
            Philippines Map
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Select regions below to explore data
          </p>
        </div>
      </div>

      {/* Region selector grid */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 flex-shrink-0">
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => setSelectedRegion(selectedRegion === region.id ? null : region.id)}
            className={`
              px-3 py-2 rounded-lg border-2 transition-all text-sm
              ${selectedRegion === region.id
                ? 'border-current shadow-lg transform scale-105'
                : 'border-slate-700/50 hover:border-slate-600'
              }
            `}
            style={{
              color: selectedRegion === region.id ? region.color : '#94A3B8',
              backgroundColor: selectedRegion === region.id ? `${region.color}15` : 'transparent'
            }}
          >
            <div className="font-mono text-xs mb-0.5 opacity-60">
              {region.id.toUpperCase()}
            </div>
            <div className="font-medium truncate">
              {region.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
