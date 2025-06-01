import React from 'react';

function Subscription() {
  const handleSubscribe = (plan) => {
    alert(`Vous avez choisi le plan: ${plan}`);
    
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Choisissez votre abonnement</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6 bg-white shadow">
          <h2 className="text-xl font-semibold">Gratuit</h2>
          <p className="text-lg mb-4">0 € / mois</p>
          <p>Accès aux fonctionnalités de base</p>
          <button
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            onClick={() => handleSubscribe('Gratuit')}
          >
            S'abonner
          </button>
        </div>

        <div className="border rounded-lg p-6 bg-white shadow">
          <h2 className="text-xl font-semibold">Plan Prenium</h2>
          <p className="text-lg mb-4">9,99 € / mois</p>
          <p>Accès aux fonctionnalités avancées</p>
          <button
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            onClick={() => handleSubscribe('Plan Standard')}
          >
            S'abonner
          </button>
        </div>

        <div className="border rounded-lg p-6 bg-white shadow">
          <h2 className="text-xl font-semibold">Plan Entreprise</h2>
          <p className="text-lg mb-4">24;99 € / mois</p>
          <p>Accès à toutes les fonctionnalités</p>
          <button
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            onClick={() => handleSubscribe('Plan Premium')}
          >
            S'abonner
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscription;