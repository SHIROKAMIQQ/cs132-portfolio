import { SimplePhilippinesMap } from "./SimplePhilippinesMap";

// This component uses a simplified map to avoid Motion projection issues
export function IsolatedMap() {
  return (
    <div 
      style={{ 
        transform: 'translateZ(0)',
        isolation: 'isolate',
        contain: 'layout style paint',
        willChange: 'auto'
      }}
      data-framer-portal-id="isolated-map"
    >
      <SimplePhilippinesMap />
    </div>
  );
}
