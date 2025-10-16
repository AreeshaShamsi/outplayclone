import React, { useState, useEffect } from "react";
import {
  RefreshCw,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Users,
  Phone,
  Briefcase,
  Menu,
  X,
  Building2
} from "lucide-react";
import TwoColumnSidebar from "../components/Sidebar";
import { auth } from "../firebase";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName || user.email || "User");
      } else {
        setUserName("");
      }
    });
    return () => unsubscribe();
  }, []);

  const stats = [
    { title: "My Open Deals", value: 8, icon: Briefcase, color: " bg-gradient-to-r from-[#7a1b45] via-[#a92c63] to-[#d04a83]" },
    { title: "My Untouched Deals", value: 2, icon: TrendingUp, color: " bg-gradient-to-r from-[#7a1b45] via-[#a92c63] to-[#d04a83]" },
    { title: "My Calls Today", value: 0, icon: Phone, color: "f bg-gradient-to-r from-[#7a1b45] via-[#a92c63] to-[#d04a83]" },
    { title: "My Leads", value: 10, icon: Users, color: " bg-gradient-to-r from-[#7a1b45] via-[#a92c63] to-[#d04a83]" },
  ];

  const tasks = [
    {
      subject: "Register for Upcoming CRM Webinars",
      dueDate: "01/10/2025",
      status: "Not Started",
      priority: "Low",
    },
    {
      subject: "Register for Upcoming CRM Webinars",
      dueDate: "01/10/2025",
      status: "Not Started",
      priority: "Low",
    },
    {
      subject: "Refer CRM Videos",
      dueDate: "03/10/2025",
      status: "In Progress",
      priority: "Normal",
    },
    {
      subject: "Competitor Comparison Document",
      dueDate: "29/09/2025",
      status: "Not Started",
      priority: "Highest",
    }, {
      subject: "Competitor Comparison Document",
      dueDate: "29/09/2025",
      status: "Not Started",
      priority: "Highest",
    },
    {
      subject: "Competitor Comparison Document",
      dueDate: "29/09/2025",
      status: "Not Started",
      priority: "Highest",
    },
    {
      subject: "Get Approval from Manager",
      dueDate: "30/09/2025",
      status: "Not Started",
      priority: "Low",
    }, {
      subject: "Get Approval from Manager",
      dueDate: "30/09/2025",
      status: "Not Started",
      priority: "Low",
    },
  ];

  const meetings = [
    {
      title: "Demo",
      from: "01/10/2025 01:10 PM",
      to: "01/10/2025 02:10 PM",
      relatedTo: "Printing Dimensions",
      icon: "📄",
    }, {
      title: "Demo",
      from: "01/10/2025 01:10 PM",
      to: "01/10/2025 02:10 PM",
      relatedTo: "Printing Dimensions",
      icon: "📄",
    },
    {
      title: "Demo",
      from: "01/10/2025 01:10 PM",
      to: "01/10/2025 02:10 PM",
      relatedTo: "Printing Dimensions",
      icon: "📄",
    },
    {
      title: "Webinar",
      from: "01/10/2025 03:10 PM",
      to: "01/10/2025 04:10 PM",
      relatedTo: "Commercial Press (Sample)",
      icon: "🏢",
    },
    {
      title: "TradeShow",
      from: "01/10/2025 05:30 AM",
      to: "02/10/2025 05:29 AM",
      relatedTo: "Chemel",
      icon: "📄",
    }, {
      title: "TradeShow",
      from: "01/10/2025 05:30 AM",
      to: "02/10/2025 05:29 AM",
      relatedTo: "Chemel",
      icon: "📄",
    },
    {
      title: "Seminar",
      from: "01/10/2025 01:10 PM",
      to: "01/10/2025 03:10 PM",
      relatedTo: "Carissa Kidman (Sample)",
      icon: "👤",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Highest":
        return "text-red-700 bg-red-100 border border-red-200";
      case "Normal":
        return "text-purple-700 bg-purple-100 border border-purple-300";
      case "Low":
        return "text-gray-600 bg-gray-100 border border-gray-200";
      default:
        return "text-gray-600 bg-gray-100 border border-gray-200";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "text-amber-700 bg-amber-100 border border-amber-200";
      case "Not Started":
        return "text-slate-600 bg-slate-100 border border-slate-200";
      default:
        return "text-gray-600 bg-gray-100 border border-gray-200";
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-pink-50">
      {/* Sidebar - Desktop */}
      <TwoColumnSidebar />
      {/* Main Content */}
      <div className="flex-1 lg:ml-80">
        {/* Header */}
        <header className="sticky top-0 lg:ml-5 right-0 z-20 bg-white border-b border-gray-200 shadow-sm p-3 sm:p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5 text-gray-700" />
              </button>
              <div className="bg-gray-100 p-3 rounded-md mr-3">
                <Building2 size={32} className="text-gray-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
  Welcome {userName.split(" ")[0]}!
</h2>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <RefreshCw className="w-4 h-4 text-gray-700" />
              </button>

              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <MoreVertical className="w-4 h-4 text-gray-700" />
              </button>
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <main className="p-3 sm:p-4 lg:p-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${stat.color} rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group`}
                >
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <h3 className="text-xs font-medium text-white text-opacity-90 uppercase tracking-wide leading-tight">
                      {stat.title}
                    </h3>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all flex-shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                    </div>
                  </div>
                  <p className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</p>
                </div>
              );
            })}
          </div>

          {/* Tasks + Meetings */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
            {/* Tasks */}
            <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 shadow-md overflow-hidden">
              <div className="px- sm:px-6 py-1 sm:py-4 flex items-center justify-between  bg-gradient-to-r from-[#7a1b45] via-[#a92c63] to-[#d04a83] text-white">
                <h2 className="text-sm font-semibold">My Open Tasks</h2>
                <RefreshCw className="w-4 h-4 hover:rotate-180 transition-transform duration-500 cursor-pointer" />
              </div>
              <div className="overflow-x-auto">
                {/* Tasks Table */}
                <table className="w-full text-xs sm:text-sm">
                  <thead className="bg-gradient-to-r from-gray-50 to-pink-50">
                    <tr>
                      {["Subject", "Due Date", "Status", "Priority"].map((h) => (
                        <th
                          key={h}
                          className="px-2 sm:px-4 py-1.5 sm:py-2 text-left font-semibold text-gray-700 uppercase tracking-wide"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {tasks.map((task, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-gradient-to-r hover:from-pink-50 hover:to-transparent transition-colors"
                      >
                        <td className="px-2 sm:px-4 py-1.5 sm:py-2 text-gray-900 font-medium">{task.subject}</td>
                        <td className="px-2 sm:px-4 py-1.5 sm:py-2 text-gray-600 whitespace-nowrap">{task.dueDate}</td>
                        <td className="px-2 sm:px-4 py-1.5 sm:py-2">
                          <span
                            className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-medium ${getStatusColor(task.status)}`}
                          >
                            {task.status}
                          </span>
                        </td>
                        <td className="px-2 sm:px-4 py-1.5 sm:py-2">
                          <span
                            className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-medium ${getPriorityColor(task.priority)}`}
                          >
                            {task.priority}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-4 sm:px-6 py-2 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
                <span className="text-xs text-gray-500 font-medium">1 - 4 of 4</span>
                <div className="flex gap-1">
                  <button className="p-1 hover:bg-[#6a1e44] hover:text-white rounded transition-colors">
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-1 hover:bg-[#6a1e44] hover:text-white rounded transition-colors">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Meetings */}
            <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 shadow-md overflow-hidden">
              <div className="px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between bg-gradient-to-r from-[#7a1b45] via-[#a92c63] to-[#d04a83] text-white">
                <h2 className="text-sm font-semibold">My Meetings</h2>
                <RefreshCw className="w-4 h-4 hover:rotate-180 transition-transform duration-500 cursor-pointer" />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead className="bg-gradient-to-r from-gray-50 to-pink-50">
                    <tr>
                      {["Title", "From", "To", "Related To"].map((h) => (
                        <th
                          key={h}
                          className="px-2 sm:px-4 py-1.5 sm:py-2 text-left font-semibold text-gray-700 uppercase tracking-wide"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {meetings.map((meeting, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-gradient-to-r hover:from-pink-50 hover:to-transparent transition-colors"
                      >
                        <td className="px-2 sm:px-4 py-1.5 sm:py-2 text-gray-900 font-medium">{meeting.title}</td>
                        <td className="px-2 sm:px-4 py-1.5 sm:py-2 text-gray-600 whitespace-nowrap">{meeting.from}</td>
                        <td className="px-2 sm:px-4 py-1.5 sm:py-2 text-gray-600 whitespace-nowrap">{meeting.to}</td>
                        <td className="px-2 sm:px-4 py-1.5 sm:py-2">
                          <div className="flex items-center gap-2">
                            <span>{meeting.icon}</span>
                            <span className="text-gray-700 hover:bg-[#6a1e44] cursor-pointer font-medium transition-colors">
                              {meeting.relatedTo}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
                <span className="text-xs text-gray-500 font-medium">1 - 4 of 4</span>
                <div className="flex gap-1">
                  <button className="p-1.5 hover:bg-[#6a1e44] hover:text-white rounded transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 hover:bg-[#6a1e44] hover:text-white rounded transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;