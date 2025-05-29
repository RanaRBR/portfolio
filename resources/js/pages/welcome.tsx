// import Sidebar from '@/components/sideBar/SideBar';
// import SectionAbout from '@/components/sectionAbout/SectionAbout';
// import SectionExperience from '@/components/sectionExperience/SectionExperience';
// import SectionCompetence from '@/components/sectionCompetence/SectionCompetence';
// import SectionContact from '@/components/sectionContact/SectionContact'

// export default function Welcome({ abouts, experiences, competences, projets, contacts }) {
//     return (
//         <div className="flex">
//             <Sidebar />

//             <main className="ml-60 flex-grow p-20">
//                 <div className="relative h-[80vh] w-full overflow-hidden rounded-2xl bg-black/20 p-4">
//                     <div className="flex h-full w-full items-center justify-center">
//                         <img
//                             src="/images/portfoliorn.png"
//                             alt="Bannière"
//                             className="max-h-full max-w-full rounded-2xl object-contain"
//                         />
//                     </div>

//                     <div className="absolute top-[40%] right-0 left-0 flex -translate-y-1/2 transform items-center justify-between px-10">
//                         <div className="flex items-center space-x-1 rounded-lg p-2 px-[100px] text-cyan-600 transition-transform duration-300 hover:translate-x-4">
//                             <span className="mb-2 text-7xl font-light">‹</span>
//                             <span className="mt-2 text-4xl font-bold">Coder</span>
//                             <span className="mt-1 text-4xl font-light">/</span>
//                             <span className="mb-2 text-7xl font-light">›</span>
//                         </div>

//                         <h1
//                             style={{ fontFamily: 'Permanent Marker, cursive' }}
//                             className="rounded-lg p-2 px-[100px] text-4xl font-bold text-amber-500 transition-transform duration-300 hover:-translate-x-4"
//                         >
//                             Designer
//                         </h1>
//                     </div>
//                 </div>

//                 <SectionAbout abouts={abouts} />
//                 <SectionExperience experiences={experiences} />
//                 <SectionCompetence competences={competences} />
//                 <SectionContact contacts={contacts} />
//             </main>
//         </div>
//     );
// }

import SectionAbout from '@/components/sectionAbout/SectionAbout';
import SectionCompetence from '@/components/sectionCompetence/SectionCompetence';
import SectionContact from '@/components/sectionContact/SectionContact';
import SectionExperience from '@/components/sectionExperience/SectionExperience';
import Sidebar from '@/components/sideBar/SideBar';

export default function Welcome({ abouts, experiences, competences, projets, contacts }) {
    return (
        <div className="flex">
            <Sidebar />

            <main className="ml-60 flex-grow p-20">
                <div className="w-full overflow-hidden rounded-2xl p-4">
                    <section className="mb-6 text-center">
                        <h1 className="mb-4 text-3xl font-bold text-amber-500" style={{ fontFamily: "'Permanent Marker', cursive" }}>
                            Rana Boutros Rafael,
                        </h1>
                        <p className="text-xl text-cyan-500 italic">développeuse web full-stack & passionnée de design </p>
                    </section>

                    <div className="flex items-center justify-center">
                        <img src="/images/portfoliorn.png" alt="Bannière" className="max-h-[600px] max-w-full rounded-2xl object-contain" />
                    </div>
                </div>

                <SectionAbout abouts={abouts} />
                <SectionExperience experiences={experiences} />
                <SectionCompetence competences={competences} />
                <SectionContact contacts={contacts} />
            </main>
        </div>
    );
}
