import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";

function Header() {
  return (
    <header className=" bg-slate-200 flex justify-between p-6">
      <Link href="/" className=" flex justify-center items-center gap-4">
        <Image src="/dropbox-1.svg" width={50} height={50} alt="Dropbox logo" />

        <p className="font-bold text-xl">Dropbox</p>
      </Link>

      <div className="flex justify-center items-center gap-2">
        <ThemeToggler />
        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
