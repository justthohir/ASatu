import ArrowLeft from "@public/assets/icons/arrow-left.svg"
import Traffic1 from "@public/assets/images/posts/traffic1.jpg"
import Traffic2 from "@public/assets/images/posts/traffic2.jpg"
import Traffic3 from "@public/assets/images/posts/traffic3.jpg"
import MapO from "@public/assets/icons/map-o.svg"
import ReplyO from "@public/assets/icons/reply-o.svg"
import ReInfo from "@public/assets/icons/reinfo-bold.svg"
import Upvote from "@public/assets/icons/upvote-bold.svg"
import Downvote from "@public/assets/icons/downvote-o.svg"
import SendBtn from "@public/assets/icons/send.png"
import AttachmentO from "@public/assets/icons/attachment-o.svg"

import Profile from "@public/assets/images/users/profile.jpg"
import User1 from "@public/assets/images/users/user1.jpg"
import User2 from "@public/assets/images/users/user2.jpg"
import User3 from "@public/assets/images/users/user3.jpg"

import Image from "next/image"
import SideNav from "./SideNav"
import BottomNav from "./BottomNav"
import HeaderContent from "./HeaderContent"
import RoundSeparator from "@components/utils/RoundSeparator"
import NewBadge from "@components/utils/NewBadge"
import IconNText from "@components/utils/IconNText"
import RoundImage from "@components/utils/RoundImage"
import ContentPost from "./ContentPost"
import ModalContent from "./ModalContent"
import ContentComment from "./ContentComment"

type Props = {}

const MainLayout = (props: Props) => {
	return (
		<>
			<ModalContent />
			<div className="base_cont m-auto">
				<SideNav />
				<main className="main_cont min-h-screen max-[823px]:mb-[60px]">
					<div className="flex min-h-screen w-[425px] flex-col border-x border-solid border-light-border min-[760px]:w-[760px]">
						<div className="main_header_cont flex h-[52px] w-full border-b border-solid border-light-border p-4 text-sm font-semibold">
							<span className="mr-2 flex h-5 items-center">
								<button>
									<ArrowLeft width="18px" height="18px" />
								</button>
							</span>
							<span className="flex h-5 items-center">
								<p>Information</p>
							</span>
						</div>

						<div className="main_content_cont flex min-h-screen w-full px-6 py-6 min-[760px]:px-[98px]">
							<div className="h-full w-full">
								<ContentPost
									srcProfile={Profile}
									name="Giulio Sudjatmiko"
									userName="@gegedjatmiko"
									postText="Info! info! macet total gaes, uda kejebak setengah jam
										disini, gak jalan sama sekali dari tadi. Ini aku lagi di
										perempatan besar jemursari arah ke rungkut industri,
										info dong yang lagi disekitar sini, macet kenapa nih?"
									street="Jl. Jemursari"
									city="SBY"
									date="01/09/2024"
									time="16:20"
									countReply={2}
								/>

								<ContentComment
									srcProfile={User2}
									name="Jane Darsonoe"
									userName="@janedoe"
									postText="asli parah ini muacet total!!!, aku uda kejebak 1 jam, posisiku di depan pabrik sampoerna."
									date="01/09/2024"
									time="16:25"
									countReply={2}
								/>

								<ContentComment
									srcProfile={User3}
									name="Levi Luciana Fahreza"
									userName="@lelufahreza"
									postText="Waduh macet total ya, ada jalan alternatif lain yg deket kah? aku biasanya ke rungkut lewat jemursari soalnya."
									date="01/09/2024"
									time="16:27"
									countReply={0}
								/>
							</div>
						</div>
					</div>
				</main>

				<aside className="aside_cont hidden min-h-[700px] w-[340px] min-[1440px]:flex"></aside>
			</div>
			<BottomNav />
		</>
	)
}

export default MainLayout
