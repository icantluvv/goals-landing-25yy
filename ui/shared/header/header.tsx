import Link from "next/link"
import Image from "next/image"

import roundLogo from "@/public/header/round-logo.svg"

const Header = () => {
    return (
        <header className="fixed top-5 w-full flex justify-center gap-[24px] min-h-[80px] items-center z-[9999]">
            <div className="flex items-center shadow-sm bg-white gap-6 w-full px-[30px] h-[75px] max-w-[850px] rounded-[20px]">
                <Link href={"/"} className="w-[40px] h-[40px]">
                    <Image src={roundLogo} alt={"header-logo"} />
                </Link>

                <div className="bg-black/15 h-8 w-[1px]" />

                <div className="max-w-[1400px] flex gap-[40px]">
                    <Link href={"/business"}>Бизнесу</Link>
                    <Link href={"/clients"}>Клиентам</Link>
                    <Link href={"/blog"}>Блог</Link>
                    <Link href={"/contacts"}>Контакты</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
