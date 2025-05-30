import { useState } from 'react';
import { router } from '@inertiajs/react';

function CreateCompetence({ competence = { matiere: '', niveau: '' } }) {
  const [values, setValues] = useState({
    matiere: competence.matiere,
    niveau: competence.niveau,
    about_id: 1,
  });

  const changement = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const ajouter = (e) => {
    e.preventDefault();
    router.post('/post/competence', values);
    router.get('/#competences');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      <form
        onSubmit={ajouter}
        className="w-full max-w-2xl rounded-xl border border-cyan-600 bg-gray-900 p-10 shadow-lg"
      >
        <h2 className="mb-8 text-center text-3xl font-bold text-amber-500">Créer une compétence</h2>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="mb-1 block text-gray-300 font-bold">Matière</label>
            <input
              type="text"
              name="matiere"
              value={values.matiere}
              onChange={changement}
              placeholder="Ex: React, Laravel..."
              className="w-full rounded-md border border-cyan-500 bg-gray-800 px-4 py-2 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-gray-300 font-bold">Niveau (%)</label>
            <input
              type="text"
              name="niveau"
              value={values.niveau}
              onChange={changement}
              placeholder="Ex: 85"
              className="w-full rounded-md border border-cyan-500 bg-gray-800 px-4 py-2 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            type="submit"
            className="cursor-pointer rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition-all hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-300 focus:outline-none"
          >
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateCompetence;
