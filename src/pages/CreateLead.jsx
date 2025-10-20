import { Camera, User } from 'lucide-react';
import { useState } from 'react';
import TwoColumnSidebar from '../components/Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateLeadPage() {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    name: 'Areesha Shamsi', // Lead Owner
    company: '',
    first_name: '',
    last_name: '',
    title: '',
    email: '',
    phone: '',
    website: '',
    lead_source: '',
    lead_status: '',
    industry: '',
    num_employees: '',
    annual_revenue: '',
    rating: '',
    description: '',
    address: '',
    country: '',
    flat_house: '',
    street_address: '',
    city: '',
    state: '',
    zip: ''
  });

  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/leads/create', formData);
      alert(response.data.message);
      setFormData({
        name: 'Areesha Shamsi',
        company: '',
        first_name: '',
        last_name: '',
        title: '',
        email: '',
        phone: '',
        website: '',
        lead_source: '',
        lead_status: '',
        industry: '',
        num_employees: '',
        annual_revenue: '',
        rating: '',
        description: '',
        address: '',
        country: '',
        flat_house: '',
        street_address: '',
        city: '',
        state: '',
        zip: ''
      });
      setProfileImage(null);
      navigate('/leads');
    } catch (error) {
      console.error('Create Lead Error:', error);
      alert('❌ Failed to create lead. Check console for details.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TwoColumnSidebar />
      <main className="lg:ml-80 ml-0 p-4">
        <div className="bg-white px-4 py-4 flex justify-center items-center shadow-sm rounded-md">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Create Lead</h1>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6 max-w-5xl mx-auto space-y-6">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <input
                type="file"
                id="profile-upload"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <label
                htmlFor="profile-upload"
                className="w-24 h-24 rounded-full bg-gray-200 border-4 border-white shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-300 transition"
              >
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-full" />
                ) : (
                  <User size={40} className="text-gray-400" />
                )}
              </label>
              <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
                <Camera size={16} className="text-white" />
              </div>
            </div>
          </div>

          {/* Lead Info */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Lead Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Lead Owner', name: 'name' },
                { label: 'Company', name: 'company' },
                { label: 'First Name', name: 'first_name' },
                { label: 'Last Name', name: 'last_name' },
                { label: 'Title', name: 'title' },
                { label: 'Email', name: 'email', type: 'email' },
                { label: 'Phone', name: 'phone' },
                { label: 'Website', name: 'website' },
                { label: 'Lead Source', name: 'lead_source' },
                { label: 'Lead Status', name: 'lead_status' },
                { label: 'Industry', name: 'industry' },
                { label: 'No. of Employees', name: 'num_employees', type: 'number' },
                { label: 'Annual Revenue', name: 'annual_revenue' },
                { label: 'Rating', name: 'rating' },
              ].map((field) => (
                <div key={field.name} className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">{field.label}</label>
                  <input
                    type={field.type || 'text'}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-purple-500 focus:border-purple-500 text-sm"
                  />
                </div>
              ))}

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-purple-500 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Address Info */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Address Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Address', name: 'address' },
                { label: 'Country', name: 'country' },
                { label: 'House No.', name: 'flat_house' },
                { label: 'Street Address', name: 'street_address' },
                { label: 'City', name: 'city' },
                { label: 'State', name: 'state' },
                { label: 'ZIP', name: 'zip' },
              ].map((field) => (
                <div key={field.name} className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">{field.label}</label>
                  <input
                    type="text"
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-purple-500 text-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              type="button"
              onClick={() => navigate('/leads')}
              className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#6b2348] text-white rounded-md hover:bg-[#5b1440] text-sm"
            >
              Save
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default CreateLeadPage;
