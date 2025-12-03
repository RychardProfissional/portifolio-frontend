import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const form = new FormData();
    form.append("entry.675301023", name);
    form.append("entry.225627443", email);
    form.append("entry.1224766782", message);

    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSctC9YTO5Yod-3JOm9AsTLGWgVa2sSBHJ-13gbfJ_uRs250Xg/formResponse",
      {
        method: "POST",
        body: form,
        mode: "no-cors",
      }
    );

    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso!",
    });
  } catch (error) {
    console.error("Erro ao enviar para Google Forms:", error);
    return NextResponse.json(
      { success: false, message: "Erro ao enviar mensagem." },
      { status: 500 }
    );
  }
}
