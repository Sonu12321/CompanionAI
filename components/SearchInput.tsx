"use client"
import qs from "query-string"
import { Search } from "lucide-react"
import { Input } from "./ui/input"
import { useParams, useRouter } from "next/navigation"
import { ChangeEventHandler, useEffect, useState } from "react"
import { useDebounce } from "@/Hooks/debounce"

export const SearchInput = () => {
    const router = useRouter();
    const searchParams = useParams(); // Get route parameters as an object
    const categoryId = searchParams.categoryId; // Access parameters directly
    const name = searchParams.name; // Access parameters directly

    const [value,setValue] = useState(name || "")
    const debounce  = useDebounce<string>(value,500)
    const onChange : ChangeEventHandler<HTMLInputElement> = (e)=>{
        setValue(e.target.value)
    }
    useEffect(()=>{
        const query={
            name:debounce,
            categoryId:categoryId
        }
        const url = qs.stringifyUrl({
            url:window.location.href,
            query
        },{skipEmptyString:true,skipNull:true})
        router.push(url)
    },[debounce,router,categoryId])
    return (
        <div className="relative">
            <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
            <Input
            onChange={onChange}
            value={value}
                placeholder="Search .."
                className="pl-10 bg-primary"
            />
        </div>
    )
}
