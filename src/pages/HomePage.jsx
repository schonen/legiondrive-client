import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png'; 

function HomePage() {
  return (
    <div>
      {/* Navigation */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo LegionDrive" className="h-10 w-auto" />
            <h1 className="text-white text-2xl font-bold">LegionDrive</h1>
          </div>
          <ul className="flex space-x-4">
            <li><a href="#features" className="text-white hover:underline">Services</a></li>
            <li><a href="#testimonials" className="text-white hover:underline">À propos</a></li>
            <li><Link to="/login" className="text-white hover:underline">Connexion</Link></li>
          </ul>
        </div>
      </nav>

      {/* Section d'accueil */}
      <header className="bg-blue-600 text-white text-center py-20">
        <h2 className="text-4xl font-bold">Bienvenue sur LegionDrive</h2>
        <p className="mt-4">La meilleure plateforme pour gérer vos dossiers et fichiers efficacement.</p>
        <Link to="/inscription" className="mt-6 inline-block bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200">
          S'inscrire
        </Link>
      </header>

      {/* Services */}
      <section id="features" className="container mx-auto py-12">
        <h3 className="text-3xl font-bold text-center mb-6">Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h4 className="font-semibold">Synchronisation</h4>
            <p>Accédez à vos fichiers depuis n'importe quel appareil.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="font-semibold">Partage facile</h4>
            <p>Partagez des fichiers avec des liens sécurisés et des permissions.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="font-semibold">Applications mobiles</h4>
            <p>Disponible sur iOS et Android pour un accès mobile.</p>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="testimonials" className="bg-gray-100 py-12">
        <h3 className="text-3xl font-bold text-center mb-6">À propos de nous</h3>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <p>LegionDrive est une plateforme web moderne de gestion de fichiers en ligne, conçue pour offrir une expérience fluide, sécurisée et intuitive.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <p>LegionDrive est une solution de stockage cloud pensée par et pour les utilisateurs. Simple, rapide et accessible.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <p>Gérez, partagez, accédez à vos fichiers où que vous soyez. Sécurité et performance au cœur de notre plateforme.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
