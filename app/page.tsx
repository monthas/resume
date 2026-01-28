import personalInfo from "@/src/data/personal_info.json";
import Experiences from "./components/Experiences";
import PersonalInfo from "./components/PersonalInfo";
import Acheivements from "./components/Acheivements";
import Language from "./components/Language";
import Education from "./components/Education";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <PersonalInfo />
      <div className="block md:hidden">
        <div className="pb-6">
          <h3 className="text-lg uppercase mb-2">Summary</h3>
          <p>{personalInfo.bio}</p>
        </div>

        <Acheivements />
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 md:col-span-2">
          <Experiences />
        </div>
        <div className="col-span-3 md:col-span-1">
          <div className="hidden md:block">
            <div className="pb-6">
              <h3 className="text-lg uppercase mb-2">Summary</h3>
              <p>{personalInfo.bio}</p>
            </div>

            <Acheivements />
          </div>

          <Language />
          <Education />
          <Skills />

        </div>
      </div>
    </main>
  );
}
