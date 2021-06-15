import States from "../../components/states/states";
const statesPage = ({ data }) => {
  return <States data={data} />;
};

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/states`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
    revalidate: 10800,
  };
};

export default statesPage;
