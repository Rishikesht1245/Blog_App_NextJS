import { registerUser } from "@/lib/actions";
import styles from "./register.module.css";
export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Register</h1>
        <form className={styles.form} action={registerUser}>
          <input type="text" placeholder="Username" name="username" />
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <input
            type="password"
            placeholder="Confirm Password"
            name="passwordRepeat"
          />
          <button className={styles.button}>Register</button>
        </form>
      </div>
    </div>
  );
}
