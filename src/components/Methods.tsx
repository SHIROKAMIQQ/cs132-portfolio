import { motion } from "motion/react";
import { FlaskConical } from "lucide-react";

export function Methods() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-950/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-yellow-950/15 via-transparent to-transparent" />
      
      {/* Elegant floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/8 via-yellow-500/4 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, -60, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-red-500/6 via-blue-500/3 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header - Centered */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-yellow-500/10 border border-blue-500/20 mb-8">
            <FlaskConical className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 uppercase tracking-widest text-sm">Methods</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-6 pb-2 bg-gradient-to-r from-blue-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
            Methodology
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="group"
        >
          <motion.div
            className="relative border border-slate-800/80 bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-2xl overflow-hidden backdrop-blur-xl"
            whileHover={{ scale: 1.005 }}
          >
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/5 transition-all duration-500" />
            
            <div className="p-12 relative z-10 text-center">
              <p className="text-slate-400 text-xl leading-relaxed italic">
                Methodology content to be added here...
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
