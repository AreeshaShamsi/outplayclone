import {
  Search,
  Plus,
  Home,
  Users,
  ListChecks,
  CheckSquare,
  UserCog,
  BarChart3,
  Mail,
  Layers,
  Target,
  Settings,
  Menu,
  X,
  LogOut,
  Kanban,
  UserPlus
} from "lucide-react";
import { useState } from "react";

function AdminSidebar() {
  const [open, setOpen] = useState({ leads: true });
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logging out...");
    // Add your logout logic here
  };

  const activeClass = "bg-[#5b1440] text-white";
  const inactiveClass = "hover:bg-[#6a1e44] text-white";

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden w-10 h-10 rounded-lg bg-[#4a0e2a] text-white flex items-center justify-center shadow-lg"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen z-50 transition-transform duration-300 
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex h-full">
          {/* Narrow icon rail */}
          <aside className="w-16 hidden lg:flex flex-col items-center bg-[#4a0e2a] text-white py-4 z-40">
            <div className="w-10 h-10 rounded-lg bg-[#5d1436] flex items-center justify-center mb-6 font-bold text-sm">
              AD
            </div>

            {/* main icons */}
            <nav className="flex-1 flex flex-col items-center gap-3">
              <button className="w-10 h-10 rounded-md flex items-center justify-center bg-[#62163a]">
                <Home size={18} />
              </button>

              <button className="w-10 h-10 rounded-md flex items-center justify-center hover:bg-[#62163a]">
                <Users size={18} />
              </button>

              <button className="w-10 h-10 rounded-md flex items-center justify-center hover:bg-[#62163a]">
                <CheckSquare size={18} />
              </button>

              <button className="w-10 h-10 rounded-md flex items-center justify-center hover:bg-[#62163a]">
                <BarChart3 size={18} />
              </button>

              <button className="w-10 h-10 rounded-md flex items-center justify-center hover:bg-[#62163a]">
                <Layers size={18} />
              </button>
            </nav>

            <div className="mt-auto">
              <button className="w-10 h-10 rounded-md bg-[#2b0713] flex items-center justify-center">
                <Plus size={14} />
              </button>
            </div>
          </aside>

          {/* Main menu panel */}
          <aside className="w-64 sm:w-72 bg-[#7e2a56] text-white flex flex-col h-full z-50">
            {/* header */}
            <div className="px-4 py-4 flex items-center justify-between shrink-0">
              <div className="text-2xl font-semibold">Admin Panel</div>
              <button className="w-8 h-8 rounded-full bg-[#5a1040] flex items-center justify-center">
                <Plus size={14} />
              </button>
            </div>

            {/* search */}
            <div className="px-3 shrink-0">
              <div className="relative">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                  className="w-full pl-10 pr-3 py-2 rounded bg-[#6b2348] placeholder-[#ffd7f0] focus:outline-none text-white"
                />
                <div className="absolute left-3 top-2.5 opacity-90">
                  <Search size={16} />
                </div>
              </div>
            </div>

            {/* menu */}
            <nav
              className="flex-1 mt-3 px-1 overflow-y-auto"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <style>{`nav::-webkit-scrollbar { display: none; }`}</style>

              <ul className="space-y-1 pb-4">
                {/* Dashboard */}
                <li>
                  <button className={`flex items-center gap-3 px-3 py-2 rounded mx-2 w-full text-left ${activeClass}`}>
                    <Home size={16} /> Dashboard
                  </button>
                </li>

                {/* Leads section with dropdown */}
                <li className="mx-2 mt-2">
                  <button
                    onClick={() => setOpen((s) => ({ ...s, leads: !s.leads }))}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-[#6a1e44]"
                  >
                    <Users size={16} /> Leads
                  </button>

                  {open.leads && (
                    <ul className="mt-2 ml-8 space-y-2 text-sm">
                      <li>
                        <button className={`flex items-center gap-2 px-2 py-1 rounded w-full text-left ${inactiveClass}`}>
                          <ListChecks size={14} /> All Leads
                        </button>
                      </li>
                      <li>
                        <button className={`flex items-center gap-2 px-2 py-1 rounded w-full text-left ${inactiveClass}`}>
                          <UserPlus size={14} /> Create Lead
                        </button>
                      </li>
                      <li>
                        <button className={`flex items-center gap-2 px-2 py-1 rounded w-full text-left ${inactiveClass}`}>
                          <Kanban size={14} /> Kanban Board
                        </button>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Follow-Ups / Tasks */}
                <li>
                  <button className={`flex items-center gap-3 px-3 py-2 rounded mx-2 w-full text-left ${inactiveClass}`}>
                    <CheckSquare size={16} /> Follow-Ups / Tasks
                  </button>
                </li>

                {/* Team Management */}
                <li>
                  <button className={`flex items-center gap-3 px-3 py-2 rounded mx-2 w-full text-left ${inactiveClass}`}>
                    <UserCog size={16} /> Team Management
                  </button>
                </li>

                {/* Analytics & Reports */}
                <li>
                  <button className={`flex items-center gap-3 px-3 py-2 rounded mx-2 w-full text-left ${inactiveClass}`}>
                    <BarChart3 size={16} /> Analytics & Reports
                  </button>
                </li>

                {/* Email Automation */}
                <li>
                  <button className={`flex items-center gap-3 px-3 py-2 rounded mx-2 w-full text-left ${inactiveClass}`}>
                    <Mail size={16} /> Email Automation
                  </button>
                </li>

                {/* Integrations */}
                <li>
                  <button className={`flex items-center gap-3 px-3 py-2 rounded mx-2 w-full text-left ${inactiveClass}`}>
                    <Layers size={16} /> Integrations
                  </button>
                </li>

                {/* Lead Sources */}
                <li>
                  <button className={`flex items-center gap-3 px-3 py-2 rounded mx-2 w-full text-left ${inactiveClass}`}>
                    <Target size={16} /> Lead Sources
                  </button>
                </li>

                {/* Settings Dropdown with Logout */}
                <li className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center gap-3 px-3 py-2 rounded mx-2 w-full text-left ${inactiveClass}`}
                  >
                    <Settings size={16} /> Settings
                  </button>

                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-full rounded-lg shadow-lg z-20">
                      <button
                        onClick={handleLogout}
                        className="flex items-center ml-8 gap-2 w-full text-left px-4 py-2 text-sm text-white hover:bg-[#6c2449] rounded-md"
                      >
                        <LogOut size={16} /> Logout
                      </button>
                    </div>
                  )}
                </li>
              </ul>
            </nav>

            {/* footer */}
            <div className="p-3 shrink-0">
              <div className="rounded bg-[#9e3b59] text-white text-sm py-2 flex items-center justify-center">
                Admin Dashboard
              </div>
            </div>
          </aside>
        </div>
      </div>


    </>
  );
}

export default AdminSidebar;