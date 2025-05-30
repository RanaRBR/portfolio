import { useState } from 'react';
import { router } from '@inertiajs/react';

function EditContact({ contact }) {
  const [values, setValues] = useState({
    telephone: contact.telephone,
    mail: contact.mail,
    localisation: contact.localisation,
    about_id: 1,
  });

  const changer = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const soumettre = (e) => {
    e.preventDefault();
    router.put(`/update/contact/${contact.id}`, values, {
      onSuccess: () => {
        router.get('/#contact');
      },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      <form
        onSubmit={soumettre}
        className="w-full max-w-2xl rounded-xl border border-cyan-600 bg-gray-900 p-10 shadow-lg"
      >
        <h2 className="mb-8 text-center text-3xl font-bold text-amber-500">
          Modifier mes coordonnées
        </h2>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="mb-1 block text-gray-300 font-bold text-lg">Téléphone</label>
            <input
              type="text"
              name="telephone"
              value={values.telephone}
              onChange={changer}
              className="w-full rounded-md border border-cyan-500 bg-gray-800 px-4 py-2 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
              placeholder="Numéro de téléphone"
            />
          </div>

          <div>
            <label className="mb-1 block text-gray-300 font-bold text-lg">Email</label>
            <input
              type="email"
              name="mail"
              value={values.mail}
              onChange={changer}
              className="w-full rounded-md border border-cyan-500 bg-gray-800 px-4 py-2 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
              placeholder="Adresse e-mail"
            />
          </div>

          <div>
            <label className="mb-1 block text-gray-300 font-bold text-lg">Localisation (URL Google Maps)</label>
            <input
              type="text"
              name="localisation"
              value={values.localisation}
              onChange={changer}
              className="w-full rounded-md border border-cyan-500 bg-gray-800 px-4 py-2 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
              placeholder="https://maps.google.com/..."
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            type="submit"
            className="cursor-pointer rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition-all hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-300 focus:outline-none"
          >
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditContact;
