import { NextRequest, NextResponse } from "next/server";
import { getSession } from "next-auth/react";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/manager")) {
    const signInPage = "/manager/login";
    const errorPage = "/manager/login";

    if ([signInPage, errorPage].includes(req.nextUrl.pathname)) {
      return;
    }

    const requestForNextAuth: any = {
      headers: {
        cookie: req.headers.get("cookie"),
      },
    };

    const session: any = await getSession({ req: requestForNextAuth });

    if (session && session.user.isAdm === true) {
      return NextResponse.next();
    }

    const signInUrl = new URL(signInPage, req.nextUrl.origin);
    return NextResponse.redirect(signInUrl);
  }
}
