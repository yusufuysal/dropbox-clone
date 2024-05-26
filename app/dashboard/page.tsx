import Dropzone from "@/components/Dropzone";
import { auth } from "@clerk/nextjs/server";

function page() {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  if (userId) {
    return (
      <div>
        <Dropzone />
      </div>
    );
  }
}

export default page;
