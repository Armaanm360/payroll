import React from 'react';
import SidebarLayout from '../Navigation/SidebarLayout';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <SidebarLayout></SidebarLayout>
      <div className='myMainLayoutMargin' style={{ marginLeft:'280px',marginRight:'10px'}}>
        <Outlet>
        </Outlet>
      </div>

    </div>
  );
};

export default Main;