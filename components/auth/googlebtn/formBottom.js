import GoogleButton from "react-google-button";
import classes from "./btn.module.scss";
import { signIn } from "next-auth/client";
const FormBottom = () => {
  const googleSignedIn = async () => {
    const result = await signIn("google", {
      callbackUrl: router.back(),
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
