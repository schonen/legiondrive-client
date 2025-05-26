import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import FilesPage from './pages/FilesPage';
import FileViewer from './pages/FileViewer';
import Login from './pages/Login';
import SharePage from './pages/SharePage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/fichiers" element={<FilesPage />} />
              <Route path="/fichier/:id" element={<FileViewer />} />
              <Route path="/partage/:id" element={<SharePage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
