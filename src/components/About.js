import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section>
      <h2>About Me</h2>
      <p>I am C.M Sai Krishna a third year Computer Engineering student.</p>

      {showMore && (
        <p>I am interested in web development and building scalable applications.</p>
      )}

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}

export default About;