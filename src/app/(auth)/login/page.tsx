import LoginForm from "@/components/loginForm/loginForm";
import { handleGitHubLogin } from "@/lib/actions";
import styles from "./login.module.css";
import { auth } from "@/lib/auth";

export default async function LoginPage() {
  const session = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Login</h1>
        <LoginForm session={session} />
        <form action={handleGitHubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
      </div>
    </div>
  );
}
