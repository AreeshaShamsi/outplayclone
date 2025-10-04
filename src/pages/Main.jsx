// src/pages/Home.jsx
import React from "react";

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h1 className="text-2xl font-bold">Welcome to CT CRM</h1>
        <p className="text-gray-600 mt-2">Your dashboard overview and quick insights.</p>
      </div>

      {/* Quick stats / cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Leads</h2>
          <p className="text-2xl font-bold mt-2">120</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Deals</h2>
          <p className="text-2xl font-bold mt-2">45</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Tasks</h2>
          <p className="text-2xl font-bold mt-2">32</p>
        </div>
      </div>

      {/* Recent activity table */}
      <div className="bg-white rounded-lg p-4 shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Name</th>
              <th className="py-2">Type</th>
              <th className="py-2">Date</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-2">John Doe</td>
              <td className="py-2">Lead</td>
              <td className="py-2">2025-10-01</td>
              <td className="py-2">Pending</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-2">Acme Corp</td>
              <td className="py-2">Deal</td>
              <td className="py-2">2025-09-30</td>
              <td className="py-2">Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
