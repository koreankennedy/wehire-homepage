import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, phone, name, userType } = body;

    if (!email) {
      return NextResponse.json(
        { error: "이메일은 필수 항목입니다." },
        { status: 400 }
      );
    }

    // Supabase에 데이터 삽입
    const { data, error } = await supabase
      .from("waitlist")
      .insert([
        {
          email,
          phone: phone || null,
          name: name || null,
          user_type: userType || null,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      throw error;
    }

    console.log("New waitlist entry:", data);

    return NextResponse.json(
      { success: true, data },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { error: "등록 중 오류가 발생했습니다. 다시 시도해주세요." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { count, error } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    if (error) throw error;

    return NextResponse.json({ count: count || 0 });
  } catch (error) {
    console.error("Waitlist count error:", error);
    return NextResponse.json({ count: 0 });
  }
}
