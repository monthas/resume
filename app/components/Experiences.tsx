import data from "@/src/data/experiences.json";

interface Position {
    title: string;
    period: string;
}

interface Project {
    title: string;
    technology: string;
    descriptions: string[];
}

interface Experience {
    company: string;
    location: string;
    position: Position[];
    projects: Project[];
}

export default function Experiences() {
    const experiences: Experience[] = Object.values(data) as Experience[];

    return (
        <div>
            <h3 className="text-lg uppercase mb-2">Experiences</h3>
            {experiences.map((exp, index) => {
                return (
                    <div key={index} className="pb-6">
                        <h4 className="text-xl">{exp.company}</h4>
                        {exp.position.map((position, pIndex) => (
                            <div key={pIndex} className="pb-2 text-sm block sm:flex">
                                <div className="flex-1 font-bold">{position.title}</div>
                                <div className="flex-none">{position.period}</div>
                            </div>
                        ))}
                        {exp.projects && exp.projects.map((project, projIndex) => (
                            <div key={projIndex} className="pb-4">
                                <h5 className="text-lg text-highlight">{project.title}</h5>
                                <p className="text-xs text-grey-medium py-1">{project.technology}</p>
                                <ul className="list-disc list-outside ml-5">
                                    {project.descriptions.map((desc, descIndex) => (
                                        <li key={descIndex} className="-ml-1">{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}
