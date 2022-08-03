import Link from "next/link"

export default function MovieSearchCard({image,title,url}){
    const imgUrl = process.env.NEXT_PUBLIC_PIC
    
    return (
        <Link href={"/"+url}>
            <div className="flex cursor-pointer p-2 gap-2 group hover:bg-blue-300/50 items-center justify-end">
                <span className="flex-grow text-[14px] text-left text-blue-400  group-hover:text-black">{title}</span>
                <img src={imgUrl+"/"+image+".jpg"} alt={title}/>
            </div>
        </Link>
    )
}