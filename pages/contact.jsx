const ContactPage = () => {
  return (
    <>
      <h1>Contact Page</h1>
      <p>+55 11 964757920</p>
      <p>saulocastelos@gmail.com</p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Contact" },
  };
}

export default ContactPage;
