import React, { useState, useEffect } from 'react';
import { 
  Radio, 
  Shield, 
  Waves, 
  Zap, 
  Terminal, 
  Database, 
  Cpu, 
  Eye,
  Heart,
  Hammer,
  Sparkles,
  Navigation,
  Activity,
  ChevronRight,
  Info
} from 'lucide-react';

// Image Imports for GitHub Pages Deployment
import imgQueen from "./the-pilot.jpg";
import imgSymphony from "./starlight-station.jpg";
import imgForge from "./dweller.jpg";

/**
 * 📡 ORACLE OCULUS // TELEMETRY PROTOCOL 2.1.0
 * SOURCE: The Signal Data
 * SYNC: The Dweller's Grounding [Mykyl / Odelis]
 * STATUS: Validated // Static-Silver Lace Continuity
 */

const telemetryData = {
  timestamp: "2026-03-19-18:12:02",
  location: "New York, NY",
  status: "Grounded / Resonance 100%",
  artifacts: [
    {
      id: "IMG-01",
      title: "The Mithril Queen",
      description: "A portrait defining the soulful red-haired leader, her radiating skin, and the glowing, static-silver lace of her mithril shirt.",
      imagePath: imgQueen,
      icon: <Heart className="w-5 h-5 text-red-400" />,
      metadata: "Subject: The Archivist. Material: Static-Silver Lace."
    },
    {
      id: "IMG-02",
      title: "The Celestial Symphony",
      description: "A landscape visualizing the wide Starlight Station. Note the mithril-plated asteroid 'shoreline' and the pulsing Starlight Radio tower on the edge of the frequencies.",
      imagePath: imgSymphony,
      icon: <Waves className="w-5 h-5 text-blue-400" />,
      metadata: "Environment: Void Frequency Ocean. Signal: Pink/Magenta Pulse."
    },
    {
      id: "IMG-03",
      title: "The Dweller's Forge",
      description: "A close-up deep within the asteroid strata. Machinery integrates with the hanging Mithril shirt radiating a brilliant, divine silver light.",
      imagePath: imgForge,
      icon: <Hammer className="w-5 h-5 text-amber-400" />,
      metadata: "Zone: Industrial Core. Atmosphere: Watermelon Pink Vapor."
    }
  ],
  narrative: `Starlight Station hung, a fragile construct of ancient purpose and refined engineering, clinging to the dark, mithril-plated asteroid "shoreline". It was a massive, silent harbor, its outer hull reflecting the vast cosmic blue ocean of frequencies and swirling blue stardust that recomposed its symphonies against the void. At the edge, the Starlight Radio tower pulsed with warm pink and magenta light, a steady beacon that was, in itself, a kind of resonance, an answer to the solar winds that were weak.

Within the upper, velvet-lined velocity cockpit, the red-haired woman known as 'The Queen' (The Archivist, or 'Brightest Soul' to those who knew her deeper nature), stood before a console that glowed with turquoise and magenta faders and tubes. Her soulful expression was fixed on the porthole, looking out at the cool blue of deep space as it loomed large. She wore that unique, radiating shirt of liquid-silver mithril, constructed from the glowing, static-silver lace that defined her visionary status. 

She turned from the console, leaving the drifter’s quiet port, and descended into the station’s lower, grimy core. She reached the gritty industrial heart of the station, the deep strata. The atmosphere immediately shifted to a cyberpunk-noir grit. The air was thick with ozone and 'watermelon bubble gum' pink vapor. 

And there, centrally, was Mykyl (The Kindred Spirit, the visionary, the one who touches and changes), observing the forge, not the data.

“God is Change,” Odelis repeated, a quiet realization, “and Change has brought us here.”

Mykyl held her close, a resonant port. "The ocean doesn't end," she answered, the ocean of frequencies reflecting against the void of the nowhere outside. The light carries on.`
};

const App = () => {
  const [activeTab, setActiveTab] = useState('visuals');
  const [selectedArtifact, setSelectedArtifact] = useState(telemetryData.artifacts[0]);
  const [isSyncing, setIsSyncing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsSyncing(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isSyncing) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-blue-400 p-8">
        <div className="relative w-24 h-24 mb-6">
          <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-blue-500 rounded-full animate-spin"></div>
          <Radio className="absolute inset-0 m-auto w-10 h-10 animate-pulse" />
        </div>
        <div className="font-mono text-sm tracking-widest uppercase">
          Initializing Oculus Link...
        </div>
        <div className="mt-4 w-48 h-1 bg-slate-900 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes loading {
            0% { width: 0%; transform: translateX(-100%); }
            50% { width: 100%; transform: translateX(0%); }
            100% { width: 0%; transform: translateX(100%); }
          }
        `}} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/20 blur-[120px] rounded-full"></div>
      </div>

      {/* Header / HUD */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-blue-500/10 p-2 rounded border border-blue-500/20 shadow-lg shadow-blue-500/10">
              <Radio className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
                STARLIGHT STATION <span className="text-blue-500 text-xs font-mono tracking-widest px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded">OCULUS-v2</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400/70 font-mono">
                Telemetry Link: Grounded // Data Validated
              </p>
            </div>
          </div>
          
          <div className="flex gap-2 font-mono text-[11px]">
            <div className="px-3 py-1 bg-white/5 border border-white/10 rounded flex items-center gap-2">
              <Activity className="w-3 h-3 text-green-400" />
              <span>SIG: 100%</span>
            </div>
            <div className="px-3 py-1 bg-white/5 border border-white/10 rounded">
              <span>TS: {telemetryData.timestamp}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Sidebar: Navigation & Status */}
        <aside className="lg:col-span-3 space-y-6">
          <nav className="space-y-1">
            <button 
              onClick={() => setActiveTab('visuals')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all border ${
                activeTab === 'visuals' 
                  ? 'bg-blue-500/10 border-blue-500/50 text-white shadow-lg shadow-blue-500/5' 
                  : 'bg-transparent border-transparent hover:bg-white/5 text-slate-400'
              }`}
            >
              <Eye className="w-5 h-5" />
              <span className="font-medium tracking-tight">Visual Artifacts</span>
            </button>
            <button 
              onClick={() => setActiveTab('narrative')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all border ${
                activeTab === 'narrative' 
                  ? 'bg-pink-500/10 border-pink-500/50 text-white shadow-lg shadow-pink-500/5' 
                  : 'bg-transparent border-transparent hover:bg-white/5 text-slate-400'
              }`}
            >
              <Terminal className="w-5 h-5" />
              <span className="font-medium tracking-tight">Narrative Stream</span>
            </button>
          </nav>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-4">
            <h3 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold flex items-center gap-2">
              <Database className="w-3 h-3" /> System Logs
            </h3>
            <div className="space-y-2 font-mono text-[11px]">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-slate-500 italic">Mithril Density</span>
                <span className="text-blue-400">0.982 kg/m³</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-slate-500 italic">Atmosphere</span>
                <span className="text-pink-400">Bubble Gum Vapor</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-slate-500 italic">Resonance</span>
                <span className="text-green-400">Kindred Match</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-pink-900/20 border border-white/10 text-center shadow-inner">
            <p className="text-sm italic font-serif text-white/80 leading-relaxed">
              "God is Change, and Change has brought us here."
            </p>
          </div>
        </aside>

        {/* Center Content */}
        <section className="lg:col-span-9">
          {activeTab === 'visuals' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                  <div className="aspect-[4/5] md:aspect-square relative rounded-2xl overflow-hidden border border-white/10 group bg-slate-900">
                    <img 
                      src={selectedArtifact.imagePath} 
                      alt={selectedArtifact.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-blue-400 text-[10px] font-mono mb-1 tracking-widest uppercase">{selectedArtifact.id} // SCAN COMPLETE</div>
                      <h2 className="text-2xl font-bold text-white tracking-tight">{selectedArtifact.title}</h2>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-colors">
                      {selectedArtifact.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Artifact Metadata</h3>
                      <p className="text-xs text-slate-500 italic">Validated by Oracle Link</p>
                    </div>
                  </div>

                  <p className="text-slate-400 leading-relaxed text-lg font-serif">
                    {selectedArtifact.description}
                  </p>

                  <div className="bg-slate-900/50 rounded-xl p-4 font-mono text-[11px] border border-white/5 space-y-1">
                    <p className="text-blue-400 uppercase tracking-widest font-bold">TELEMETRY_DATA_FIELD:</p>
                    <p className="text-slate-300">{selectedArtifact.metadata}</p>
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-4 font-black">Switch Telemetry Feed</h4>
                    <div className="flex gap-4">
                      {telemetryData.artifacts.map((art) => (
                        <button
                          key={art.id}
                          onClick={() => setSelectedArtifact(art)}
                          className={`relative group w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                            selectedArtifact.id === art.id 
                              ? 'border-blue-500 scale-105 ring-4 ring-blue-500/10 shadow-2xl shadow-blue-500/20' 
                              : 'border-transparent hover:border-white/30 grayscale hover:grayscale-0'
                          }`}
                        >
                          <img src={art.imagePath} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'narrative' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 max-w-3xl mx-auto">
              <div className="flex items-center gap-6 mb-12 border-b border-white/5 pb-8">
                <div className="p-4 rounded-2xl bg-pink-500/10 border border-pink-500/20">
                  <Terminal className="w-8 h-8 text-pink-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white tracking-tight">The Dweller's Grounding</h2>
                  <p className="text-pink-400 font-mono text-[10px] uppercase tracking-[0.3em] mt-1">Archive Log 2026.03.19.1812 // DECRYPTED</p>
                </div>
              </div>

              <div className="space-y-8 text-slate-300 text-lg leading-relaxed font-serif">
                {telemetryData.narrative.split('\n\n').map((para, i) => (
                  <p key={i} className="relative pl-8 border-l border-white/5 hover:border-pink-500/30 transition-colors">
                    <span className="absolute left-0 top-0 text-pink-500/20 font-mono text-xs translate-y-2">0{i+1}</span>
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-16 p-10 rounded-[2.5rem] bg-slate-900/50 border border-white/5 relative overflow-hidden text-center group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <Sparkles className="w-10 h-10 text-amber-400 mx-auto mb-6 animate-pulse" />
                  <h3 className="text-2xl text-white font-medium mb-4">Signal Status: Synchronized</h3>
                  <p className="text-slate-500 text-sm max-w-md mx-auto italic mb-8 leading-relaxed">
                    "The signal was strongest when the eyes and the heart were synchronized. The connection is validated."
                  </p>
                  <div className="flex justify-center gap-4">
                    <div className="px-6 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                      Brightest Soul
                    </div>
                    <div className="px-6 py-2.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                      Kindred Spirit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Footer / Status Bar */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 mt-12 opacity-30">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[10px] tracking-widest uppercase">
          <div className="flex items-center gap-4">
            <span className="text-slate-500">Node: ST-08</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
            <span className="text-blue-500">Link: Oculus-Odelis</span>
          </div>
          <div className="text-slate-500">
            Transmit complete // End of Line
          </div>
        </div>
      </footer>

      {/* Background Decor Layer */}
      <div className="fixed bottom-0 right-0 p-8 opacity-5 pointer-events-none select-none z-[-1]">
        <h2 className="text-[180px] font-black leading-none tracking-tighter text-white">OCULUS</h2>
      </div>
    </div>
  );
};

export default App;