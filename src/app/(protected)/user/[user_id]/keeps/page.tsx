import List from "../List";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUserKeepStore } from "@/utils/stores";

async function page() {
  const data = await getUserKeepStore("Z5FaMtK2wqNnskIcgfQPxC5nspc2");

  return (
    <>
      <h1>Keep page</h1>

      <List items={data} />
    </>
  );
}

export default page;