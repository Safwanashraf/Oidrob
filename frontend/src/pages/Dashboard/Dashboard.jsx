import React from 'react';
import SidebarOrganization from '../../components/Navbar/Sidebar/SidebarOrganization.jsx';
import SidebarUsers from '../../components/Navbar/Sidebar/SidebarUsers.jsx';
import SideTools from '../../components/Navbar/SideTools.jsx';
import Navbar from '../../components/Navbar/Navbar';
import TaskTable from '../../components/TaskTable/TaskTable';

const Dashboard = () => {
  return (
    <div className='bg-gray-100'>
      <div className='dashboard-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* if(role===user){
          <SidebarUsers />
        } else {
          <SidebarOrganization />
        } */}
        <SidebarOrganization />
      </div>
    </div>
  );
};

export default Dashboard;
