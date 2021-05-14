const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <p>
        Desenvolvimento de aplicações web e mobile, micro serviços com as
        seguintes tecnologias/bibliotecas:
      </p>
      <ul>
        <li>ReactJS</li>
        <li>Native</li>
        <li>AdonisJS</li>
        <li>NodeJS</li>
      </ul>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
