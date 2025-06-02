import { Link, router } from '@inertiajs/react';
import { FaTrashAlt } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';


function SectionProjet({ projets }) {
  const supprimer = (id) => {

    router.delete(`/delete/projet/${id}`, {
      onSuccess: () => router.visit('#projets'),
      onError: () => alert('Erreur lors de la suppression.'),
    });
  };

  return (
    <section id="projets" className="m-10 mx-auto rounded-xl bg-cyan-100 p-10 sm:p-16 lg:p-24 max-w-7xl">
      <h2
        className="mb-10 text-center text-5xl text-black"
        style={{ fontFamily: 'Permanent Marker, cursive' }}
      >
        Mes projets
      </h2>

      <div className="mx-auto flex flex-wrap justify-center gap-8">
        {projets.map((projet) => (
          <div
            key={projet.id}
            className="relative flex flex-col rounded-xl bg-[#1b2042] px-8 py-12 text-slate-200"
            style={{ width: '45%' }}
          >
            <button
              className="absolute top-4 right-4 text-xl text-amber-400 hover:text-amber-600"
              onClick={() => supprimer(projet.id)}
              title="Supprimer le projet"
            >
              <FaTrashAlt className="cursor-pointer" />
            </button>

            <Link
              href={`/edit/projet/${projet.id}`}
              className="absolute top-4 right-14 text-xl text-amber-400 hover:text-amber-600"
              title="Modifier le projet"
            >
            <FaPencilAlt className='cursor-pointer' />
            </Link>

            <h3 className="mb-4 font-serif text-3xl text-amber-400">{projet.nom}</h3>

            <p className="mb-8 font-bold text-gray-300">{projet.description}</p>

            <div className="mt-auto flex justify-end">
              <a
                href={projet.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-40 cursor-pointer items-center justify-center rounded-lg bg-cyan-600 px-6 py-4 text-lg font-medium text-white hover:bg-cyan-700 focus:ring-cyan-300 focus:outline-none dark:focus:ring-cyan-800"
                title="Voir le projet"
              >
                Voir le projet 
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/create/projet"
          className="flex h-12 w-48 items-center justify-center rounded-lg bg-gray-700 text-lg font-medium text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-300 focus:outline-none"
        >
          Ajouter
        </Link>
      </div>
    </section>
  );
}

export default SectionProjet;
