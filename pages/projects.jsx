const ProjectsPage = () => {
  const handleClick = (param) => {
    if (param === "play") {
      document.location.href = "https://bit.ly/curriculo-hinario-play";
    } else if (param === "contribua") {
      document.location.href = "http://bit.ly/github-hinario-contribua";
    }
  };

  return (
    <>
      <h1>Projects Page</h1>
      <h2>Hinário CCB 5 - Voluntário</h2>
      <p>
        <strong>Maio 2020 - atualmente</strong>
      </p>
      <p>
        Aplicativo construído em React Native com 10000+ usuários ativos em mais
        de 10 países com classificação de 4.5+ estrelas.
      </p>
      <h4 onClick={() => handleClick("play")}>Google Play Store</h4>
      <h4 onClick={() => handleClick("contribua")}>Contribua</h4>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Projects" },
  };
}

export default ProjectsPage;
