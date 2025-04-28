import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 ">
      <div className="h-full lg:flex flex-col ">
        <div className="text-center space-y-4 pt-16">
          <h1 className="text-2xl font-bold">Welcome Back</h1>
        </div>
        <div className="flex items-center justify-center mt-8">
        <ClerkLoaded>
          <SignIn path="/sign-in" />
        </ClerkLoaded>
        <ClerkLoading>
          <Loader2 className="animate-spin text-muted-foreground" />
        </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex itmes-center justify-center">
        <Image src="/logo.svg" alt="login" width={100} height={100} className="" />
      </div>
    </div>
  );
}
