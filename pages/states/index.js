import States from "../../components/states/states";
import { db } from "../../lib/dbConnection";
import { getStatesCardData } from "../../lib/gettingandsetting";
const statesPage = ({ data }) => {
  return <States data={data} />;
};

export const getStaticProps = async () => {
  const statsDb = await db.collection("stats");
  const statsDetails = await statsDb.get();
  const data = [];
  statsDetails.forEach((stats) => {
    data.push({
      stateName: stats.data().stateName,
      stateImage: stats.data().stateImage,
      stateData: stats.data().stateData,
      _id: stats.id,
    });
  });
  if (statsDetails.empty) {
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
