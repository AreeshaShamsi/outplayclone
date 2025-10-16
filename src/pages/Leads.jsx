import { Search, Filter, MoreVertical, Phone, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import TwoColumnSidebar from '../components/Sidebar';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [apiLeads, setApiLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Fetch all leads from backend
const fetchLeads = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/leads');
    setApiLeads(response.data || []); // backend returns array
  } catch (error) {
    console.error('Failed to fetch leads:', error);
  }
};

useEffect(() => {
  fetchLeads();
}, []);

  const staticLeads = [
  { id: 1, name: 'Christopher Maclead (Sample)', company: 'Rangoni Of Florence', email: 'christopher@example.com', phone: '555-555-5555', status: 'invalid' },
  { id: 2, name: 'Carissa Kidman (Sample)', company: 'Oh My Goodknits Inc', email: 'carissa@example.com', phone: '555-555-5555', status: 'invalid' },
   { id: 1, name: 'Christopher Maclead (Sample)', company: 'Rangoni Of Florence', email: 'christopher-maclead@oemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 2, name: 'Carissa Kidman (Sample)', company: 'Oh My Goodknits Inc', email: 'carissa-kidman@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 3, name: 'James Merced (Sample)', company: 'Kwik Kopy Printing', email: 'james-merced@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 4, name: 'Tresa Sweely (Sample)', company: 'Morlong Associates', email: 'tresa-sweely@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 5, name: 'Felix Hirpara (Sample)', company: 'Chapman', email: 'felix-hirpara@noemail.invalid', phone: '555-555-5555', status: 'valid' },
    { id: 1, name: 'Christopher Maclead (Sample)', company: 'Rangoni Of Florence', email: 'christopher@example.com', phone: '555-555-5555', status: 'invalid' },
  { id: 2, name: 'Carissa Kidman (Sample)', company: 'Oh My Goodknits Inc', email: 'carissa@example.com', phone: '555-555-5555', status: 'invalid' },
   { id: 1, name: 'Christopher Maclead (Sample)', company: 'Rangoni Of Florence', email: 'christopher-maclead@oemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 2, name: 'Carissa Kidman (Sample)', company: 'Oh My Goodknits Inc', email: 'carissa-kidman@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 3, name: 'James Merced (Sample)', company: 'Kwik Kopy Printing', email: 'james-merced@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 4, name: 'Tresa Sweely (Sample)', company: 'Morlong Associates', email: 'tresa-sweely@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 5, name: 'Felix Hirpara (Sample)', company: 'Chapman', email: 'felix-hirpara@noemail.invalid', phone: '555-555-5555', status: 'valid' },
    { id: 2, name: 'Carissa Kidman (Sample)', company: 'Oh My Goodknits Inc', email: 'carissa-kidman@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 3, name: 'James Merced (Sample)', company: 'Kwik Kopy Printing', email: 'james-merced@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 4, name: 'Tresa Sweely (Sample)', company: 'Morlong Associates', email: 'tresa-sweely@noemail.invalid', phone: '555-555-5555', status: 'invalid' },
    { id: 5, name: 'Felix Hirpara (Sample)', company: 'Chapman', email: 'felix-hirpara@noemail.invalid', phone: '555-555-5555', status: 'valid' },


];

  // choose which leads to display: API first, otherwise static
  const displayedLeads = apiLeads && apiLeads.length ? apiLeads : staticLeads;

  // Select / deselect all leads
  const toggleSelectAll = () => {
    if (selectedLeads.length === displayedLeads.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(displayedLeads.map((lead) => lead.id || lead._id));
    }
  };

  // Select / deselect a single lead
  const toggleSelectLead = (id) => {
    setSelectedLeads((prev) =>
      prev.includes(id) ? prev.filter((leadId) => leadId !== id) : [...prev, id]
    );
  };

  const openLead = (lead) => {
    setSelectedLead(lead);
    setModalOpen(true);
  };

  const closeLead = () => {
    setSelectedLead(null);
    setModalOpen(false);
  };


  return (
    <>
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <TwoColumnSidebar />

      {/* Main content */}
       <div className="flex-1 flex flex-col min-w-0 lg:ml-79"> 
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 flex-shrink-0">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Left section: Search + Filter */}
            <div className="flex flex-wrap items-center gap-3 flex-1 min-w-0">
              <div className="relative flex-1 w-full sm:max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search leads..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

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
                        checked={selectedLeads.length === displayedLeads.length && displayedLeads.length > 0}
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
                  {displayedLeads.map((lead, idx) => (
                    <tr
                      key={lead._id || lead.id || idx}
                      onClick={() => openLead(lead)}
                      className={`hover:bg-gray-50 cursor-pointer ${lead.featured ? 'bg-purple-50' : ''}`}>
                      <td className="px-4 py-2">
                        <input
                          type="checkbox"
                          checked={selectedLeads.includes(lead.id || lead._id)}
                          onChange={(e) => { e.stopPropagation(); toggleSelectLead(lead.id || lead._id); }}
                          className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                        />
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap font-medium text-gray-900">{lead.name || `${lead.firstName || ''} ${lead.lastName || ''}`}</td>
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
                        <button onClick={(e) => e.stopPropagation()} className="text-gray-400 hover:text-gray-600">
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
              <span className="font-medium">1 - {displayedLeads.length}</span> of <span className="font-medium">{displayedLeads.length}</span> records
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
    {/* Lead details modal */}
    <LeadDetailsModal lead={selectedLead} open={modalOpen} onClose={closeLead} />
    </>
  );
}

// Modal outside component return (kept in same file for simplicity)
import { X } from "lucide-react";

function LeadDetailsModal({ lead, open, onClose, onEdit }) {
  if (!open || !lead) return null;

  const leadFields = [
    { label: "Lead Owner", value: lead.leadOwner },
    { label: "Company", value: lead.company },
    { label: "First Name", value: lead.firstName },
    { label: "Last Name", value: lead.lastName },
    { label: "Title", value: lead.title },
    { label: "Email", value: lead.email },
    { label: "Phone", value: lead.phone },
    { label: "Fax", value: lead.fax },
    { label: "Mobile", value: lead.mobile },
    { label: "Website", value: lead.website },
    { label: "Lead Source", value: lead.leadSource },
    { label: "Lead Status", value: lead.leadStatus },
    { label: "Industry", value: lead.industry },
    { label: "Employees", value: lead.employees },
    { label: "Revenue", value: lead.revenue },
    { label: "Rating", value: lead.rating },
    { label: "Description", value: lead.description },
    {
      label: "Address",
      value:
        lead.address ||
        `${lead.houseNo || ""} ${lead.street || ""} ${lead.city || ""} ${lead.state || ""} ${lead.zip || ""}`,
      full: true,
    },
    { label: "Country", value: lead.country },
    { label: "House No", value: lead.houseNo },
    { label: "Street", value: lead.street },
    { label: "City", value: lead.city },
    { label: "State", value: lead.state },
    { label: "ZIP", value: lead.zip },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-6 z-60 animate-fadeIn overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-3">
          <h3 className="text-2xl font-semibold text-gray-900">Lead Details</h3>
          <div className="flex items-center gap-3">
            <button
              onClick={onEdit}
              className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition"
            >
              Edit
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-800 rounded-full transition"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Lead details grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {leadFields.map((field, idx) => (
            <div
              key={idx}
              className={`${field.full ? "sm:col-span-2" : ""} flex flex-col`}
            >
              <h4 className="text-xs text-gray-400 uppercase tracking-wide">
                {field.label}
              </h4>
              <p className="mt-1 text-gray-900 font-medium break-words">
                {field.value || "-"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


