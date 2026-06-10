import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, phone, business, message } = body

  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: 'Nombre y teléfono son requeridos.' },
      { status: 400 }
    )
  }

  console.log('New lead:', { name, email, phone, business, message, at: new Date().toISOString() })

  return NextResponse.json({ ok: true, message: '¡Gracias! Te contactamos en menos de 24 horas.' })
}
