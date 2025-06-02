import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function EditProjet({ projet }) {
  const [values, setValues] = useState({
    nom: projet.nom,
    lien: projet.lien,
    description: projet.description,
    about_id: 1
  });

  const modifier = (e) => {
    e.preventDefault();
    router.put(`/update/projet/${projet.id}`, values, {
    onSuccess: () => router.visit('/#projets'),
      onError: () => alert('Erreur lors de la mise à jour.'),
    });
  };

 

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      <form
        onSubmit={modifier}
        className="w-full max-w-2xl rounded-xl border border-cyan-600 bg-gray-900 p-10 shadow-lg"
      >
        <h2 className="mb-8 text-center text-3xl font-bold text-amber-500">
          Modifier le projet
        </h2>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="mb-1 block text-gray-300 font-bold text-lg">Nom du projet</label>
            <input
              type="text"
              name="nom"
              value={values.nom}
              onChange={(e) => setValues({ ...values, nom: e.target.value })}
              className="w-full rounded-md border border-cyan-500 bg-gray-800 px-4 py-2 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
              placeholder="Nom du projet"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-gray-300 font-bold text-lg">Lien</label>
            <input
              type="url"
              name="lien"
              value={values.lien}
              onChange={(e) => setValues({ ...values, lien: e.target.value })}
              className="w-full rounded-md border border-cyan-500 bg-gray-800 px-4 py-2 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
              placeholder="https://exemple.com"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-gray-300 font-bold text-lg">Description</label>
            <textarea
              name="description"
              value={values.description}
              onChange={(e) => setValues({ ...values, description: e.target.value })}
              rows="4"
              className="w-full resize-none rounded-md border border-cyan-500 bg-gray-800 px-4 py-2 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
              placeholder="Description du projet"
              required
            />
          </div>
        </div>

        <div className="mt-8 text-center flex justify-center gap-5">
          <button
            type="submit"
            className="cursor-pointer rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition-all hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-300 focus:outline-none"
          >
            Mettre à jour
          </button>
        </div>
      </form>
    </div>
  );
}
