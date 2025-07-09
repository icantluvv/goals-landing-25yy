import Image from "next/image"
import Link from "next/link"
import React from "react"

import copyright from "@/public/copyright.svg"
import header_logo from "@/public/header/header_logo.svg"

import Typography from "@/ui/core/Typography/Typography"
import { links, rightLinks, socialLinks } from "@/constants/footer-links"
import LinksGroup from "../_shared/footer/LinksGroup"

const Footer = () => (
  <footer className="w-full z-[8000] bg-white flex-col px-[4vw] xl:px-[15vw] text-PrimaryBlack/50 flex py-10 gap-8 xl:gap-16 text-[0.875rem] border-t border-PrimaryBlack/10">
    <div className="flex flex-wrap justify-between items-start w-full gap-8 xl:gap-16">
      <Link href="/public" className="w-full xl:w-auto flex">
        <Image src={header_logo} alt="footer_logo" className="w-auto h-[50px]" />
      </Link>
      <div className="flex gap-8">
        <LinksGroup title="Разделы и ссылки" items={links} />
        <LinksGroup title="Правила" items={rightLinks} />
      </div>
    </div>

    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-1">
        <Image src={copyright} alt="copyright" className="opacity-50" width={15} height={15} />

        <Typography variants="p">2025 Goals. Все права защищены</Typography>
      </div>

      <div className="flex items-center gap-3">
        {socialLinks.map(({ icon, alt, url }, i) => (
          <React.Fragment key={alt}>
            {i > 0 && <div className="w-[1px] h-[20px] bg-PrimaryBlack/15"></div>}
            <Link href={url}>
              <Image
                src={icon}
                alt={alt}
                width={18}
                className="opacity-50 hover:opacity-100 transition-opacity"
              />
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  </footer>
)

export default Footer
