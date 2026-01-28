import data from "@/src/data/skills.json";

export default function Skills() {
  return (
    <div className="pb-6">
      <h3 className="text-lg uppercase mb-2">Skills</h3>
      {data.skills.map((skill: string, index: number) => (
        <span className="inline-block px-3 pt-3 pb-1 mx-2 text-sm text-primary border-b border-grey-light" key={index}>{skill}</span>
      ))}
    </div>
  )
}
