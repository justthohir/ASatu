import Image from "next/image"
import Logo from "@public/favicon.ico"
import Profile from "@public/assets/images/profile.jpg"
import HomeBold from "@public/assets/icons/home-bold.svg"
import SearchO from "@public/assets/icons/search-o.svg"
import Nginfo from "@public/assets/icons/nginfo.png"
import NotifO from "@public/assets/icons/notif-o.svg"
import LetterO from "@public/assets/icons/letter-o.svg"

type Props = {}

const SideNav = (props: Props) => {
	return (
		<header className="hidden h-full justify-start min-[824px]:flex">
			<div className="h-screen w-[96px] p-4 py-[24px] min-[1100px]:w-[340px] min-[1100px]:pl-[40px]">
				<div className="custom_fixed_h650 flex h-full min-h-[600px] w-[64px] grow flex-col items-center justify-between">
					<div className="border_color_default h-[64px] w-[64px] rounded-full border border-solid">
						<Image
							src={Logo}
							alt="Logo"
							priority={true}
							className="h-full w-full rounded-full object-cover"
						/>
					</div>
					<nav className="border_color_default flex h-[294px] w-full flex-col items-center justify-around rounded-full border border-solid">
						<div>
							<HomeBold width="24px" height="24px" />
						</div>
						<div>
							<SearchO width="24px" height="24px" />
						</div>
						<div>
							<NotifO width="24px" height="24px" />
						</div>
						<div>
							<LetterO width="24px" height="24px" />
						</div>
						<div className="mb-[-10px] ">
							<Image src={Nginfo} width="52" height="52" alt="Nginfo" />
						</div>
					</nav>
					<div className="border_color_default h-[64px] w-[64px] rounded-full border border-solid">
						<Image
							src={Profile}
							alt="User Profile"
							quality={50}
							className="h-full w-full rounded-full object-cover"
						/>
					</div>
				</div>
			</div>
		</header>
	)
}

export default SideNav
