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
  X
} from "lucide-react";
import { useState } from "react";

function TwoColumnSidebar() {
  const [open, setOpen] = useState({ sales: true, activities: true });
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

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
          {/* Narrow icon rail (left) */}
          <aside className="w-16 hidden lg:flex flex-col items-center bg-[#4a0e2a] text-white py-4">
            {/* top logo / app sign */}
            <div className="w-10 h-10 rounded-lg bg-[#5d1436] flex items-center justify-center mb-6 font-bold text-sm">
              CT
            </div>

            {/* main icons column */}
            <nav className="flex-1 flex flex-col items-center gap-3">
              <button className="w-10 h-10 rounded-md flex items-center justify-center hover:bg-[#62163a]">
                <Home size={18} />
              </button>

              <button className="w-10 h-10 rounded-md flex items-center justify-center hover:bg-[#62163a]">
                <Users size={18} />
              </button>

              <button className="w-10 h-10 rounded-md flex items-center justify-center hover:bg-[#62163a]">
                <Briefcase size={18} />
              </button>

              <button className="w-10 h-10 rounded-md flex items-center justify-center hover:bg-[#62163a]">
                <Layers size={18} />
              </button>
            </nav>

            {/* plus / create button */}
            <div className="mt-auto">
              <button className="w-10 h-10 rounded-md bg-[#2b0713] flex items-center justify-center">
                <Plus size={14} />
              </button>
            </div>
          </aside>

          {/* Main menu panel (right) */}
          <aside className="w-64 sm:w-72 bg-[#7e2a56] text-white flex flex-col h-full">
            {/* header */}
            <div className="px-4 py-4 flex items-center justify-between shrink-0">
              <div className="text-lg font-semibold">Modules</div>
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

            {/* scrollable menu with hidden scrollbar */}
            <nav
              className="flex-1 mt-3 px-1 overflow-y-auto"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none"
              }}
            >
              <style>{`
                nav::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              <ul className="space-y-1 pb-4">
                <li className="px-3 py-2 rounded bg-[#5b1440] mx-2 flex items-center gap-3 cursor-pointer">
                  <Home size={16} /> <span className="font-medium">Home</span>
                </li>

                {/* Sales section */}
                <li className="mx-2 mt-2">
                  <button
                    onClick={() =>
                      setOpen((s) => ({ ...s, sales: !s.sales }))
                    }
                    className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-[#6a1e44]"
                  >
                    <Briefcase size={16} />{" "}
                    <span className="font-medium">Sales</span>
                  </button>

                  {open.sales && (
                    <ul className="mt-2 ml-8 space-y-2 text-sm">
                      <li className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-[#6a1e44]">
                        <Users size={14} /> Leads
                      </li>
                      <li className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-[#6a1e44]">
                        <Users size={14} /> Contacts
                      </li>
                      <li className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-[#6a1e44]">
                        <Building2 size={14} /> Accounts
                      </li>
                      <li className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-[#6a1e44]">
                        <Briefcase size={14} /> Deals
                      </li>
                      <li className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-[#6a1e44]">
                        <BarChart2 size={14} /> Forecasts
                      </li>
                      <li className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-[#6a1e44]">
                        <FileText size={14} /> Documents
                      </li>
                      <li className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-[#6a1e44]">
                        <Megaphone size={14} /> Campaigns
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
                    <CheckSquare size={16} />{" "}
                    <span className="font-medium">Activities</span>
                  </button>

                  {open.activities && (
                    <ul className="mt-2 ml-8 space-y-2 text-sm">
                      <li className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-[#6a1e44]">
                        <CheckSquare size={14} /> Tasks
                      </li>
                      <li className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-[#6a1e44]">
                        <Calendar size={14} /> Meetings
                      </li>
                      <li className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-[#6a1e44]">
                        <Phone size={14} /> Calls
                      </li>
                    </ul>
                  )}
                </li>

                <li className="px-3 py-2 rounded hover:bg-[#6a1e44] mx-2 flex items-center gap-3 mt-2 cursor-pointer">
                  <Box size={16} /> Inventory
                </li>
                <li className="px-3 py-2 rounded hover:bg-[#6a1e44] mx-2 flex items-center gap-3 mt-1 cursor-pointer">
                  <Headphones size={16} /> Support
                </li>
                <li className="px-3 py-2 rounded hover:bg-[#6a1e44] mx-2 flex items-center gap-3 mt-1 cursor-pointer">
                  <Layers size={16} /> Integrations
                </li>
                <li className="px-3 py-2 rounded hover:bg-[#6a1e44] mx-2 flex items-center gap-3 mt-1 cursor-pointer">
                  <Cog size={16} /> Services
                </li>
              </ul>
            </nav>

            {/* footer pill pinned at bottom */}
            <div className="p-3 shrink-0">
              <div className="rounded bg-[#d94a76] text-white text-sm py-2 flex items-center justify-center">
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
