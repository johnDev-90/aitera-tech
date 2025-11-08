import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
   const {name, email, message} = body
    const response = await fetch(`${process.env.HUBSPOT_API}`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
             "Authorization": `Bearer ${process.env.BEARER}`
        },body:JSON.stringify(body)
    });

    const hubspotRes = await response.json()

    console.log(hubspotRes)


    return NextResponse.json({ ok: true, received: body }, { status: 200 });
  } catch (err) {
    console.error("Error en /api/send:", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}