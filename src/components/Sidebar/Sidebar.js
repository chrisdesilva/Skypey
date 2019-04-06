import React from 'react';
import User from '../../containers/User/User';
import './Sidebar.css';

const Sidebar = ({ contacts }) => {
  return ( 
    <aside className="Sidebar">
      {contacts.map( (contact, index) => <User key={contact}  user={contact} />)}
    </aside>
  );
};

export default Sidebar;