import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';
import FilesPage from './pages/FilesPage';
import FileViewer from './pages/FileViewer';
import Login from './pages/Login';
import SharePage from './pages/SharePage';
import Subscription from './pages/Subscription'; 
import Settings from './pages/Settings'; 
import HomePage from './pages/HomePage'; 
import Register from './pages/Register'; 
import Account from './pages/Account';

function AppLayout() {
  const location = useLocation();

  // Définir les routes sans Sidebar
  const noSidebarRoutes = ['/login', '/inscription'];
  const isNoSidebar = noSidebarRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        {!isNoSidebar && <Sidebar />}
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/inscription" element={<Register />} />
            <Route path="/fichiers" element={<FilesPage />} />
            <Route path="/fichier/:id" element={<FileViewer />} />
            <Route path="/account" element={<Account />} />
            <Route path="/tableau" element={<Dashboard />} />
            <Route path="/partage/:id" element={<SharePage />} />
            <Route path="/abonnement" element={<Subscription />} />
            <Route path="/parametres" element={<Settings />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

// Enrobage avec <Router> à la racine
function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
