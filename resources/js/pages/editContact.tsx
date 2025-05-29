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
    }
  });
};


  return (
    <div className="max-w-xl mx-auto mt-20 bg-white p-10 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-cyan-700">Modifier mes coordonnées</h2>

      <form onSubmit={soumettre} className="space-y-6">
        <div>
          <label className="block font-semibold">Téléphone</label>
          <input
            type="text"
            name="telephone"
            value={values.telephone}
            onChange={changer}
            className="w-full mt-2 border border-cyan-400 focus:border-cyan-600 focus:outline-none p-3 rounded focus:ring-2 focus:ring-cyan-600 text-black"
          />
        </div>

        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="mail"
            value={values.mail}
            onChange={changer}
            className="w-full mt-2 border border-cyan-400 focus:border-cyan-600 focus:outline-none p-3 rounded focus:ring-2 focus:ring-cyan-600 text-black"
          />
        </div>

        <div>
          <label className="block font-semibold">Adresse / Localisation (URL Google Maps)</label>
          <input
            type="text"
            name="localisation"
            value={values.localisation}
            onChange={changer}
            placeholder="https://maps.google.com/..."
            className="w-full mt-2 border border-cyan-400 focus:border-cyan-600 focus:outline-none p-3 rounded focus:ring-2 focus:ring-cyan-600 text-black"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-cyan-600 text-white px-6 py-3 rounded hover:bg-cyan-700 transition cursor-pointer"
          >
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditContact;
