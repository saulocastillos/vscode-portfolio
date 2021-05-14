const GithubPage = () => {
  const handleClick = (param) => {
    if (param === "github") {
      document.location.href = "https://github.com/saulocastillos";
    }
  };

  return (
    <>
      <h1>Github Page</h1>
      <h4 onClick={() => handleClick("github")}>Saulo Castillos</h4>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Github" },
  };
}

export default GithubPage;
