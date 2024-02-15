"use client";
import { useFormState } from "react-dom";
import styles from "./adminPostForm.module.css";
import { addPost } from "@/lib/actions";

const AdminPostFrom = ({ userId }: { userId: string }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction} className={styles.form}>
      <h1>Add New Posts</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title"></input>
      <input type="text" name="slug" placeholder="Slug"></input>
      <input type="text" name="img" placeholder="Image"></input>
      <textarea
        name="description"
        placeholder="Description"
        rows={10}
      ></textarea>
      <button>Add</button>
      {state?.error && <span className="text-red-400">{state?.error}</span>}
    </form>
  );
};
export default AdminPostFrom;
