import { router } from "@inertiajs/react"
import { useState } from "react"

function EditA({ about }) {
    const [values, setValues] = useState({
        prénom: about.prénom,
        nom: about.nom,
        email: about.email,
        bio: about.bio,
        photo: about.photo,
    })

    const modifier = (e) => {
        e.preventDefault()
        router.put(`/update/about/${about.id}`, values)
        router.get('/')
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-black p-4">
            <form
                onSubmit={modifier}
                className="w-full max-w-2xl bg-gray-900 p-10 rounded-xl shadow-lg border border-cyan-600"
            >
                <h2 className="text-3xl font-bold text-center mb-8 text-amber-500">
                    Modifier le profil
                </h2>

                <div className="grid grid-cols-1 gap-6">
                    <div>
                        <label className="block text-gray-300 mb-1">Prénom</label>
                        <input
                            type="text"
                            name="prénom"
                            value={values.prénom}
                            onChange={(e) => setValues({ ...values, prénom: e.target.value })}
                            className="w-full px-4 py-2 border border-cyan-500 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                            placeholder="Entrez le prénom"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-1">Nom</label>
                        <input
                            type="text"
                            name="nom"
                            value={values.nom}
                            onChange={(e) => setValues({ ...values, nom: e.target.value })}
                            className="w-full px-4 py-2 border border-cyan-500 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                            placeholder="Entrez le nom"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                            className="w-full px-4 py-2 border border-cyan-500 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                            placeholder="exemple@mail.com"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-1">Biographie</label>
                        <textarea
                            name="bio"
                            rows="4"
                            value={values.bio}
                            onChange={(e) => setValues({ ...values, bio: e.target.value })}
                            className="w-full px-4 py-2 border border-cyan-500 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-600"
                            placeholder="Parle un peu de toi..."
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-1">Photo (nom du fichier)</label>
                        <input
                            type="text"
                            name="photo"
                            value={values.photo}
                            onChange={(e) => setValues({ ...values, photo: e.target.value })}
                            className="w-full px-4 py-2 border border-cyan-500 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                            placeholder="photo.jpg"
                        />
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <button
                        type="submit"
                        className="cursor-pointer px-6 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition-all"
                    >
                        Modifier
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditA
