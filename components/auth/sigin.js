import classes from "./auth.module.scss";
import FormBottom from "./googlebtn/formBottom";
import Link from "next/link";
import { useRef, useState } from "react";
import { SignInLink } from "../../lib/gettingandsetting";
import Indicator from "../indicator/indicator";
import { useRouter } from "next/router";
const Sigin = () => {
  const router = useRouter();
  const [indicatorDetails, setIndicatorDetails] = useState({
    status: "",
    message: "Loading...",
  });
  const [showIndicator, setShowIndicator] = useState(false);
  const password = useRef();
  const email = useRef();
  const submitHandler = async (e) => {
    e.preventDefault();
    setShowIndicator(true);
    const currentPassword = password.current.value;
    const currentEmail = email.current.value;
    const result = await SignInLink({
      password: currentPassword,
      email: currentEmail,
    });
    if (result.status === "success") {
      setIndicatorDetails({
        status: "success",
        message: "Register user successfully",
      });
      router.push("/auth/login");
      return;
    }
    setIndicatorDetails({
      status: "error",
      message: result.data.err,
    });
    setTimeout(() => {
      setShowIndicator(false);
    }, 4000);
  };
  return (
    <section className={classes.section}>
      <div className={classes.formContainer}>
        <form onSubmit={submitHandler}>
          <div className={classes.logo}>SIGN IN</div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" required ref={email} />
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <input type="password" id="Password" required ref={password} />
          </div>
          <button>Sign In</button>
        </form>
        <FormBottom />
        <div>
          <Link href="/auth/login">Having Account ?</Link>
        </div>
      </div>
      {showIndicator && (
        <Indicator
          status={indicatorDetails.status}
          message={indicatorDetails.message}
        />
      )}
    </section>
  );
};

export default Sigin;
