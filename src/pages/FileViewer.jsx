import { useParams } from 'react-router-dom';

function FileViewer() {
  const { id } = useParams();
  // Simulation de récupération de type de fichier
  const mockFiles = {
    1: { name: 'Document.pdf', type: 'pdf' },
    2: { name: 'Musique.mp3', type: 'audio' },
    3: { name: 'Film.mp4', type: 'video' },
    4: { name: 'Texte.txt', type: 'text' },
  };
  const file = mockFiles[id];

  if (!file) return <p>Fichier introuvable.</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Lecture : {file.name}</h2>
      {file.type === 'text' && (
        <textarea className="w-full h-64 border p-2" defaultValue="Contenu du fichier texte..." readOnly />
      )}
      {file.type === 'audio' && (
        <audio controls src="/mock/Musique.mp3" className="w-full" />
      )}
      {file.type === 'video' && (
        <video controls src="/mock/Film.mp4" className="w-full" />
      )}
      {file.type === 'pdf' && (
        <iframe src="/mock/Document.pdf" className="w-full h-96" title="PDF Viewer"></iframe>
      )}
    </div>
  );
}

export default FileViewer;
