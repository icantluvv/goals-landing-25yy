import Link from "next/link"
import { useNavigationStateStore } from "@/store/navigationStore"
import { useScrollSpy } from "@/lib/useScrollSpy"
import Typography from "@/ui/core/Typography/Typography"

const sections = ["about", "forbusiness", "tariffs", "FAQ", "connect"]

const RegularNavigation = ({ navLinks }: RegularNavigationProps) => {
    useScrollSpy(sections)
    const { chooseNavElement, setChooseNavElement } = useNavigationStateStore()

    return (
        <nav className="lg:flex gap-x-4 flex-1 hidden items-center h-[64px]">
            <div className={` flex gap-x-6 `}>
                {navLinks.map(({ id, label }) => (
                    <Link
                        key={id}
                        href={id}
                        onClick={() => setChooseNavElement(id)}
                        className={`${
                            chooseNavElement === id ? "text-PrimaryBlack" : "text-PrimaryBlack/50"
                        } text-[0.875rem]  hover:text-PrimaryBlack`}
                    >
                        <Typography variants="p">{label}</Typography>
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default RegularNavigation

interface RegularNavigationProps {
    navLinks: { id: string; label: string }[]
}
