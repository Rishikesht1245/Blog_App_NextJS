"use client";
import { useFormState } from "react-dom";
import styles from "./adminUserFrom.module.css";
import { addUser } from "@/lib/actions";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className={styles.form}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="Username"></input>
      <input type="email" name="email" placeholder="Email"></input>
      <input type="password" name="password" placeholder="Password"></input>
      <select name="isAdmin">
        <option value={"false"}>is Admin ? </option>
        <option value={"true"}>Admin </option>
        <option value={"false"}>User </option>
      </select>
      <button>Add</button>
      {state?.error && <span className="text-red-400">{state?.error}</span>}
    </form>
  );
};
export default AdminUserForm;
