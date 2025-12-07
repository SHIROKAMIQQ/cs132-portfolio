import { ArrowDown, Sparkles, MapPin, TrendingDown, Briefcase, GraduationCap, Users, Building2, BarChart3, FileText, TrendingUp, Search, Wheat, TreePine, Package, Truck, ShoppingCart, Sprout, Factory, Store, Award, BookOpen, LineChart, PieChart, Target, Layers, Database, Globe, Zap, Activity } from "lucide-react";
import { IsolatedMap } from "./IsolatedMap";
import { useEffect, useState } from "react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* SVG Gradient Definitions */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="red-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f87171" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
          <linearGradient id="yellow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id="blue-light-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="red-light-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
          <linearGradient id="yellow-light-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Simplified gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-slate-950 to-red-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      
      {/* Enhanced floating gradient orbs - Moving and pulsing with better blending */}
      <div
        className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-40"
        style={{ 
          background: 'radial-gradient(circle at 30% 40%, rgba(234, 179, 8, 0.25), rgba(220, 38, 38, 0.2), transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float-smooth 20s ease-in-out infinite, pulse 8s ease-in-out infinite'
        }}
      />
      
      <div
        className="absolute bottom-32 left-20 w-[32rem] h-[32rem] rounded-full opacity-35"
        style={{ 
          background: 'radial-gradient(circle at 40% 30%, rgba(37, 99, 235, 0.3), rgba(234, 179, 8, 0.2), transparent 65%)',
          filter: 'blur(70px)',
          animation: 'float-smooth-alt 25s ease-in-out infinite, pulse 10s ease-in-out infinite',
          animationDelay: '0s, 2s'
        }}
      />
      
      <div
        className="absolute top-1/3 left-1/4 w-[36rem] h-[36rem] rounded-full opacity-30"
        style={{ 
          background: 'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.22), rgba(37, 99, 235, 0.18), transparent 60%)',
          filter: 'blur(80px)',
          animation: 'float-smooth-slow 30s ease-in-out infinite, pulse 12s ease-in-out infinite',
          animationDelay: '5s, 1s'
        }}
      />
      
      <div
        className="absolute top-1/2 right-1/3 w-[30rem] h-[30rem] rounded-full opacity-35"
        style={{ 
          background: 'radial-gradient(circle at 35% 45%, rgba(234, 179, 8, 0.28), rgba(37, 99, 235, 0.22), transparent 68%)',
          filter: 'blur(75px)',
          animation: 'float-smooth 22s ease-in-out infinite, pulse 9s ease-in-out infinite',
          animationDelay: '3s, 0s'
        }}
      />
      
      <div
        className="absolute bottom-20 right-1/4 w-[28rem] h-[28rem] rounded-full opacity-38"
        style={{ 
          background: 'radial-gradient(circle at 45% 35%, rgba(37, 99, 235, 0.3), rgba(220, 38, 38, 0.18), transparent 65%)',
          filter: 'blur(65px)',
          animation: 'float-smooth-alt 28s ease-in-out infinite, pulse 11s ease-in-out infinite',
          animationDelay: '7s, 3s'
        }}
      />
      
      {/* Enhanced grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      


      {/* Background layer - gradient icons behind text with parallax spanning entire hero */}
      {/* Row 1 - Top (8%) */}
      <div className="absolute top-[8%] left-[10%] opacity-20 animate-pulse z-0" style={{ animationDuration: '6s', transform: `translateY(${scrollY * 0.15}px)` }}>
        <Briefcase className="w-8 h-8" strokeWidth={1.5} style={{ stroke: 'url(#red-gradient)' }} />
      </div>
      <div className="absolute top-[8%] left-[45%] opacity-18 animate-pulse z-0" style={{ animationDuration: '6.3s', transform: `translateY(${scrollY * 0.12}px)` }}>
        <Globe className="w-7 h-7" strokeWidth={1.5} style={{ stroke: 'url(#blue-light-gradient)' }} />
      </div>
      <div className="absolute top-[8%] right-[15%] opacity-15 animate-pulse z-0" style={{ animationDuration: '7.8s', transform: `translateY(${scrollY * 0.14}px)` }}>
        <Award className="w-8 h-8" strokeWidth={1.5} style={{ stroke: 'url(#yellow-gradient)' }} />
      </div>
      
      {/* Row 2 - (15%) */}
      <div className="absolute top-[15%] left-[25%] opacity-15 animate-pulse z-0" style={{ animationDuration: '8s', transform: `translateY(${scrollY * 0.1}px)` }}>
        <Users className="w-7 h-7" strokeWidth={1.5} style={{ stroke: 'url(#yellow-light-gradient)' }} />
      </div>
      <div className="absolute top-[15%] left-[60%] opacity-20 animate-pulse z-0" style={{ animationDuration: '7.2s', transform: `translateY(${scrollY * 0.14}px)` }}>
        <BookOpen className="w-9 h-9" strokeWidth={1.5} style={{ stroke: 'url(#red-light-gradient)' }} />
      </div>
      <div className="absolute top-[15%] right-[8%] opacity-15 animate-pulse z-0" style={{ animationDuration: '9s', transform: `translateY(${scrollY * 0.12}px)` }}>
        <Building2 className="w-8 h-8" strokeWidth={1.5} style={{ stroke: 'url(#blue-gradient)' }} />
      </div>
      
      {/* Row 3 - (22%) */}
      <div className="absolute top-[22%] left-[5%] opacity-20 animate-pulse z-0" style={{ animationDuration: '7.5s', transform: `translateY(${scrollY * 0.18}px)` }}>
        <BarChart3 className="w-7 h-7" strokeWidth={1.5} style={{ stroke: 'url(#red-gradient)' }} />
      </div>
      <div className="absolute top-[22%] left-[38%] opacity-15 animate-pulse z-0" style={{ animationDuration: '8.5s', transform: `translateY(${scrollY * 0.11}px)` }}>
        <TrendingUp className="w-9 h-9" strokeWidth={1.5} style={{ stroke: 'url(#yellow-gradient)' }} />
      </div>
      <div className="absolute top-[22%] right-[22%] opacity-15 animate-pulse z-0" style={{ animationDuration: '6.5s', transform: `translateY(${scrollY * 0.13}px)` }}>
        <FileText className="w-8 h-8" strokeWidth={1.5} style={{ stroke: 'url(#blue-light-gradient)' }} />
      </div>
      
      {/* Row 4 - (30%) */}
      <div className="absolute top-[30%] left-[15%] opacity-15 animate-pulse z-0" style={{ animationDuration: '7.8s', transform: `translateY(${scrollY * 0.14}px)` }}>
        <TreePine className="w-8 h-8" strokeWidth={1.5} style={{ stroke: 'url(#red-light-gradient)' }} />
      </div>
      <div className="absolute top-[30%] left-[52%] opacity-18 animate-pulse z-0" style={{ animationDuration: '8.4s', transform: `translateY(${scrollY * 0.13}px)` }}>
        <PieChart className="w-7 h-7" strokeWidth={1.5} style={{ stroke: 'url(#blue-gradient)' }} />
      </div>
      <div className="absolute top-[30%] right-[12%] opacity-20 animate-pulse z-0" style={{ animationDuration: '6.9s', transform: `translateY(${scrollY * 0.16}px)` }}>
        <TrendingDown className="w-7 h-7" strokeWidth={1.5} style={{ stroke: 'url(#yellow-light-gradient)' }} />
      </div>
      
      {/* Row 5 - (37%) */}
      <div className="absolute top-[37%] left-[8%] opacity-20 animate-pulse z-0" style={{ animationDuration: '8.2s', transform: `translateY(${scrollY * 0.16}px)` }}>
        <Package className="w-7 h-7" strokeWidth={1.5} style={{ stroke: 'url(#blue-light-gradient)' }} />
      </div>
      <div className="absolute top-[37%] left-[70%] opacity-15 animate-pulse z-0" style={{ animationDuration: '7.1s', transform: `translateY(${scrollY * 0.15}px)` }}>
        <Database className="w-7 h-7" strokeWidth={1.5} style={{ stroke: 'url(#red-gradient)' }} />
      </div>
      <div className="absolute top-[37%] right-[35%] opacity-15 animate-pulse z-0" style={{ animationDuration: '6.8s', transform: `translateY(${scrollY * 0.11}px)` }}>
        <Sparkles className="w-8 h-8" strokeWidth={1.5} style={{ stroke: 'url(#yellow-gradient)' }} />
      </div>
      
      {/* Row 6 - (44%) */}
      <div className="absolute top-[44%] left-[28%] opacity-15 animate-pulse z-0" style={{ animationDuration: '6.7s', transform: `translateY(${scrollY * 0.12}px)` }}>
        <ShoppingCart className="w-8 h-8" strokeWidth={1.5} style={{ stroke: 'url(#red-light-gradient)' }} />
      </div>
      <div className="absolute top-[44%] left-[55%] opacity-20 animate-pulse z-0" style={{ animationDuration: '7s', transform: `translateY(${scrollY * 0.15}px)` }}>
        <Search className="w-7 h-7" strokeWidth={1.5} style={{ stroke: 'url(#blue-gradient)' }} />
      </div>
      <div className="absolute top-[44%] right-[8%] opacity-15 animate-pulse z-0" style={{ animationDuration: '6.4s', transform: `translateY(${scrollY * 0.17}px)` }}>
        <Store className="w-8 h-8" strokeWidth={1.5} style={{ stroke: 'url(#yellow-light-gradient)' }} />
      </div>
      
      {/* Row 7 - (52%) */}
      <div className="absolute top-[52%] left-[12%] opacity-20 animate-pulse z-0" style={{ animationDuration: '7s', transform: `translateY(${scrollY * 0.2}px)` }}>
        <GraduationCap className="w-10 h-10" strokeWidth={1.5} style={{ stroke: 'url(#yellow-gradient)' }} />
      </div>
      <div className="absolute top-[52%] left-[42%] opacity-20 animate-pulse z-0" style={{ animationDuration: '6.6s', transform: `translateY(${scrollY * 0.21}px)` }}>
        <LineChart className="w-8 h-8" strokeWidth={1.5} style={{ stroke: 'url(#red-gradient)' }} />
      </div>
      <div className="absolute top-[52%] right-[18%] opacity-15 animate-pulse z-0" style={{ animationDuration: '8.7s', transform: `translateY(${scrollY * 0.17}px)` }}>
        <Layers className="w-9 h-9" strokeWidth={1.5} style={{ stroke: 'url(#blue-light-gradient)' }} />
      </div>
      
      {/* Row 8 - (60%) */}
      <div className="absolute top-[60%] left-[22%] opacity-15 animate-pulse z-0" style={{ animationDuration: '6.8s', transform: `translateY(${scrollY * 0.22}px)` }}>
        <Wheat className="w-9 h-9" strokeWidth={1.5} style={{ stroke: 'url(#red-light-gradient)' }} />
      </div>
      <div className="absolute top-[60%] left-[58%] opacity-15 animate-pulse z-0" style={{ animationDuration: '9.1s', transform: `translateY(${scrollY * 0.13}px)` }}>
        <Target className="w-8 h-8" strokeWidth={1.5} style={{ stroke: 'url(#yellow-gradient)' }} />
      </div>
      <div className="absolute top-[60%] right-[8%] opacity-20 animate-pulse z-0" style={{ animationDuration: '8.8s', transform: `translateY(${scrollY * 0.14}px)` }}>
        <Sprout className="w-8 h-8" strokeWidth={1.5} style={{ stroke: 'url(#blue-gradient)' }} />
      </div>
      
      {/* Row 9 - (67%) */}
      <div className="absolute top-[67%] left-[6%] opacity-15 animate-pulse z-0" style={{ animationDuration: '9.2s', transform: `translateY(${scrollY * 0.11}px)` }}>
        <Factory className="w-7 h-7" strokeWidth={1.5} style={{ stroke: 'url(#yellow-light-gradient)' }} />
      </div>
      <div className="absolute top-[67%] left-[38%] opacity-20 animate-pulse z-0" style={{ animationDuration: '7.3s', transform: `translateY(${scrollY * 0.19}px)` }}>
        <Truck className="w-9 h-9" strokeWidth={1.5} style={{ stroke: 'url(#red-gradient)' }} />
      </div>
      <div className="absolute top-[67%] right-[20%] opacity-15 animate-pulse z-0" style={{ animationDuration: '8.9s', transform: `translateY(${scrollY * 0.13}px)` }}>
        <Activity className="w-8 h-8" strokeWidth={1.5} style={{ stroke: 'url(#blue-light-gradient)' }} />
      </div>
      
      {/* Row 10 - (75%) */}
      <div className="absolute top-[75%] left-[18%] opacity-15 animate-pulse z-0" style={{ animationDuration: '7.6s', transform: `translateY(${scrollY * 0.16}px)` }}>
        <Building2 className="w-9 h-9" strokeWidth={1.5} style={{ stroke: 'url(#blue-gradient)' }} />
      </div>
      <div className="absolute top-[75%] left-[48%] opacity-20 animate-pulse z-0" style={{ animationDuration: '8.3s', transform: `translateY(${scrollY * 0.14}px)` }}>
        <Zap className="w-8 h-8" strokeWidth={1.5} style={{ stroke: 'url(#red-light-gradient)' }} />
      </div>
      <div className="absolute top-[75%] right-[12%] opacity-18 animate-pulse z-0" style={{ animationDuration: '7.2s', transform: `translateY(${scrollY * 0.18}px)` }}>
        <Users className="w-8 h-8" strokeWidth={1.5} style={{ stroke: 'url(#yellow-gradient)' }} />
      </div>
      
      {/* Row 11 - (82%) */}
      <div className="absolute top-[82%] left-[32%] opacity-20 animate-pulse z-0" style={{ animationDuration: '7.9s', transform: `translateY(${scrollY * 0.13}px)` }}>
        <Briefcase className="w-8 h-8" strokeWidth={1.5} style={{ stroke: 'url(#yellow-light-gradient)' }} />
      </div>
      <div className="absolute top-[82%] left-[65%] opacity-15 animate-pulse z-0" style={{ animationDuration: '8.5s', transform: `translateY(${scrollY * 0.15}px)` }}>
        <Award className="w-8 h-8" strokeWidth={1.5} style={{ stroke: 'url(#blue-light-gradient)' }} />
      </div>
      <div className="absolute top-[82%] right-[5%] opacity-18 animate-pulse z-0" style={{ animationDuration: '6.6s', transform: `translateY(${scrollY * 0.21}px)` }}>
        <BarChart3 className="w-8 h-8" strokeWidth={1.5} style={{ stroke: 'url(#red-gradient)' }} />
      </div>
      
      {/* Row 12 - (88%) */}
      <div className="absolute top-[88%] left-[12%] opacity-20 animate-pulse z-0" style={{ animationDuration: '7.4s', transform: `translateY(${scrollY * 0.16}px)` }}>
        <Globe className="w-9 h-9" strokeWidth={1.5} style={{ stroke: 'url(#blue-gradient)' }} />
      </div>
      <div className="absolute top-[88%] left-[52%] opacity-15 animate-pulse z-0" style={{ animationDuration: '6.5s', transform: `translateY(${scrollY * 0.19}px)` }}>
        <FileText className="w-8 h-8" strokeWidth={1.5} style={{ stroke: 'url(#yellow-light-gradient)' }} />
      </div>
      <div className="absolute top-[88%] right-[25%] opacity-18 animate-pulse z-0" style={{ animationDuration: '8.1s', transform: `translateY(${scrollY * 0.14}px)` }}>
        <TrendingUp className="w-8 h-8" strokeWidth={1.5} style={{ stroke: 'url(#red-light-gradient)' }} />
      </div>
      


      <div 
        className="relative max-w-7xl mx-auto px-6 py-32 text-center z-10 w-full"
      >
        {/* Main title with multiple creative effects */}
        <div
          className="mb-16 relative animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          {/* Background text for depth effect */}
          <div 
            className="font-display tracking-tight leading-[1.2] absolute inset-0 blur-md opacity-30"
            aria-hidden="true"
            style={{ overflow: 'visible' }}
          >
            <div className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-yellow-400 via-amber-300 to-red-500 bg-clip-text text-transparent pb-4" style={{ fontWeight: 700 }}>
              Diploma o Diskarte?
            </div>
            <div className="font-mono text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent px-4" style={{ fontWeight: 400, letterSpacing: '-0.01em', maxWidth: '90%', margin: '0 auto' }}>
              Mapping the Influences of Educational Attainment and Regional Industry Specialization on Unemployment Rates
            </div>
          </div>
          
          {/* Main text with gradient */}
          <h1 className="font-display tracking-tight leading-[1.2] relative z-20" style={{ overflow: 'visible' }}>
            <div className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-yellow-400 via-amber-300 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:scale-105 transition-transform duration-500 pb-4" style={{ fontWeight: 700 }}>
              Diploma o Diskarte?
            </div>
            <div className="font-mono text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-blue-300 to-slate-200 bg-clip-text text-transparent leading-relaxed px-4 mx-auto" style={{ fontWeight: 400, letterSpacing: '-0.01em', maxWidth: '90%' }}>
              Mapping the Influences of Educational Attainment and Regional Industry Specialization on Unemployment Rates
            </div>
          </h1>
        </div>

      </div>
    </div>
  );
}