import { 
    Home, 
    Package, 
    ShoppingBag, 
    Search,
    MessageSquare, 
    Repeat, 
    Gavel,
    Users,
    Wallet,
    User,
    Settings,
    Gift
  } from "lucide-react";
  import { NavLink } from "@/components/NavLink";
  import {
    Sidebar as SidebarUI,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
  } from "@/components/ui/sidebar";
  
  const menuItems = [
    { title: "Dashboard", url: "/dashboard", icon: Home },
    { title: "My Offers", url: "/dashboard/offers", icon: Package },
    { title: "My Needs", url: "/dashboard/needs", icon: ShoppingBag },
    { title: "Discover", url: "/dashboard/discover", icon: Search },
    { title: "My Trades", url: "/dashboard/trades", icon: Repeat },
    { title: "Messages", url: "/dashboard/messages", icon: MessageSquare },
    { title: "Auctions", url: "/dashboard/auctions", icon: Gavel },
    { title: "Communities", url: "/dashboard/communities", icon: Users },
    { title: "Barter Credits", url: "/dashboard/credits", icon: Wallet },
    { title: "Referrals", url: "/dashboard/referrals", icon: Gift },
  ];
  
  const bottomMenuItems = [
    { title: "Profile", url: "/dashboard/profile", icon: User },
    { title: "Settings", url: "/dashboard/settings", icon: Settings },
  ];
  
  export function Sidebar() {
    const { open } = useSidebar();
  
    return (
      <SidebarUI className={open ? "w-64" : "w-16"} collapsible="icon">
        <SidebarContent>
          <div className="px-3 py-4">
            <div className="flex items-center gap-2 px-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-trade-gradient">
                <Repeat className="h-5 w-5 text-white" />
              </div>
              {open && (
                <span className="text-xl font-bold bg-trade-gradient bg-clip-text text-transparent">
                  eBarter
                </span>
              )}
            </div>
          </div>
  
          <SidebarGroup>
            <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        end={item.url === "/dashboard"}
                        className="hover:bg-sidebar-accent"
                        activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                      >
                        <item.icon className="h-5 w-5" />
                        {open && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
  
          <SidebarGroup className="mt-auto">
            <SidebarGroupContent>
              <SidebarMenu>
                {bottomMenuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className="hover:bg-sidebar-accent"
                        activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                      >
                        <item.icon className="h-5 w-5" />
                        {open && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </SidebarUI>
    );
  }
  