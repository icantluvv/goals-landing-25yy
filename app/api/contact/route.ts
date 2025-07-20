import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    })

    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.SMTP_FROM_EMAIL,
      subject: "Новое сообщение с сайта",
      text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
      html: `<p><strong>Имя:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Сообщение:</strong><br>${message}</p>`
    })

    return NextResponse.json({ success: true })
  } catch {
    console.error("Ошибка при отправке письма:")
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 })
  }
}