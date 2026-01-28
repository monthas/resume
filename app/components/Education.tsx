import data from "@/src/data/personal_info.json";

export default function Education() {
  return (
    <div className="pb-6">
      <h3 className="text-lg uppercase mb-2">Education</h3>
      {data.education.map((education: any, index: number) => (
        <div key={index}>
          <p className="text-primary">{education.title}</p>
          <p className="text-sm text-grey-medium">{education.university}</p>
          <p className="text-sm text-grey-medium">{education.period}</p>
        </div>
      ))}
    </div>
  )
}
