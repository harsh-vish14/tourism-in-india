import { getStateByName } from "../../lib/gettingandsetting";
import { slugToNormalConverter } from "../../lib/helper";
import StateName from "../../components/StateName/StateName";
import { db } from "../../lib/dbConnection";
const stateWithName = ({ data }) => {
  return <StateName stateData={data} />;
};

export const getStaticProps = async (context) => {
  const { stateName } = context.params;
  const stateConvertedName = slugToNormalConverter(stateName);
  const statesDB = db.collection("stats");
  const state = await statesDB
    .where("stateName", "==", stateConvertedName)
    .get();
  if (state.empty) {
    return {
      notFound: true,
    };
  }
  var stateData;
  state.forEach((state) => {
    stateData = state.data();
  });
  // const response = await getStateByName(stateConvertedName);
  // if (response.status === "error") {
  //   return {
  //     notFound: true,
  //   };
  // }
  return {
    props: { data: stateData },
  };
};

export const getStaticPaths = async (context) => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
export default stateWithName;
