import { useState } from "react";
import { philippinesGeoJSON } from "../data/philippines-regions";

interface Region {
  id: string;
  name: string;
  unemployment: string;
  color: string;
}

export function PhilippinesMap() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
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

  // Convert GeoJSON coordinates to SVG path
  const convertGeoJSONToPath = (coordinates: any[], bounds: any) => {
    const paths: string[] = [];
    
    const convertCoord = (coord: number[]) => {
      const [lng, lat] = coord;
      // Convert lat/lng to SVG coordinates
      const x = ((lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * 800;
      const y = ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * 1200;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    };

    const processPolygon = (polygon: any[]) => {
      if (polygon.length === 0) return '';
      
      const pathParts = polygon.map(ring => {
        if (ring.length === 0) return '';
        const points = ring.map((coord: number[]) => convertCoord(coord));
        return `M ${points.join(' L ')} Z`;
      });
      
      return pathParts.join(' ');
    };

    if (coordinates[0] && Array.isArray(coordinates[0][0]) && Array.isArray(coordinates[0][0][0])) {
      // MultiPolygon
      coordinates.forEach(polygon => {
        const path = processPolygon(polygon);
        if (path) paths.push(path);
      });
    } else if (coordinates[0] && Array.isArray(coordinates[0][0])) {
      // Polygon
      const path = processPolygon(coordinates);
      if (path) paths.push(path);
    }
    
    return paths.join(' ');
  };

  const activeRegion = regions.find(r => r.id === (hoveredRegion || selectedRegion));

  // Calculate bounds for the Philippines
  const bounds = {
    minLng: 116,
    maxLng: 127,
    minLat: 4.5,
    maxLat: 21
  };

  // Mapping of GeoJSON region names to our region IDs
  const regionMapping: { [key: string]: string } = {
    'Region I': 'region1',
    'Region II': 'region2',
    'Region III': 'region3',
    'Region IV-A': 'region4a',
    'Region IV-B': 'region4b',
    'Region V': 'region5',
    'Region VI': 'region6',
    'Region VII': 'region7',
    'Region VIII': 'region8',
    'Region IX': 'region9',
    'Region X': 'region10',
    'Region XI': 'region11',
    'Region XII': 'region12',
    'Region XIII': 'region13',
    'NCR': 'ncr',
    'CAR': 'car',
    'BARMM': 'barmm'
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Info panel */}
      {activeRegion && (
        <div className="absolute top-0 left-0 right-0 backdrop-blur-xl bg-slate-900/90 border border-slate-700/50 rounded-xl p-4 mx-4 z-20">
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
      )}

      {/* Accurate Philippines Map */}
      <svg
        viewBox="0 0 800 1200"
        className="w-full h-full"
        style={{ maxHeight: '700px' }}
      >
        {/* Background */}
        <rect width="800" height="1200" fill="#0F172A" fillOpacity="0.3" />
        
        {/* Ocean effect */}
        <circle cx="400" cy="600" r="450" fill="#1E40AF" fillOpacity="0.03" />

        <g id="philippines-regions">
          {philippinesGeoJSON.features.map((feature: any, index: number) => {
            const regionName = feature.properties?.name;
            const regionId = regionMapping[regionName];
            
            if (!regionId) {
              return null;
            }
            
            const region = regions.find(r => r.id === regionId);
            if (!region) return null;

            const isActive = hoveredRegion === regionId || selectedRegion === regionId;
            const path = convertGeoJSONToPath(feature.geometry.coordinates, bounds);

            return (
              <path
                key={`${regionId}-${index}`}
                id={regionId}
                d={path}
                fill={isActive ? region.color : `${region.color}80`}
                stroke={region.color}
                strokeWidth={isActive ? 2.5 : 1}
                strokeOpacity={isActive ? 1 : 0.6}
                className="cursor-pointer transition-all duration-200"
                style={{
                  filter: isActive ? 'drop-shadow(0 0 8px currentColor)' : 'none'
                }}
                onMouseEnter={() => setHoveredRegion(regionId)}
                onMouseLeave={() => setHoveredRegion(null)}
                onClick={() => setSelectedRegion(selectedRegion === regionId ? null : regionId)}
              />
            );
          })}
        </g>

        {/* Geographic labels */}
        <text x="400" y="200" textAnchor="middle" fill="#64748B" fontSize="16" fontFamily="monospace" fontWeight="500">
          LUZON
        </text>
        <text x="400" y="650" textAnchor="middle" fill="#64748B" fontSize="16" fontFamily="monospace" fontWeight="500">
          VISAYAS
        </text>
        <text x="400" y="1000" textAnchor="middle" fill="#64748B" fontSize="16" fontFamily="monospace" fontWeight="500">
          MINDANAO
        </text>
      </svg>

      {/* Instructions */}
      {!activeRegion && (
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <p className="font-mono text-xs text-slate-500 uppercase tracking-wider">
            Click regions to view unemployment data
          </p>
        </div>
      )}
    </div>
  );
}
