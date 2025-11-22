import React, { useState } from "react";
import { UserRoundPen } from "lucide-react";
// import PopModal from "../../../custom/PopModal";
import { ProfilePageData } from "../../ProfileDetails/ProfilePageData";
import { useNavigate } from "react-router-dom";


const Contacts = () => {
  const navigate = useNavigate()
  const FilteredData = ProfilePageData.slice(0, 5)
  // const { id } = useParams();
  return (
    <div className="w-[280px] max-h-full overflow-y-auto bg-white border-l border-gray-200">

      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <p className="font-mono font-bold text-xl text-slate-800">Contacts</p>
          <UserRoundPen className="text-gray-600 cursor-pointer hover:text-[#0CAF60] transition-colors" size={20} />
        </div>

        {/* Contact List */}
        <div className="flex flex-col gap-2">
          {FilteredData.map((contact) => (
            <div
              key={contact.id}
              onClick={() => setProfileDetails(contact.id)}
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0CAF60] to-green-400 flex items-center justify-center text-white font-bold shadow-sm">
                {contact.name.charAt(0)}
              </div>

              <p onClick={() => navigate(`/message/${contact.id}`)} className="font-mono font-semibold text-base text-slate-800">
                {contact.name} 


                
              </p>
            </div>
          ))}
        </div>
        {/* {profileDetails && <PopModal Component={<ProfileDetails profileId={profileDetails} />} onCancel={()=>setProfileDetails(null)} heading={"Profile Details"} />} */}
      </div>
    </div>
  );
};

export default Contacts;
