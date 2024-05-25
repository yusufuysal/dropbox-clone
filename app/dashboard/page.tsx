import Header from "@/components/Header";
import { RedirectToSignIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

function page() {
  const { userId } = auth();
  if (!userId) {
    return (
      <div className=" min-h-full flex justify-center items-center">
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </div>
    );
  }

  return (
    <>
      <Header />
    </>
  );
}

export default page;
