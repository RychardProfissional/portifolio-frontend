import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { projectId, name, email, content, rating } = body;

    if (!projectId || !name || !email || !content || !rating) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create comment in database
    const comment = await prisma.comment.create({
      data: {
        projectId,
        name,
        email,
        content,
        rating: parseInt(rating),
      },
    });

    // Send email notification
    // Note: In a real app, you should use environment variables for these credentials
    // and potentially use a queue for email sending to avoid blocking the response.
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or your preferred provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `New Comment on Project: ${projectId}`,
      text: `
        Name: ${name}
        Email: ${email}
        Rating: ${rating}
        Comment: ${content}
      `,
      html: `
        <h3>New Comment Received</h3>
        <p><strong>Project ID:</strong> ${projectId}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Rating:</strong> ${rating} / 5</p>
        <p><strong>Comment:</strong></p>
        <p>${content}</p>
      `,
    };

    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
      } else {
        console.warn(
          "Email credentials not found, skipping email notification."
        );
      }
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      // We don't fail the request if email fails, but we log it.
    }

    return NextResponse.json(comment);
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "Error creating comment" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const projectId = searchParams.get("projectId");

  if (!projectId) {
    return NextResponse.json(
      { error: "Project ID is required" },
      { status: 400 }
    );
  }

  try {
    const comments = await prisma.comment.findMany({
      where: {
        projectId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { error: "Error fetching comments" },
      { status: 500 }
    );
  }
}
