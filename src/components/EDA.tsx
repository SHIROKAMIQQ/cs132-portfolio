import { motion } from "motion/react";
import { BarChart3, PieChart, TrendingUp, MapPin, GraduationCap, LineChart as LineChartIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart as RePieChart, Pie, Cell } from 'recharts';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function EDA() {
  // Sample data for RQ1: Educational Attainment vs Unemployment
  const educationData = [
    { education: 'No Education', probability: 1.44 },
    { education: 'Primary', probability: 2.63 },
    { education: 'Secondary', probability: 5.44 },
    { education: 'Tertiary', probability: 4.62 },
  ];

  // Sample data for RQ2: Regional Unemployment Rates
  const regionalData = [
    { region: 'NCR', rate: 5.46, industry: 'Wholesale and Retail Trade' },
    { region: 'CAR', rate: 2.77, industry: 'Agriculture and Forestry' },
    { region: '1', rate: 3.05, industry: 'Agriculture and Forestry' },
    { region: '2', rate: 2.01, industry: 'Agriculture and Forestry' },
    { region: '3', rate: 3.18, industry: 'Wholesale and Retail Trade' },
    { region: '4A', rate: 6.0, industry: 'Wholesale and Retail Trade' },
    { region: '4B', rate: 2.43, industry: 'Agriculture and Forestry' },
    { region: '5', rate: 4.43, industry: 'Wholesale and Retail Trade' },
    { region: '6', rate: 3.24, industry: 'Agriculture and Forestry' },
    { region: '7', rate: 2.74, industry: 'Wholesale and Retail Trade' },
    { region: '8', rate: 2.07, industry: 'Agriculture and Forestry' },
    { region: '9', rate: 2.32, industry: 'Agriculture and Forestry' },
    { region: '10', rate: 3.99, industry: 'Agriculture and Forestry' },
    { region: '11', rate: 2.01, industry: 'Agriculture and Forestry' },
    { region: '12', rate: 2.8, industry: 'Agriculture and Forestry' },
    { region: '13', rate: 2.36, industry: 'Agriculture and Forestry' },
    { region: 'BARMM', rate: 1.61, industry: 'Agriculture and Forestry' },
  ];

  // Industry specialization data
  const industryData = [
    { name: 'Agriculture', value: 24, color: '#22c55e' },
    { name: 'Manufacturing', value: 18, color: '#3b82f6' },
    { name: 'Services', value: 42, color: '#eab308' },
    { name: 'IT/BPO', value: 8, color: '#a855f7' },
    { name: 'Construction', value: 8, color: '#ef4444' },
  ];

  const COLORS = ['#22c55e', '#3b82f6', '#eab308', '#a855f7', '#ef4444'];

  return (
    <section className="py-12 bg-slate-950 relative overflow-hidden">
      {/* Animated background blobs */}
      <motion.div 
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-red-500/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, -50, 0],
          y: [0, -25, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating decorative shapes */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-24 h-24 border-2 border-red-500/30 rounded-full"
        animate={{ 
          y: [0, -25, 0],
          rotate: 360
        }}
        transition={{ 
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 18, repeat: Infinity, ease: "linear" }
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-yellow-500/10 to-red-500/10 border border-yellow-500/20 mb-8">
            <BarChart3 className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 uppercase tracking-widest text-sm">Exploratory Data Analysis</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-6 pb-2 bg-gradient-to-r from-yellow-400 via-red-400 to-blue-400 bg-clip-text text-transparent">
            Hypothesis Testing and Visualizations
          </h2>
        </div>

        {/* RQ1: Educational Attainment vs Unemployment */}
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
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
            </motion.div>
            <div className="flex-1">
              <h3 className="font-display text-3xl text-white mb-2">
                Research Question 1
              </h3>
              <p className="text-yellow-400 font-mono text-sm">Educational Attainment vs Unemployment Rate</p>
            </div>
          </div>
          
          <div className="backdrop-blur-xl bg-slate-950/50 border border-slate-800 rounded-2xl p-8 space-y-6">
            {/* Bar Chart */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-xl text-blue-200 mb-6 font-display text-center">Predicted Probability of Being Unemployed by Education Level</h4>
              <ResponsiveContainer width="100%" height={450}>
                <BarChart data={educationData} margin={{ top: 20, right: 30, left: 80, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis 
                    dataKey="education" 
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8' }}
                    label={{ value: 'Education Level', position: 'insideBottom', offset: -20, fill: '#94a3b8' }}
                  />
                  <YAxis 
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8' }}
                    label={{ value: 'Predicted Probability of Unemployment (%)', angle: -90, position: 'insideLeft', fill: '#94a3b8', style: { textAnchor: 'middle' } }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(12px)'
                    }}
                    labelStyle={{ color: '#cbd5e1' }}
                    formatter={(value) => [`${value}%`, 'Probability']}
                  />
                  <Bar dataKey="probability" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Key Findings */}
            <div className="grid md:grid-cols-4 gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/30 rounded-xl p-6 text-center"
              >
                <div className="font-mono text-4xl text-blue-300 mb-2">96.86%</div>
                <div className="text-sm text-slate-300">Model Accuracy</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="backdrop-blur-xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-xl p-6 text-center"
              >
                <div className="font-mono text-4xl text-yellow-300">0.6169</div>
                <div className="text-sm text-slate-300">Coefficient (Unemployed)</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="backdrop-blur-xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-xl p-6 text-center"
              >
                <div className="font-mono text-4xl text-red-300">1.8531</div>
                <div className="text-sm text-slate-300">Odds Ratio (Unemployed)</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/30 rounded-xl p-6 text-center"
              >
                <div className="font-mono text-4xl text-blue-300">p &lt; 0.05</div>
                <div className="text-sm text-slate-300">P-value</div>
              </motion.div>
            </div>

            {/* Analysis Text */}
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                The logistic regression model predicts unemployment status based on education level with high accuracy (96.86%), indicating strong overall performance. The coefficient of 0.6169 for being unemployed suggests that the log-odds of unemployment increase with certain education levels.
              </p>
              
              <p className="text-slate-300 leading-relaxed">
                Translating this into an odds ratio of 1.8531 means individuals in these education categories are about 85% more likely to be unemployed compared to the reference group (No Education), which surprisingly shows the lowest predicted unemployment.
              </p>
              
              <p className="text-slate-300 leading-relaxed">
                Based on the logistic regression analysis, educational attainment has a <span className="text-yellow-400 font-semibold">statistically significant effect</span> on unemployment. The p-values for all education levels are less than 0.05, allowing us to <span className="text-yellow-400 font-semibold">reject the null hypothesis</span> that education has no correlation with unemployment. This supports the alternative hypothesis that educational attainment strongly correlates with unemployment rates.
              </p>
            </div>
          </div>
        </motion.div>

        {/* RQ2: Regional Unemployment */}
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
                <MapPin className="w-6 h-6 text-red-400" />
              </div>
            </motion.div>
            <div className="flex-1">
              <h3 className="font-display text-3xl text-white mb-2">
                Research Question 2
              </h3>
              <p className="text-yellow-400 font-mono text-sm">Regional Industry Specialization vs Unemployment Rate</p>
            </div>
          </div>
          
          <div className="backdrop-blur-xl bg-slate-950/50 border border-slate-800 rounded-2xl p-8 space-y-6">
            {/* Regional Bar Chart */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-xl text-red-200 mb-6 font-display text-center">Unemployment Rate by Region and Dominant Industry</h4>
              <ResponsiveContainer width="100%" height={600}>
                <BarChart data={regionalData} margin={{ top: 20, right: 30, left: 80, bottom: 120 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis 
                    dataKey="region" 
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8' }}
                    label={{ value: 'Region', position: 'insideBottom', offset: -20, fill: '#94a3b8' }}
                  />
                  <YAxis 
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8' }}
                    label={{ value: 'Unemployment Rate (%)', angle: -90, position: 'insideLeft', fill: '#94a3b8', style: { textAnchor: 'middle' } }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(12px)'
                    }}
                    labelStyle={{ color: '#cbd5e1' }}
                    formatter={(value, name, props) => {
                      const color = props.payload.industry === 'Wholesale and Retail Trade' ? '#3b82f6' : '#eab308';
                      return [
                        <span style={{ color }}>{`${value}%: ${props.payload.industry === 'Wholesale and Retail Trade' ? 'Wholesale and Retail Trade, Repair of Motor Vehicles and Motorcycles' : props.payload.industry}`}</span>
                      ];
                    }}
                  />
                  <Bar dataKey="rate" legendType="none" radius={[8, 8, 0, 0]}>
                    {regionalData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.industry === 'Wholesale and Retail Trade' ? '#3b82f6' : '#eab308'} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              
              {/* Legend inside chart box at bottom */}
              <div className="flex flex-wrap justify-center gap-6 pt-4 border-t border-slate-700/50">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded" />
                  <span className="text-slate-300 text-sm">Wholesale and Retail Trade, Repair of Motor Vehicles and Motorcycles</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded" />
                  <span className="text-slate-300 text-sm">Agriculture and Forestry</span>
                </div>
              </div>
            </div>
            
            {/* Key Finding - P-value Boxes */}
            <div className="grid md:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="backdrop-blur-xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-xl p-6 text-center"
              >
                <div className="font-mono text-2xl text-red-200 mb-2">χ² = 110.48</div>
                <div className="font-mono text-4xl text-red-300 mb-2">p &lt; 0.05</div>
                <div className="text-sm text-slate-300">Region × Employment</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="backdrop-blur-xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-xl p-6 text-center"
              >
                <div className="font-mono text-2xl text-yellow-200 mb-2">χ² = 20518.00</div>
                <div className="font-mono text-4xl text-yellow-300 mb-2">p &lt; 0.05</div>
                <div className="text-sm text-slate-300">Industry × Employment</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/30 rounded-xl p-6 text-center"
              >
                <div className="font-mono text-2xl text-blue-200 mb-2">χ² = 8227.29</div>
                <div className="font-mono text-4xl text-blue-300 mb-2">p &lt; 0.05</div>
                <div className="text-sm text-slate-300">Region × Industry</div>
              </motion.div>
            </div>

            {/* Analysis Text */}
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                Based on the Chi-squared tests of independence, there is a <span className="text-yellow-400 font-semibold">statistically significant association</span> among Region, Industry, and Employment status. The results show that the relationships between Region × Employment, Industry × Employment, and Region × Industry are all significant.
              </p>
              
              <p className="text-slate-300 leading-relaxed">
                Since the p-values for all tests are well below the alpha value of 0.05, <span className="text-yellow-400 font-semibold">we reject the null hypothesis</span>. These results indicate that <span className="text-yellow-400 font-semibold">unemployment rates vary significantly across regions</span> and that these variations are influenced by differences in industry composition within each region.
              </p>
              
              <p className="text-slate-300 leading-relaxed">
                Regions with different dominant industries show distinct unemployment patterns, suggesting that the prevalence of certain industries contributes to regional disparities in employment outcomes. The chart shows that regions dominated by Wholesale and Retail Trade (NCR, 3, 4A, 5, 7) have different unemployment patterns compared to Agriculture and Forestry dominated regions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* In a Nutshell */}
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-red-500/20 border border-yellow-500/30 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-yellow-400" />
              </div>
            </motion.div>
            <div className="flex-1">
              <h3 className="font-display text-3xl text-white mb-2">
                In a Nutshell
              </h3>
              <p className="text-yellow-400 font-mono text-sm">Nutshell Plot</p>
            </div>
          </div>
          
          <div className="backdrop-blur-xl bg-gradient-to-br from-yellow-500/5 to-red-500/5 border border-slate-800 hover:border-yellow-500/30 transition-all rounded-2xl p-8">
            {/* Add your image link below */}
            <ImageWithFallback 
              src="/src/images/nutshell.png" 
              alt="Nutshell Plot" 
              className="w-full h-auto rounded-xl"
            />
            {/* Or replace with your own image URL:
            <ImageWithFallback 
              src="https://your-image-url.com/nutshell-plot.png" 
              alt="Nutshell Plot" 
              className="w-full h-auto rounded-xl"
            />
            */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}