import EditProfile from '@/components/ui/website/edit-profile/EditProfile';
import PrivateProvider from '@/provider/PrivateProvider';
import React from 'react';

const editProfilePage = () => {
    return (
        <div> 
          <PrivateProvider> 
             <EditProfile />
          </PrivateProvider>
        </div>
    );
};

export default editProfilePage;