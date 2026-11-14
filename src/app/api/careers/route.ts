import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, role } = body ?? {};

    if (!fullName || !email || !phone || !role) {
      return NextResponse.json({ error: 'Please provide full name, email, phone, and position.' }, { status: 400 });
    }

    // In production, integrate with ATS (e.g. Greenhouse, Lever, Workday) or send email via SendGrid/AWS SES.
    // Return success response with a unique application reference ID.
    const refId = `FB-${Date.now().toString(36).toUpperCase()}`;

    return NextResponse.json(
      {
        message: 'Application received successfully',
        referenceId: refId,
        candidateName: fullName,
        role: role,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json({ error: 'Failed to process application. Please email careers@fermacbio.in directly.' }, { status: 400 });
  }
}
