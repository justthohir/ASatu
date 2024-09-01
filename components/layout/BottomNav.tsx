import Image from "next/image"
import HomeBold from "@public/assets/icons/home-bold.svg"
import SearchO from "@public/assets/icons/search-o.svg"
import Nginfo from "@public/assets/icons/nginfo.png"
import NotifO from "@public/assets/icons/notif-o.svg"
import LetterO from "@public/assets/icons/letter-o.svg"

type Props = {}

const BottomNav = (props: Props) => {
	return (
		<div className="bottom_nav_cont fixed bottom-0 hidden w-full border-t border-solid border-light-border bg-white max-[823px]:block">
			<nav className="flex h-[60px] items-center justify-around">
				<div>
					<HomeBold width="24px" height="24px" />
				</div>
				<div>
					<SearchO width="24px" height="24px" />
				</div>
				<div className="flex justify-center ">
					<Image
						src={Nginfo}
						width="52"
						height="52"
						alt="Nginfo Button"
						quality={100}
					/>
				</div>
				<div>
					<NotifO width="24px" height="24px" />
				</div>
				<div>
					<LetterO width="24px" height="24px" />
				</div>
			</nav>
		</div>
	)
}

export default BottomNav
