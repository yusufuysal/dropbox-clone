import { auth } from "@clerk/nextjs/server";

function page() {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  if (userId) {
    return (
      <div>
        <p className=" text-black">this is the dashborad</p>
      </div>
    );
  }
}

export default page;
