import React from 'react';
import StartWriting from '../components/StartWriting';

export default function LandingPage() {
  return (
    <div className="text-center">
      <div className="">
        <h1 className="text-[100px] font-bold">Lucid Log</h1>
        <h2 className="text-[40px] font-bold mb-8">Journaling that understands you.</h2>
        <StartWriting />
      </div>

      {/* Bottom Centered Box */}
      <div className="flex justify-center w-full ">
        <div className="bg-[#dedede] rounded-2xl w-[600px] h-[300px] p-4">
          <div className="bg-white rounded-2xl w-full h-full">
            {/* Add content here */}
          </div>
        </div>
      </div>
    </div>
  );
}
