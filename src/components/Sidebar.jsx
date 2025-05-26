import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-200 p-4 min-h-full">
      <nav className="space-y-2">
        <Link to="/" className="block text-blue-700 font-medium">Tableau de bord</Link>
        <Link to="/fichiers" className="block text-blue-700 font-medium">Fichiers</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;