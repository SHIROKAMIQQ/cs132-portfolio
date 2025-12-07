import { motion } from "motion/react";
import { MessageSquare } from 'lucide-react';

export function Discussion() {
  return (
    <section className="py-12 bg-slate-900 relative overflow-hidden">
      {/* Animated background blobs */}
      <motion.div 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, -35, 0],
          y: [0, 45, 0],
          scale: [1, 1.18, 1]
        }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-blue-500/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, 35, 0],
          y: [0, -25, 0],
          scale: [1, 1.22, 1]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating decorative shapes */}
      <motion.div
        className="absolute top-1/3 left-1/3 w-20 h-20 border-2 border-yellow-500/30"
        animate={{ 
          y: [0, 18, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 16, repeat: Infinity, ease: "linear" }
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-red-500/10 to-yellow-500/10 border border-red-500/20 mb-8">
            <MessageSquare className="w-5 h-5 text-red-400" />
            <span className="text-red-400 uppercase tracking-widest text-sm">Discussion</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-6 pb-2 bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent">
            Interpreting the Results
          </h2>
        </div>

        {/* Main Discussion Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="backdrop-blur-xl bg-slate-950/50 border border-slate-800 rounded-2xl p-8 space-y-6">
            <p className="text-slate-300 leading-relaxed">
              The findings of this study demonstrate clear relationships between educational attainment, industry prevalence, and regional unemployment patterns in the Philippines. The first research question examined whether higher levels of education reduce the likelihood of unemployment. Consistent with  <a href="https://doi.org/10.1007/978-3-030-82284-2_3" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Mayombe (2021)</a>, the results show that individuals with higher educational attainment, particularly college graduates, exhibit lower unemployment rates compared to those with only primary or secondary education. This supports the idea that <span className="text-yellow-400 font-semibold">education remains a key determinant of employability</span> and economic stability.
            </p>

            <p className="text-slate-300 leading-relaxed">
              However, the analysis also revealed that this relationship is not uniform across regions, suggesting the influence of local economic structures. For instance, in regions where service-based or professional industries dominate, unemployment rates among college graduates were markedly lower. Conversely, in regions where agriculture, manufacturing, or informal industries were more prevalent, unemployment rates were higher even among individuals with secondary or vocational education. This indicates that <span className="text-yellow-400 font-semibold">industry composition moderates the effect of education on employment outcomes</span>.
            </p>

            <p className="text-slate-300 leading-relaxed">
              The second research question explored whether regions with different dominant industries exhibit significantly different unemployment rates. The chi-square test for independence between industry type and employment status yielded a statistically significant result, confirming that <span className="text-yellow-400 font-semibold">employment likelihood is not independent of industry sector</span>. Regions dominated by industries such as wholesale, construction, and agriculture showed disproportionately higher unemployment rates, while those led by education, health, and business services exhibited lower rates. This pattern suggests that the structure of regional economies influences the distribution of employment opportunities.
            </p>

            <p className="text-slate-300 leading-relaxed">
              The visual analyses further reinforced these findings. Regions where service-oriented industries dominate had consistently lower unemployment rates, while industrial or resource-dependent regions were more vulnerable to job scarcity. This may be attributed to differences in automation exposure, labor demand fluctuations, and skill mismatches between available jobs and educational training.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Overall, the data illustrate a complex relationship between education, industry structure, and regional labor market dynamics, highlighting the need for region-specific employment policies and targeted education reforms aligned with local economic demands.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}