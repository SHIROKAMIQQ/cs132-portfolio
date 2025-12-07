import { motion } from "motion/react";
import { FlaskConical, TrendingUp, Grid3x3 } from "lucide-react";

export function Methodology() {
  return (
    <section className="py-12 bg-slate-900 relative overflow-hidden">
      {/* Animated background blobs */}
      <motion.div 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-red-500/10 to-blue-500/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating decorative shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-blue-500/30"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 15, repeat: Infinity, ease: "linear" }
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-red-500/10 to-yellow-500/10 border border-red-500/20 mb-8">
            <FlaskConical className="w-5 h-5 text-red-400" />
            <span className="text-red-400 uppercase tracking-widest text-sm">Methodology</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-6 pb-2 bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent">
            Research Methods
          </h2>
        </div>

        {/* Research Question 1 */}
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
                <TrendingUp className="w-6 h-6 text-red-400" />
              </div>
            </motion.div>
            <div className="flex-1">
              <h3 className="font-display text-3xl text-white mb-2">
                Research Question 1
              </h3>
              <p className="text-yellow-400 font-mono text-sm">Logistic Regression Analysis</p>
            </div>
          </div>
          
          <div className="backdrop-blur-xl bg-slate-950/50 border border-slate-800 rounded-2xl p-8 space-y-6">
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                To assess the relationship between educational attainment and unemployment rates, <span className="text-yellow-400 font-semibold">logistic regression</span> was used to model the likelihood of unemployment based on an individual's highest educational attainment. During one-hot encoding, "no education" became the reference group, meaning all other categories (primary, secondary, and tertiary) were interpreted relative to this baseline. The dataset was split into training and testing sets (80% and 20% of the data, respectively), the model was fitted on the training portion, and its predictive accuracy was assessed on the test set to evaluate performance.
              </p>
              
              <p className="text-slate-300 leading-relaxed">
                The analysis included examination of <span className="text-yellow-400 font-semibold">coefficients</span>, <span className="text-yellow-400 font-semibold">odds ratios</span>, and <span className="text-yellow-400 font-semibold">p-values</span>. Each coefficient indicates how a specific education level affects the odds of employment when compared with the no education group. These coefficients were transformed into odds ratios to provide clearer interpretation, where values above 1 indicate higher odds of employment and values below 1 indicate lower odds. A calculation of p-values was also used to determine whether each variable's effect was statistically significant, helping identify which education levels have a meaningful association with unemployment likelihood.
              </p>
              
              <p className="text-slate-300 leading-relaxed">
                Predicted probabilities of unemployment were then generated for each education category. Because the model outputs the probability of being employed, unemployment probability was obtained by subtracting this value from 1. These probabilities were visualized using a bar chart, highlighting how the risk of unemployment changes across different education levels. This visual representation offers a direct and interpretable summary of how educational attainment influences unemployment relative to the reference group of individuals with no educational attainment.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Research Question 2 */}
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
                <Grid3x3 className="w-6 h-6 text-blue-400" />
              </div>
            </motion.div>
            <div className="flex-1">
              <h3 className="font-display text-3xl text-white mb-2">
                Research Question 2
              </h3>
              <p className="text-yellow-400 font-mono text-sm">Chi-Squared Test Analysis</p>
            </div>
          </div>
          
          <div className="backdrop-blur-xl bg-slate-950/50 border border-slate-800 rounded-2xl p-8 space-y-6">
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                To investigate whether unemployment rates differ across regions due to differences in dominant industries, the analysis used a <span className="text-yellow-400 font-semibold">chi-squared test</span>. This method is appropriate because all variables involved (region, industry, and employment status) are categorical, and the chi-squared test evaluates whether two categorical variables are statistically related.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="backdrop-blur-xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-xl p-6 text-center"
                >
                  <div className="text-red-400 font-mono text-sm mb-2">Test 1</div>
                  <div className="text-white">Region × Employment</div>
                  <div className="text-slate-500 text-xs mt-2">Unemployment rates across regions</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="backdrop-blur-xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-xl p-6 text-center"
                >
                  <div className="text-yellow-400 font-mono text-sm mb-2">Test 2</div>
                  <div className="text-white">Industry × Employment</div>
                  <div className="text-slate-500 text-xs mt-2">Likelihood of employment across industries</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/30 rounded-xl p-6 text-center"
                >
                  <div className="text-blue-400 font-mono text-sm mb-2">Test 3</div>
                  <div className="text-white">Region × Industry</div>
                  <div className="text-slate-500 text-xs mt-2">Industry distribution across regions</div>
                </motion.div>
              </div>
              
              <p className="text-slate-300 leading-relaxed">
                The first chi-squared compared <span className="text-yellow-400 font-semibold">Region × Employment</span>, testing whether unemployment rates vary significantly from one region to another.
              </p>
              
              <p className="text-slate-300 leading-relaxed">
                The second test examined <span className="text-yellow-400 font-semibold">Industry × Employment</span>, determining whether employment outcomes depend on the type of industry. This step helps reveal whether some industries have higher or lower unemployment levels overall.
              </p>
              
              <p className="text-slate-300 leading-relaxed">
                The third test, <span className="text-yellow-400 font-semibold">Region × Industry</span>, assessed whether different regions have significantly different distributions of industries. This is important because if regions host different industry mixes, and industries themselves differ in unemployment levels, then regional unemployment differences may be partly explained by these industry patterns.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Summary Note */}
        <motion.div 
          className="backdrop-blur-xl bg-gradient-to-br from-red-500/5 via-yellow-500/5 to-blue-500/5 border border-slate-700 rounded-2xl p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <h4 className="font-display text-xl mb-3 text-white">Note</h4>
            <p className="text-slate-400 leading-relaxed text-sm mb-3">
              An <span className="text-yellow-400 font-mono">alpha value of 0.05</span> was used as the significance threshold throughout the analysis.
            </p>
            <p className="text-slate-400 text-sm">
              For detailed implementation and computation, view the complete Python notebook at{' '}
              <a 
                href="https://colab.research.google.com/drive/1nKhtWDnTyn7zCbody2H2oa_xKDppYMpF?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
              >
                Google Colab
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}