import { BiLogoLinkedin, BiLogoGithub, BiLogoInstagramAlt, BiLogoFacebook, BiLogoDiscordAlt } from 'react-icons/bi';

const socials = [
    {
        icon: <BiLogoLinkedin/>,
        path: "https://www.linkedin.com/in/uday-gangarajula-08579056/"
    },
    {
        icon: <BiLogoGithub/>,
        path: "https://github.com/gangarajulauday"
    },
    {
        icon: <BiLogoDiscordAlt/>,
        path: "https://discord.com/invite/TbyvuPDW"
    },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <a
                  key={index}
                  href={item.path || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={iconStyles}
                >
                  {item.icon}
                </a>
            )
        })}
    </div>
  );
};

export default Socials