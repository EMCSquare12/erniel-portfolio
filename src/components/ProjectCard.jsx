import { Card } from "./Card";
export const ProjectCard = ({ className = "", title, details, icons }) => {
  return (
    <Card className={`flex flex-col ${className}`}>
      <h3 className="font-bold text-white mb-4 uppercase text-sm">{title}</h3>

      {/* Main Project Image Placeholder */}
      <div className="bg-slate-800 h-64 rounded-lg mb-6 w-full flex items-center justify-center border border-slate-700">
        <span className="text-slate-400 text-sm">[Main Dashboard Image]</span>
      </div>

      {/* Tech Stack Icons */}
      <div className="flex space-x-2 mb-4 justify-center">
        {icons.map((icon, idx) => (
          <div
            key={idx}
            className="w-8 h-8 p-1 rounded-full bg-slate-700 flex items-center justify-center"
          >
            <img src={icon} alt="Tech stack icon" />
          </div>
        ))}
      </div>

      {/* Project Description */}
      <h4 className="font-bold text-white mb-3 text-sm">PROJECT DESCRIPTION</h4>
      <div className="space-y-4 mb-6">
        {details.map((content, index) => (
          <div key={index}>
            <p className="text-sm font-semibold text-white mb-2 flex items-center">
              <span className="text-teal-400 mr-2">✓</span> {content?.title}
            </p>
            <ul className="list-disc pl-8 space-y-1 text-xs text-slate-400">
              {content?.descriptions.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
};
