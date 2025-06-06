import { useEffect, useState } from 'react';
import './Dashboard.css';
import { FaUsers, FaClipboardList, FaBell } from 'react-icons/fa';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData'));
    if (!data) return navigate('/onboarding');
    setUser(data);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    navigate('/onboarding');
  };

  const chartData = [
    { name: 'Mon', progress: 20 },
    { name: 'Tue', progress: 35 },
    { name: 'Wed', progress: 50 },
    { name: 'Thu', progress: 30 },
    { name: 'Fri', progress: 70 },
    { name: 'Sat', progress: 60 },
    { name: 'Sun', progress: 90 },
  ];

  if (!user) return <p>Loading...</p>;

  const isDark = user.theme === 'dark';
  const isGrid = user.layout === 'grid';

  return (
    <div className={`dashboard ${isDark ? 'dark' : ''}`}>
      <div className="dashboard-header">
        <h2>Welcome, {user.name}!</h2>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
      <p>Email: {user.email}</p>
      <p>Company: {user.companyName}</p>

      <div className={`cards ${isGrid ? 'grid-layout' : 'list-layout'}`}>
        <div className="card">
          <FaUsers />
          <p>Team Members</p>
          <h3>12</h3>
        </div>
        <div className="card">
          <FaClipboardList />
          <p>Active Projects</p>
          <h3>5</h3>
        </div>
        <div className="card">
          <FaBell />
          <p>Notifications</p>
          <h3>3</h3>
        </div>
      </div>

      <div className="chart-container">
        <h4>Weekly Progress</h4>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="progress" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
