import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/User";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  res: NextResponse
) {
  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ message: "All fields are required" }, {status: 500});
  }

  try {
    await connect();

    // Check if the user exists
    const user = await User.findOne({ email: email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, {status: 400});
    }

    // Verify the password
    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json({ message: "Invalid credentials" }, {status: 401});
    }

    // Generate a JWT
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET as string, // JWT_SECRET must be defined in your .env.local
      { expiresIn: "7d" }
    );
    return NextResponse.json({ message: "Login successful", token }, {status: 200});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, {status: 500});
  }
}
