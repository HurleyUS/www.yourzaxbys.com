// TODO: Replace with actual project outline when _project file is created
const outline = {
  private: [] as Array<{
    anchor: string;
    href: string;
    title: string;
    items?: Array<{
      anchor: string;
      href: string;
      title: string;
    }>;
  }>,
};
import { Link } from "@/components/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";
import { cookies } from "next/headers";
import Image from "next/image";
import Navigation from "./public/navbar";

export default async function PortalSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <Sidebar>
        <SidebarHeader className="p-md text-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-full p-md"
            />
          </Link>
        </SidebarHeader>
        <SidebarContent className="p-md">
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {outline.private.map((item) => (
                  <SidebarMenuItem key={item.anchor}>
                    <Link href={item.href} title={item.title}>
                      {item.anchor}
                    </Link>
                    {item.items && (
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuItem key={subItem.anchor}>
                            <Link href={subItem.href} title={subItem.title}>
                              {subItem.anchor}
                            </Link>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenuSub>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-md">
          <SidebarMenu>
            <SidebarMenuItem>
              <UserButton />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <main className="grow p-md">
        <Navigation>{children}</Navigation>
      </main>
    </SidebarProvider>
  );
}
