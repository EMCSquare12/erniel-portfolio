import { Card } from "../components/Card";
import {
  IconExpressJs as ExpressJs,
  IconReactJs as ReactJs,
  IconNodeJs as NodeJs,
  IconMongoDb as MongoDb,
  IconAxios as Axios,
  IconExcel as Excel,
  IconGoogleSheets as GoogleScript,
  IconMongoose as Mongoose,
  IconPowerBi as PowerBI,
  IconReactRouter as ReactRouter,
  IconSocketIO as SocketIO,
  IconSQL as SQL,
  IconTableau as Tableau,
  IconTailwind as Tailwind,
  IconRedux as Redux,
  IconGithub as Github,
  IconGitlab as Gitlab,
  IconJira as Jira,
  IconBootstrap as Bootstrap,
} from "../assets";

export default function SkillsPage() {
  const ProgressBar = ({ label, percentage, range, colorClass }) => (
    <div className="mb-2">
      <div className="flex justify-between text-[10px] text-slate-300 mb-1">
        <span>{label}</span>
        <span>{range}</span>
      </div>
      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${colorClass}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );

  const SkillNode = ({
    icon,
    title,
    subtitle,
    score,
    positionClasses,
    themeColor,
  }) => {
    // 1. Create a dictionary with the FULL, unbroken Tailwind class names
    const themeStyles = {
      blue: {
        wrapperBorder: "border-blue-500/50",
        shadow: "shadow-blue-500/20",
        badgeBorder: "border-blue-500",
      },
      teal: {
        wrapperBorder: "border-teal-500/50",
        shadow: "shadow-teal-500/20",
        badgeBorder: "border-teal-500",
      },
    };

    // 2. Select the correct theme based on the prop passed
    const theme = themeStyles[themeColor] || themeStyles.blue;

    return (
      <div
        className={`absolute flex items-center flex-col justify-center ${positionClasses} z-20`}
      >
        <div
          className={`relative w-12 h-12 rounded-xl bg-[#161b22] border-2 ${theme.wrapperBorder} flex items-center justify-center text-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] ${theme.shadow}`}
        >
          <img className="w-8 h-8" src={icon} alt={title} />
          <span
            className={`absolute -bottom-2 bg-[#161b22] border ${theme.badgeBorder} text-[9px] px-1.5 rounded text-white`}
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

  // Updated Tag Component - Conditionally renders the image only if 'src' exists.
  const Tag = ({ src, alt, children }) => (
    <div className="px-2 py-1 flex flex-row items-center gap-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-300 shadow-sm">
      {src && <img src={src} alt={alt} className="w-5 h-5" />}
      {children}
    </div>
  );

  const mernSkills = [
    {
      label: "React",
      range: "90-10",
      percentage: 90,
      colorClass: "bg-blue-500",
    },
    {
      label: "Node.js",
      range: "10-18",
      percentage: 75,
      colorClass: "bg-blue-400",
    },
    {
      label: "Express.js",
      range: "6-15",
      percentage: 65,
      colorClass: "bg-blue-400",
    },
    {
      label: "MongoDB",
      range: "0-8",
      percentage: 50,
      colorClass: "bg-blue-300",
    },
  ];

  const dataSkills = [
    { label: "Excel", range: "", percentage: 85, colorClass: "bg-teal-400" },
    { label: "SQL", range: "", percentage: 80, colorClass: "bg-teal-500" },
    { label: "Power BI", range: "", percentage: 75, colorClass: "bg-teal-400" },
    { label: "Tableau", range: "", percentage: 70, colorClass: "bg-teal-300" },
  ];

  const skillNodesData = [
    {
      icon: ReactJs,
      title: "React",
      subtitle: "MERN App/Web",
      score: 90,
      themeColor: "blue",
      positionClasses: "top-[25%] left-[32%]",
    },
    {
      icon: NodeJs,
      title: "NodeJs",
      subtitle: "End-to-End Logic",
      score: 90,
      themeColor: "blue",
      positionClasses: "top-[45%] left-[13%]",
    },
    {
      icon: ExpressJs,
      title: "Express.js",
      subtitle: "API Development",
      score: 90,
      themeColor: "blue",
      positionClasses: "bottom-[40%] left-[24%]",
    },
    {
      icon: MongoDb,
      title: "MongoDB",
      subtitle: "Performance Tuning",
      score: 90,
      themeColor: "blue",
      positionClasses: "bottom-[20%] left-[18%]",
    },
    {
      icon: Excel,
      title: "Excel",
      subtitle: "Formulas & Pivots",
      score: 85,
      themeColor: "teal",
      positionClasses: "top-[25%] right-[32%]",
    },
    {
      icon: Excel,
      title: "Data Cleaning",
      subtitle: "Excel/Power Query",
      score: 85,
      themeColor: "teal",
      positionClasses: "top-[45%] right-[13%]",
    },
    {
      icon: SQL,
      title: "SQL",
      subtitle: "Complex SQL Queries",
      score: 85,
      themeColor: "teal",
      positionClasses: "bottom-[40%] right-[23%]",
    },
    {
      icon: PowerBI,
      title: "Data Visualization",
      subtitle: "Power BI/Tableau",
      score: 85,
      themeColor: "teal",
      positionClasses: "bottom-[20%] right-[17%]",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      <h2 className="text-2xl font-bold text-white tracking-wide uppercase">
        SKILLS COMPASS{" "}
        <span className="text-slate-400 font-light normal-case">
          | Interactive Talent Map
        </span>
      </h2>

      <Card className="relative w-full h-[700px] bg-[#1c2128] border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
          <div className="w-[800px] h-[800px] rounded-full border border-slate-600 border-dashed absolute"></div>
          <div className="w-[600px] h-[600px] rounded-full border border-slate-500 absolute"></div>
          <div className="w-[400px] h-[400px] rounded-full border border-slate-400 absolute"></div>
          <div className="w-px h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent absolute"></div>
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

        <div className="absolute top-6 left-8 text-xl font-bold text-blue-400/80 tracking-widest z-10">
          WEB DEVELOPMENT
        </div>
        <div className="absolute top-6 right-8 text-xl font-bold text-teal-400/80 tracking-widest z-10">
          DATA ANALYSIS
        </div>
        <div className="absolute bottom-6 left-8 text-blue-500/50 font-bold tracking-widest">
          WEB DEVELOPMENT
        </div>
        <div className="absolute bottom-6 right-8 text-teal-500/50 font-bold tracking-widest">
          DATA ANALYSIS
        </div>

        <div className="absolute z-30 flex flex-col items-center">
          <div className="bg-[#21262d]/90 backdrop-blur-md border border-slate-600 rounded-xl p-4 w-80 text-center shadow-2xl">
            <h3 className="text-white font-bold mb-3">MERN-Data Integration</h3>
            <div className="flex items-center justify-between">
              <div className="text-center w-1/2 px-2 border-r border-slate-600">
                <p className="text-blue-400 text-xs font-bold mb-1">
                  MERN Applications
                </p>
                <p className="text-[9px] text-slate-400">
                  Embedded BI in React apps
                </p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 text-2xl">
                🌉
              </div>
              <div className="text-center w-1/2 px-2">
                <p className="text-teal-400 text-xs font-bold mb-1">
                  Live Data Feeds & Visualizations
                </p>
                <p className="text-[9px] text-slate-400">
                  Real-time SQL Integration
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 z-30 bg-[#21262d]/90 backdrop-blur-md border border-slate-600 rounded-xl p-4 w-72 shadow-2xl">
          <h3 className="text-white font-bold text-sm text-center mb-3">
            Career Bridge
          </h3>
          <div className="flex items-center justify-between text-slate-400">
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-1 text-blue-400">👨‍💼</span>
              <span className="text-[10px]">Admin/IT Support</span>
            </div>
            <span className="text-xl text-teal-400">🌉&rarr;</span>
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-1 text-teal-400">💼</span>
              <span className="text-[10px]">New careers</span>
            </div>
          </div>
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
            <Tag src={Redux} alt="Redux Icon">
              Redux
            </Tag>
            <Tag src={Axios} alt="Axios Icon">
              Axios
            </Tag>
            <Tag src={SocketIO} alt="Socket.io Icon">
              Socket.io
            </Tag>
            <Tag src={Mongoose} alt="Mongoose Icon">
              Mongoose
            </Tag>
            <Tag src={Tailwind} alt="Tailwind Icon">
              Tailwind
            </Tag>
            <Tag src={Bootstrap} alt="Bootstrap Icon">
              Bootstrap
            </Tag>
            <Tag src={ReactRouter} alt="React Router Icon">
              React Router
            </Tag>
          </div>
        </Card>

        <Card>
          <h3 className="font-bold text-white uppercase text-sm mb-4 flex items-center">
            <span className="text-teal-400 mr-2">🚀</span> Deployment
          </h3>
          <div className="flex flex-wrap gap-2">
            <Tag src={Github} alt="Github Icon">
              Github
            </Tag>
            <Tag src={Gitlab} alt="Gitlab Icon">
              Gitlab
            </Tag>
            <Tag src={Jira} alt="Jira Icon">
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
            <Tag src={GoogleScript} alt="Google Sheet Script Icon">
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
