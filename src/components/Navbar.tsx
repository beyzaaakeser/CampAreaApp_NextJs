import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
	return (
		<nav className="flexBetween max-container padding-container relative z-30 py-5">
			<Link className="flex gap-1 flexCenter" href="/">
				<Image
					src="/camp.svg"
					alt="camp"
					width={50}
					height={50}
					className=""
				/>
				<h1 className={"flex pt-2 gap-1 text-2xl font-bold"}><span className="text-green-600">Let's</span><span className="text-amber-500">Camp</span></h1>
			</Link>
			
			<ul className="hidden h-full gap-12 lg:flex">
				{NAV_LINKS.map((link) => (
					<Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:text-green-500">
						{link.label}
					</Link>
				))}
			</ul>
			
			<div className="lg:flexCenter hidden">
				<Button
					type="button"
					title="Login"
					icon="/user.svg"
					variant="bg-amber-500 py-3 shadow-2xl text-green-900 px-4 item-center"
				/>
			</div>
			
			<Image
				src="menu.svg"
				alt="menu"
				width={32}
				height={32}
				className="inline-block cursor-pointer lg:hidden"
			/>
		</nav>
	)
}

export default Navbar