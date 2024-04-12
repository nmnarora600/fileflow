import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:['/','/favicon.ico','/file.png','/f/(.*)','/api/(.*)','/audio.png','/download.jpg','/error.jpg','/filesend.jpg','/image.png','/logo.png','/notfound.jpg','/pdf.png','/video.png','/video2.png','/metalogo.jpeg']
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};