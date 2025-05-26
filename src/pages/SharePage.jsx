import { useParams } from 'react-router-dom';

function SharePage() {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Partager le fichier #{id}</h2>
      <form className="space-y-4">
        <div>
          <label className="block font-medium">Lien de partage</label>
          <input type="text" readOnly value={`https://legiondrive.com/share/${id}`} className="w-full border p-2" />
        </div>
        <div>
          <label className="block font-medium">Droits d'accès</label>
          <select className="w-full border p-2">
            <option value="read">Lecture seule</option>
            <option value="read-write">Lecture et écriture</option>
            <option value="download">Téléchargement</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Enregistrer</button>
      </form>
    </div>
  );
}

export default SharePage;
