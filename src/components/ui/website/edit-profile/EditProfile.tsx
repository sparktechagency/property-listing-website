 "use client"
 import { useState } from "react";
import EditProfileData from "./EditProfileData";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";

 
 const tabs = [
    { id: "1", label: "Edit profile", component: <EditProfileData /> },
    { id: "2", label: "Change password", component: <ChangePassword /> },
    { id: "3", label: "Delete account", component: <DeleteAccount /> },
  ]; 

const EditProfile = () => { 
    const [activeTab, setActiveTab] = useState("1");   
    const handleTabClick = (id: string) => {
        setActiveTab(id);
      }; 

    return (
        <div className=" container py-[60px]">
           
           <div className=" flex items-center justify-center "> 
           <div className="flex lg:flex-row flex-wrap lg:gap-4 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`lg:px-4 px-2 h-[40px] rounded-full font-medium lg:text-sm text-[11px] ${activeTab === tab.id
                    ? "bg-primary text-white"
                    : "bg-[#FFF7EC] text-[#6B6B6B] hover:bg-primary hover:text-white"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div> 
          
           </div> 

           <div className="pt-8 lg:pt-12   ">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
        </div>
    );
};

export default EditProfile; 