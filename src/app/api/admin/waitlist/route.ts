import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Check authentication
  const cookie = request.headers.get("cookie");
  const isAuthenticated = cookie?.includes("admin_auth=authenticated");

  if (!isAuthenticated) {
    return NextResponse.json(
      { error: "인증이 필요합니다." },
      { status: 401 }
    );
  }

  try {
    const { data, error } = await supabase
      .from("waitlist")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase fetch error:", error);
      throw error;
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Admin waitlist fetch error:", error);
    return NextResponse.json(
      { error: "데이터를 불러오는데 실패했습니다." },
      { status: 500 }
    );
  }
}
