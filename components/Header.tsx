import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import ThemeToggler from "./ThemeToggler";

function Header() {
  return (
    <header className=" bg-slate-200 flex justify-between p-6">
      <div className=" flex justify-center items-center gap-4">
        <Image src="/dropbox-1.svg" width={50} height={50} alt="Dropbox logo" />

        <p className="font-semibold">Dropbox</p>
      </div>

      <div className="flex justify-center items-center gap-2">
        <ThemeToggler />
        <UserButton />

        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
