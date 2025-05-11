import React from 'react';
import StartWriting from '../components/StartWriting';
import OfferInsight from '../components/OfferInsight';

export default function LandingPage() {
  return (
    <div className="text-center">
      <div className="">
        <h1 className="text-[120px] font-bold mt-30 text-hologram text-outline">Lucid Log</h1>
        <h2 className="text-[60px] font-bold mb-10 text-hologram text-outline">Journaling that understands you.</h2>
        <StartWriting />
      </div>

      {/* Bottom Centered Box */}
      <div className="flex justify-center w-full mt-10">
        <div className="bg-[#dedede] rounded-2xl w-[650px] h-[300px] flex justify-center items-end">
          <div className="bg-white rounded-2xl h-[275px] w-[600px]">
            <p className="">
              “Im feeling a bit anxious today. There are a lot of things on my plate  
              and I feel like I don’t have time to address them all. I’m feeling a lot
              under pressure to overextend myself to get everything done.”
            </p>
            <p className="text-hologram font-bold">
              How do you think  this pressure to overextend yourself  is affecting
              your well being? 
            </p>
            <p>
              “Honestly not that great. I feel like my sleep schedule is really bad 
              these days because I have to stay up late to get more work done.”
            </p>
            <OfferInsight />
          </div>
        </div>
      </div>
    </div>
  );
}
