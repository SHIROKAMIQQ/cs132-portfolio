import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TrendingDown, Users, Heart, MapPin, GraduationCap, Building2 } from "lucide-react";

export function Introduction() {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Sophisticated multi-layer gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-950/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-950/20 via-transparent to-transparent" />
      
      {/* Subtle floating orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-yellow-500/10 via-red-500/5 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-red-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header - Centered */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-yellow-500/10 to-red-500/10 border border-yellow-500/20 mb-8">
            <span className="text-yellow-400 uppercase tracking-widest text-sm">Overview</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-6 pb-2 bg-gradient-to-r from-yellow-400 via-red-400 to-blue-400 bg-clip-text text-transparent">
            Understanding the Issue
          </h2>
        </div>

        {/* Problem Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="font-display text-3xl text-white">
            Problem
          </h3>
        </motion.div>

        {/* Problem Grid - Perfect Rectangle with Narrative Flow */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[360px] mb-16">
          {/* Row 1: Three cards forming the narrative foundation */}
          
          {/* 1. Unemployment challenges - Yellow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-12 md:col-span-4 row-span-1 backdrop-blur-xl bg-gradient-to-br from-yellow-500/5 to-yellow-600/10 border border-yellow-500/20 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mb-4">
                <TrendingDown className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-slate-200 leading-relaxed">
                Underemployment and unemployment remain constant challenges in the Philippines, affecting economic growth, individual well-being, and overall social stability.
              </p>
            </div>
          </motion.div>

          {/* 2. OFWs - Blue glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-12 md:col-span-4 row-span-1 backdrop-blur-xl bg-gradient-to-br from-blue-500/5 to-blue-600/10 border border-blue-500/20 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group cursor-pointer shadow-xl shadow-blue-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-slate-200 leading-relaxed">
                With limited domestic opportunities, almost 10 million Filipinos work overseas, and over 40% of newly hired OFWs in 2023 secured low-skill jobs <a href="https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099115301242526825" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">(Rodriguez et al., 2024)</a>.
              </p>
            </div>
          </motion.div>

          {/* 3. Health impact - Red */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-12 md:col-span-4 row-span-1 backdrop-blur-xl bg-gradient-to-br from-red-500/5 to-red-600/10 border border-red-500/20 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-red-400" />
              </div>
              <p className="text-slate-200 leading-relaxed">
                Beyond reducing total household income, job insecurity affects physical and mental health, creating ripple effects across communities <a href="https://doi.org/10.1001/jamanetworkopen.2024.3439" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors font-medium">(Wang et al., 2024)</a>.
              </p>
            </div>
          </motion.div>

          {/* Row 2: Three more cards */}
          
          {/* 4. Economic distribution - Red */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-12 md:col-span-4 row-span-1 backdrop-blur-xl bg-gradient-to-br from-red-500/5 to-red-600/10 border border-red-500/20 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-red-400" />
              </div>
              <p className="text-slate-200 leading-relaxed">
                Economic possibilities are distributed unevenly in the Philippines. While rural communities frequently have fewer job opportunities and lower incomes, urban areas may have better employment rates and higher compensation <a href="https://www.pna.gov.ph/opinion/pieces/1002-poverty-employment-in-ph-unpacking-the-contradiction" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors font-medium">(Lu, 2025)</a>.
              </p>
            </div>
          </motion.div>

          {/* 5. Education and employment - Yellow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-12 md:col-span-4 row-span-1 backdrop-blur-xl bg-gradient-to-br from-yellow-500/5 to-yellow-600/10 border border-yellow-500/20 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-blue-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-1/3 w-28 h-28 bg-yellow-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-slate-200 leading-relaxed">
                Educational attainment remains closely tied to job prospects, with higher levels of education improving employment opportunities <a href="https://doi.org/10.3389/fpsyg.2022.914104" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">(Mian et al., 2022)</a>.
              </p>
            </div>
          </motion.div>

          {/* 6. Regional variation - Blue */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-12 md:col-span-4 row-span-1 backdrop-blur-xl bg-gradient-to-br from-blue-500/5 to-blue-600/10 border border-blue-500/20 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-slate-200 leading-relaxed">
                Educational attainment and industry specializations vary widely across each region, which continue to shape employment outcomes in the Philippines.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Solution Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="font-display text-3xl text-white">
            Solution
          </h3>
        </motion.div>

        {/* Solution Grid - Enhanced with Visual Appeal */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[240px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-12 row-span-1 backdrop-blur-xl bg-gradient-to-br from-blue-500/10 via-yellow-500/10 to-red-500/10 border-2 border-slate-700/50 hover:border-blue-500/40 rounded-3xl p-12 flex flex-col justify-center items-center relative overflow-hidden group cursor-pointer shadow-2xl"
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
              
              <p className="text-slate-200 text-xl leading-relaxed">
                This project will investigate how levels of <span className="text-yellow-400 font-semibold">educational attainment</span> relate to <span className="text-blue-400 font-semibold">unemployment rates</span> in the Philippines and whether <span className="text-red-400 font-semibold">regional industry specialization</span> plays a role, aiming to generate insights that can inform policies on education and employment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}