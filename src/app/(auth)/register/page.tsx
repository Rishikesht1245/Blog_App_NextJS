import RegisterForm from "@/components/RegisterForm/RegisterForm";
import styles from "./register.module.css";
export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Register</h1>
        <RegisterForm />
      </div>
    </div>
  );
}
