import React from 'react';

function Certificates() {
  return (
    <div className="p-10 min-h-screen bg-[#0d1117] text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8">Certificates</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl w-full">
        {/* Transcript */}
        <a href="/public/transcrip.pdf" target="_blank" rel="noopener noreferrer">
          <div className="bg-gray-800 hover:bg-gray-700 p-4 rounded-xl shadow-xl text-center transition duration-300">
            <img src="/transcrip.jpg" alt="Transcript" className="w-full h-48 object-cover rounded-md mb-3" />
            <p className="text-lg">Transcript</p>
          </div>
        </a>

        {/* Magshimim Certificate */}
        <a href="/Magshimim.jpg" target="_blank" rel="noopener noreferrer">
          <div className="bg-gray-800 hover:bg-gray-700 p-4 rounded-xl shadow-xl text-center transition duration-300">
            <img src="/Magshimim.jpg" alt="Magshimim Certificate" className="w-full h-48 object-cover rounded-md mb-3" />
            <p className="text-lg">Magshimim Certificate</p>
          </div>
        </a>

        {/* Future Degree */}
        <div className="bg-gray-800 p-4 rounded-xl shadow-xl text-center flex flex-col justify-center items-center">
          <div className="w-full h-48 bg-gray-600 rounded-md flex items-center justify-center text-gray-300">
            <span className="text-xl">Coming Soon</span>
          </div>
          <p className="text-lg mt-3">Bachelor's Degree – 09/2025</p>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
