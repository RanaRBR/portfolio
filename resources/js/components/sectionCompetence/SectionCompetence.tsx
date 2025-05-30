import { Link, router } from '@inertiajs/react';
import { FaPencilAlt } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

function SectionCompetence({ competences }) {
    const spanColors = [
        'bg-blue-600',
        'bg-blue-500',
        'bg-blue-400',
        'bg-blue-300',
        'bg-blue-200',
        'bg-green-200',
        'bg-green-300',
        'bg-green-400',
        'bg-green-500',
        'bg-green-600',
    ];

    const Supprimer = (id) => {
        router.delete(`/delete/competence/${id}`, {
            onSuccess: () => router.visit('#competences'),
            onError: () => alert('Erreur lors de la suppression.'),
        });
    };

    return (
        <div id="competences" className="m-10 mx-auto mt-55 rounded-xl bg-cyan-100 p-10 sm:p-16 lg:p-24">
            <h2 className="mb-10 text-center text-5xl text-black" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                Mes compétences
            </h2>

            <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6">
                {competences.map((competence, index) => (
                    <div key={index} className="relative flex flex-col rounded-xl bg-[#1b2042] px-6 py-12 text-slate-200" style={{ width: '45%' }}>
                        <button
                            className="absolute top-4 right-4 text-xl text-amber-400 hover:text-amber-600"
                            onClick={() => Supprimer(competence.id)}
                        >
                            <ImCross className='cursor-pointer' />
                        </button>

                        <Link
                            href={`/edit/competence/${competence.id}`}
                            className="absolute top-4 right-14 text-xl text-amber-400 hover:text-amber-600"
                        >
                            <FaPencilAlt />
                        </Link>

                        <h3 className="mb-2 font-serif text-2xl text-amber-400">{competence.matiere}</h3>
                        <p className="mb-6 font-bold">{competence.niveau}%</p>

                        <div className="mb-6 flex gap-2">
                            {spanColors.map((color, i) => (
                                <span
                                    key={i}
                                    className={`mb-2 h-[15px] flex-1 rounded-xl ${i < Math.round(competence.niveau / 10) ? spanColors[i] : 'bg-black'}`}
                                ></span>
                            ))}
                        </div>

                        {/* <Link
                                href={`/create/competence/${competence.id}`}
                                className="inline-flex h-12 w-40 cursor-pointer items-center justify-center rounded-lg bg-cyan-600 px-6 py-4 text-lg font-medium text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-300 focus:outline-none dark:focus:ring-cyan-800"
                            >
                                Ajouter
                            </Link> */}

                        <div className="mt-6 flex justify-end"></div>
                    </div>
                ))}
            </div>
            <div className="mt-10 flex justify-center">
                <Link
                    href="/create/competence"
                    className="flex h-12 w-40 items-center justify-center rounded-lg bg-gray-700 text-lg font-medium text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-300 focus:outline-none"
                >
                    Ajouter
                </Link>
            </div>
        </div>
    );
}

export default SectionCompetence;
