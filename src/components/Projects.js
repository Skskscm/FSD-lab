function Projects() {
  const projects = [
    "Student Portfolio Management System",
    "AI Chatbot",
    "Weather Prediction App"
  ];

  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;