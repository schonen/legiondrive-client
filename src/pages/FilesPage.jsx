import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FilesPage() {
  const [files, setFiles] = useState([
    { id: 1, name: 'Document.pdf', type: 'pdf' },
    { id: 2, name: 'Musique.mp3', type: 'audio' },
    { id: 3, name: 'Film.mp4', type: 'video' },
    { id: 4, name: 'Texte.txt', type: 'text' },
  ]);
  const navigate = useNavigate();

  const createFile = () => {
    const newName = prompt("Nom du nouveau fichier :");
    if (newName) {
      setFiles([...files, { id: Date.now(), name: newName, type: 'text' }]);
    }
  };

  const renameFile = (id) => {
    const newName = prompt("Nouveau nom :");
    if (newName) {
      setFiles(files.map(f => f.id === id ? { ...f, name: newName } : f));
    }
  };

  const openFile = (id) => {
    navigate(`/fichier/${id}`);
  };

  const shareFile = (id) => {
    navigate(`/partage/${id}`);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Mes fichiers</h2>
      <button onClick={createFile} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">+ Nouveau fichier</button>
      <ul className="space-y-2">
        {files.map(file => (
          <li key={file.id} className="flex justify-between items-center p-2 border rounded bg-white">
            <span>{file.name}</span>
            <div className="space-x-2">
              <button onClick={() => openFile(file.id)} className="text-sm text-green-600">Ouvrir</button>
              <button onClick={() => shareFile(file.id)} className="text-sm text-yellow-600">Partager</button>
              <button onClick={() => renameFile(file.id)} className="text-sm text-blue-600">Renommer</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilesPage;