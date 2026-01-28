import data from "@/src/data/acheivements.json";

export default function Acheivements() {
  return (
    <div className="pb-6">
      <h3 className="text-lg uppercase mb-2">Key Achievements</h3>
      <div className="grid grid-cols-1 gap-2">
        {data.acheivements.map((achievement: any, index: number) => (
          <div className="flex pb-1" key={index}>
            <div className="flex-none pr-2">•</div>
            <div className="flex-1">
              <p className="text-lg text-primary">{achievement.title}</p>
              {achievement.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}