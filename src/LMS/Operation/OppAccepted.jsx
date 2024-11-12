import React from 'react'

const OppAccepted = () => {
  const candidateData = [
    { id: 1, name: 'Affan', email: 'example.com', contact: '1234567890', course: 'Computer Science' },
    { id: 2, name: 'Danish', email: 'example.com', contact: '0987654321', course: 'Information Technology' },
    // Add more candidate data here
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">All applied candidate data is here</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">USER NAME</th>
              <th className="py-2 px-4 border-b">EMAIL</th>
              <th className="py-2 px-4 border-b">CONTACT</th>
              <th className="py-2 px-4 border-b">COURSE</th>
              <th className="py-2 px-4 border-b">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {candidateData.map((candidate) => (
              <tr key={candidate.id} className="text-center">
                <td className="py-2 px-4 border-b">{candidate.name}</td>
                <td className="py-2 px-4 border-b">{candidate.email}</td>
                <td className="py-2 px-4 border-b">{candidate.contact}</td>
                <td className="py-2 px-4 border-b">{candidate.course}</td>
                <td className="py-2 px-4 border-b">
                 
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OppAccepted
