import { motion } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { CheckCircle, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SimplePhilippinesMap } from "./SimplePhilippinesMap";

export function HypothesisTesting() {
  const educationData = [
    { level: "Elementary", unemployment: 8.2 },
    { level: "High School", unemployment: 6.5 },
    { level: "Vocational", unemployment: 4.8 },
    { level: "College", unemployment: 3.2 },
    { level: "Graduate", unemployment: 2.1 }
  ];

  const regionalData = [
    { region: "NCR", unemployment: 4.5 },
    { region: "CAR", unemployment: 5.2 },
    { region: "Region I", unemployment: 6.1 },
    { region: "Region III", unemployment: 5.8 },
    { region: "Region IV-A", unemployment: 5.3 },
    { region: "Region V", unemployment: 7.2 },
    { region: "Region VII", unemployment: 6.4 }
  ];

  const ageData = [
    { age: "15-24", rate: 12.4 },
    { age: "25-34", rate: 5.8 },
    { age: "35-44", rate: 3.2 },
    { age: "45-54", rate: 2.6 },
    { age: "55+", rate: 2.1 }
  ];

  const genderData = [
    { name: "Male", value: 4.8, fill: "#3B82F6" },
    { name: "Female", value: 5.6, fill: "#DC2626" }
  ];

  const testResults = [
    {
      id: "H₁",
      hypothesis: "Education and Unemployment",
      test: "Chi-Square Test",
      statistic: "χ² = 156.32",
      pValue: "p < 0.001",
      conclusion: "Strong negative correlation between education level and unemployment rate. Higher education significantly reduces unemployment likelihood.",
    },
    {
      id: "H₂",
      hypothesis: "Regional Disparities",
      test: "ANOVA",
      statistic: "F = 23.45",
      pValue: "p < 0.001",
      conclusion: "Significant differences exist across regions. NCR shows lowest unemployment (4.5%) while rural regions show higher rates.",
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Sophisticated multi-layer gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-950/15 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-950/15 via-transparent to-transparent" />
      
      {/* Elegant floating gradient orbs */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-yellow-500/8 via-red-500/4 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, 80, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/6 via-red-500/3 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, -60, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header - Centered */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-yellow-500/10 to-blue-500/10 border border-yellow-500/20 mb-8">
            <CheckCircle className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 uppercase tracking-widest text-sm">Hypothesis Testing</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-6 pb-2 bg-gradient-to-r from-yellow-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
            Analysis & Results
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Rigorous statistical testing with <span className="font-mono text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded">α = 0.05</span> significance level to validate research hypotheses.
          </p>
        </div>

        {/* Charts Grid - Refined */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-yellow-400" />
                <h3 className="font-display text-xl text-white tracking-tight">Education vs Unemployment</h3>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={educationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                  <XAxis dataKey="level" angle={-45} textAnchor="end" height={100} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'rgba(15, 23, 42, 0.95)', 
                      border: '1px solid #334155', 
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.5)',
                      color: '#e2e8f0',
                      backdropFilter: 'blur(12px)'
                    }}
                  />
                  <Bar dataKey="unemployment" fill="#EAB308" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-red-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <h3 className="font-display text-xl text-white tracking-tight">Regional Unemployment</h3>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={regionalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                  <XAxis dataKey="region" angle={-45} textAnchor="end" height={100} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'rgba(15, 23, 42, 0.95)', 
                      border: '1px solid #334155', 
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.5)',
                      color: '#e2e8f0',
                      backdropFilter: 'blur(12px)'
                    }}
                  />
                  <Bar dataKey="unemployment" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-yellow-400" />
                <h3 className="font-display text-xl text-white tracking-tight">Age Group Analysis</h3>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={ageData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                  <XAxis dataKey="age" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'rgba(15, 23, 42, 0.95)', 
                      border: '1px solid #334155', 
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.5)',
                      color: '#e2e8f0',
                      backdropFilter: 'blur(12px)'
                    }}
                  />
                  <Line type="monotone" dataKey="rate" stroke="#EAB308" strokeWidth={3} dot={{ r: 5, fill: '#EAB308' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-red-400" />
                <h3 className="font-display text-xl text-white tracking-tight">Gender Distribution</h3>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ 
                    background: 'rgba(15, 23, 42, 0.95)', 
                    border: '1px solid #334155', 
                    borderRadius: '12px',
                    color: '#e2e8f0',
                    backdropFilter: 'blur(12px)'
                  }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Image with refined styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-red-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1691643158804-d3f02eb456a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjBjaGFydHN8ZW58MXx8fHwxNzYyNDY4ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Data analysis"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent rounded-2xl" />
          </div>
        </motion.div>

        {/* Test Results - Cleaner design */}
        <div className="mb-24">
          <h3 className="font-display text-4xl mb-12 text-white tracking-tight">Test Results Summary</h3>
          
          <div className="space-y-4">
            {testResults.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.005 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/10 to-red-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-8 shadow-lg">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/20 to-red-500/20 flex items-center justify-center border border-yellow-500/30">
                        <CheckCircle className="w-6 h-6 text-yellow-400" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-display text-2xl text-yellow-400">{result.id}</span>
                        <h4 className="font-display text-xl text-white tracking-tight">{result.hypothesis}</h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="font-mono text-xs bg-slate-800/80 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700/50">{result.test}</span>
                        <span className="font-mono text-xs bg-slate-800/80 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700/50">{result.statistic}</span>
                        <span className="font-mono text-xs bg-slate-800/80 px-3 py-1.5 rounded-lg text-slate-300 border border-slate-700/50">{result.pValue}</span>
                        <span className="font-mono text-xs bg-gradient-to-r from-yellow-500/20 to-red-500/20 px-3 py-1.5 rounded-lg text-yellow-300 border border-yellow-500/30">Reject H₀</span>
                      </div>
                      
                      <p className="text-slate-400 leading-relaxed">
                        {result.conclusion}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Findings - Keep the vibrant gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-blue-500 to-yellow-500" />
          <div className="relative p-12 text-white">
            <h3 className="font-display text-4xl mb-8 tracking-tight">Key Findings</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "All five hypotheses showed statistical significance, providing strong evidence for our alternative hypotheses.",
                "Education emerged as the strongest predictor of employment, with each level showing measurable improvement.",
                "Youth unemployment represents a critical issue requiring targeted policy interventions.",
                "Regional economic development programs are essential to address geographic disparities."
              ].map((finding, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p className="leading-relaxed text-lg">
                    {finding}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}