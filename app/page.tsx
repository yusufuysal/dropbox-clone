import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>homepage</h1>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}
