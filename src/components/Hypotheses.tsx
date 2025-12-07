import { motion } from "motion/react";
import { X, Check } from "lucide-react";

export function Hypotheses() {
  const hypotheses = [
    {
      id: "Research Question 1",
      null: "Educational attainment has no correlation with unemployment rates.",
      alternative: "Educational attainment strongly correlates with unemployment rates.",
    },
    {
      id: "Research Question 2",
      null: "Different regions having different prevailing industries does not significantly affect differences in unemployment rates per region.",
      alternative: "Different regions having different prevailing industries significantly affect differences in unemployment rates per region.",
    }
  ];

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 border-2 border-yellow-500/30"
        animate={{ rotate: 360, y: [0, -20, 0] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header - Centered */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-red-500/10 to-yellow-500/10 border border-red-500/20 mb-8">
            <span className="text-red-400 uppercase tracking-widest text-sm">Hypotheses</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-6 pb-2 bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent">
            Statistical Hypotheses
          </h2>
        </div>

        <div className="space-y-12">
          {hypotheses.map((hypothesis, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-6">
                <span className="font-display text-3xl text-blue-400">
                  {hypothesis.id}
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="backdrop-blur-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 rounded-xl p-8 space-y-4 transition-all hover:bg-slate-900/70">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                      <X className="w-4 h-4 text-slate-500" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Null</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    {hypothesis.null}
                  </p>
                </div>
                
                <div className="backdrop-blur-xl bg-red-500/5 border border-red-500/30 hover:border-red-500/40 rounded-xl p-8 space-y-4 transition-all hover:bg-red-500/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-red-400" />
                    </div>
                    <span className="font-mono text-xs text-red-400 uppercase tracking-wider">Alternative</span>
                  </div>
                  <p className="text-white leading-relaxed">
                    {hypothesis.alternative}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}