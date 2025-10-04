// import React, { useState } from 'react';
// import { Home, TrendingUp, Users, Building2, DollarSign, BarChart3, FileText, Megaphone, CheckSquare, Calendar, Phone, Package, HelpCircle, Link2, ChevronDown, ChevronRight, Plus, Search, Clock, Bell, Menu, X, MessageSquare, Zap, Grid, BarChart2, Settings } from 'lucide-react';

// // Sidebar Component
// const Sidebar = ({ isOpen, setIsOpen }) => {
//   const [expandedSections, setExpandedSections] = useState({
//     sales: true,
//     activities: true,
//     inventory: false,
//     support: false,
//     integrations: false
//   });

//   const toggleSection = (section) => {
//     setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
//   };

//   return (
//     <>
//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       <div className={`fixed lg:static inset-y-0 left-0 z-50 w-60 bg-gradient-to-b from-[#7c2d8e] via-[#6b2578] to-[#5a1d68] text-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} flex flex-col h-screen`}>
        
//         <div className="flex items-center justify-between px-4 py-3 border-b border-white border-opacity-10">
//           <div className="flex items-center gap-3">
//             <div className="w-7 h-7 bg-gradient-to-br from-pink-500 to-orange-400 rounded-lg"></div>
//             <span className="font-semibold text-base">Modules</span>
//           </div>
//           <button className="w-7 h-7 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
//             <Plus className="w-4 h-4" />
//           </button>
//         </div>

//         <div className="px-3 py-3">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-300" />
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full bg-white bg-opacity-10 text-white placeholder-purple-300 rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:bg-opacity-20 border border-transparent"
//             />
//           </div>
//         </div>

//         <div className="flex-1 overflow-y-auto px-2 pb-4">
//           <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-purple-800 bg-opacity-60 mb-1">
//             <Home className="w-5 h-5" />
//             <span className="text-sm font-medium">Home</span>
//           </button>

//           <div className="mb-1">
//             <button
//               onClick={() => toggleSection('sales')}
//               className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors"
//             >
//               {expandedSections.sales ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
//               <TrendingUp className="w-5 h-5" />
//               <span className="flex-1 text-left text-sm font-medium">Sales</span>
//             </button>
            
//             {expandedSections.sales && (
//               <div className="ml-6 mt-1 space-y-0.5">
//                 <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors">
//                   <CheckSquare className="w-4 h-4" />
//                   <span className="text-sm">Leads</span>
//                 </button>
//                 <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors">
//                   <Users className="w-4 h-4" />
//                   <span className="text-sm">Contacts</span>
//                 </button>
//                 <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors">
//                   <Building2 className="w-4 h-4" />
//                   <span className="text-sm">Accounts</span>
//                 </button>
//                 <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors">
//                   <DollarSign className="w-4 h-4" />
//                   <span className="text-sm">Deals</span>
//                 </button>
//                 <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors">
//                   <BarChart3 className="w-4 h-4" />
//                   <span className="text-sm">Forecasts</span>
//                 </button>
//                 <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors">
//                   <FileText className="w-4 h-4" />
//                   <span className="text-sm">Documents</span>
//                 </button>
//                 <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors">
//                   <Megaphone className="w-4 h-4" />
//                   <span className="text-sm">Campaigns</span>
//                 </button>
//               </div>
//             )}
//           </div>

//           <div className="mb-1">
//             <button
//               onClick={() => toggleSection('activities')}
//               className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors"
//             >
//               {expandedSections.activities ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
//               <CheckSquare className="w-5 h-5" />
//               <span className="flex-1 text-left text-sm font-medium">Activities</span>
//             </button>
            
//             {expandedSections.activities && (
//               <div className="ml-6 mt-1 space-y-0.5">
//                 <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors">
//                   <CheckSquare className="w-4 h-4" />
//                   <span className="text-sm">Tasks</span>
//                 </button>
//                 <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors">
//                   <Calendar className="w-4 h-4" />
//                   <span className="text-sm">Meetings</span>
//                 </button>
//                 <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors">
//                   <Phone className="w-4 h-4" />
//                   <span className="text-sm">Calls</span>
//                 </button>
//               </div>
//             )}
//           </div>

//           <button
//             onClick={() => toggleSection('inventory')}
//             className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors mb-1"
//           >
//             {expandedSections.inventory ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
//             <Package className="w-5 h-5" />
//             <span className="flex-1 text-left text-sm font-medium">Inventory</span>
//           </button>

//           <button
//             onClick={() => toggleSection('support')}
//             className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors mb-1"
//           >
//             {expandedSections.support ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
//             <HelpCircle className="w-5 h-5" />
//             <span className="flex-1 text-left text-sm font-medium">Support</span>
//           </button>

//           <button
//             onClick={() => toggleSection('integrations')}
//             className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors mb-1"
//           >
//             {expandedSections.integrations ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
//             <Link2 className="w-5 h-5" />
//             <span className="flex-1 text-left text-sm font-medium">Integrations</span>
//           </button>

//           <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors">
//             <Users className="w-5 h-5" />
//             <span className="text-sm font-medium">Services</span>
//           </button>
//         </div>

//         <div className="px-3 py-3 border-t border-white border-opacity-10">
//           <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors">
//             <div className="w-7 h-7 bg-red-500 rounded flex items-center justify-center text-xs font-bold">
//               CT
//             </div>
//             <span className="flex-1 text-left text-sm">CRM Teamspace</span>
//             <ChevronDown className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// // Dashboard Component
// const Dashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [showInviteModal, setShowInviteModal] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Import Sidebar */}
//       <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
//         {/* Top Bar */}
//         <div className="bg-stone-700 text-white px-4 py-1.5 flex items-center justify-end gap-4 text-xs">
//           <button className="lg:hidden absolute left-4" onClick={() => setSidebarOpen(true)}>
//             <Menu className="w-5 h-5" />
//           </button>
//           <span>📚 All Bookmarks</span>
//         </div>

//         {/* Main Content Area */}
//         <div className="flex-1 overflow-auto bg-white">
//           <div className="p-6 lg:p-10 max-w-[1600px] mx-auto">
//             {/* Header with Icons and Skip Button */}
//             <div className="flex justify-between items-start mb-8">
//               <div className="flex items-center gap-3">
//                 <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
//                   <Menu className="w-6 h-6" />
//                 </button>
//                 <button className="w-8 h-8 border-2 border-gray-300 rounded hover:bg-gray-50"></button>
//                 <button className="w-8 h-8 border-2 border-gray-300 rounded hover:bg-gray-50"></button>
//               </div>
//               <button className="px-5 py-2 text-gray-600 hover:bg-gray-100 rounded-md text-sm font-medium border border-gray-300">
//                 Skip
//               </button>
//             </div>

//             {/* Two Column Layout */}
//             <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-12">
//               {/* Welcome Card */}
//               <div className="bg-gradient-to-br from-cyan-200 via-blue-100 to-indigo-200 rounded-[40px] p-8 lg:p-10 shadow-lg">
//                 <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3 leading-tight">
//                   Hello<br />
//                   Areesha shamsi <span className="inline-block">👋</span>
//                 </h1>
//                 <p className="text-gray-700 mb-8 leading-relaxed">
//                   We're happy to bring you<br />
//                   aboard the world's favorite<br />
//                   CRM!
//                 </p>
//                 <p className="text-gray-800 font-bold mb-6 text-lg">
//                   Let's get started!
//                 </p>
                
//                 {/* Video Section */}
//                 <div className="mb-8">
//                   <p className="text-sm text-gray-700 mb-4 font-semibold">
//                     Watch a one-minute video<br />
//                     <span className="font-normal">View the key features we offer</span>
//                   </p>
//                   <div className="relative inline-block">
//                     <div className="w-48 h-32 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
//                       <div className="absolute bottom-2 left-2 w-8 h-8 bg-purple-400 rounded-full opacity-60"></div>
//                       <div className="absolute top-2 right-2 text-2xl">⭐</div>
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="relative">
//                           <svg className="w-20 h-20" viewBox="0 0 100 100">
//                             <circle cx="40" cy="50" r="8" fill="#8B5CF6"/>
//                             <circle cx="60" cy="50" r="8" fill="#EC4899"/>
//                             <path d="M30 60 Q40 70 50 65 Q60 70 70 60" stroke="#6366F1" strokeWidth="2" fill="none"/>
//                             <rect x="35" y="30" width="10" height="20" rx="5" fill="#3B82F6"/>
//                             <rect x="55" y="30" width="10" height="20" rx="5" fill="#3B82F6"/>
//                           </svg>
//                         </div>
//                       </div>
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
//                           <svg className="w-7 h-7 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
//                             <path d="M8 5v14l11-7z"/>
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Webinar Card */}
//                 <div className="bg-white rounded-2xl p-5 inline-flex items-center gap-4 shadow-md">
//                   <div className="flex -space-x-3">
//                     <div className="w-10 h-10 bg-blue-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">👤</div>
//                     <div className="w-10 h-10 bg-purple-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">💬</div>
//                   </div>
//                   <div>
//                     <p className="text-sm font-bold text-gray-800">Need a Live Webinar?</p>
//                     <button className="text-sm text-purple-600 font-semibold hover:underline">Book Now</button>
//                   </div>
//                 </div>
//               </div>

//               {/* Setup Card */}
//               <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-cyan-200 rounded-[40px] p-8 lg:p-10 shadow-lg relative overflow-hidden">
//                 {/* Decorative Elements */}
//                 <div className="absolute top-10 right-10 opacity-10">
//                   <div className="flex -space-x-4">
//                     <div className="w-32 h-32 bg-blue-500 rounded-full"></div>
//                     <div className="w-28 h-28 bg-cyan-500 rounded-full mt-4"></div>
//                   </div>
//                 </div>
//                 <div className="absolute top-8 right-8 text-pink-400 text-2xl">✨</div>
//                 <div className="absolute bottom-20 right-16 text-cyan-400 text-xl">✨</div>
//                 <div className="absolute top-32 right-24 text-blue-400 text-lg">○</div>
//                 <div className="absolute bottom-32 right-12 text-pink-300 text-lg">○</div>
                
//                 <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3 relative z-10">
//                   Set up your CRM
//                 </h2>
//                 <p className="text-gray-700 mb-8 relative z-10">
//                   Make your CRM smarter and more interactive
//                 </p>
                
//                 {/* Setup Tasks */}
//                 <div className="space-y-3 relative z-10">
//                   <button
//                     onClick={() => setShowInviteModal(true)}
//                     className="w-full bg-white rounded-2xl p-4 flex items-center gap-4 hover:shadow-xl transition-all group border-2 border-transparent hover:border-purple-200"
//                   >
//                     <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
//                       <Users className="w-5 h-5 text-purple-600" />
//                     </div>
//                     <span className="flex-1 text-left font-semibold text-gray-800 text-base">Invite your team</span>
//                     <div className="w-7 h-7 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
//                       <CheckSquare className="w-4 h-4 text-white" />
//                     </div>
//                   </button>

//                   <button className="w-full bg-white rounded-2xl p-4 flex items-center gap-4 hover:shadow-xl transition-all group border-2 border-transparent hover:border-purple-200">
//                     <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
//                       <BarChart2 className="w-5 h-5 text-purple-600" />
//                     </div>
//                     <span className="flex-1 text-left font-semibold text-gray-800 text-base">Configure your deals pipeline</span>
//                   </button>

//                   <button className="w-full bg-white rounded-2xl p-4 flex items-center gap-4 hover:shadow-xl transition-all group border-2 border-transparent hover:border-purple-200">
//                     <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
//                       📧
//                     </div>
//                     <span className="flex-1 text-left font-semibold text-gray-800 text-base">Connect to your email account</span>
//                   </button>

//                   <button className="w-full bg-white rounded-2xl p-4 flex items-center gap-4 hover:shadow-xl transition-all group border-2 border-transparent hover:border-purple-200">
//                     <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
//                       <Package className="w-5 h-5 text-purple-600" />
//                     </div>
//                     <span className="flex-1 text-left font-semibold text-gray-800 text-base">Migrate your existing data</span>
//                   </button>

//                   <button className="w-full bg-white rounded-2xl p-4 flex items-center gap-4 hover:shadow-xl transition-all group border-2 border-transparent hover:border-purple-200">
//                     <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
//                       <Grid className="w-5 h-5 text-purple-600" />
//                     </div>
//                     <span className="flex-1 text-left font-semibold text-gray-800 text-base">Integration</span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Invite Modal */}
//             {showInviteModal && (
//               <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//                 <div className="bg-gradient-to-br from-cyan-100 via-green-100 to-teal-100 rounded-[40px] p-10 max-w-lg w-full relative shadow-2xl">
//                   <button 
//                     onClick={() => setShowInviteModal(false)}
//                     className="absolute top-6 right-6 text-gray-600 hover:text-gray-800 bg-white rounded-full p-1"
//                   >
//                     <X className="w-5 h-5" />
//                   </button>
//                   <div className="text-center mb-8">
//                     <div className="inline-flex items-center justify-center mb-6 relative">
//                       <div className="absolute top-2 right-8 text-blue-400 text-xl">✨</div>
//                       <div className="absolute bottom-4 left-6 text-cyan-400 text-lg">✨</div>
//                       <div className="absolute top-8 left-12 text-teal-400 text-sm">○</div>
//                       <div className="w-24 h-24 bg-blue-400 rounded-full opacity-90"></div>
//                       <div className="w-20 h-20 bg-cyan-400 rounded-full -ml-12 opacity-90"></div>
//                     </div>
//                     <h3 className="text-3xl font-bold text-gray-800 mb-4">Invite your team</h3>
//                     <p className="text-gray-700 leading-relaxed">
//                       Stay connected and collaborate with your team members to share sales updates from one platform.
//                     </p>
//                   </div>
//                   <button className="w-full bg-pink-600 text-white rounded-2xl py-4 font-bold text-lg hover:bg-pink-700 transition-colors shadow-lg">
//                     Invite users
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Bottom Toolbar */}
//         <div className="bg-gray-100 border-t border-gray-200 px-4 py-2.5 flex items-center justify-between text-xs overflow-x-auto">
//           <div className="flex items-center gap-6 min-w-max">
//             <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
//               <MessageSquare className="w-4 h-4" />
//               <span>Chats</span>
//             </button>
//             <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
//               <Users className="w-4 h-4" />
//               <span>Contacts</span>
//             </button>
//             <span className="text-gray-500">Here is your Smart Chat (Ctrl+Space)</span>
//           </div>
//           <div className="flex items-center gap-2 min-w-max ml-4">
//             <button className="p-2 hover:bg-gray-200 rounded"><Grid className="w-4 h-4 text-gray-600" /></button>
//             <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2">
//               <Zap className="w-4 h-4" />
//               Feedback on New UI
//             </button>
//             <button className="p-2 hover:bg-gray-200 rounded"><MessageSquare className="w-4 h-4 text-gray-600" /></button>
//             <button className="p-2 hover:bg-gray-200 rounded"><Bell className="w-4 h-4 text-gray-600" /></button>
//             <button className="p-2 hover:bg-gray-200 rounded"><Clock className="w-4 h-4 text-gray-600" /></button>
//             <button className="p-2 hover:bg-gray-200 rounded"><Settings className="w-4 h-4 text-gray-600" /></button>
//             <button className="bg-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1">
//               <HelpCircle className="w-3 h-3" />
//               Help
//             </button>
//             <button className="p-2 hover:bg-gray-200 rounded"><Grid className="w-4 h-4 text-gray-600" /></button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react'
import CRMSidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <div>
      <CRMSidebar/>
    </div>
  )
}

export default Dashboard
