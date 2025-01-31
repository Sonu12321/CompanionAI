"use client"

import { cn } from "@/lib/utils";
import { Home, Plus, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const Routes=[
        {
            icon:Home,
            href:"/",
            label:"Home",
            pro:false
        },
        {
            icon:Plus,
            href:"/companion/new",
            label:"Create",
            pro:true
        },
        {
            icon:Settings,
            href:"/settings",
            label:"Setting",
            pro:true
        },
    ];
    const onNavigate = (url:string,pro:boolean)=>{

        return router.push(url)
    }
  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary items-center  mt-6">
        <div className="p-3 flex-1 justify-center">
            <div className="space-y-3">
            {Routes.map((route) =>(
                <div
                key={route.href}
                className={cn("text-muted-foreground text-xs sm:text-sm md:text-base group flex p-2  w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",pathname === route.href ? "bg-primary/10 text-primary" : "")}
                onClick={()=>{
                    onNavigate(route.href,route.pro)
                }}
                >
                    <div className="flex flex-col gap-y-2 items-center flex-1">
                        <route.icon className="h-5 w-5"/>
                        {route.label}
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
}

export default Sidebar;
