"use client";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loginUser } from "@/lib/actions";

const LoginForm = async ({ session }: { session: any }) => {
  // useFormState hook is used to keep track of forms in react
  const [state, formAction] = useFormState(loginUser, undefined);

  const router = useRouter();

  // redirecting user to the sign in page after successful login
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form}>
      <input type="text" placeholder="Username" name="username" />

      <input type="password" placeholder="Password" name="password" />

      <button formAction={formAction} className={styles.button}>
        login
      </button>
      {session?.error && <span className="text-red-400">{session?.error}</span>}
      <Link href={"/register"}>
        Don't have an account ? <b>Register</b>
      </Link>
    </form>
  );
};
export default LoginForm;
