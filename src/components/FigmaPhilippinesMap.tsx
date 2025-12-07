import { useState, memo } from "react";
import Philippines from "../imports/Philippines";

interface Region {
  id: string;
  name: string;
  unemployment: string;
  color: string;
}

// Memoize the Philippines component to prevent re-renders
const MemoizedPhilippines = memo(Philippines);

export function FigmaPhilippinesMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions: Region[] = [
    { id: "region1", name: "Ilocos Region (I)", unemployment: "4.2%", color: "#2563EB" },
    { id: "region2", name: "Cagayan Valley (II)", unemployment: "3.9%", color: "#DC2626" },
    { id: "region3", name: "Central Luzon (III)", unemployment: "5.1%", color: "#EAB308" },
    { id: "region4a", name: "CALABARZON (IV-A)", unemployment: "5.8%", color: "#2563EB" },
    { id: "region4b", name: "MIMAROPA (IV-B)", unemployment: "4.6%", color: "#DC2626" },
    { id: "region5", name: "Bicol Region (V)", unemployment: "4.5%", color: "#EAB308" },
    { id: "region6", name: "Western Visayas (VI)", unemployment: "4.9%", color: "#2563EB" },
    { id: "region7", name: "Central Visayas (VII)", unemployment: "5.3%", color: "#DC2626" },
    { id: "region8", name: "Eastern Visayas (VIII)", unemployment: "4.7%", color: "#EAB308" },
    { id: "region9", name: "Zamboanga Peninsula (IX)", unemployment: "5.2%", color: "#2563EB" },
    { id: "region10", name: "Northern Mindanao (X)", unemployment: "4.1%", color: "#DC2626" },
    { id: "region11", name: "Davao Region (XI)", unemployment: "3.6%", color: "#EAB308" },
    { id: "region12", name: "SOCCSKSARGEN (XII)", unemployment: "4.3%", color: "#2563EB" },
    { id: "region13", name: "Caraga (XIII)", unemployment: "4.0%", color: "#DC2626" },
    { id: "ncr", name: "NCR", unemployment: "6.8%", color: "#EAB308" },
    { id: "car", name: "CAR", unemployment: "3.2%", color: "#2563EB" },
    { id: "barmm", name: "BARMM", unemployment: "5.9%", color: "#DC2626" },
  ];

  const activeRegion = regions.find(r => r.id === selectedRegion);

  return (
    <div className="relative w-full h-full flex flex-col overflow-auto">
      {/* Info panel */}
      {activeRegion ? (
        <div className="mb-4 backdrop-blur-xl bg-slate-900/90 border border-slate-700/50 rounded-xl p-4">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
            Selected Region
          </div>
          <div className="text-xl mb-1" style={{ color: activeRegion.color }}>
            {activeRegion.name}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-display" style={{ color: activeRegion.color }}>
              {activeRegion.unemployment}
            </span>
            <span className="text-slate-400 text-sm">unemployment rate</span>
          </div>
        </div>
      ) : (
        <div className="mb-4 backdrop-blur-xl bg-slate-900/40 border border-slate-700/30 rounded-xl p-4">
          <p className="font-mono text-xs text-slate-500 uppercase tracking-wider text-center">
            Select a region below to view data
          </p>
        </div>
      )}

      {/* Map with custom styling - isolated from Motion */}
      <div 
        className="flex-1 relative min-h-0"
        data-projection-id="none"
        style={{
          // @ts-expect-error - CSS custom properties
          '--fill-0': 'transparent',
          '--stroke-0': selectedRegion ? regions.find(r => r.id === selectedRegion)?.color || '#0552B5' : '#0552B5',
          willChange: 'auto',
          transform: 'translateZ(0)'
        }}
      >
        <div className="w-full h-full" style={{ isolation: 'isolate' }}>
          <MemoizedPhilippines />
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
              {region.name.split('(')[0].trim()}
            </div>
            <div className="font-mono text-xs mt-0.5">
              {region.unemployment}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
