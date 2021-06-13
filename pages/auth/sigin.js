import { getSession } from "next-auth/client";
import Sigin from "../../components/auth/sigin";
const SignIn = () => {
  return <Sigin />;
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default SignIn;
