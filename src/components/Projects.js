import "./Projects.css";

export default function Projects(props) {
  const projects = [
    {
      name: "My Portfolio",
      description: "It is this website you are viewing now :)",
      url: "https://github.com/sul-otaibi/portfolio",
    },
    {
      name: "JATS",
      description:
        `This is a simple website to help track your job application process.
        Live demo is soon to be published.`,
      url: "https://github.com/sul-otaibi/JATS",
    },
  ];

  return (
    <section id="projects">
      <h1>MY PROJECTS</h1>
      <div className="projects-list">
        {projects.map((el) => (
          <button
            key={el.name}
            onClick={() => {
              openModal(props.modalRoot, el, false);
            }}
          >
            {el.name}
          </button>
        ))}
      </div>
    </section>
  );
}

function openModal(modalRoot, el, close) {
  if (close) return modalRoot.render();

  modalRoot.render(
    <div className="modal-bg">
      <div className="modal-wrapper">
        <h1>{el.name}</h1>
        <div>{el.description}</div>
        <br></br>
        <a
          href={el.url}
          style={{
            display: "block",
            padding: ".5rem",
            border: ".5ex solid black",
            borderRadius: "1ex",
            maxWidth: "70%",
            marginInline: "auto",
          }}
        >
          View In GitHub
        </a>
        <br></br>
        <button
          onClick={() => {
            openModal(modalRoot, null, true);
          }}
          style={{
            position: "fixed",
            top: "0",
            right: "0",
            padding: "1rem",
            color: "black",
            border: "none",
            background: "rgba(0,0,0,0)",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          ⛌
        </button>
      </div>
    </div>
  );
}
