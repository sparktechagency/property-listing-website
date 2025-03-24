"use client";
import { useEffect, useState } from "react";
import EditProfileData from "./EditProfileData";
import ChangePassword from "./ChangePassword";
import UploadBusiness from "./UploadBusiness";
import { useProfileQuery } from "@/redux/features/auth/authApi";
import ProposalPage from "./ProposalPage";
import ReviewPage from "./ReviewPage";
import ChatPage from "./ChatPage";
import { useSearchParams } from "next/navigation";

const EditProfile = () => { 
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tabParam || "1");
  const { data: profile } = useProfileQuery(undefined);
  const userRole = profile?.role; 

  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const tabs = [
    { id: "1", label: "Edit Profile", component: <EditProfileData /> },
    { id: "2", label: "Change Password", component: <ChangePassword /> },
    { id: "3", label: "Proposal List", component: <ProposalPage /> },
    ...(userRole === "SELLER"
      ? [{ id: "4", label: "Upload Business", component: <UploadBusiness /> }]
      : []),
    { id: "6", label: "Review", component: <ReviewPage /> },
    { id: "7", label: "Chat", component: <ChatPage /> },
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Tabs */}
        <div className="w-full lg:w-1/5 bg-[#f7e9d7] rounded-xl p-5 shadow">
          <div className="flex flex-col gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow"
                    : "bg-white text-[#6B6B6B] hover:bg-primary hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Component Display */}
        <div className="w-full lg:w-4/5 bg-white rounded-xl p-2 shadow">
          {tabs.find((tab) => tab.id === activeTab)?.component}
        </div>
      </div>
    </div>
  );
};

export default EditProfile;