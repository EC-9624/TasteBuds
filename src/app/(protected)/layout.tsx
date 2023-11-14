import BottomNav from "../components/BottomNav";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Session, getServerSession } from "next-auth";

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  const session: Session | null = await getServerSession(authOptions);
  const user = session?.user; // ログインしていなければnullになる。
  return (
    <section>
      <p className='overflow-x-auto'>{`${JSON.stringify(user)}`}</p>
      {/* Include shared UI here e.g. a header or sidebar */}
      {children}
      <BottomNav session={session} />
    </section>
  );
}
