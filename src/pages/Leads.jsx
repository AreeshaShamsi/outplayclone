import { Search, Filter, MoreVertical, Phone, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import TwoColumnSidebar from '../components/Sidebar';
import { Link } from "react-router-dom";

export default function LeadsPage() {
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const leads = [
    { id: 1, name: 'Christopher Maclead (Sample)', company: 'Rangoni Of Florence', email: 'christopher-maclead@oemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 2, name: 'Carissa Kidman (Sample)', company: 'Oh My Goodknits Inc', email: 'carissa-kidman@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 3, name: 'James Merced (Sample)', company: 'Kwik Kopy Printing', email: 'james-merced@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 4, name: 'Tresa Sweely (Sample)', company: 'Morlong Associates', email: 'tresa-sweely@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 5, name: 'Felix Hirpara (Sample)', company: 'Chapman', email: 'felix-hirpara@noemail.invalid', phone: '555-555-5555', status: 'valid' },
    { id: 6, name: 'Kayleigh Lace (Sample)', company: 'Printing Dimensions', email: 'kayleigh-lace@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
     { id: 1, name: 'Christopher Maclead (Sample)', company: 'Rangoni Of Florence', email: 'christopher-maclead@oemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 2, name: 'Carissa Kidman (Sample)', company: 'Oh My Goodknits Inc', email: 'carissa-kidman@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 3, name: 'James Merced (Sample)', company: 'Kwik Kopy Printing', email: 'james-merced@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 4, name: 'Tresa Sweely (Sample)', company: 'Morlong Associates', email: 'tresa-sweely@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 5, name: 'Felix Hirpara (Sample)', company: 'Chapman', email: 'felix-hirpara@noemail.invalid', phone: '555-555-5555', status: 'valid' },
    { id: 6, name: 'Kayleigh Lace (Sample)', company: 'Printing Dimensions', email: 'kayleigh-lace@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
     { id: 1, name: 'Christopher Maclead (Sample)', company: 'Rangoni Of Florence', email: 'christopher-maclead@oemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 2, name: 'Carissa Kidman (Sample)', company: 'Oh My Goodknits Inc', email: 'carissa-kidman@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 3, name: 'James Merced (Sample)', company: 'Kwik Kopy Printing', email: 'james-merced@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 4, name: 'Tresa Sweely (Sample)', company: 'Morlong Associates', email: 'tresa-sweely@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 5, name: 'Felix Hirpara (Sample)', company: 'Chapman', email: 'felix-hirpara@noemail.invalid', phone: '555-555-5555', status: 'valid' },
    { id: 6, name: 'Kayleigh Lace (Sample)', company: 'Printing Dimensions', email: 'kayleigh-lace@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
  ];

  const toggleSelectAll = () => {
    if (selectedLeads.length === leads.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(leads.map((lead) => lead.id));
    }
  };

  const toggleSelectLead = (id) => {
    setSelectedLeads((prev) =>
      prev.includes(id) ? prev.filter((leadId) => leadId !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <TwoColumnSidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-79"> 
        {/* 🔑 Notice: lg:ml-72 instead of always ml-72 */}

        
       {/* Header */}
<div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 flex-shrink-0">
  <div className="flex flex-wrap items-center justify-between gap-3">
    
    {/* Left section: Hamburger + Search + Filter */}
    <div className="flex flex-wrap items-center gap-3 flex-1 min-w-0">
      

      {/* Search bar */}
      <div className="relative flex-1 w-full sm:max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search leads..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      {/* Filter button */}
      <button className="flex items-center px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 whitespace-nowrap text-sm w-full sm:w-auto">
        <Filter size={16} className="mr-2" />
        Filter
      </button>
    </div>

    {/* Right section: Export + Create Lead */}
    <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
      <button className="flex items-center px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 whitespace-nowrap text-sm w-full sm:w-auto">
        <Download size={16} className="mr-2" />
        Export
      </button>
    <Link
  to="/leads/create-lead"
  className="px-4 py-2 text-white bg-[#d52c7b] rounded-lg hover:bg-[#4a0e2a] font-medium whitespace-nowrap text-sm w-full sm:w-auto inline-block text-center"
>
  + Create Lead
</Link>
    </div>
  </div>
</div>

        {/* Table */}
        <div className="flex-1 overflow-auto px-6 py-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="w-12 px-4 py-2">
                      <input
                        type="checkbox"
                        checked={selectedLeads.length === leads.length}
                        onChange={toggleSelectAll}
                        className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                      />
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                      Lead Name
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                      Company
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                      Email
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                      Phone
                    </th>
                    <th className="w-12 px-4 py-2"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {leads.map((lead) => (
                    <tr key={lead.id} className={`hover:bg-gray-50 ${lead.featured ? 'bg-purple-50' : ''}`}>
                      <td className="px-4 py-2">
                        <input
                          type="checkbox"
                          checked={selectedLeads.includes(lead.id)}
                          onChange={() => toggleSelectLead(lead.id)}
                          className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                        />
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap font-medium text-gray-900">
                        {lead.name}
                      </td>
                      <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{lead.company}</td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        <span className={`text-sm ${lead.status === 'invalid' ? 'text-red-600' : 'text-gray-700'}`}>
                          {lead.email}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                        <div className="flex items-center">
                          {lead.phone}
                          <Phone size={14} className="ml-1 text-gray-400" />
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between py-4">
            <div className="text-sm text-gray-700">
              <span className="font-medium">1 - 6</span> of <span className="font-medium">{leads.length}</span> records
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>
                <ChevronLeft size={16} />
              </button>
              <button className="px-3 py-1 bg-[#d52c7b] text-white rounded-lg text-sm">1</button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
