import { motion } from "motion/react";
import { X, Check } from "lucide-react";

export function ResearchQuestions() {
  const questionsAndHypotheses = [
    {
      number: "1",
      question: (
        <>
          What is the relationship between the{" "}
          <span className="text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded">
            highest level of educational attainment
          </span>{" "}
          (no education, primary, secondary, tertiary) and{" "}
          <span className="text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
            unemployment rates
          </span>
          , and how does the degree of education influence the likelihood of being unemployed?
        </>
      ),
      null: "Educational attainment has no correlation with unemployment rates.",
      alternative: "Educational attainment strongly correlates with unemployment rates.",
    },
    {
      number: "2",
      question: (
        <>
          Do different regions have significantly different{" "}
          <span className="text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
            unemployment rates
          </span>{" "}
          due to the{" "}
          <span className="text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
            prevalence of different industries
          </span>{" "}
          per region?
        </>
      ),
      null: "Different regions having different prevailing industries does not significantly affect differences in unemployment rates per region.",
      alternative: "Different regions having different prevailing industries significantly affect differences in unemployment rates per region.",
    }
  ];

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-amber-950/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-orange-950/15 via-transparent to-transparent" />
      
      {/* Elegant floating orbs */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-yellow-500/8 via-red-500/4 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/6 via-yellow-500/3 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header - Centered */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-red-500/10 to-blue-500/10 border border-red-500/20 mb-8">
            <span className="text-red-400 uppercase tracking-widest text-sm">Research Questions</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-6 pb-2 bg-gradient-to-r from-red-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent">
            What We Aim to Answer
          </h2>
        </div>

        <div className="space-y-12">
          {questionsAndHypotheses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="space-y-6"
            >
              {/* Question Card */}
              <motion.div
                className="relative border border-slate-700/50 bg-gradient-to-br from-yellow-500/10 via-blue-500/10 to-red-500/10 rounded-2xl overflow-hidden backdrop-blur-xl group"
                whileHover={{ scale: 1.005 }}
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/0 to-transparent group-hover:via-yellow-500/5 transition-all duration-500" />
                
                <div className="flex gap-8 p-8 relative z-10">
                  <motion.div 
                    className="font-mono text-6xl tracking-tighter text-slate-700 group-hover:text-yellow-500/50 transition-colors"
                  >
                    {item.number}
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-white group-hover:text-yellow-100 tracking-tight leading-tight transition-colors">
                      {item.question}
                    </h3>
                  </div>
                </div>
              </motion.div>
              
              {/* Hypotheses Section - Cleaner Design */}
              <div className="pl-0 md:pl-20">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Null Hypothesis */}
                  <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 rounded-xl p-6 transition-all">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-full bg-slate-800/50 flex items-center justify-center">
                        <span className="font-mono text-xs text-slate-400">H₀</span>
                      </div>
                      <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Null Hypothesis</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      {item.null}
                    </p>
                  </div>
                  
                  {/* Alternative Hypothesis */}
                  <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 rounded-xl p-6 transition-all">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-full bg-slate-800/50 flex items-center justify-center">
                        <span className="font-mono text-xs text-slate-400">H₁</span>
                      </div>
                      <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Alternative Hypothesis</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      {item.alternative}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}