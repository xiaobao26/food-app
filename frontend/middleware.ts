export { default } from 'next-auth/middleware';


export const config = {
    //  *: zero or more
    //  +: one or more
    //  ?: zero or one
    matcher: ['/dashboard/:path*']
}

// middleware in next-auth logic:
/**
 * export function middleware(request: NextRequest) {
 *  return NextResponse.redirect(new URL('/new-page', request.url))
 * }
 */