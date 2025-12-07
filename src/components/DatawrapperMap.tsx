import { useEffect } from "react";

export function DatawrapperMap() {
  useEffect(() => {
    // Datawrapper responsive script
    const handleMessage = (event: MessageEvent) => {
      if (void 0 !== event.data["datawrapper-height"]) {
        const iframes = document.querySelectorAll("iframe");
        for (const key in event.data["datawrapper-height"]) {
          for (let i = 0; i < iframes.length; i++) {
            const iframe = iframes[i] as HTMLIFrameElement;
            if (iframe.contentWindow === event.source) {
              const height = event.data["datawrapper-height"][key] + "px";
              iframe.style.height = height;
            }
          }
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <iframe
        title="Philippines Unemployment Map"
        aria-label="Choropleth map"
        id="datawrapper-chart-Sf1kl"
        src="https://datawrapper.dwcdn.net/Sf1kl/1/"
        scrolling="no"
        frameBorder="0"
        style={{
          width: "0",
          minWidth: "100%",
          border: "none",
        }}
        height="683"
        data-external="1"
      />
    </div>
  );
}
