import { getPosts } from "@/lib/data";
import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    connectToDb();
    const posts = await Post.find();
    //NextResponse is used to return the response to the client
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};
