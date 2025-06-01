import { useParams } from 'react-router-dom';
import { useState } from 'react';

function SharePage() {
  const { id } = useParams();
  const [access, setAccess] = useState("read");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Fichier à partager:", fileName);
    console.log("Permission:", access);
    // TODO: envoyer les infos au backend
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Partager un fichier</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>

        {/* Ajouter un fichier */}
        <div>
          <label className="block font-medium mb-1">Ajouter un fichier</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full border border-gray-300 p-2 rounded"
          />
          {fileName && <p className="text-sm text-gray-600 mt-1">Fichier sélectionné : <strong>{fileName}</strong></p>}
        </div>

        {/* Droits d'accès */}
        <div>
          <label className="block font-medium mb-1">Droits d'accès</label>
          <select
            value={access}
            onChange={(e) => setAccess(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="read">Lecture seule</option>
            <option value="read-write">Lecture et écriture</option>
            <option value="download">Téléchargement</option>
          </select>
        </div>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
          
          <button
            type="button"
            className="bg-green-600 text-white px-4 py-2 mt-3 sm:mt-0 rounded hover:bg-green-700 w-full sm:w-auto"
            onClick={() => alert('Fichier partagé !')}
          >
            Partager
          </button>
        </div>
      </form>
    </div>
  );
}

export default SharePage;
