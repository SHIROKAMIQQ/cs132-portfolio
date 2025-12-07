import { motion } from "motion/react";
import { Database, Calendar, Users, MapPin, FileSpreadsheet, Settings } from "lucide-react";
import { useRef, useEffect } from "react";

export function Dataset() {
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = iframeContainerRef.current;
    if (!container) return;

    const preventPageScroll = (e: WheelEvent) => {
      e.stopPropagation();
    };

    container.addEventListener('wheel', preventPageScroll, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', preventPageScroll);
    };
  }, []);
  
  const datasetFeatures = [
    { icon: Users, label: "Sample Size", value: "20,518", color: "red" },
    { icon: Calendar, label: "Time Period", value: "March 2024", color: "blue" },
    { icon: MapPin, label: "Regions", value: "17", color: "yellow" },
    { icon: Database, label: "Variables", value: "5", color: "red" }
  ];

  return (
    <section className="py-12 bg-slate-950 relative overflow-hidden">
      {/* Animated background blobs */}
      <motion.div 
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-yellow-500/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating decorative shapes */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-yellow-500/30 rounded-full"
        animate={{ 
          y: [0, -20, 0],
          rotate: 360
        }}
        transition={{ 
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header - Centered */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-yellow-500/10 border border-blue-500/20 mb-8">
            <Database className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 uppercase tracking-widest text-sm">Data</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-6 pb-2 bg-gradient-to-r from-blue-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
            Dataset Description
          </h2>
        </div>

        {/* Subsection 1: About the Original Dataset */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-start gap-4 mb-6">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-yellow-500/20 border border-blue-500/30 flex items-center justify-center">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
            </motion.div>
            <div className="flex-1">
              <h3 className="font-display text-3xl text-white mb-2">
                About the Original Dataset
              </h3>
            </div>
          </div>
          <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/5 to-transparent border border-slate-800 hover:border-blue-500/30 transition-all rounded-2xl p-8 space-y-4">
            <p className="text-slate-300 leading-relaxed">
              The dataset that was used in this study is the <span className="text-yellow-400 font-semibold">March 2024 PSA Labor Force Survey</span>. The latest PSA press release at the time of data collection had stated that data had been gathered up to July 2025, however, raw final datasets were only available online up to August 2024.  Furthermore, datasets from April 2024 to August 2024 were missing fields such as Region and Major Industry Group, which were necessary in answering the research questions. The raw unprocessed dataset contained <span className="text-yellow-400 font-semibold">54 columns</span> denoting the attributes being measured and <span className="text-yellow-400 font-semibold">44,063 rows</span> corresponding to people.
            </p>
            <p className="text-slate-300 leading-relaxed">
              In addition, since this dataset was from March 2024, only <span className="text-yellow-400 font-semibold">17 regions</span> are considered. Negros Island Region was only re-established in June 2024. The provinces of Negros Island Region (Negros Occidental, Negros Oriental, and Siquijor) were considered as part of Region VI and Region VII.
            </p>
          </div>
        </motion.div>

        {/* Subsection 2: Data Preprocessing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-start gap-4 mb-6">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-yellow-500/20 border border-red-500/30 flex items-center justify-center">
                <Settings className="w-6 h-6 text-red-400" />
              </div>
            </motion.div>
            <div className="flex-1">
              <h3 className="font-display text-3xl text-white mb-2">
                Data Preprocessing
              </h3>
            </div>
          </div>
          <div className="backdrop-blur-xl bg-gradient-to-br from-red-500/5 to-transparent border border-slate-800 hover:border-red-500/30 transition-all rounded-2xl p-8 space-y-4">
            <p className="text-slate-300 leading-relaxed">
              From the dataset, <span className="text-yellow-400 font-semibold">five columns</span> were relevant to this study: Region, Age as of Last Birthday, Highest Grade Completed, Major Industry Group, and Employment Criteria. Rows that had missing information within these five columns were removed. For simplicity in the computations, we renamed these columns as: <span className="text-yellow-400 font-semibold">Region, Age, Education, Industry, and Employed</span>.
            </p>
            <p className="text-slate-300 leading-relaxed">
              For the education column, the original dataset included values from 0 - 89999, representing no grade completed, undergraduates and graduates of elementary, junior high school, senior high school, post-secondary, and college. We simplified this into four categories, numbered from 0 - 4: <span className="text-yellow-400 font-semibold">no education, primary, secondary, and tertiary</span>. The undergraduate categories were rounded down to the latest category that the person graduated from. Entries considered under primary are at least elementary graduates. For secondary, the person must be at least a senior high school graduate. For tertiary, the person must be at least a post-secondary graduate or a college graduate.
            </p>
            <p className="text-slate-300 leading-relaxed">
              For the employed column, entries with an empty employment status were removed from consideration. Unemployed entries initially had empty value in the Major Industry Group column since they don't have work. To make it a numeric value, these fields will take on 0 as their values since it is an unused value that has no interpretation. Originally, the employment status used values 1 for employed, 2 for unemployed, and 3 for not part of the labor force. Since the preprocessed dataset will only be using statuses employed and unemployed, the preprocessed employment status will use 1 for employed and 0 for unemployed.
            </p>
          </div>
        </motion.div>

        {/* Subsection 3: The Processed Dataset */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-blue-500/20 border border-yellow-500/30 flex items-center justify-center">
                <FileSpreadsheet className="w-6 h-6 text-yellow-400" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-3xl text-white mb-2">
                The Processed Dataset
              </h3>
            </div>
          </div>

          {/* Feature grid with playful hover effects */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {datasetFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const colorMap = {
                red: { border: 'border-red-500/50', text: 'text-red-400', bg: 'from-red-500/10' },
                blue: { border: 'border-blue-500/50', text: 'text-blue-400', bg: 'from-blue-500/10' },
                yellow: { border: 'border-yellow-500/50', text: 'text-yellow-400', bg: 'from-yellow-500/10' }
              };
              const colors = colorMap[feature.color as keyof typeof colorMap];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: index % 2 === 0 ? 3 : -3,
                    y: -10
                  }}
                  className="group cursor-pointer"
                >
                  <div className={`backdrop-blur-xl bg-gradient-to-br ${colors.bg} to-transparent border border-slate-800 hover:${colors.border} rounded-xl p-8 h-full transition-all`}>
                    <Icon className={`w-10 h-10 ${colors.text} mb-6`} />
                    <div className="font-mono text-5xl text-white mb-2 tracking-tight">{feature.value}</div>
                    <div className={`text-sm ${colors.text} mb-1`}>{feature.unit}</div>
                    <div className="text-xs text-slate-600 uppercase tracking-wider">{feature.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Google Sheets Embed Section */}
          <div className="backdrop-blur-xl bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h4 className="font-display text-2xl text-white mb-6">Dataset Preview</h4>
            <div 
              ref={iframeContainerRef}
              className="relative w-full rounded-xl overflow-hidden border border-slate-700 mb-4" 
              style={{ paddingBottom: '56.25%' }}
            >
              <iframe
                src="https://docs.google.com/spreadsheets/d/1oJWI7_JohEPjPAXdCxmXbZWtIWGyRgNxrFi1kYhmQto/edit?usp=sharing/pubhtml?widget=true&headers=false"
                className="absolute top-0 left-0 w-full h-full"
                title="Dataset Preview"
              />
            </div>
            <p className="text-sm text-slate-500 font-mono">
              <span className="text-white bg-blue-500/20 px-2 py-1 rounded">SOURCE:</span> Philippine Statistics Authority (PSA) Labor Force Survey, March 2024
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}