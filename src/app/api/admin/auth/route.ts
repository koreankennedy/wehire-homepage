import { NextResponse } from "next/server";

const ADMIN_PASSWORD = "wehire2024!";

export async function POST(request: Request) {
  try {
    const text = await request.text();
    const body = JSON.parse(text);
    const { password } = body;

    if (password === ADMIN_PASSWORD) {
      const response = NextResponse.json({ success: true });

      response.cookies.set("admin_auth", "authenticated", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24,
        path: "/",
      });

      return response;
    }

    return NextResponse.json(
      { error: "비밀번호가 올바르지 않습니다." },
      { status: 401 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Auth error:", errorMessage);
    return NextResponse.json(
      { error: `인증 오류: ${errorMessage}` },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const cookie = request.headers.get("cookie");
  const isAuthenticated = cookie?.includes("admin_auth=authenticated");

  return NextResponse.json({ authenticated: isAuthenticated });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });

  response.cookies.set("admin_auth", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });

  return response;
}
