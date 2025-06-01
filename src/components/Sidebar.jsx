import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-200 p-4 min-h-full">
       
      <nav className="space-y-2">
        <Link to="/account" className="block text-blue-700 font-medium">Mon compte</Link>
        <Link to="/tableau/" className="block text-blue-700 font-medium">Tableau de bord</Link>
        <Link to="/fichiers" className="block text-blue-700 font-medium"> Mes Fichiers</Link>
        <Link to="/partage/:id" className="block text-blue-700 font-medium">Partage</Link>
         <Link to="/abonnement" className="block text-blue-700 font-medium">Abonnements</Link>
        <Link to="/parametres" className="block text-blue-700 font-medium">Paramètres</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;