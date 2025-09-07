import {
    RiReactjsFill,
    RiJavaLine,
    RiHtml5Fill,
    RiCss3Fill,
    RiTailwindCssFill,
    RiNodejsFill,
    RiAngularjsFill
} from 'react-icons/ri';
import { BiLogoSpringBoot,BiLogoKubernetes } from "react-icons/bi";
import { TbFileTypeSql } from "react-icons/tb";
import { FaDocker,FaLinux } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from '@radix-ui/react-tooltip';

const skills = [
    {
        icon: <RiReactjsFill />,
        name: "React.js"
    },
    {
        icon: <RiAngularjsFill />,
        name: "AngularJS"
    },
    {
        icon: <RiJavaLine />,
        name: "Java"
    },
    {
        icon: <RiHtml5Fill />,
        name: "HTML 5"
    },
    {
        icon: <RiCss3Fill />,
        name: "CSS 3"
    },
    {
        icon: <RiTailwindCssFill />,
        name: "Tailwind CSS"
    },
    {
        icon: <RiNodejsFill />,
        name: "Node.js"
    },
    {
        icon: <BiLogoSpringBoot />,
        name: "Spring Boot"
    },
    {
        icon: <TbFileTypeSql />,
        name: "SQL"
    },
    {
        icon: <FaDocker />,
        name: "Docker"
    },
    {
        icon: <VscAzure />,
        name: "Azure"
    },
    {
        icon: <BiLogoKubernetes />,
        name: "Kubernetes"
    },
    {
        icon: <FaLinux />,
        name: "Linux"
    }
];

const Skills = () => {
  return (
    <div>
        <h2 className='h2 mb-8'>
            My <span className='text-accent'>Skills</span>
        </h2>
        <div className='flex flex-wrap gap-6 max-w-sm xl:max-w-none'>
            {skills.map((item, index) => {
                return <TooltipProvider key={index}>
                    <Tooltip>
                        <TooltipTrigger className="w-16 h-16 rounded-full flex items-center justify-center bg-tertiary/70 group">
                            <div className='text-3xl group-hover:text-accent transition-all duration-300'>{item.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className='text-lg'>{item.name}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            })}
        </div>
    </div>
  )
}

export default Skills