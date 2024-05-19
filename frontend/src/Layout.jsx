import { Outlet, NavLink } from 'react-router-dom';
import React from 'react';

export const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/listBlocks'>List Blocks</NavLink>
          </li>
          <li>
            <NavLink to='/getBlock'>Get Block</NavLink>
          </li>
          <li>
            <NavLink to='/transactions'>Transactions</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
