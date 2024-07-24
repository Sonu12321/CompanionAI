import { Navbar } from "@/components/Nabar";
import Sidebar from "@/components/Sidebar";
// import { Sidebar } from "lucide-react";
// import { Children } from "react";

const RootLayout = ({
    children
}:{
    children: React.ReactNode
})=>{
    return (
        <div className="h-full">
            <Navbar/>
            <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
                <Sidebar/>
            </div>
            <main className="md:pl-20 pt-20 h-full">
            {children}
            </main>
        </div>
    )
}
export default RootLayout