import DashboardHeader from '@/components/dashboardHeader';
import Sidebar from '@/components/Sidebar';
import React from 'react';

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-screen'>
       <div className='flex justify-between h-full '>
       <Sidebar/>
       <div className='w-full h-full overflow-auto '>
        <DashboardHeader/>
         <div className=' w-10/12 mx-auto'>
         {children}
         </div>
      </div>
       </div>
    </div>
  );
}

export default layout;
