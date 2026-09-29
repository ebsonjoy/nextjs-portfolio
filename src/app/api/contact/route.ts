import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message content is required.' }, { status: 400 });
    }

    // Only confirm delivery when the contact relay accepts the message.
    try {
      const externalApi = 'https://portfolio-contact-api-lwkd.onrender.com/api/contact';
      const externalResponse = await fetch(externalApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
        signal: AbortSignal.timeout(5000),
      });

      if (externalResponse.ok) {
        return NextResponse.json({ success: true, message: 'Message sent successfully.' });
      }
    } catch {
      // Return a delivery failure so the visitor can use the email link.
    }

    return NextResponse.json(
      { error: 'Your message could not be delivered. Please email ebsonjoy721@gmail.com directly.' },
      { status: 502 }
    );
  } catch (error) {
    console.error('API Contact route error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please reach out via email directly.' },
      { status: 500 }
    );
  }
}
