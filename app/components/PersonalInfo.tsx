import data from "@/src/data/personal_info.json";
import Image from "next/image";

export default function PersonalInfo() {
    return (
        <div className="flex pb-6 gap-x-8">
            <div className="flex-1">
                <h2 className="text-2xl md:text-4xl uppercase">{data.name}</h2>
                <p className="text-lg md:text-xl text-highlight pb-4">{data.position}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <p><a href={`mailto:${data.email}`}>{data.email}</a></p>
                    <p>
                        <a href={`https://github.com/${data.github}`} target="_blank">
                            https://github.com/{data.github}
                        </a>
                    </p>
                    <p>{data.phone}</p>
                    <p>{data.location}</p>
                </div>

            </div>
            <div className="w-32 flex-none md:block hidden">
                <Image src="/profile_circle.png" width={150} height={150} alt="Profile" />
            </div>
        </div>
    )
}