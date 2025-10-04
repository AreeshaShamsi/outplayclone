import { Camera, User } from 'lucide-react';
import { useState } from 'react';
import TwoColumnSidebar from '../components/Sidebar';

function CreateLeadPage() {
  const [profileImage, setProfileImage] = useState(null);

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

  return (
    <div className="min-h-screen bg-gray-50">
         <TwoColumnSidebar />
      {/* Main Content */}
      <main className="lg:ml-80 ml-0">
        {/* Header */}
       <div className="bg-white text-black  px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
  <h1 className="text-lg font-semibold sm:text-xl ">Create Lead</h1>
  <a href="#" className="text-black-300 text-sm hover:underline mt-2 sm:mt-0">
    Edit Page Layout
  </a>
</div>


        {/* Form Content */}
        <div className="p-4 sm:p-6 max-w-7xl mx-auto">
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
              {/* Lead Owner */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-32 flex-shrink-0">Lead Owner</label>
                <select className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm">
                  <option>Areesha shamsi</option>
                </select>
              </div>

              {/* Company */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-32 flex-shrink-0">Company</label>
                <input type="text" className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm" />
              </div>

              {/* First Name */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-32 flex-shrink-0">First Name</label>
                <div className="flex flex-1 gap-2">
                  <select className="w-24 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm">
                    <option>-None-</option>
                  </select>
                  <input type="text" className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm" />
                </div>
              </div>

              {/* Last Name */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-32 flex-shrink-0">Last Name</label>
                <input type="text" className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm" />
              </div>

              {/* Title */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-32 flex-shrink-0">Title</label>
                <input type="text" className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm" />
              </div>

              {/* Email */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-32 flex-shrink-0">Email</label>
                <input type="email" className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm" />
              </div>

              {/* Phone */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-32 flex-shrink-0">Phone</label>
                <input type="tel" className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm" />
              </div>

              {/* Fax */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-32 flex-shrink-0">Fax</label>
                <input type="tel" className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm" />
              </div>

              {/* Mobile */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-32 flex-shrink-0">Mobile</label>
                <input type="tel" className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm" />
              </div>

              {/* Website */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-32 flex-shrink-0">Website</label>
                <input type="url" className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm" />
              </div>

              {/* Lead Source */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-32 flex-shrink-0">Lead Source</label>
                <select className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm">
                  <option>-None-</option>
                </select>
              </div>

              {/* Lead Status */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-32 flex-shrink-0">Lead Status</label>
                <select className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm">
                  <option>-None-</option>
                </select>
              </div>

              {/* Industry */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-32 flex-shrink-0">Industry</label>
                <select className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm">
                  <option>-None-</option>
                </select>
              </div>

              {/* No. of Employees */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-32 flex-shrink-0">No. of Employees</label>
                <input type="number" className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm" />
              </div>

              {/* Annual Revenue */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-32 flex-shrink-0">Annual Revenue</label>
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-2.5 text-gray-500 text-sm">$</span>
                  <input type="text" className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-32 flex-shrink-0">Rating</label>
                <select className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm">
                  <option>-None-</option>
                </select>
              </div>

              {/* Description - Full Width */}
              <div className="lg:col-span-2 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-32 flex-shrink-0 sm:pt-2">Description</label>
                <textarea className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-32 resize-none text-sm" placeholder="Enter lead description..."></textarea>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Address Information</h2>
            
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {/* Address */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-48 flex-shrink-0 sm:pt-2">Address</label>
                <textarea className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-24 text-sm"></textarea>
              </div>

              {/* Country / Region */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-48 flex-shrink-0">Country / Region</label>
                <select className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm">
                  <option>-None-</option>
                </select>
              </div>

              {/* Flat / House No. */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-48 flex-shrink-0">Flat / House No. / Building / Apartment Name</label>
                <input type="text" className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm" />
              </div>

              {/* Street Address */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-48 flex-shrink-0">Street Address</label>
                <input type="text" className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm" />
              </div>

              {/* City */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-48 flex-shrink-0">City</label>
                <input type="text" className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm" />
              </div>

              {/* State / Province */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-48 flex-shrink-0">State / Province</label>
                <select className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm">
                  <option>-None-</option>
                </select>
              </div>

              {/* Zip / Postal Code */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-gray-700 text-sm font-medium sm:font-normal sm:w-48 flex-shrink-0">Zip / Postal Code</label>
                <input type="text" className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm" />
              </div>

              

              {/* Clear All Button */}
              <div className="flex justify-end">
                <button className="text-blue-600 text-sm hover:underline">Clear All</button>
              </div>
            </div>
          </div>

           
             

              

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:justify-end">
            <button className="w-full sm:w-auto px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium">Cancel</button>
            <button className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium">Save</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CreateLeadPage;