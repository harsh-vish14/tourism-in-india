import classes from "./auth.module.scss";
import FormBottom from "./googlebtn/formBottom";
import Link from "next/link";
import { useRef, useState } from "react";
import { signIn } from "next-auth/client";
import Indicator from "../indicator/indicator";
import { useRouter } from "next/router";
const Login = () => {
  const router = useRouter();
  const [indicatorDetails, setIndicatorDetails] = useState({
    status: "",
    message: "Loading...",
  });
  const [showIndicator, setShowIndicator] = useState(false);
  const email = useRef();
  const password = useRef();
  const submitHandler = async (e) => {
    e.preventDefault();
    const currentEmail = email.current.value;
    const currentPassword = password.current.value;
    setShowIndicator(true);
    const result = await signIn("credentials", {
      redirect: false,
      email: currentEmail,
      password: currentPassword,
    });
    if (!result.error) {
      setIndicatorDetails({
        status: "success",
        message: "logged in successfully!",
      });
      router.push("/", undefined, { shallow: true });
      return;
    }
    setIndicatorDetails({
      status: "error",
      message: result.error,
    });
  };
  return (
    <section className={classes.section}>
      <div className={classes.formContainer}>
        <form onSubmit={submitHandler}>
          <div className={classes.logo}>LOGIN IN</div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required ref={email} />
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <input type="password" id="Password" required ref={password} />
          </div>
          <button>Login In</button>
        </form>
        <FormBottom />
        <div>
          <Link href="/auth/sigin">Create new account</Link>
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

export default Login;
