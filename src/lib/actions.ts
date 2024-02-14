"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";

export const addPost = async (formData: any) => {
  const { title, description, slug, userId } = Object.fromEntries(formData);

  connectToDb();
  //saving to DB
  try {
    const newPost = new Post({
      title,
      description,
      slug,
      userId,
    });

    await newPost.save();
    revalidatePath("/blog");
    console.log("Post saved successfully");
  } catch (error) {
    console.log("Error while adding new post :", error);
  }
};

export const deletePost = async (formData: any) => {
  const { id } = Object.fromEntries(formData);

  connectToDb();
  //saving to DB
  try {
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    console.log("Post deleted successfully");
  } catch (error) {
    console.log("Error while adding new post :", error);
  }
};

export const handleGitHubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};
