import './index.css';
import { Axios } from 'axios';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Error } from './components/404';
import { Index } from './components/index';
import { Navbar } from './components/navbar';
import { Login } from './components/auth/login';
import { Register } from './components/auth/register';
import Dashboard from './components/admin/dashboard';
import Task from './components/admin/task';
import Test from './components/test';

function App() {
  return (

    <div className="App">
      <Router>
        <Content />
      </Router>
    </div>
  );
}

function Content() {
  const location = useLocation();

  // Check if the current path matches the admin dashboard path
  const isAdminDashboard = location.pathname.includes('/admin/dashboard');
  const isAdminTask = location.pathname.includes('/admin/task');

  return (
    <>
      {!isAdminDashboard && !isAdminTask && <Navbar />}

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Admin Area */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/task" element={<Task />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
