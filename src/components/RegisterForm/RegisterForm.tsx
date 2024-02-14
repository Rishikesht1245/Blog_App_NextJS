"use client";
import { registerUser } from "@/lib/actions";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterFrom = () => {
  // useFormState hook is used to keep track of forms in react
  const [state, formAction] = useFormState(registerUser, undefined);

  const router = useRouter();

  // redirecting user to the sign in page after successful login
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Username" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input
        type="password"
        placeholder="Confirm Password"
        name="passwordRepeat"
      />
      <button formAction={formAction} className={styles.button}>
        Register
      </button>
      {state?.error && <span className="text-red-400">{state.error}</span>}
      <Link href={"/login"}>
        Have an account ? <b>Login</b>
      </Link>
    </form>
  );
};
export default RegisterFrom;
