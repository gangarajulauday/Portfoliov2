
const journey = [
    {
        years: "2022 to Present",
        role: "Full Stack Developer",
        institution: "Encore Consulting Services, Inc",
    },
    {
        years: "2021 to 2022",
        role: "Software Developer",
        institution: "Exalttek, Inc.",
    },
    {
        years: "2020 to 2021",
        role: "Software Developer",
        institution: "Strategic Resources International Inc",
    },
    {
        years: "Aug 2016 to Dec 2016",
        role: "Internship",
        institution: "Tine Software Solutions Inc ",
    },
    {
        years: "July 2015 to Dec 2016",
        role: "Masters",
        institution: "University of Central Missouri",
    },
    {
        years: "2014 to 2015",
        role: "Customer Service Specialist",
        institution: "Amazon, India",
    },
    {
        years: "2009 to 2013",
        role: "Bachelors Degree",
        institution: "Jawaharlal Nehru Technological University, IND",
    }
];

const Journey = () => {
  return (
    <div className="flex flex-col">
        <h2 className="h2 mb-8">
            Education & <span className="text-accent">Experience</span>
        </h2>
        {journey.map((item, index) => {
            const { institution, role, years } = item;
            return (
                <div key={index} className="flex items-center gap-12 w-full">
                    <div className="flex flex-col w-max justify-center items-center">
                        <div className="w-3 h-3 bg-accent rounded-full"></div>
                        <div className="w-[1px] h-[180px] bg-white/10"></div>
                    </div>
                    <div className="max-w-[500px]">
                        <p className="mb-6 text-lg text-white/50">{years}</p>
                        <h4 className="h4 mb-2">{role}</h4>
                        <p className="text-lg text-white/50">{institution}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Journey