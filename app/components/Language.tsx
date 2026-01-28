import data from "@/src/data/personal_info.json";

export default function Language() {
  return (
    <div className="pb-6">
      <h3 className="text-lg uppercase mb-2">Languages</h3>
      {data.languages.map((language: any, index: number) => (
        <div className="flex pb-1" key={index}>
          <div className="flex-1 text-primary">{language.name}</div>
          <div className="flex-none">
            <span className="text-sm text-grey-light inline-block">{language.grade}</span>
            <div className="inline-block ml-1">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => {
                  return (<div key={i} className={`h-2 w-2 rounded-full ${i + 1 <= language.level ? 'bg-primary' : 'bg-gray-300'}`}></div>)
                })}
              </div>
            </div>
          </div>
        </div>
      ))
      }
    </div >
  )
}