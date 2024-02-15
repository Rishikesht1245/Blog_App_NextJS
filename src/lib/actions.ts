"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (prevState: any, formData: any) => {
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
    revalidatePath("/admin");
    console.log("Post saved successfully");
  } catch (error) {
    console.log("Error while adding new post :", error);
  }
};

export const addUser = async (prevState: any, formData: any) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  connectToDb();
  //saving to DB
  try {
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    revalidatePath("/admin");
    console.log("User added successfully");
  } catch (error) {
    console.log("Error while adding new user :", error);
  }
};

export const deletePost = async (prevState: any, formData: any) => {
  const { id } = Object.fromEntries(formData);

  connectToDb();
  //saving to DB
  try {
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    revalidatePath("/admin");
    console.log("Post deleted successfully");
  } catch (error) {
    console.log("Error while deleting post :", error);
  }
};

export const deleteUser = async (prevState: any, formData: any) => {
  const { id } = Object.fromEntries(formData);

  connectToDb();
  //saving to DB
  try {
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);

    revalidatePath("/admin");
    console.log("User and posts deleted successfully");
  } catch (error) {
    console.log("Error while deleting User :", error);
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

export const registerUser = async (prevState: any, formData: any) => {
  const { username, email, password, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) return { error: "Password doesn't match" };
  try {
    connectToDb();
    const userExists = await User.findOne({ username });

    if (userExists) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    throw new Error("Error in User adding");
  }
};

export const loginUser = async (prevState: any, formData: any) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    const user = await signIn("credentials", { username, password });
    console.log(user, "user from login");
    return { success: true };
  } catch (err: any) {
    console.log(err);

    if (err?.message?.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
