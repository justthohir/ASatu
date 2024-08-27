import Image from "next/image"
import Logo from "@public/favicon.ico"
import Profile from "@public/assets/images/profile.jpg"
import HomeBold from "@public/assets/icons/home-bold.svg"
import SearchO from "@public/assets/icons/search-o.svg"
import Nginfo from "@public/assets/icons/nginfo.png"
import NotifO from "@public/assets/icons/notif-o.svg"
import LetterO from "@public/assets/icons/letter-o.svg"
import ArrowLeft from "@public/assets/icons/arrow-left.svg"

import SideNav from "./SideNav"
import BottomNav from "./BottomNav"

type Props = {}

const MainLayout = (props: Props) => {
	return (
		<>
			<div className="base_container m-auto">
				<SideNav />
				<main className="min-h-screen">
					<div className="border_color_default flex min-h-screen w-[320px] flex-col border-x border-solid min-[425px]:w-[425px] md:w-[760px]">
						<div className="border_color_default flex h-[52px] w-full border-b border-solid p-4 text-sm font-semibold">
							<span className="mr-2 flex h-5 items-center">
								<ArrowLeft width="18px" height="18px" />
							</span>
							<span className="flex h-5 items-center">
								<p>Informasi</p>
							</span>
						</div>
						<div className="h-[1500px] w-full"></div>
					</div>
				</main>
				<aside className="hidden min-h-[700px] w-[340px] bg-gray-200 min-[1440px]:flex"></aside>
			</div>
			<BottomNav />
		</>
	)
}

export default MainLayout
