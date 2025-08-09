import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    const mantenimiento = true;

    if (mantenimiento && !request.nextUrl.pathname.startsWith("/mantenimiento")) {
        return NextResponse.redirect(new URL("/mantenimiento", request.url));
    }

    return NextResponse.next();
}
