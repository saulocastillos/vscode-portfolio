import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Saulo Castilhos is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="nitin, Saulo Castilhos, ranganath, web developer, nitin web developer, nitin developer, mern stack, nitin portfolio"
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Saulo Castilhos',
};
