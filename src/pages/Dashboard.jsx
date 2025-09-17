import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  Send, 
  Calendar, 
  User, 
  CreditCard, 
  Phone, 
  MoreHorizontal,
  Bell,
  Search,
  Zap,
  MessageSquare,
  Mail,
  Settings,
  ChevronDown,
  ArrowUp,
  ArrowDown,
  RotateCcw,
  Play,
  Filter,
  CalendarDays,
  RefreshCw,
  Menu
} from 'lucide-react';

export default function CRMDashboard() {
  const [selectedTab, setSelectedTab] = useState('Engagement');
  const [liveFeedOpen, setLiveFeedOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: Users, label: 'Leads' },
    { icon: Send, label: 'Campaigns' },
    { icon: User, label: 'Contacts' },
    { icon: Calendar, label: 'Calendar' },
    { icon: CreditCard, label: 'Billing' },
    { icon: Phone, label: 'Calls' },
    { icon: MoreHorizontal, label: 'More' }
  ];

  const tabs = ['Leads', 'Engagement', 'Scheduler'];

  const teamStats = [
    { number: '33', label: 'Tasks', color: 'bg-purple-100 text-purple-600', icon: '✓' },
    { number: '35', label: 'Emails', color: 'bg-red-100 text-red-600', icon: '✉' },
    { number: '15', label: 'Calls', color: 'bg-green-100 text-green-600', icon: '📞' },
    { number: '16', label: 'Text / SMS', color: 'bg-yellow-100 text-yellow-600', icon: '💬' },
    { number: '10', label: 'Meetings', color: 'bg-blue-100 text-blue-600', icon: '📅' }
  ];

  const taskBreakdown = [
    { count: 5, label: 'All', active: true },
    { count: 1, label: 'Emails' },
    { count: 1, label: 'Calls' },
    { count: 1, label: 'Twitter' },
    { count: 1, label: 'LinkedIn' },
    { count: 0, label: 'SMS' },
    { count: 1, label: 'General' },
    { count: 0, label: 'WhatsApp' }
  ];

  const tasks = [
    {
      name: 'James Rock',
      task: 'Email task for Step #4 of My First Sequence',
      type: 'email',
      color: 'bg-red-500',
      stepLink: 'Step #4',
      sequenceLink: 'My First Sequence'
    },
    {
      name: 'Ajani Ortiz',
      task: 'Twitter task for Step #5 of Sequence #1',
      type: 'twitter',
      color: 'bg-blue-500',
      stepLink: 'Step #5',
      sequenceLink: 'Sequence #1'
    },
    {
      name: 'Clark Gregg',
      task: 'Call task for Step #4 of Sequence #1',
      type: 'call',
      color: 'bg-green-500',
      stepLink: 'Step #4',
      sequenceLink: 'Sequence #1'
    },
    {
      name: 'Groot Guardian',
      task: 'LinkedIn task for Step #2 of Sequence #1',
      type: 'linkedin',
      color: 'bg-blue-600',
      stepLink: 'Step #2',
      sequenceLink: 'Sequence #1'
    }
  ];

  const liveFeedItems = [
    {
      type: 'error',
      user: 'Lara Croft',
      action: 'opened email w/ sub TBD for step#1 of sequence Failed Mail Sequence',
      byUser: 'Marc Benioff',
      time: 'Feb 27, 2023 11:23 AM',
      icon: '🔴'
    },
    {
      type: 'meeting',
      user: 'Marc',
      action: 'booked a meeting with Marc Benioff at Mar 1, 2023 3:23 AM to 4:23 AM',
      time: 'Feb 26, 2023 3:23 PM',
      icon: '📅'
    },
    {
      type: 'call',
      user: 'Marc Benioff',
      action: 'attempted to call Ajani Ortiz',
      disposition: 'No Answer Left Voicemail for step#4 of sequence Sequence #1',
      byUser: 'Marc Benioff',
      time: 'Feb 26, 2023 1:23 PM',
      icon: '📞'
    },
    {
      type: 'task',
      user: 'Marc Benioff',
      action: 'finished a generic task for Adam Harrington for step#6 of sequence Sequence #1',
      byUser: 'Marc Benioff',
      time: 'Feb 25, 2023 3:23 PM',
      icon: '✅'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50 relative">
      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 fixed lg:relative z-50 w-64 lg:w-16 xl:w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ease-in-out h-full`}>
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <Send className="w-4 h-4 text-white" />
            </div>
            <span className="ml-3 font-semibold text-gray-900 lg:hidden xl:block">CRM</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                item.active 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon className="w-5 h-5" />
              <span className="ml-3 lg:hidden xl:block">{item.label}</span>
            </div>
          ))}
        </nav>

        {/* Help Button */}
        <div className="p-4 border-t border-gray-200">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer">
            <span className="text-white font-bold text-sm">?</span>
          </div>
          <div className="text-xs text-gray-500 mt-2 lg:hidden xl:block">
            Have a Question
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile menu button and tabs */}
            <div className="flex items-center space-x-4">
              <button
                className="lg:hidden p-2 text-gray-400 hover:text-gray-600"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </button>
              
              {/* Tabs - horizontal scroll on mobile */}
              <div className="flex space-x-4 sm:space-x-8 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`pb-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                      selectedTab === tab
                        ? 'border-red-500 text-red-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Right side - hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Your trial ends in <span className="font-medium">14 days</span>.
                <button className="text-blue-600 ml-1 underline">Upgrade Now.</button>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-gray-400" />
                <Search className="w-5 h-5 text-gray-400" />
                <Bell className="w-5 h-5 text-gray-400" />
                <MessageSquare className="w-5 h-5 text-gray-400" />
                <Mail className="w-5 h-5 text-gray-400" />
                <Settings className="w-5 h-5 text-gray-400" />
                <div className="flex items-center space-x-1 bg-gray-100 rounded-lg px-2 py-1">
                  <span className="text-sm font-medium">RA</span>
                </div>
              </div>
            </div>
            
            {/* Mobile right side - just profile */}
            <div className="md:hidden">
              <div className="flex items-center space-x-1 bg-gray-100 rounded-lg px-2 py-1">
                <span className="text-sm font-medium">RA</span>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          {/* Main Dashboard */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-3 sm:p-4 md:p-6">
              {/* Alert */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 md:p-4 mb-3 sm:mb-4 md:mb-6">
                <p className="text-xs sm:text-sm text-yellow-800 leading-relaxed">
                  You're viewing sample data until at least one of your sequence is activated.
                </p>
              </div>

              {/* Team Activities */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-3 sm:mb-4 md:mb-6">
                <div className="px-3 sm:px-4 md:px-6 py-3 md:py-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                    </div>
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                      <span className="hidden sm:inline">Team Activities - This Week</span>
                      <span className="sm:hidden">Team Activities</span>
                    </h2>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 md:p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
                    {teamStats.map((stat, index) => (
                      <div key={index} className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg md:bg-transparent md:p-0">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                          <span className="text-lg sm:text-xl">{stat.icon}</span>
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.number}</div>
                          <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tasks Due Section */}
                  <div className="border-t pt-3 sm:pt-4 md:pt-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 space-y-2 sm:space-y-0">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">5 Tasks Due</h3>
                      <div className="flex flex-col xs:flex-row items-start xs:items-center space-y-2 xs:space-y-0 xs:space-x-2">
                        <span className="text-xs sm:text-sm text-gray-500 hidden md:block">Sort by</span>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <button className="flex items-center justify-center w-8 h-8 text-sm text-gray-600 hover:bg-gray-100 rounded">
                            <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                          <button className="flex items-center justify-center w-8 h-8 text-sm text-gray-600 hover:bg-gray-100 rounded">
                            <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                          <button className="flex items-center justify-center w-8 h-8 text-sm text-gray-600 hover:bg-gray-100 rounded">
                            <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                          <button className="bg-blue-600 text-white px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 rounded-lg text-xs sm:text-sm font-medium flex items-center ml-2">
                            <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            <span className="hidden xs:inline sm:hidden md:inline">Start 5 Tasks</span>
                            <span className="xs:hidden sm:inline md:hidden">Start 5</span>
                            <span className="sm:hidden">Start</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Task Breakdown - scrollable on mobile */}
                    <div className="flex overflow-x-auto gap-1.5 sm:gap-2 md:gap-4 mb-3 sm:mb-4 md:mb-6 pb-2">
                      {taskBreakdown.map((item, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg cursor-pointer whitespace-nowrap text-xs sm:text-sm ${
                            item.active ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-600'
                          }`}
                        >
                          <span className="font-medium">{item.count}</span>
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Task List */}
                    <div className="space-y-2 sm:space-y-3 md:space-y-4">
                      {tasks.map((task, index) => (
                        <div key={index} className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 p-2.5 sm:p-3 md:p-4 bg-gray-50 rounded-lg">
                          <input type="checkbox" className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 mt-0.5 sm:mt-1 md:mt-0" />
                          <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${task.color} flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white text-xs">
                              {task.type === 'email' ? '✉' : task.type === 'twitter' ? '🐦' : task.type === 'call' ? '📞' : '💼'}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 text-sm md:text-base leading-tight">{task.name}</div>
                            <div className="text-xs sm:text-sm text-gray-600 break-words mt-0.5 leading-relaxed">
                              {task.task.split(task.stepLink)[0]}
                              <span className="text-blue-600 underline">{task.stepLink}</span>
                              {task.task.split(task.stepLink)[1].split(task.sequenceLink)[0]}
                              <span className="text-blue-600 underline">{task.sequenceLink}</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end space-y-1 sm:space-y-2">
                            <span className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs font-medium">
                              1d
                            </span>
                            <MoreHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 cursor-pointer" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Feed Sidebar */}
          {liveFeedOpen && (
            <div className="fixed lg:relative inset-y-0 right-0 z-30 w-full sm:w-80 md:w-96 lg:w-80 bg-white border-l border-gray-200 flex flex-col shadow-lg lg:shadow-none">
              <div className="px-3 sm:px-4 py-3 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">📡</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Live Feed</h3>
                  </div>
                  <button
                    onClick={() => setLiveFeedOpen(false)}
                    className="text-gray-400 hover:text-gray-600 p-1 text-lg"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200">
                <div className="flex items-center space-x-1.5 sm:space-x-2 overflow-x-auto">
                  <button className="flex items-center space-x-1 text-xs sm:text-sm text-gray-600 bg-gray-100 rounded px-2 py-1 whitespace-nowrap">
                    <Filter className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span>Events</span>
                    <ChevronDown className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </button>
                  <button className="flex items-center space-x-1 text-xs sm:text-sm text-gray-600 bg-gray-100 rounded px-2 py-1 whitespace-nowrap">
                    <CalendarDays className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span>Date</span>
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 p-1">
                    <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
                {liveFeedItems.map((item, index) => (
                  <div key={index} className="flex space-x-2 sm:space-x-3">
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      item.type === 'error' ? 'bg-red-100' :
                      item.type === 'meeting' ? 'bg-blue-100' :
                      item.type === 'call' ? 'bg-green-100' :
                      'bg-purple-100'
                    }`}>
                      <span className="text-xs sm:text-sm">{item.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm text-gray-900 leading-tight">
                        <span className="font-medium text-blue-600">{item.user}</span>{' '}
                        {item.action}
                        {item.byUser && (
                          <span> by user <span className="font-medium text-blue-600">{item.byUser}</span></span>
                        )}
                      </div>
                      {item.disposition && (
                        <div className="text-xs text-gray-600 mt-1 leading-relaxed">
                          Disposition: {item.disposition}
                        </div>
                      )}
                      <div className="flex items-center mt-1.5 sm:mt-2 text-xs text-gray-500">
                        <span className="mr-1.5 sm:mr-2">⏰</span>
                        {item.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Live Feed Toggle Button */}
          {!liveFeedOpen && (
            <button
              onClick={() => setLiveFeedOpen(true)}
              className="fixed bottom-4 right-4 z-30 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors"
              title="Show Live Feed"
            >
              <span className="text-white text-lg">📡</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}