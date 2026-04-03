/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ParkingCircle, 
  Code, 
  Map as MapIcon, 
  RefreshCw, 
  CalendarCheck, 
  ChevronRight,
  Github,
  Twitter,
  Linkedin,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary/30">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/10 flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-3">
          <ParkingCircle className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold text-primary tracking-tighter font-headline">Smart Parking Application</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Solutions</a>
            <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Developers</a>
            <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Open Source</a>
          </nav>
          <button className="text-primary font-bold font-headline tracking-tight hover:text-white transition-colors duration-300">
            Sign In
          </button>
        </div>

        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-background pt-20 px-6 md:hidden"
        >
          <nav className="flex flex-col gap-6 text-lg font-medium">
            <a href="#" onClick={() => setIsMenuOpen(false)}>Solutions</a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>Developers</a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>Open Source</a>
            <hr className="border-outline-variant/20" />
            <button className="text-left text-primary font-bold font-headline">Sign In</button>
          </nav>
        </motion.div>
      )}

      <main className="pt-16 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 bg-surface-container-low rounded-b-[2rem] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-start relative z-10">
            <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container to-transparent opacity-30"></div>
            </div>
            
            <motion.label 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-label text-sm text-primary tracking-[0.2em] mb-6 uppercase"
            >
              Ho Chi Minh City University of Technology
            </motion.label>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-headline text-5xl md:text-7xl leading-[1.05] font-extrabold text-primary tracking-tight mb-8 max-w-4xl"
            >
              The future of urban parking: Smart Parking Application Project
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl"
            >
              Solving urban congestion with AI-driven space detection. Practical research from Ho Chi Minh City University of Technology.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <button className="metallic-cta px-8 py-4 rounded-full text-on-primary font-bold text-lg flex items-center gap-2 transform active:scale-95 transition-all shadow-lg hover:shadow-primary/20">
                Explore the Repo
                <Code className="w-5 h-5" />
              </button>
              <button className="border border-outline px-8 py-4 rounded-full text-primary font-bold text-lg flex items-center gap-2 transform active:scale-95 transition-all hover:bg-white/5">
                Download App
              </button>
            </motion.div>
          </div>

          {/* Hero Decorative Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative w-full mt-8 flex justify-center items-center pb-12"
          >
            <div className="relative flex items-center -space-x-12 sm:-space-x-20">
              {/* Home Screen (Left) */}
              <div className="w-48 sm:w-56 transform -rotate-6 -translate-y-4 opacity-80 hidden sm:block">
                <img 
                  alt="Home Screen" 
                  className="rounded-2xl shadow-2xl border border-white/10 ring-1 ring-white/5" 
                  src="https://lh3.googleusercontent.com/aida/ADBb0ug-kbK4d73USJAtT4w0jd-2-1P4Iu3Zey-COkvbRTWZubekaHY1cbVFv3uNZhSImQfhdw-S72xjb-29QmgRYw5xOJWMuHB3QKleqYX9LnHbA4orN1my1JZd1JA6KcxUVExe-65z6EouV3KrR0-B6uXF12qLtOCLq8obSyvSnEghNjVmo3RBNHnIaETgT9aaRcHJwaHWehyjiRosmfE5eBKYKWAAEZOzvGII5yn-G1lKlBBbJwN630Nt50Z8zIVmuMWYIUelpFv0WUE?w=1200"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Map Screen (Center) */}
              <div className="w-56 sm:w-64 z-10 transform scale-110 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img 
                  alt="Map Screen" 
                  className="rounded-3xl border border-white/20 ring-1 ring-white/10" 
                  src="https://lh3.googleusercontent.com/aida/ADBb0ujvWiaLOBsgc8os18gOha9cxAodGuLw8Lm8X6UQ-PZgRZgLupwkFqmm3b6szu3IJkhsqzZKSqkx5aHG7GOdRVQfvFp_NAecluIJIDFyZLRv-CgvlsyTexlj0mKkV9SemxOwRA2ZA1rWKo_cq8kIzxqJUWTWI6Ds7a4a1xGwbYldhsab-NMMWITHsrF0Yi2bGsNR1tOzib306gh4dNyfqf8AXI3nnOKOFQMbV2EIjcmbScSSB1kyYfhijjf2E8xP_Cpq71nI0kS_peo?w=1200"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Parking Lot Screen (Right) */}
              <div className="w-48 sm:w-56 transform rotate-6 -translate-y-4 opacity-80 hidden sm:block">
                <img 
                  alt="Parking Lot Screen" 
                  className="rounded-2xl shadow-2xl border border-white/10 ring-1 ring-white/5" 
                  src="https://lh3.googleusercontent.com/aida/ADBb0ugWElb2ec-8e8n9oDpOSg0XhJboTe1SA3RhQn5p5w6rwNX_eLZXoYcINGDCgMzomOct7XuJE51elFNIxIuuqowNpcZEFkS1KgHffWFItyMamYoGxgCNhW5u8WZxjKYEiPEpBYiNZcNniITpAvwzSA2ULBbYDXx6B3V7rWNeSLShOMVdkVSWnQTgEctT7XH_rIh-B9k1lp0UJ3ggLCqfy_X2PP9cMhQmrc5guJrneAUgQhRqGw5arAu91xK_F4Gc1ajEGbcOyTzXGAo?w=1200"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <p className="font-label text-xs text-on-surface-variant/60 text-center mb-12 tracking-widest uppercase">Collaborating with Smart City Initiatives</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-50 grayscale contrast-125 items-center max-w-5xl mx-auto">
              <img alt="Stripe" className="h-8 object-contain mx-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRT2eBgD03_Sat2vQEKRiSaU0seRErvEPnRRYDTRWoVECD_KuScbz7LOuTyMsIR-J975qCF47KHfJq_1EhciF_o6lhMJx2IIt9m3O9j1Zep_QpRU9ngYSv5TyLTL1UeUGIYRVl3QNF9iue9sVqvHGisUfUkIkeVdGhUiLa5tRBUmoUgErk8CNmwUV2dz4H6tDwFo14HRbPMcQFL6MQ78P-t2RyZk90diieoYGYO4SCfSiivNowQhm9B7jJKTROBwXTB7hVikIq3_7x?w=400" referrerPolicy="no-referrer" />
              <img alt="Pinterest" className="h-8 object-contain mx-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxyvN0D92k2ttsNMguMmXYLw1GN23BXrZGlKKqo3k6YEHn7_vDWG0IgueJ6N7zMTaFRIHNOpzQjuvcW4GfH6FMdKGCNF32eZhUT_6GCWEo6DquSCWEziT4OjcqD-eqmods2fL6pwOg_YfUghSZx_BcIZ7GSf35lexkrEopX26Yq0z9R13L-Ppk3F5LnrlbVio17K5QT2w61Qf8bZWK8Qj5r6K06mIChhGPgeXZ38WdS16xoGeTYevBGaWYufqu87kKbFagKbEVuAlV?w=400" referrerPolicy="no-referrer" />
              <img alt="NASA" className="h-10 object-contain mx-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw0dKMKSNVZEnI1swWp3D8SwuOT0FmHR-zWo77B2IMm9ixTnRf-MlmXI-9bg2f3njYSdnPDADVTzP-kwLArAKxrD9vDxuao-U5Jw9Dx24RhDoHEriVqA2YT5E44rCzK2bSB7oFBSbeDidrJPXgcahnbFi6EN1aQr3PE6VMsywwWJf5Sv3LGuDqapAkhEmS1djlN97fwgRtEcsHLpN3ix6-ZuFn6Nz1yLL_1IJr4HVODSHQA71kY_uGmXWkNBFFHHK7ie3smyCSjSTF?w=400" referrerPolicy="no-referrer" />
              <img alt="Amazon" className="h-6 object-contain mx-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXPgnRH_c2Am5oeTQZbOjb3vcOCeNA25IGT3Z21k8SPSHRhE4K_fkA5mRIGsNc4BvTTNjO52SuIu_IzrRa-TIqAYaDSjrn1oQqlxRlMr9dXlOeH9Alcvi-hcUtuhQIlU3QZfSEb9jZr_EdnG8GR9IFbSljl-CLXe5edDpXzaTJ3Fy4qu9td4vf1P3I25siYQRa01M4scoy86VQ1sxRNRXp7ms5SjipmHsFyqpIg9vSRKFBjTysMOgUrim5NW6ULvojwHTSNuziansk?w=400" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>

        {/* Main Features Grid */}
        <section className="py-24 bg-surface-container">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <h2 className="font-headline text-3xl md:text-5xl text-primary font-bold mb-16 leading-tight max-w-2xl">
              Precision tools for the smart driver.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-surface-container-highest rounded-3xl relative overflow-hidden flex flex-col border border-outline-variant/10"
              >
                <div className="p-8 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <MapIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-headline text-xl text-primary font-bold mb-4">Smart Map Navigation</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Real-time geospatial data showing every available space in your vicinity with price transparency.</p>
                </div>
                <div className="flex-1 relative overflow-hidden px-8">
                  <img 
                    alt="Smart Map Navigation Screenshot" 
                    className="w-full object-cover object-top rounded-t-2xl shadow-2xl border border-outline-variant/20" 
                    src="https://lh3.googleusercontent.com/aida/ADBb0ujvWiaLOBsgc8os18gOha9cxAodGuLw8Lm8X6UQ-PZgRZgLupwkFqmm3b6szu3IJkhsqzZKSqkx5aHG7GOdRVQfvFp_NAecluIJIDFyZLRv-CgvlsyTexlj0mKkV9SemxOwRA2ZA1rWKo_cq8kIzxqJUWTWI6Ds7a4a1xGwbYldhsab-NMMWITHsrF0Yi2bGsNR1tOzib306gh4dNyfqf8AXI3nnOKOFQMbV2EIjcmbScSSB1kyYfhijjf2E8xP_Cpq71nI0kS_peo?w=1200"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              {/* Feature Card 2 */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-surface-container-high rounded-3xl border border-outline-variant/10 relative overflow-hidden flex flex-col"
              >
                <div className="p-8 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <RefreshCw className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-headline text-xl text-primary font-bold mb-4">Real-time Availability</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Our Antigravity SDK handles millions of concurrent sensor pings to give you 99.9% accuracy on spot status.</p>
                </div>
                <div className="flex-1 relative overflow-hidden px-8">
                  <img 
                    alt="Real-time Availability Screenshot" 
                    className="w-full object-cover object-top rounded-t-2xl shadow-2xl border border-outline-variant/20" 
                    src="https://lh3.googleusercontent.com/aida/ADBb0ug-kbK4d73USJAtT4w0jd-2-1P4Iu3Zey-COkvbRTWZubekaHY1cbVFv3uNZhSImQfhdw-S72xjb-29QmgRYw5xOJWMuHB3QKleqYX9LnHbA4orN1my1JZd1JA6KcxUVExe-65z6EouV3KrR0-B6uXF12qLtOCLq8obSyvSnEghNjVmo3RBNHnIaETgT9aaRcHJwaHWehyjiRosmfE5eBKYKWAAEZOzvGII5yn-G1lKlBBbJwN630Nt50Z8zIVmuMWYIUelpFv0WUE?w=1200"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              {/* Feature Card 3 */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-surface-container-low rounded-3xl relative overflow-hidden flex flex-col border border-outline-variant/10"
              >
                <div className="p-8 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <CalendarCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-headline text-xl text-primary font-bold mb-4">Instant Slot Booking</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Skip the circling. Reserve your exact spot floor-by-floor using our low-latency booking engine.</p>
                </div>
                <div className="flex-1 relative overflow-hidden px-8">
                  <img 
                    alt="Instant Slot Booking Screenshot" 
                    className="w-full object-cover object-top rounded-t-2xl shadow-2xl border border-outline-variant/20" 
                    src="https://lh3.googleusercontent.com/aida/ADBb0ugWElb2ec-8e8n9oDpOSg0XhJboTe1SA3RhQn5p5w6rwNX_eLZXoYcINGDCgMzomOct7XuJE51elFNIxIuuqowNpcZEFkS1KgHffWFItyMamYoGxgCNhW5u8WZxjKYEiPEpBYiNZcNniITpAvwzSA2ULBbYDXx6B3V7rWNeSLShOMVdkVSWnQTgEctT7XH_rIh-B9k1lp0UJ3ggLCqfy_X2PP9cMhQmrc5guJrneAUgQhRqGw5arAu91xK_F4Gc1ajEGbcOyTzXGAo?w=1200"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="border-l-2 border-primary-container pl-6 py-4">
              <div className="font-headline text-5xl md:text-6xl text-primary font-black tracking-tighter mb-2">5M+</div>
              <div className="font-label text-sm text-on-surface-variant tracking-wider uppercase">Spaces tracked daily</div>
            </div>
            <div className="border-l-2 border-primary-container pl-6 py-4">
              <div className="font-headline text-5xl md:text-6xl text-primary font-black tracking-tighter mb-2">15k+</div>
              <div className="font-label text-sm text-on-surface-variant tracking-wider uppercase">Open-source contributors</div>
            </div>
            <div className="border-l-2 border-primary-container pl-6 py-4">
              <div className="font-headline text-5xl md:text-6xl text-primary font-black tracking-tighter mb-2">40%</div>
              <div className="font-label text-sm text-on-surface-variant tracking-wider uppercase">Traffic reduction in pilot cities</div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-surface text-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-headline text-4xl md:text-6xl text-primary font-bold mb-8">Ready to build the future of mobility?</h2>
              <p className="text-on-surface-variant text-lg md:text-xl mb-12">Practical research from Ho Chi Minh City University of Technology. Join the Smart Parking Application developer community.</p>
              <button className="w-full md:w-auto px-12 bg-primary text-on-primary font-extrabold py-5 rounded-full ambient-glow transform active:scale-95 transition-all flex items-center justify-center gap-3 mx-auto">
                Explore the SPA SDK
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full rounded-t-[3rem] bg-black py-20 px-8 ambient-glow">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <ParkingCircle className="w-8 h-8 text-primary" />
                <span className="text-2xl font-black text-primary font-headline text-balance">Smart Parking Application</span>
              </div>
              <p className="text-on-surface-variant max-w-xs">
                Ho Chi Minh City University of Technology. Revolutionizing urban mobility through local research and AI.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Github className="w-5 h-5 text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Twitter className="w-5 h-5 text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div className="flex flex-col gap-4">
                <h4 className="text-primary font-bold uppercase text-xs tracking-widest">Product</h4>
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Solutions</a>
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">SDK</a>
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Pricing</a>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-primary font-bold uppercase text-xs tracking-widest">Resources</h4>
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Documentation</a>
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">API Reference</a>
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Community</a>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-primary font-bold uppercase text-xs tracking-widest">Company</h4>
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">About</a>
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Careers</a>
                <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-on-surface-variant text-sm opacity-60">
              © 2026 Ho Chi Minh City University of Technology. Smart Parking Application Project.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-xs opacity-60">Privacy Policy</a>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-xs opacity-60">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
