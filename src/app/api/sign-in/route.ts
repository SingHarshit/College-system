import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectToDB } from "@/helpers/getData"; // Import MongoDB connection helper
import User from "@/models/User"; // Import your User model

const JWT_SECRET = process.env.JWT_SECRET || "nextjs"; // Set a secure JWT secret in your .env file
const salt = await bcrypt.genSalt();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password, name } = body;
    console.log(email, password, name)

    // Connect to MongoDB
    await connectToDB();

    // Find the user in the database
    // const user = await User.findOne({ email });
    // if (user) {
    //   return NextResponse.json({ error: "Invalid email or password" }, { status: 500 });
    // }
    // Generate a JWT token
    // const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
    const hashedPassword = await bcrypt.hash(password, salt);
    await User.create({email: email, password: hashedPassword, name: name});

    return NextResponse.json({ message: "Sign in successful" });
  } catch (error) {
    console.error("Error in sign-in:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
