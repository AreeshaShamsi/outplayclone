import { Camera, User } from 'lucide-react';
import { useState } from 'react';
import TwoColumnSidebar from '../components/Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateLeadPage() {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    leadOwner: 'Areesha Shamsi',
    company: '',
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
    fax: '',
    mobile: '',
    website: '',
    leadSource: '',
    leadStatus: '',
    industry: '',
    employees: '',
    revenue: '',
    rating: '',
    description: '',
    address: '',
    country: '',
    houseNo: '',
    street: '',
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
      const response = await axios.post('http://localhost:5000/api/leads', formData);
      alert(response.data.message); // Lead created successfully
      // Reset form
      setFormData({
        leadOwner: 'Areesha Shamsi',
        company: '',
        firstName: '',
        lastName: '',
        title: '',
        email: '',
        phone: '',
        fax: '',
        mobile: '',
        website: '',
        leadSource: '',
        leadStatus: '',
        industry: '',
        employees: '',
        revenue: '',
        rating: '',
        description: '',
        address: '',
        country: '',
        houseNo: '',
        street: '',
        city: '',
        state: '',
        zip: ''
      });
      setProfileImage(null);
      navigate('/leads'); // Redirect to leads page
    } catch (error) {
      console.error(error);
      alert('Failed to create lead. Check console for details.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TwoColumnSidebar />
      <main className="lg:ml-80 ml-0 p-4">
        <div className="bg-white text-black px-4 sm:px-6 py-6 flex justify-center items-center">
          <h1 className="text-4xl sm:text-md font-bold">Create Lead</h1>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6 max-w-7xl mx-auto">
          {/* Profile Image Upload */}
          <div className="mb-6 sm:mb-8">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24">
              <input
                type="file"
                id="profile-upload"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <label
                htmlFor="profile-upload"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-200 border-4 border-white shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors overflow-hidden"
              >
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User size={32} className="text-gray-400 sm:w-10 sm:h-10" />
                )}
              </label>
              <div className="absolute bottom-0 right-0 w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer shadow-md">
                <Camera size={14} className="text-white sm:w-4 sm:h-4" />
              </div>
            </div>
          </div>

          {/* Lead Information */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
            <h2 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Lead Information</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {[
                { label: 'Lead Owner', name: 'leadOwner', type: 'text' },
                { label: 'Company', name: 'company', type: 'text' },
                { label: 'First Name', name: 'firstName', type: 'text' },
                { label: 'Last Name', name: 'lastName', type: 'text' },
                { label: 'Title', name: 'title', type: 'text' },
                { label: 'Email', name: 'email', type: 'email' },
                { label: 'Phone', name: 'phone', type: 'tel' },
                { label: 'Fax', name: 'fax', type: 'tel' },
                { label: 'Mobile', name: 'mobile', type: 'tel' },
                { label: 'Website', name: 'website', type: 'url' },
                { label: 'Lead Source', name: 'leadSource', type: 'text' },
                { label: 'Lead Status', name: 'leadStatus', type: 'text' },
                { label: 'Industry', name: 'industry', type: 'text' },
                { label: 'No. of Employees', name: 'employees', type: 'number' },
                { label: 'Annual Revenue', name: 'revenue', type: 'text', prefix: '$' },
                { label: 'Rating', name: 'rating', type: 'text' },
              ].map((field) => (
                <div key={field.name} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-32 flex-shrink-0">{field.label}</label>
                  <div className="flex flex-1 relative">
                    {field.prefix && <span className="absolute left-3 top-2.5 text-gray-500 text-sm">{field.prefix}</span>}
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className={`flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm ${field.prefix ? 'pl-8' : ''}`}
                    />
                  </div>
                </div>
              ))}

              {/* Description */}
              <div className="lg:col-span-2 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-32 flex-shrink-0 sm:pt-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-32 resize-none text-sm"
                />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
            <h2 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Address Information</h2>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {[
                { label: 'Address', name: 'address', type: 'textarea', rows: 3 },
                { label: 'Country / Region', name: 'country', type: 'select', options: ['Select Country','USA','India','UK','Canada','Australia'] },
                { label: 'Flat / House No.', name: 'houseNo', type: 'text' },
                { label: 'Street Address', name: 'street', type: 'text' },
                { label: 'City', name: 'city', type: 'text' },
                { label: 'State / Province', name: 'state', type: 'select', options: ['Select State','California','Texas','New York','Florida','Illinois'] },
                { label: 'Zip / Postal Code', name: 'zip', type: 'text' },
              ].map((field) => (
                <div key={field.name} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                  <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-48 flex-shrink-0 sm:pt-2">{field.label}</label>
                  {field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      rows={field.rows || 3}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-24 text-sm"
                    />
                  ) : field.type === 'select' ? (
                    <select
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
                    >
                      {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:justify-end">
            <button type="button" className="w-full sm:w-auto px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium">Cancel</button>
            <button type="submit" className="w-full sm:w-auto px-6 py-2 bg-[#6b2348] text-white rounded hover:bg-[#5b1440] text-sm font-medium">Save</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default CreateLeadPage;
