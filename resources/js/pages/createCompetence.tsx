import { router } from '@inertiajs/react';
import { useState } from 'react';

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
        router.get('/');
    };

    return (
        <div className="mx-auto mt-20 max-w-xl rounded-xl bg-white p-10 shadow-lg">
            <h2 className="mb-8 text-center text-3xl font-bold text-cyan-700">Créer une nouvelle compétence</h2>

            <form onSubmit={ajouter} className="space-y-6">
                <div>
                    <label className="block font-semibold">Matière</label>
                    <input
                        type="text"
                        name="matiere"
                        value={values.matiere}
                        placeholder="nouvelle compétence"

                        onChange={changement}
                        className="mt-2 w-full rounded border border-cyan-400 p-3 text-black focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
                    />
                </div>

                <input
                    type="text"
                    name="niveau"
                    value={values.niveau}
                    onChange={changement}
                    placeholder="ex : 80"
                    className="mt-2 w-full rounded border border-cyan-400 p-3 text-black focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
                />

                <div className="text-center">
                    <button type="submit" className="rounded bg-cyan-600 px-6 py-3 text-white transition hover:bg-cyan-700">
                        Créer
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateCompetence;
