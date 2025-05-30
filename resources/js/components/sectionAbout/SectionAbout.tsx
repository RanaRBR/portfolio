import { Link } from '@inertiajs/react';
import { FaRegFilePdf } from "react-icons/fa6";

export default function SectionAbout({ abouts }) {
    return (
        <div id='about' className="flex justify-center p-4 mt-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-58">
                {abouts.map((item, index) => (
                    <div
                        key={index}
                        className="relative min-w-220 bg-white border-2 border-cyan-600 rounded-lg shadow-md dark:bg-gray-800 dark:border-amber-600 mx-auto"
                    >
                        <a
                            href="/images/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute right-8 top-8 text-amber-600 hover:text-amber-400 text-4xl"
                            title="Voir le CV"
                        >
                            <FaRegFilePdf />
                        </a>

                        <div className="flex flex-col items-center pb-8 pt-6 px-10">
                            <img
                                className="w-40 h-40 mb-6 p-2 rounded-full shadow-lg object-cover border-2 border-amber-600"
                                src={`${item.photo}`}
                                alt={`photo de ${item.nom}`}
                            />
                            <h5 className="mb-3 text-3xl font-bold text-amber-600 dark:text-amber-500">
                                {item.nom} {item.prénom}
                            </h5>
                            <span className="text-cyan-600 dark:text-cyan-400 text-xl">{item.email}</span>
                            <p className="mt-4 text-center dark:text-gray-300 text-xl text-white">{item.bio}</p>

                            <div className="flex gap-4 mt-6">
                                <Link href={`/edit/about/${item.id}`}>
                                    <button className="h-12 w-40 cursor-pointer flex justify-center items-center px-6 py-4 text-lg font-medium text-white bg-cyan-600 rounded-lg hover:bg-cyan-700">
                                        Modifier
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

