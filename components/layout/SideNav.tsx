import Image from "next/image"
import Logo from "@public/favicon.ico"
import Profile from "@public/assets/images/users/profile.jpg"
import HomeBold from "@public/assets/icons/home-bold.svg"
import SearchO from "@public/assets/icons/search-o.svg"
import Nginfo from "@public/assets/icons/nginfo.png"
import NotifO from "@public/assets/icons/notif-o.svg"
import LetterO from "@public/assets/icons/letter-o.svg"

import RoundImage from "@components/utils/RoundImage"

type Props = {}

const SideNav = (props: Props) => {
	return (
		<header className="side_nav_cont hidden h-full justify-start min-[856px]:flex">
			<div className="h-screen w-[96px] p-4 py-[24px] min-[1440px]:w-[340px] min-[1440px]:pl-[40px]">
				<div className="cont_fixed_h650 flex h-full min-h-[600px] w-[64px] grow flex-col items-center justify-between">
					<RoundImage
						src={Logo}
						height={64}
						width={64}
						alt="ASatu Logo"
						quality={50}
					/>

					<nav className="flex h-[294px] w-full flex-col items-center justify-around rounded-full border border-solid border-light-border">
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
						<div className="relative mb-[-10px] inline-block">
							<button type="button">
								<Image
									src={Nginfo}
									width="52"
									height="52"
									alt="Nginfo Button"
									quality={100}
								/>
							</button>
							<p className="absolute left-[70px] top-2 flex h-[34px] w-[62px] items-center justify-center rounded-lg bg-primary-base p-4 text-white">
								<span className="text-xs font-semibold">Nginfo</span>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="absolute -left-2 top-1/2 h-5 w-4 -translate-y-1/2 rotate-45 transform fill-current text-primary-base"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
								</svg>
							</p>
						</div>
					</nav>

					<RoundImage
						src={Profile}
						height={64}
						width={64}
						alt="User Photo"
						quality={100}
					/>
				</div>
			</div>
		</header>
	)
}

export default SideNav
