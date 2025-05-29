import { router } from '@inertiajs/react'
import { useState } from 'react'

export default function CreateExperience() {
    const [values, setValues] = useState({
        lieu: '',
        formation: '',
        description: '',
        date: '',
        about_id: 1,
    })

    const ajouter = (e) => {
        e.preventDefault()
        router.post('/post/experience', values)
        router.get('/')
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-black p-4">
            <form
                onSubmit={ajouter}
                className="w-full max-w-2xl rounded-xl border border-cyan-600 bg-gray-900 p-10 shadow-lg"
            >
                <h2 className="mb-8 text-center text-3xl font-bold text-amber-500">
                    Ajouter une expérience
                </h2>

                <div className="grid grid-cols-1 gap-6">
                    <div>
                        <label className="mb-1 block text-gray-300">Lieu</label>
                        <input
                            type="text"
                            name="lieu"
                            value={values.lieu}
                            onChange={(e) =>
                                setValues({ ...values, lieu: e.target.value })
                            }
                            className="w-full rounded-md border border-cyan-500 bg-gray-800 px-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                            placeholder="Entrez le lieu"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-gray-300">Formation</label>
                        <input
                            type="text"
                            name="formation"
                            value={values.formation}
                            onChange={(e) =>
                                setValues({ ...values, formation: e.target.value })
                            }
                            className="w-full rounded-md border border-cyan-500 bg-gray-800 px-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                            placeholder="Entrez la formation"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-gray-300">Description</label>
                        <textarea
                            name="description"
                            value={values.description}
                            onChange={(e) =>
                                setValues({ ...values, description: e.target.value })
                            }
                            rows={6}
                            className="w-full resize-y rounded-md border border-cyan-500 bg-gray-800 px-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                            placeholder="Décris ton expérience ici (max 500 caractères)..."
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-gray-300">Date</label>
                        <input
                            type="text"
                            name="date"
                            value={values.date}
                            onChange={(e) =>
                                setValues({ ...values, date: e.target.value })
                            }
                            className="w-full rounded-md border border-cyan-500 bg-gray-800 px-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                            placeholder="Entrez la date"
                        />
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <button
                        type="submit"
                        className="cursor-pointer rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition-all hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-300"
                    >
                        Ajouter
                    </button>
                </div>
            </form>
        </div>
    )
}
