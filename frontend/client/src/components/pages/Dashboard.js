import React from 'react';

import '../scripts/dashboard.css';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className='dashboard-container'>
                <div className='dashboard-card'>
                    <NavLink to='/adminstration' >
                        <h1>Predict Disease</h1>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Dashboard
