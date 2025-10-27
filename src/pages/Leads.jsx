import { Search, Filter, MoreVertical, Phone, Download, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import TwoColumnSidebar from '../components/Sidebar';


export default function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [dropdownOpenIdx, setDropdownOpenIdx] = useState(null);

  // Fetch all leads from backend
  const fetchLeads = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/leads');
      setLeads(response.data || []);
    } catch (error) {
      console.error('Failed to fetch leads:', error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Sample static data fallback
  const staticLeads = [
    { id: 1, name: 'Christopher Maclead', company: 'Rangoni Of Florence', email: 'christopher@example.com', phone: '555-555-5555', status: 'invalid' },
    { id: 2, name: 'Carissa Kidman', company: 'Oh My Goodknits Inc', email: 'carissa@example.com', phone: '555-555-5555', status: 'invalid' },
    { id: 3, name: 'James Merced', company: 'Kwik Kopy Printing', email: 'james@example.com', phone: '555-555-5555', status: 'invalid' },
    { id: 4, name: 'Tresa Sweely', company: 'Morlong Associates', email: 'tresa@example.com', phone: '555-555-5555', status: 'invalid' },
    { id: 5, name: 'Felix Hirpara', company: 'Chapman', email: 'felix@example.com', phone: '555-555-5555', status: 'valid' },
  ];

  const displayedLeads = leads.length ? leads : staticLeads;

  const toggleSelectAll = () => {
    if (selectedLeads.length === displayedLeads.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(displayedLeads.map(lead => lead.id || lead._id));
    }
  };

  const toggleSelectLead = (id) => {
    setSelectedLeads(prev =>
      prev.includes(id) ? prev.filter(lid => lid !== id) : [...prev, id]
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

  const handleDeleteLead = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/leads/delete/${id}`);
      setLeads(prev => prev.filter(l => (l.id || l._id) !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleExport = () => {
  const dataToExport = displayedLeads; // this includes fetched leads or static fallback
  if (!dataToExport || dataToExport.length === 0) {
    alert("No leads to export!");
    return;
  }

  const json = JSON.stringify(dataToExport, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "leads.json";
  link.click();

  URL.revokeObjectURL(url);
};



  return (
    <>
      <div className="flex h-screen bg-gray-50">
        <TwoColumnSidebar />
        <div className="flex-1 flex flex-col min-w-0 lg:ml-79">

          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 flex-shrink-0">
            <div className="flex flex-wrap items-center justify-between gap-3">
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
                  <Filter size={16} className="mr-2" /> Filter
                </button>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
                <button
  onClick={handleExport}
  className="flex items-center px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 whitespace-nowrap text-sm w-full sm:w-auto"
>
  <Download size={16} className="mr-2" /> Export
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
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Lead Name</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Company</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Email</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Phone</th>
                      <th className="w-10 px-4 py-2"></th> {/* Dropdown last */}
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200">
                    {displayedLeads.map((lead, idx) => (
                      <tr key={lead._id || lead.id || idx} className={`hover:bg-gray-50 cursor-pointer ${lead.featured ? 'bg-purple-50' : ''}`}>

                        {/* Checkbox */}
                        <td className="px-4 py-2">
                          <input
                            type="checkbox"
                            checked={selectedLeads.includes(lead.id || lead._id)}
                            onChange={(e) => { e.stopPropagation(); toggleSelectLead(lead.id || lead._id); }}
                            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                          />
                        </td>

                        {/* Lead details */}
                        <td className="px-4 py-2 whitespace-nowrap font-medium text-gray-900">{lead.name}</td>
                        <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{lead.company}</td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <span className={`text-sm ${lead.status === 'invalid' ? 'text-red-600' : 'text-gray-700'}`}>{lead.email}</span>
                        </td>
                        <td className="px-4 py-2 text-gray-700 whitespace-nowrap flex items-center">
                          {lead.phone}<Phone size={14} className="ml-1 text-gray-400" />
                        </td>

                        {/* Dropdown */}
                        <td className="px-4 py-2 relative">
                          <div className="flex justify-end">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setDropdownOpenIdx(dropdownOpenIdx === idx ? null : idx);
                              }}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <MoreVertical size={16} />
                            </button>
                          </div>

                          {dropdownOpenIdx === idx && (
                            <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded shadow-lg z-10">
                              <button
                                onClick={(e) => { e.stopPropagation(); openLead(lead); setDropdownOpenIdx(null); }}
                                className="w-full text-left px-3 py-1 text-sm hover:bg-gray-100"
                              >
                                Edit
                              </button>
                              <button
                                onClick={(e) => { e.stopPropagation(); handleDeleteLead(lead.id || lead._id); setDropdownOpenIdx(null); }}
                                className="w-full text-left px-3 py-1 text-sm text-red-500 hover:bg-gray-100"
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Details Modal */}
      <LeadDetailsModal lead={selectedLead} open={modalOpen} onClose={closeLead} onEdit={(updatedLead) => {
        setLeads(prev => prev.map(l => (l.id === updatedLead.id ? updatedLead : l)));
      }} />
    </>
  );
}

// Lead Details Modal Component
function LeadDetailsModal({ lead, open, onClose, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedLead, setEditedLead] = useState({});

  useEffect(() => {
    if (lead) {
      setEditedLead({ ...lead });
      setIsEditing(false);
    }
  }, [lead]);

  if (!open || !lead) return null;

  const handleInputChange = (key, value) => setEditedLead(prev => ({ ...prev, [key]: value }));

  const handleSave = async () => {
    try {
      const id = lead.id || lead._id;
      const updatedData = {};

      leadFields.forEach(field => {
        if (editedLead[field.key] !== lead[field.key]) {
          updatedData[field.key] = editedLead[field.key];
        }
      });

      if (Object.keys(updatedData).length === 0) return setIsEditing(false);

      await axios.put(`http://localhost:5000/api/leads/update/${id}`, updatedData);
      onEdit({ ...lead, ...updatedData });
      setIsEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  const leadFields = [
    { label: "Lead Owner", key: "name" },
    { label: "Company", key: "company" },
    { label: "First Name", key: "first_name" },
    { label: "Last Name", key: "last_name" },
    { label: "Title", key: "title" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "Website", key: "website" },
    { label: "Lead Source", key: "lead_source" },
    { label: "Lead Status", key: "lead_status" },
    { label: "Industry", key: "industry" },
    { label: "Employees", key: "num_employees" },
    { label: "Revenue", key: "annual_revenue" },
    { label: "Rating", key: "rating" },
    { label: "Description", key: "description" },
    { label: "Address", key: "address" },
    { label: "Country", key: "country" },
    { label: "House No", key: "flat_house" },
    { label: "Street", key: "street_address" },
    { label: "City", key: "city" },
    { label: "State", key: "state" },
    { label: "ZIP", key: "zip" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-6 z-60 overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-3">
          <h3 className="text-2xl font-semibold text-gray-900">Lead Details</h3>
          <div className="flex items-center gap-3">
            {!isEditing ? (
              <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-[#d52c7b] text-white rounded-lg">Edit</button>
            ) : (
              <>
                <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded-lg">Save</button>
                <button onClick={() => { setIsEditing(false); setEditedLead({ ...lead }); }} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg">Cancel</button>
              </>
            )}
            <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-800"><X size={20} /></button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {leadFields.map((field, idx) => (
            <div key={idx} className="flex flex-col">
              <h4 className="text-xs text-gray-400 uppercase tracking-wide">{field.label}</h4>
              {!isEditing ? (
                <p>{lead[field.key] || "-"}</p>
              ) : (
                <input
                  type="text"
                  value={editedLead[field.key] || ""}
                  onChange={(e) => handleInputChange(field.key, e.target.value)}
                  className="mt-1 border border-gray-300 rounded-md p-2"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
