
import React, { useState, useEffect } from 'react';
import { ChecklistItem, DailyPlan, FoodCategory } from './types';
import { PACKING_LIST, FOOD_DATA, TRIP_SCHEDULE, USEFUL_LINKS } from './constants';
import { 
  CheckCircle2, 
  MapPin, 
  Utensils, 
  Backpack, 
  Plane, 
  Train, 
  Calendar,
  Clock,
  Info,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Snowflake,
  Star,
  CloudSnow,
  Camera,
  Heart
} from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'checklist' | 'food' | 'links'>('itinerary');
  const [checklist, setChecklist] = useState<ChecklistItem[]>([]);
  const [expandedDay, setExpandedDay] = useState<string | null>("2.11");

  useEffect(() => {
    const initialList = PACKING_LIST.map((item, index) => ({
      id: `item-${index}`,
      text: item,
      checked: false
    }));
    setChecklist(initialList);
  }, []);

  const toggleCheck = (id: string) => {
    setChecklist(prev => prev.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const getLinkIcon = (iconName?: string) => {
    switch(iconName) {
      case 'train': return <Train size={18} />;
      case 'star': return <Star size={18} />;
      case 'cloud-snow': return <CloudSnow size={18} />;
      case 'camera': return <Camera size={18} />;
      default: return <ExternalLink size={18} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Hero Header */}
      <div className="relative h-[40vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1547621059-4560766cd64a?auto=format&fit=crop&w=1200&q=80" 
          alt="Hokkaido Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-6 md:p-12">
          <div className="flex items-center gap-2 text-white/80 mb-3">
            <Snowflake size={24} className="animate-pulse text-blue-300" />
            <span className="text-sm font-bold tracking-widest uppercase">Japan 2025 Winter</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">日本之旅</h1>
          <p className="text-white/80 text-lg flex items-center gap-2 font-medium">
            <Calendar size={20} className="text-blue-300" /> 2月11日 - 2月19日 • 大阪 & 北海道
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto flex overflow-x-auto no-scrollbar">
          {(['itinerary', 'checklist', 'food', 'links'] as const).map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-[90px] py-4 text-sm font-bold transition-all border-b-2 flex flex-col items-center gap-1 ${activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
            >
              {tab === 'itinerary' && <Calendar size={20} />}
              {tab === 'checklist' && <Backpack size={20} />}
              {tab === 'food' && <Utensils size={20} />}
              {tab === 'links' && <Info size={20} />}
              <span className="capitalize">{tab === 'itinerary' ? '行程' : tab === 'checklist' ? '清单' : tab === 'food' ? '吃喝' : '资源'}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Itinerary Section */}
        {activeTab === 'itinerary' && (
          <div className="space-y-4">
            {TRIP_SCHEDULE.map((day) => (
              <div key={day.date} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-md">
                <button 
                  onClick={() => setExpandedDay(expandedDay === day.date ? null : day.date)}
                  className="w-full text-left p-5 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex items-center gap-5">
                    <div className="bg-blue-600 text-white w-14 h-14 rounded-2xl flex flex-col items-center justify-center font-bold shrink-0 shadow-lg shadow-blue-100">
                      <span className="text-[10px] uppercase leading-none opacity-80 mb-0.5">FEB</span>
                      <span className="text-2xl leading-none">{day.date.split('.')[1]}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-slate-800">{day.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-wider">Day {TRIP_SCHEDULE.indexOf(day) + 1}</span>
                        {day.spots && (
                           <p className="text-xs text-slate-400 truncate max-w-[150px] sm:max-w-xs">{day.spots.map(s => s.name).join(' · ')}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={`p-2 rounded-full transition-all ${expandedDay === day.date ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-300'}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>

                {expandedDay === day.date && (
                  <div className="p-6 border-t border-slate-50 bg-slate-50/30">
                    {day.todo && day.todo.length > 0 && (
                      <div className="mb-8 p-5 bg-amber-50 rounded-2xl border border-amber-100 shadow-sm">
                        <h4 className="text-xs font-black text-amber-700 uppercase mb-3 flex items-center gap-2 tracking-widest">
                          <Info size={14} strokeWidth={3} /> TODO / 待办
                        </h4>
                        <ul className="space-y-2">
                          {day.todo.map((t, i) => (
                            <li key={i} className="text-sm text-amber-900 flex items-start gap-2 font-medium">
                              <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="relative space-y-10 pl-5 before:absolute before:left-[1.25rem] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
                      {day.itinerary.map((item, idx) => (
                        <div key={idx} className="relative group">
                          <div className="absolute left-[-1.65rem] top-1.5 w-5 h-5 rounded-full border-4 border-white bg-blue-500 shadow-md z-10 group-hover:scale-125 transition-transform"></div>
                          <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                            <div className="w-24 shrink-0">
                               <span className="inline-block px-3 py-1 bg-white rounded-lg text-xs font-black text-slate-500 border border-slate-100 shadow-sm">
                                 {item.time}
                               </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <p className="font-bold text-slate-800 text-lg">{item.activity}</p>
                                {item.mapLink && (
                                  <a 
                                    href={item.mapLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-1.5 rounded-lg text-blue-500 hover:bg-blue-100 transition-colors"
                                  >
                                    <MapPin size={18} />
                                  </a>
                                )}
                              </div>
                              {item.jp && <p className="text-xs text-slate-400 font-bold tracking-wide mt-0.5">{item.jp}</p>}
                              {item.note && (
                                <div className="mt-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm text-sm text-slate-600 leading-relaxed relative">
                                  <div className="absolute top-2 left-[-10px] w-0 h-0 border-t-[8px] border-t-transparent border-r-[10px] border-r-white border-b-[8px] border-b-transparent hidden sm:block"></div>
                                  <p className="font-medium italic">"{item.note}"</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {day.note && (
                      <div className="mt-10 pt-6 border-t border-slate-100">
                         <div className="flex items-center gap-2 text-slate-400 mb-2">
                            <Heart size={14} fill="currentColor" className="text-rose-400" />
                            <span className="text-[10px] font-black uppercase tracking-tighter">Plan B / 备选方案</span>
                         </div>
                         <p className="text-sm font-bold text-slate-500 bg-slate-100/50 p-4 rounded-xl border border-slate-100 italic">
                            {day.note}
                         </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Checklist Section */}
        {activeTab === 'checklist' && (
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <h2 className="text-3xl font-black text-slate-800 flex items-center gap-3">
                  <Backpack size={32} className="text-blue-600" /> 出发前准备
                </h2>
                <p className="text-slate-400 font-bold text-sm mt-2 tracking-wide">根据 PDF 内容整理的必备清单</p>
              </div>
              <div className="bg-blue-600 text-white px-8 py-4 rounded-3xl flex flex-col items-center justify-center shadow-xl shadow-blue-100">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] mb-1 opacity-70">Progress</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black">{checklist.filter(c => c.checked).length}</span>
                  <span className="text-lg opacity-50">/</span>
                  <span className="text-lg font-bold">{checklist.length}</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {checklist.map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => toggleCheck(item.id)}
                  className={`group flex items-center gap-4 p-5 rounded-3xl cursor-pointer border-2 transition-all duration-300 transform active:scale-95 ${item.checked ? 'bg-emerald-50 border-emerald-100' : 'bg-slate-50 border-transparent hover:border-blue-100 hover:bg-white hover:shadow-lg'}`}
                >
                  <div className={`w-8 h-8 rounded-2xl flex items-center justify-center border-2 transition-all ${item.checked ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-200 bg-white text-transparent group-hover:border-blue-300'}`}>
                    <CheckCircle2 size={20} strokeWidth={3} />
                  </div>
                  <span className={`text-sm font-bold transition-all ${item.checked ? 'text-emerald-700/50 line-through' : 'text-slate-700'}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Food Section */}
        {activeTab === 'food' && (
          <div className="space-y-12">
             <div className="text-center">
                <h2 className="text-4xl font-black text-slate-800 mb-3 tracking-tight">吃吃吃 🍱</h2>
                <p className="text-slate-400 font-bold tracking-widest uppercase text-xs">The Culinary Journey</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {FOOD_DATA.map((category, idx) => (
                  <div key={idx} className="group bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col transition-all hover:shadow-xl hover:-translate-y-2">
                    <div className="relative h-44 overflow-hidden">
                       <img 
                        src={`https://images.unsplash.com/photo-${idx === 0 ? '1580822184713-fc5400e7fe10' : idx === 1 ? '1625943555419-56a2cb596640' : '1504674900247-0877df9cc836'}?auto=format&fit=crop&w=600&q=80`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        alt={category.location} 
                      />
                      <div className="absolute inset-0 bg-slate-900/20" />
                      <div className="absolute bottom-5 left-5 bg-white px-4 py-2 rounded-2xl shadow-lg">
                        <span className="text-sm font-black text-slate-800">{category.location}</span>
                      </div>
                    </div>
                    <div className="p-8 space-y-3">
                      {category.items.map((food, fidx) => (
                        <div key={fidx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 font-black text-slate-700 hover:bg-blue-600 hover:text-white transition-all cursor-default group/item">
                          <Utensils size={16} className="text-slate-300 group-hover/item:text-blue-200" />
                          {food}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* Links & Resources Section */}
        {activeTab === 'links' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-black text-slate-800 mb-3 tracking-tight">行前锦囊 🎒</h2>
              <p className="text-slate-400 font-bold tracking-widest uppercase text-xs">Tickets & Resources</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {USEFUL_LINKS.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all group flex items-start gap-6"
                >
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    {getLinkIcon(link.icon)}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-black text-slate-800 text-lg group-hover:text-blue-600 transition-colors">{link.title}</h3>
                      <ExternalLink size={16} className="text-slate-300 group-hover:text-blue-400" />
                    </div>
                    <p className="text-xs font-bold text-slate-400 tracking-wide">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 p-8 bg-blue-900 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl shadow-blue-200">
               <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-6 flex items-center gap-3">
                    <Star className="text-amber-400 fill-amber-400" /> 门票与交通 Tips
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                    <div className="space-y-2">
                       <p className="text-xs font-black text-blue-300 uppercase tracking-widest">环球影城 USJ</p>
                       <p className="text-sm font-bold text-blue-50">门票来源：飞猪。务必开门第一时间入园并排队任天堂。</p>
                    </div>
                    <div className="space-y-2">
                       <p className="text-xs font-black text-blue-300 uppercase tracking-widest">小樽交通</p>
                       <p className="text-sm font-bold text-blue-50">在小樽站对面蓝色大巴亭买 2400 日元一日票，包含所有交通和缆车。</p>
                    </div>
                    <div className="space-y-2">
                       <p className="text-xs font-black text-blue-300 uppercase tracking-widest">JR Pass</p>
                       <p className="text-sm font-bold text-blue-50">官网预定，顺路去札幌站出票。行程中特急列车建议提前查好席位。</p>
                    </div>
                    <div className="space-y-2">
                       <p className="text-xs font-black text-blue-300 uppercase tracking-widest">天狗山 & 水族馆</p>
                       <p className="text-sm font-bold text-blue-50">门票来源：携程。水族馆企鹅漫步提前半小时排队。</p>
                    </div>
                  </div>
               </div>
               <div className="absolute top-[-50px] right-[-50px] w-80 h-80 bg-blue-800 rounded-full blur-[100px] opacity-50"></div>
               <div className="absolute bottom-[-30px] left-[-30px] w-60 h-60 bg-blue-700 rounded-full blur-[80px] opacity-30"></div>
            </div>
          </div>
        )}

      </main>

      {/* Footer Info */}
      <footer className="text-center py-16 text-slate-300 text-[10px] font-black uppercase tracking-[0.4em]">
        Strictly Sourced from Traveler's PDF • Winter 2025
      </footer>
    </div>
  );
}

export default App;
