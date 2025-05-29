import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function SectionExperience({ experiences }) {
    const [current, setCurrent] = useState(0);

    const prev = () => {
        setCurrent((current - 1 + experiences.length) % experiences.length);
    };

    const next = () => {
        setCurrent((current + 1) % experiences.length);
    };

    const activeExperience = experiences[current];

    const ImageExperience = (index) => {
        return index === 0 ? '/images/coding.png' : '/images/mdig.png';
    };

    return (
        <>
            <div id="experiences" className="m-10 mx-auto mt-60 rounded-xl bg-cyan-100 p-10 sm:p-16 lg:p-24">
                <h2 className="mb-10 text-center text-5xl text-black" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                    Mes expériences
                </h2>

                <div className="relative block min-h-[19rem] items-center rounded-lg bg-gray-100 shadow-xl md:flex">
                    <div className="relative h-full min-h-[19rem] w-full overflow-hidden rounded-t-lg md:w-2/5 md:rounded-t-none md:rounded-l-lg">
                        <img
                            className="absolute inset-0 h-full w-full object-cover object-center"
                            src={ImageExperience(current)}
                            alt={activeExperience.lieu}
                        />
                        <div className="absolute inset-0 h-full w-full bg-gray-900 opacity-70"></div>
                        <div className="absolute inset-0 flex h-full w-full items-center justify-center fill-current text-3xl font-semibold text-white">
                            {activeExperience.lieu}
                        </div>
                    </div>

                    <div className="flex h-full w-full items-center rounded-lg md:w-3/5">
                        <div className="p-10 md:py-12 md:pr-20 md:pl-16">
                            <h3 className="text-xl font-bold text-black">{activeExperience.formation}</h3>
                            <p className="mt-4 text-black">{activeExperience.description}</p>
                            <p className="mt-4 text-sm text-gray-500">{activeExperience.date}</p>

                            <div className="mt-6 flex justify-end">
                                <Link
                                    href={`/edit/experience/${activeExperience.id}`}
                                    className="inline-flex h-12 w-40 cursor-pointer items-center justify-center rounded-lg bg-cyan-600 px-6 py-4 text-lg font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-300 focus:outline-none dark:focus:ring-cyan-800"
                                >
                                    Modifier
                                </Link>
                            </div>
                        </div>
                        <svg
                            className="absolute inset-y-0 -ml-12 hidden h-full w-24 fill-current text-gray-100 md:block"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                    </div>

                    <button
                        onClick={prev}
                        className="absolute top-1/2 left-[-2rem] h-12 w-12 -translate-y-1/2 transform cursor-pointer rounded-full bg-amber-400 text-3xl text-gray-600 shadow-md hover:text-gray-800 focus:outline-none"
                    >
                        <span className="block -scale-x-100 transform">&#x279c;</span>
                    </button>
                    <button
                        onClick={next}
                        className="absolute top-1/2 right-[-2rem] h-12 w-12 -translate-y-1/2 transform cursor-pointer rounded-full bg-amber-400 text-3xl text-gray-600 shadow-md hover:text-gray-800 focus:outline-none"
                    >
                        <span className="block">&#x279c;</span>
                    </button>
                </div>

                <div className="flex items-center justify-center gap-2 pt-5">
                    {experiences.map((_e, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-3 w-3 cursor-pointer rounded-full transition-opacity ${
                                index === current ? 'bg-gray-800 opacity-100' : 'bg-gray-500 opacity-50 hover:opacity-100'
                            }`}
                        ></button>
                    ))}
                </div>
                <div className="mt-10 flex justify-center">
                    <Link
                        href="/create/experience"
                        className="flex h-12 w-40 items-center justify-center rounded-lg bg-gray-700 text-lg font-medium text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-300 focus:outline-none"
                    >
                        Ajouter
                    </Link>
                </div>
            </div>
        </>
    );
}
