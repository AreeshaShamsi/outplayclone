import {
  Bell,
  User,
  Users,
  UserCheck,
  UserX,
  UserPlus,
  Target,
  TrendingUp,
  Activity,
  Search,
  Plus,
  Home,
  ListChecks,
  CheckSquare,
  UserCog,
  BarChart3,
  Mail,
  Layers,
  Settings,
  Menu,
  X,
  LogOut,
  Kanban
} from "lucide-react";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useState,useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { getAuth } from "firebase/auth";

function AdminDashboard() {
  const [open, setOpen] = useState({ leads: true });
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [totalUsers, setTotalUsers] = useState(null);
  const [loading, setLoading] = useState(true);


  const handleLogout = () => {
    console.log("Logging out...");
  };
 

useEffect(() => {
  const auth = getAuth();
  auth.currentUser?.getIdToken(true).then((token) => {
    console.log("🔥 Firebase Token:", token);
  });
}, []);

 useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const user = getAuth().currentUser;
        if (!user) {
          setTotalUsers(0);
          setLoading(false);
          return;
        }

        const token = await user.getIdToken();

        const response = await fetch("http://localhost:5000/api/admin/total-users", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch total users");

        const data = await response.json();
        setTotalUsers(data.totalUsers);
      } catch (error) {
        console.error(error);
        setTotalUsers(0);
      } finally {
        setLoading(false);
      }
    };

    fetchTotalUsers();
  }, []);


  const activeClass = "bg-[#5b1440] text-white";
  const inactiveClass = "hover:bg-[#6a1e44] text-white";

  // Sample data for line chart
  const userGrowthData = [
    { month: "Jan", users: 120 },
    { month: "Feb", users: 180 },
    { month: "Mar", users: 240 },
    { month: "Apr", users: 320 },
    { month: "May", users: 410 },
    { month: "Jun", users: 520 }
  ];

  // Sample data for pie chart
  const userTypeData = [
    { name: "Active Users", value: 450, color: "#7e2a56" },
    { name: "Inactive Users", value: 150, color: "#9e3b59" },
    { name: "New Users", value: 80, color: "#c25478" }
  ];

  // Recent activity data
  const recentActivities = [
    { id: 1, action: "New user registered", user: "John Doe", time: "2 minutes ago", icon: UserPlus },
    { id: 2, action: "Lead created", user: "Sarah Smith", time: "15 minutes ago", icon: Target },
    { id: 3, action: "Lead converted", user: "Mike Johnson", time: "1 hour ago", icon: TrendingUp },
    { id: 4, action: "User became active", user: "Emma Wilson", time: "2 hours ago", icon: UserCheck },
    { id: 5, action: "New user registered", user: "David Brown", time: "3 hours ago", icon: UserPlus }
  ];

  // Recent users data
  const recentUsers = [
    { id: 1, name: "Alex Turner", email: "alex@example.com", status: "Active", joined: "2024-11-14" },
    { id: 2, name: "Maria Garcia", email: "maria@example.com", status: "Active", joined: "2024-11-13" },
    { id: 3, name: "James Wilson", email: "james@example.com", status: "Inactive", joined: "2024-11-12" },
    { id: 4, name: "Lisa Anderson", email: "lisa@example.com", status: "Active", joined: "2024-11-11" },
    { id: 5, name: "Robert Lee", email: "robert@example.com", status: "Active", joined: "2024-11-10" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f0f3] to-[#fef5fa]">
      <AdminSidebar />
      
      {/* Top Navbar */}
    <nav className="bg-[#7e2a56] shadow-lg border-b-4 border-[#5b1440] fixed top-0 left-0 w-full z-30 ">
  <div className="px-6 py-4 flex items-center justify-end gap-6">
    
    {/* Logo */}
   

    {/* Notifications + Profile */}
    <div className="flex items-center gap-4">
      <button className="relative p-2 hover:bg-[#6a1e44] rounded-lg transition-colors">
        <Bell size={20} className="text-white" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      <div className="flex items-center gap-3 pl-4 border-l border-[#9e3b59]">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-semibold text-white">Admin User</p>
          <p className="text-xs text-[#ffd7f0]">Administrator</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#5b1440] flex items-center justify-center text-white font-semibold">
          <User size={20} />
        </div>
      </div>
    </div>

  </div>
</nav> 





      {/* Main Dashboard Content */}
      <main className="p-6 lg:ml-80">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Header */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-[#4a0e2a]">Dashboard Overview</h2>
            <p className="text-[#7e2a56] mt-1">Welcome back! Here's what's happening today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
            {/* Total Users */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#7e2a56] hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-lg bg-[#7e2a56] flex items-center justify-center">
                  <Users size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-[#7e2a56] text-sm font-semibold mb-1">Total Users</h3>
        <p className="text-3xl font-bold text-[#4a0e2a]">
          {loading ? "Loading..." : totalUsers}
        </p>
              <span className="text-green-600 text-xs font-medium">↑ 12% from last month</span>
            </div>

            {/* Active Users */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center">
                  <UserCheck size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-[#7e2a56] text-sm font-semibold mb-1">Active Users</h3>
              <p className="text-3xl font-bold text-[#4a0e2a]">450</p>
              <span className="text-green-600 text-xs font-medium">↑ 8% from last month</span>
            </div>

            {/* Inactive Users */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center">
                  <UserX size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-[#7e2a56] text-sm font-semibold mb-1">Inactive Users</h3>
              <p className="text-3xl font-bold text-[#4a0e2a]">150</p>
              <span className="text-red-600 text-xs font-medium">↓ 3% from last month</span>
            </div>

            {/* New Users This Month */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                  <UserPlus size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-[#7e2a56] text-sm font-semibold mb-1">New Users</h3>
              <p className="text-3xl font-bold text-[#4a0e2a]">80</p>
              <span className="text-green-600 text-xs font-medium">This month</span>
            </div>

            {/* Total Leads */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center">
                  <Target size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-[#7e2a56] text-sm font-semibold mb-1">Total Leads</h3>
              <p className="text-3xl font-bold text-[#4a0e2a]">1,234</p>
              <span className="text-green-600 text-xs font-medium">↑ 15% from last month</span>
            </div>
          </div>

          {/* Graph Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Users Growth Line Chart */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#7e2a56]">
              <h3 className="text-lg font-semibold text-[#4a0e2a] mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-[#7e2a56]" />
                Users Growth
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#7e2a56" />
                  <YAxis stroke="#7e2a56" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="users" stroke="#7e2a56" strokeWidth={3} dot={{ fill: '#7e2a56', r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* User Types Pie Chart */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#9e3b59]">
              <h3 className="text-lg font-semibold text-[#4a0e2a] mb-4 flex items-center gap-2">
                <Activity size={20} className="text-[#7e2a56]" />
                User Distribution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={userTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {userTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activity & User Table */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#7e2a56]">
              <h3 className="text-lg font-semibold text-[#4a0e2a] mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
                      <div className="w-10 h-10 rounded-lg bg-[#7e2a56] flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[#4a0e2a]">{activity.action}</p>
                        <p className="text-sm text-[#7e2a56]">{activity.user}</p>
                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent Users Table */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#9e3b59]">
              <h3 className="text-lg font-semibold text-[#4a0e2a] mb-4">Recent Users</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[#7e2a56]">
                      <th className="text-left py-3 px-2 text-sm font-semibold text-[#4a0e2a]">Name</th>
                      <th className="text-left py-3 px-2 text-sm font-semibold text-[#4a0e2a]">Email</th>
                      <th className="text-left py-3 px-2 text-sm font-semibold text-[#4a0e2a]">Status</th>
                      <th className="text-left py-3 px-2 text-sm font-semibold text-[#4a0e2a]">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user) => (
                      <tr key={user.id} className="border-b border-gray-100 hover:bg-[#fef5fa]">
                        <td className="py-3 px-2 text-sm text-[#4a0e2a] font-medium">{user.name}</td>
                        <td className="py-3 px-2 text-sm text-[#7e2a56]">{user.email}</td>
                        <td className="py-3 px-2">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            user.status === "Active" 
                              ? "bg-green-100 text-green-700" 
                              : "bg-gray-100 text-gray-700"
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-sm text-[#7e2a56]">{user.joined}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;