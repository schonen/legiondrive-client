import React from 'react';

function Dashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Bienvenue, John Doe</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Recherche..."
          className="p-2 border rounded w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Types de fichiers</h2>
          <p>Documents : 25</p>
          <p>Images : 10</p>
          <p>Vidéos : 5</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Activité récente</h2>
          <ul>
            <li>Téléchargement : rapport (2023-05-15)</li>
            <li>Partage : budgets.docx</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Fichiers partagés</h2>
          <ul>
            <li>Projet : budget.xlsx (partagé avec Alice)</li>
            <li>Document : rapport.pdf (partagé avec Bob)</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Statistiques d'utilisation</h2>
          <p>Utilisation totale : 75%</p>
          <p>Limite : 100 Go</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;