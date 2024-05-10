import { NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { connectEventsDB } from "../API/connector/connector";

const connectDB = async (url: string) => {
  if(url === "events"){
    console.log("here")
    await connectEventsDB();
    console.log("here 2");
  }
}

export function middleware(request: NextRequestWithAuth) {
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin/")
  if (isAdminRoute) {
    if (!request.nextauth.token?.role) return NextResponse.rewrite(new URL("/login", request.url));
  }
  // else {
  //   const urlName = request.nextUrl.pathname.split("/api/V1/")[1]; // Split the pathname by "/api/V1/" and get the second part
  //   // connectDB(urlName)
  //   //   .then(() => {
  //   //     return NextResponse.next();
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log("error is " + error);
  //   //   });

  // }
}


export const config = {
  matcher: ["/admin/:path*", "/api/V1/:path*"]
}