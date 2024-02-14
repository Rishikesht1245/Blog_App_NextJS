"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

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

export const registerUser = async (formData: any) => {
  const { username, email, password, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) return "Password doesn't match";

  connectToDb();
  const userExists = await User.findOne({ username });

  if (userExists) {
    return "User already exists";
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();
  console.log("User added successfully");
};
