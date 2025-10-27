import {
  Search,
  Plus,
  Home,
  Users,
  Briefcase,
  Layers,
  CheckSquare,
  Calendar,
  Phone,
  Building2,
  BarChart2,
  FileText,
  Megaphone,
  Box,
  Headphones,
  Cog,
  Menu,
  X,
  LogOut
} from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function TwoColumnSidebar() {
  const [open, setOpen] = useState({ sales: true, activities: true });
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.clear(); // clear any stored user/session data
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
    }
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
              CT
            </div>

            {/* main icons */}
            <nav className="flex-1 flex flex-col items-center gap-3">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `w-10 h-10 rounded-md flex items-center justify-center ${
                    isActive ? "bg-[#62163a]" : "hover:bg-[#62163a]"
                  }`
                }
              >
                <Home size={18} />
              </NavLink>

              <NavLink
                to="/leads"
                className={({ isActive }) =>
                  `w-10 h-10 rounded-md flex items-center justify-center ${
                    isActive ? "bg-[#62163a]" : "hover:bg-[#62163a]"
                  }`
                }
              >
                <Users size={18} />
              </NavLink>

              <NavLink
                to="/deals"
                className={({ isActive }) =>
                  `w-10 h-10 rounded-md flex items-center justify-center ${
                    isActive ? "bg-[#62163a]" : "hover:bg-[#62163a]"
                  }`
                }
              >
                <Briefcase size={18} />
              </NavLink>

              <NavLink
                to="/integrations"
                className={({ isActive }) =>
                  `w-10 h-10 rounded-md flex items-center justify-center ${
                    isActive ? "bg-[#62163a]" : "hover:bg-[#62163a]"
                  }`
                }
              >
                <Layers size={18} />
              </NavLink>
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
              <div className="text-2xl font-semibold">PrimeDesk</div>
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
                {/* Home */}
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded mx-2 ${
                        isActive ? activeClass : inactiveClass
                      }`
                    }
                  >
                    <Home size={16} /> Home
                  </NavLink>
                </li>

                {/* Sales section */}
                <li className="mx-2 mt-2">
                  <button
                    onClick={() =>
                      setOpen((s) => ({ ...s, sales: !s.sales }))
                    }
                    className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-[#6a1e44]"
                  >
                    <Briefcase size={16} /> Sales
                  </button>

                  {open.sales && (
                    <ul className="mt-2 ml-8 space-y-2 text-sm">
                      <li>
                        <NavLink
                          to="/leads"
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-2 py-1 rounded ${
                              isActive ? activeClass : inactiveClass
                            }`
                          }
                        >
                          <Users size={14} /> Leads
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/contacts"
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-2 py-1 rounded ${
                              isActive ? activeClass : inactiveClass
                            }`
                          }
                        >
                          <Users size={14} /> Contacts
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/accounts"
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-2 py-1 rounded ${
                              isActive ? activeClass : inactiveClass
                            }`
                          }
                        >
                          <Building2 size={14} /> Accounts
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/deals"
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-2 py-1 rounded ${
                              isActive ? activeClass : inactiveClass
                            }`
                          }
                        >
                          <Briefcase size={14} /> Deals
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/forecasts"
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-2 py-1 rounded ${
                              isActive ? activeClass : inactiveClass
                            }`
                          }
                        >
                          <BarChart2 size={14} /> Forecasts
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/documents"
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-2 py-1 rounded ${
                              isActive ? activeClass : inactiveClass
                            }`
                          }
                        >
                          <FileText size={14} /> Documents
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/campaigns"
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-2 py-1 rounded ${
                              isActive ? activeClass : inactiveClass
                            }`
                          }
                        >
                          <Megaphone size={14} /> Campaigns
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Activities section */}
                <li className="mx-2 mt-2">
                  <button
                    onClick={() =>
                      setOpen((s) => ({ ...s, activities: !s.activities }))
                    }
                    className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-[#6a1e44]"
                  >
                    <CheckSquare size={16} /> Activities
                  </button>

                  {open.activities && (
                    <ul className="mt-2 ml-8 space-y-2 text-sm">
                      <li>
                        <NavLink
                          to="/tasks"
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-2 py-1 rounded ${
                              isActive ? activeClass : inactiveClass
                            }`
                          }
                        >
                          <CheckSquare size={14} /> Tasks
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/meetings"
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-2 py-1 rounded ${
                              isActive ? activeClass : inactiveClass
                            }`
                          }
                        >
                          <Calendar size={14} /> Meetings
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/calls"
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-2 py-1 rounded ${
                              isActive ? activeClass : inactiveClass
                            }`
                          }
                        >
                          <Phone size={14} /> Calls
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Other static links */}
                <li>
                  <NavLink
                    to="/inventory"
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded mx-2 ${
                        isActive ? activeClass : inactiveClass
                      }`
                    }
                  >
                    <Box size={16} /> Inventory
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/support"
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded mx-2 ${
                        isActive ? activeClass : inactiveClass
                      }`
                    }
                  >
                    <Headphones size={16} /> Support
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/integrations"
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded mx-2 ${
                        isActive ? activeClass : inactiveClass
                      }`
                    }
                  >
                    <Layers size={16} /> Integrations
                  </NavLink>
                </li>

                {/* ✅ Settings Dropdown with Logout */}
                <li className="relative">
  <button
    onClick={() => setDropdownOpen(!dropdownOpen)}
    className={`flex items-center gap-3 px-3 py-2 rounded mx-2 w-full text-left ${inactiveClass}`}
  >
    <Cog size={16} /> Settings
  </button>

  {dropdownOpen && (
    <div className="absolute left-0 mt-2 w-full  rounded-lg shadow-lg z-20">
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
                CT CRM Teamspace
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default TwoColumnSidebar;
