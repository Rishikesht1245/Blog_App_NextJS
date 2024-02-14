import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: { slug: string } }
) => {
  try {
    connectToDb();
    const { slug } = params;
    const post = await Post.findOne({ slug });
    //NextResponse is used to return the response to the client
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
};

export const DELETE = async (
  request: Request,
  { params }: { params: { slug: string } }
) => {
  try {
    connectToDb();
    const { slug } = params;
    const post = await Post.deleteOne({ slug });
    //NextResponse is used to return the response to the client
    return NextResponse.json("Post deleted");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete post");
  }
};
