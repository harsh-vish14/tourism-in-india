import GoogleButton from "react-google-button";
import classes from "./btn.module.scss";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
const FormBottom = () => {
  const router = useRouter();
  const googleSignedIn = async () => {
    await signIn("google", {
      callbackUrl: "https://india-travel-wiki.vercel.app/",
    });
  };
  return (
    <div className={classes.google}>
      <div className={classes.separator}>
        <span>or</span>
      </div>
      <GoogleButton type="light" onClick={googleSignedIn} />
    </div>
  );
};

export default FormBottom;
