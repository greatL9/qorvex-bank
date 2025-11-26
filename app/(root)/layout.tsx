import { MobileNav } from "@/components/MobileNav";
import { Sidebar } from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Great", lastName: "Lucky" };

  return (
    <main className="flex h-screen w-full">
      <Sidebar user={loggedIn?.firstName} />
      <div className="size-full flex-col">
        <div className="root-layout shadow-creditCard">
          <Image src="/icons/lo.png" alt="logo" width={30} height={30} />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
