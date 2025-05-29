import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';

export default function SectionContact({ contacts }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const contact = contacts[0];

    const soumettre = (e) => {
        e.preventDefault();
    };

    return (
        <section className="body-font relative overflow-hidden rounded-xl text-gray-600">
            <div id="contact" className="m-10 mx-auto mt-20 rounded-xl bg-cyan-100 p-10 sm:p-16 lg:p-24">
                <h2 className="mb-15 text-center text-5xl text-black" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                    Me contacter
                </h2>

                <div className="container mx-auto flex flex-wrap sm:flex-nowrap">
                    <div className="relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-300 p-10 shadow-xl sm:mr-10 md:w-1/2 lg:w-2/3">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            title="map"
                            src={contact.localisation}
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="relative flex w-full flex-wrap rounded bg-white py-6 shadow-md">
                            <div className="px-6 lg:w-1/2">
                                <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">Adresse</h2>
                                <a
                                    href={contact.localisation}
                                    target="_blank" // signifie que le lien s’ouvrira dans un nouvel onglet
                                    rel="noopener noreferrer" // est là pour la sécurité et la confidentialité notamment quand tu ouvres un lien dans un nouvel onglet avec target="_blank"
                                    className="mt-1 text-sm text-cyan-600 hover:underline"
                                >
                                    Voir sur la carte
                                </a>
                            </div>
                            <div className="mt-4 px-6 lg:mt-0 lg:w-1/2">
                                <Link
                                    href={`/edit/contact/${contact.id}`}
                                    className="absolute top-4 right-8 text-xl text-amber-400 hover:text-amber-600"
                                >
                                    <FaPencilAlt />
                                </Link>
                                <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">Email</h2>
                                <a href={`mailto:${contact.mail}`} className="text-sm leading-relaxed text-cyan-600">
                                    {contact.mail}
                                </a>
                                <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-900">Téléphone</h2>
                                <a href={`tel:${contact.telephone}`} className="text-sm leading-relaxed text-cyan-600">
                                    {contact.telephone}
                                </a>
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={soumettre}
                        className="mt-8 flex w-full flex-col rounded-xl bg-white p-6 shadow-xl md:mt-0 md:ml-auto md:w-1/2 md:py-8 lg:w-1/3"
                    >
                        <h2 className="title-font mb-1 text-lg font-medium text-gray-900">Envoyer un message</h2>
                        <p className="mb-5 text-sm leading-relaxed text-gray-600">Remplir ce formulaire pour m'envoyer un message</p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                                Nom
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-md border border-cyan-500 px-4 py-2 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
                                required
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="text-sm leading-7 text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-md border border-cyan-500 px-4 py-2 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
                                required
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="text-sm leading-7 text-gray-600">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full rounded-md border border-cyan-500 px-4 py-2 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="cursor-pointer rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition-all hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-300 focus:outline-none"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
