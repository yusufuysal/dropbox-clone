import { UserButton } from "@clerk/nextjs";

function page() {
  return (
    <div>
      <UserButton />
      this will be a protected dashboard page
    </div>
  );
}

export default page;
