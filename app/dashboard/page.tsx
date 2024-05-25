import Header from "@/components/Header";
import { auth } from "@clerk/nextjs/server";

function page() {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  if (userId) {
    return (
      <div>
        <Header />
        <p className=" text-black">this is the dashborad</p>
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
