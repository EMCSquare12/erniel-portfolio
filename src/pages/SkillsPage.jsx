import React from "react";
import { Card } from "../components/ui/Card";
import { ProgressBar } from "../components/ui/ProgressBar";
import { Tag } from "../components/ui/Tag";
import { mernSkills, dataSkills, skillNodesData } from "../data/skillsData";
import {
  IconRedux,
  IconAxios,
  IconSocketIO,
  IconMongoose,
  IconTailwind,
  IconBootstrap,
  IconReactRouter,
  IconGithub,
  IconGitlab,
  IconJira,
  IconGoogleSheets,
} from "../assets";

const SkillNode = ({
  icon,
  title,
  subtitle,
  score,
  positionClasses,
  themeColor,
}) => {
  const theme =
    themeColor === "teal"
      ? {
          wrapper: "border-teal-500/50 shadow-teal-500/20",
          badge: "border-teal-500",
        }
      : {
          wrapper: "border-blue-500/50 shadow-blue-500/20",
          badge: "border-blue-500",
        };

  return (
    <div
      className={`absolute flex items-center flex-col justify-center ${positionClasses} z-20`}
    >
      <div
        className={`relative w-12 h-12 rounded-xl bg-[#161b22] border-2 ${theme.wrapper} flex items-center justify-center text-xl shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
      >
        <img className="w-8 h-8" src={icon} alt={title} title={title} />
        <span
          className={`absolute -bottom-2 bg-[#161b22] border ${theme.badge} text-[9px] px-1.5 rounded text-white`}
        >
          {score}%
        </span>
      </div>
      <div className="flex flex-col items-center mt-2">
        <span className="text-white font-bold text-[12px]">{title}</span>
        <span className="text-slate-400 text-[10px]">{subtitle}</span>
      </div>
    </div>
  );
};

export default function SkillsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      <h2 className="text-2xl font-bold text-white tracking-wide uppercase">
        SKILLS COMPASS{" "}
        <span className="text-slate-400 font-light normal-case">
          | Interactive Talent Map
        </span>
      </h2>

      <Card className="relative w-full h-[700px] bg-[#1c2128] overflow-hidden flex items-center justify-center shadow-2xl">
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
          <div className="w-[800px] h-[800px] rounded-full border border-slate-600 border-dashed absolute"></div>
          <div className="w-[600px] h-[600px] rounded-full border border-slate-500 absolute"></div>
          <div className="w-[400px] h-[400px] rounded-full border border-slate-400 absolute"></div>
        </div>

        <div className="absolute top-16 left-6 w-64 bg-[#21262d]/80 backdrop-blur-sm border border-slate-600 p-4 rounded-xl z-30">
          <h3 className="text-white font-bold text-sm mb-3">
            MERN Proficiency
          </h3>
          {mernSkills.map((skill, idx) => (
            <ProgressBar key={idx} {...skill} />
          ))}
        </div>

        <div className="absolute top-16 right-6 w-64 bg-[#21262d]/80 backdrop-blur-sm border border-slate-600 p-4 rounded-xl z-30">
          <h3 className="text-white font-bold text-sm mb-3">
            Analytic Tool Proficiency
          </h3>
          {dataSkills.map((skill, idx) => (
            <ProgressBar key={idx} {...skill} />
          ))}
        </div>

        {skillNodesData.map((node, idx) => (
          <SkillNode key={idx} {...node} />
        ))}
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card>
          <h3 className="font-bold text-white uppercase text-sm mb-4 flex items-center">
            <span className="text-blue-400 mr-2">📚</span> Frameworks
          </h3>
          <div className="flex flex-wrap gap-2">
            <Tag src={IconRedux} alt="Redux">
              Redux
            </Tag>
            <Tag src={IconAxios} alt="Axios">
              Axios
            </Tag>
            <Tag src={IconSocketIO} alt="Socket.io">
              Socket.io
            </Tag>
            <Tag src={IconMongoose} alt="Mongoose">
              Mongoose
            </Tag>
            <Tag src={IconTailwind} alt="Tailwind">
              Tailwind
            </Tag>
            <Tag src={IconBootstrap} alt="Bootstrap">
              Bootstrap
            </Tag>
            <Tag src={IconReactRouter} alt="React Router">
              React Router
            </Tag>
          </div>
        </Card>

        <Card>
          <h3 className="font-bold text-white uppercase text-sm mb-4 flex items-center">
            <span className="text-teal-400 mr-2">🚀</span> Deployment
          </h3>
          <div className="flex flex-wrap gap-2">
            <Tag src={IconGithub} alt="Github">
              Github
            </Tag>
            <Tag src={IconGitlab} alt="Gitlab">
              Gitlab
            </Tag>
            <Tag src={IconJira} alt="Jira">
              Jira
            </Tag>
            <Tag>Netlify</Tag>
            <Tag>Render</Tag>
          </div>
        </Card>

        <Card>
          <h3 className="font-bold text-white uppercase text-sm mb-4 flex items-center">
            <span className="text-yellow-400 mr-2">📈</span> Data Analytics
          </h3>
          <div className="flex flex-wrap gap-2">
            <Tag>Excel Formula</Tag>
            <Tag src={IconGoogleSheets} alt="Google Sheet Script">
              Google Sheet Script
            </Tag>
            <Tag>Pivot</Tag>
          </div>
        </Card>

        <Card>
          <h3 className="font-bold text-white uppercase text-sm mb-4 flex items-center">
            <span className="text-purple-400 mr-2">🤖</span> AI Techniques
          </h3>
          <div className="flex flex-wrap gap-2">
            <Tag>AI Prompting Technique</Tag>
            <Tag>Code Copilots</Tag>
            <Tag>Workflow Automation</Tag>
          </div>
        </Card>
      </div>
    </div>
  );
}
