import { getStateByName } from "../../lib/gettingandsetting";
import { slugToNormalConverter } from "../../lib/helper";
import StateName from "../../components/StateName/StateName";
const stateWithName = ({ data }) => {
  return <StateName stateData={data} />;
};

export const getStaticProps = async (context) => {
  const { stateName } = context.params;
  const stateConvertedName = slugToNormalConverter(stateName);
  const response = await getStateByName(stateConvertedName);
  if (response.status === "error") {
    return {
      notFound: true,
    };
  }
  return {
    props: { data: response.data },
  };
};

export const getStaticPaths = async (context) => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
export default stateWithName;
