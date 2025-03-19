import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req) {
  const body = await req.json();

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    if (!process.env.GOOGLE_SHEET_ID) {
      return NextResponse.json({
        success: false,
        message: "Spreadsheet ID is missing",
      });
    }

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:N1",
      valueInputOption: "USER-ENTERED",
      requestBody: {
        values: [
          [
            body.firstName,
            body.lastName,
            body.phone,
            body.email,
            body.address,
            body.dob,
            body.age,
            body.doctor,
            body.consultationReason,
            body.customReason,
            body.description,
            body.date,
            body.time,
            body.isNotRobot,
          ],
        ],
      },
    });

    return NextResponse.json({
      data: response.data,
      success: true,
      message: "Data successfully submitted",
    });
  } catch (error) {
    console.error("Google Sheets API Error:", error.message, error.stack);
    return NextResponse.json({
      success: false,
      message: "Failed to submit appointment! Try again later",
    });
  }
}
