import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
    return (
      <div className="flex flex-col gap-4 place-items-center">
      <h1 className="text-2xl font-bold">Welcome Back</h1>
      <SignIn   path="/sign-in"
         routing="path"
        signUpUrl="/sign-up"
        appearance={{
          elements: {
            card: "shadow-lg border p-4",
          }
        }}
        />

      </div>
    )
  }
  
  export default SignInPage