import Link from "next/link"
import header_logo from "@/public/header/header_logo.svg"
import Image from "next/image"

const NotFound = () => {
  return (
    <div className="h-[100svh] flex flex-col items-center">
      <header className="w-[90vw] fixed h-[64px] flex items-center">
        <Link href={"/"}>
          <Image
            src={header_logo}
            alt={"404_logo"}
            className="h-[50px] w-auto"
          ></Image>
        </Link>
      </header>
      <div className="flex items-center justify-center flex-1">
        <h1 className="text-4xl font-bold text-center ">
          Ошибка 404: Страница не найдена
        </h1>
      </div>
    </div>
  )
}

export default NotFound
