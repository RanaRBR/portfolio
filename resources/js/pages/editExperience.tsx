import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function EditExperience({ experience }) {
    
    const [values, setValues] = useState({
        lieu: experience.lieu,
        formation: experience.formation,
        description: experience.description,
        date: experience.date,
        about_id: 1
    });

    const modifier = (e) => {
        e.preventDefault();
        router.put(`/update/experience/${experience.id}`, values);
        router.get('/');
    };


    const supprimer = (e) => {
        e.preventDefault();
        router.delete(`/delete/experience/${experience.id}`, {
            onSuccess: () => {
                router.get('/');
            },
            onError: () => {
                alert("Erreur lors de la suppression.");
            },
        });
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-black p-4">

            <form onSubmit={modifier} className="w-full max-w-2xl rounded-xl border border-cyan-600 bg-gray-900 p-10 shadow-lg">
                <h2 className="mb-8 text-center text-3xl font-bold text-amber-500">Modifier l'expérience</h2>

                <div className="grid grid-cols-1 gap-6">
                    <div>
                        <label className="mb-1 block text-gray-300 font-bold text-lg">Lieu</label>
                        <input
                            type="text"
                            name="lieu"
                            value={values.lieu}
                            onChange={(e) => setValues({ ...values, lieu: e.target.value })}
                            className="w-full rounded-md border border-cyan-500 bg-gray-800 px-4 py-2 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
                            placeholder="Entrez l'entreprise"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-gray-300 font-bold text-lg">Formation</label>
                        <input
                            type="text"
                            name="formation"
                            value={values.formation}
                            onChange={(e) => setValues({ ...values, formation: e.target.value })}
                            className="w-full rounded-md border border-cyan-500 bg-gray-800 px-4 py-2 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
                            placeholder="Entrez le nom"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-gray-300 font-bold text-lg">Description</label>
                        <input
                            type="text"
                            name="description"
                            value={values.description}
                            rows="4"
                            onChange={(e) => setValues({ ...values, description: e.target.value })}
                            className="w-full rounded-md border border-cyan-500 bg-gray-800 px-4 py-2 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
                            placeholder="Raconte-nous ton expérience"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-gray-300 font-bold text-lg">Date</label>
                        <textarea
                            name="date"
                            value={values.date}
                            onChange={(e) => setValues({ ...values, date: e.target.value })}
                            className="w-full resize-none rounded-md border border-cyan-500 bg-gray-800 px-4 py-2 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
                            placeholder="Parle un peu de toi..."
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


                    <button
                        onClick={supprimer}
                        className="cursor-pointer rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-all hover:bg-amber-700 focus:ring-2 focus:ring-amber-300 focus:outline-none"
                    >
                        Supprimer
                    </button>
                </div>
            </form>
        </div>
    );
}
