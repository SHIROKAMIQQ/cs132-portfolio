import { motion } from "motion/react";
import { Target, CheckCircle2, Users } from 'lucide-react';

export function Conclusion() {
  return (
    <section className="py-12 bg-slate-950 relative overflow-hidden">
      {/* Animated background blobs */}
      <motion.div 
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 35, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-red-500/10 to-blue-500/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1, 1.25, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating decorative shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-blue-500/30 rounded-full"
        animate={{ 
          y: [0, 20, 0],
          rotate: 360
        }}
        transition={{ 
          y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 17, repeat: Infinity, ease: "linear" }
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-yellow-500/10 to-red-500/10 border border-yellow-500/20 mb-8">
            <Target className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 uppercase tracking-widest text-sm">Conclusion</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-6 pb-2 bg-gradient-to-r from-yellow-400 via-red-400 to-blue-500 bg-clip-text text-transparent">
            Key Takeaways
          </h2>
        </div>

        {/* Main Conclusion Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="backdrop-blur-xl bg-slate-950/50 border border-slate-800 rounded-2xl p-8 space-y-6">
            <p className="text-slate-300 leading-relaxed">
              This study concludes that <span className="text-yellow-400 font-semibold">educational attainment and industry prevalence are significant predictors</span> of regional unemployment in the Philippines. Higher education continues to serve as a strong safeguard against joblessness; however, its effectiveness depends on the alignment between education and the dominant industries in each region. The results confirm that unemployment is not merely an outcome of individual qualifications but is also shaped by structural economic factors.
            </p>

            <p className="text-slate-300 leading-relaxed">
              The significant chi-square results establish that employment outcomes vary across industries, emphasizing that some sectors inherently provide more stable opportunities than others. Furthermore, regions with more diverse or service-oriented economies tend to demonstrate lower unemployment rates, underscoring the importance of economic diversification.
            </p>
          </div>
        </motion.div>

        {/* Policy Recommendations */}
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
                <CheckCircle2 className="w-6 h-6 text-blue-400" />
              </div>
            </motion.div>
            <div className="flex-1">
              <h3 className="font-display text-3xl text-white mb-2">
                Practical Implications
              </h3>
              <p className="text-yellow-400 font-mono text-sm">Policy Recommendations</p>
            </div>
          </div>
          
          <div className="backdrop-blur-xl bg-slate-950/50 border border-slate-800 rounded-2xl p-8">
            <p className="text-slate-300 leading-relaxed mb-6">
              In practical terms, these findings suggest that national and local governments should:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ scale: 1.02, y: -3 }}
                className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/30 rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <h4 className="text-lg text-blue-200">Industry-Education Partnerships</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Strengthen industry-education partnerships to ensure graduates are trained for high-demand sectors.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02, y: -3 }}
                className="backdrop-blur-xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <h4 className="text-lg text-yellow-200">Regional Diversification</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Encourage regional industrial diversification to reduce dependence on vulnerable sectors.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02, y: -3 }}
                className="backdrop-blur-xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <h4 className="text-lg text-red-200">Vocational Programs</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Promote vocational and technical programs tailored to the needs of local industries.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Final Thoughts */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 via-yellow-500/10 to-red-500/10 border-2 border-slate-700/50 hover:border-blue-500/40 rounded-3xl p-12 flex flex-col justify-center items-center relative overflow-hidden group cursor-pointer shadow-2xl"
        >
          {/* Animated background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-yellow-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <motion.div 
            className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl">
            <motion.div 
              className="mb-6 flex justify-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </motion.div>
            
            <p className="text-slate-200 text-xl leading-relaxed mb-4">
              By integrating educational policy with regional economic planning, the Philippines can move toward more <span className="text-yellow-400 font-semibold">equitable and sustainable employment growth</span>, advancing the broader goals of <span className="text-blue-400 font-semibold">SDG 8: Decent Work and Economic Growth</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}