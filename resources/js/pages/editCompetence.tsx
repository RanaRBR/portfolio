import { useState } from 'react';
import { router } from '@inertiajs/react';


function EditCompetence({ competence }) {
    const [values, setValues] = useState({
        matiere: competence.matiere,
        niveau: competence.niveau,
        about_id: 1
    });

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(`/update/competence/${competence.id}`, values);
        router.get('/#competences')
    };

    return (
        <div className="max-w-xl mx-auto mt-20 bg-white p-10 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8 text-cyan-700">Modifier une compétence</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block font-semibold">Matière</label>
                    <input
                        type="text"
                        name="matiere"
                        value={values.matiere}
                        onChange={handleChange}
                        className="w-full mt-2 border border-cyan-400 focus:border-cyan-600 focus:outline-none p-3 rounded focus:ring-2 focus:ring-cyan-600 text-black"
                    />
                </div>

                <div>
                    <label className="block font-semibold">Niveau (%)</label>
                    <input
                        type="text"
                        name="niveau"
                        value={values.niveau}
                        onChange={handleChange}
                        placeholder="ex : 80"
                        className="w-full mt-2 border border-cyan-400 focus:border-cyan-600 focus:outline-none p-3 rounded focus:ring-2 focus:ring-cyan-600 text-black"
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-cyan-600 text-white px-6 py-3 rounded hover:bg-cyan-700 transition"
                    >
                        Enregistrer
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditCompetence;
