import { useState, useEffect } from 'react';
import { Card } from '../../components';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import moment from 'moment';

function Navbar() {

  const date_today = new Date().toISOString().slice(0,10);

  const last_seven_days = moment().subtract(7, 'days').format('YYYY-MM-DD');

  return (
    <div className="navbar">
      <Card className="nav-logo">
        <h2>MetaRail</h2>
        <span>Insights</span>

        <Loader
          className="loader"
          type="Oval"
          width={40}
          height={40}
          color="#36a2eb"
        />
      </Card>

      <Card className="nav-filter">
        <Link to={`/admin/dashboard/&date_from=${date_today}&date_to=${date_today}`}>Today</Link>
        <Link to={`/admin/dashboard/&date_from=${last_seven_days}&date_to=${date_today}`}>Last 7 Days</Link>
        <Link to="/admin/dashboard">Custom</Link>
      </Card>
    </div>
  )
}

export default Navbar;
