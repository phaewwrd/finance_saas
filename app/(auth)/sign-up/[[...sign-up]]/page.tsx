import { ClerkLoaded, ClerkLoading, SignIn, SignUp } from "@clerk/nextjs";
import { Loader2 } from "lucide-react"

export default function Page(){
    return (
      <div className="flex flex-col gap-4 place-items-center">
      <h1 className="text-2xl font-bold">Welcome Back</h1>
      <ClerkLoaded>
      <SignUp   path="/sign-up"/>
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className="animate-spin" />
      </ClerkLoading>

      </div>
    )
  }
  
