import React, { useState } from 'react';
import Logo from '../assets/Logo.png'; 

const MonCompte = () => {
  const [userInfo, setUserInfo] = useState({
    nom: '',
    email: '',
    motDePasse: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour mettre à jour les informations de l'utilisateur
    console.log('Informations mises à jour:', userInfo);
    alert('Vos informations ont été mises à jour avec succès !');
  };

  return (
    <div className="mon-compte">
      <h1>Mon Compte</h1>
      <form onSubmit={handleSubmit} className="compte-form">
        <div className="form-group">
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={userInfo.nom}
            onChange={handleChange}
            required
            placeholder="Entrez votre nom"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            required
            placeholder="Entrez votre email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="motDePasse">Mot de Passe</label>
          <input
            type="password"
            id="motDePasse"
            name="motDePasse"
            value={userInfo.motDePasse}
            onChange={handleChange}
            required
            placeholder="Entrez un nouveau mot de passe"
          />
        </div>
        <button type="submit" className="submit-button">Mettre à jour</button>
      </form>
    </div>
  );
};

export default MonCompte;