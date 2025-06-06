import { FaGithub, FaYoutube } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: "MERN Full Stack Animal Adoption Platform",
      description: "A real-time pet adoption website with a user-friendly interface for displaying and managing animals. Features full animal profiles, instant database updates, city-based filtering from an up-to-date list, and a contact form for adoption. Developed as part of a collaborative summer project.",
      image: "/animal-project.png",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/amitrozen11/queenb-summer-project-template-24",
      video: "https://youtu.be/DRWlgzjdh64?si=z7XrS8w2Ofu4i4Ko"
    },
    {
      title: "Game Vault App – Android Project",
      description: "Android app developed in Java for browsing and filtering video games by genre, rating, and year. Includes user login via Firebase, real-time data from REST API, and YouTube trailer integration. Built collaboratively with Git during active reserve duty.",
      image: "/gamevault.png",
      technologies: ["Java", "Firebase", "Android Studio", "REST API"],
      github: "https://github.com/amitrozen11/GameVault",
      video: "https://youtu.be/Fa4C5RNCMiY?si=A_wiv5fV6LbTRMMs"
    },
    {
      title: "Fuel Consumption Prediction for Ships – Machine Learning Project",
      description: "ML model for predicting ship fuel consumption, developed as part of a team using real-world data from the Braverus vessel. The project involved data cleaning, outlier handling, feature selection, and model comparison.",
      image: "/shipfuel.png",
      technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Streamlit"],
      github: "https://github.com/amitrozen11/Vessel-Fuel-Consumption-Prediction",
      video: "https://youtu.be/EPZkKgnwlP4?si=nrbWuTxhfx5dAUX5"
    }
  ];

  return (
    <div className="p-6 sm:p-10 min-h-screen bg-[#0d1117] text-white">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Projects</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row h-full transition duration-300 hover:bg-gray-700 hover:scale-[1.01] hover:shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full lg:w-1/3 h-44 sm:h-48 lg:h-auto object-cover"
            />
            <div className="p-4 flex flex-col flex-grow w-full lg:w-2/3">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-xs sm:text-sm mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-cyan-600 text-white px-2 py-1 rounded text-[10px] sm:text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-auto text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  <FaGithub className="inline mr-1" /> GitHub
                </a>
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  <FaYoutube className="inline mr-1" /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
