import Head from "next/head";
import { slugToNormalConverter } from "../../lib/helper";
import StateName from "../../components/StateName/StateName";
import { db } from "../../lib/dbConnection";
const stateWithName = ({ data }) => {
  return (
    <>
      <Head>
        <title>India Travel / {data.stateName}</title>
        <meta name="description" content={data.stateData}></meta>
      </Head>
      <StateName stateData={data} />
    </>
  );
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
  return {
    props: { data: stateData },
    revalidate: 10900,
  };
};

export const getStaticPaths = async (context) => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
export default stateWithName;
