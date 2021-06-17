import States from "../../components/states/states";
import { getStatesCardData } from "../../lib/gettingandsetting";
const statesPage = ({ data }) => {
  return <States data={data} />;
};

export const getStaticProps = async () => {
  const data = await getStatesCardData();
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

// export const getStaticPaths = () => {
//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// };

export default statesPage;
