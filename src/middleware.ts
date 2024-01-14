import {withAuth , NextRequestWithAuth} from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(request:NextRequestWithAuth){

    if(request.nextauth.token?.role === "admin") return NextResponse.rewrite(new URL('/admin/dashboard', request.url));
    else if(request.nextauth.token?.role === "user") return NextResponse.rewrite(new URL('/user/dashboard', request.url));
  },
  {
    callbacks:{
      authorized:({token})=>!!token
    }
  }
)

export const config={
  matcher:["/admin/dashboard", "/user/dashboard"]
}