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

type Props = {}

const MainLayout = (props: Props) => {
	return (
		<>
			<div className="base_cont m-auto">
				<SideNav />
				<main className="main_cont min-h-screen max-[823px]:mb-[60px]">
					<div className="flex min-h-screen w-[425px] flex-col border-x border-solid border-light-border min-[760px]:w-[760px]">
						<div className="main_header_cont flex h-[52px] w-full border-b border-solid border-light-border p-4 text-sm font-semibold">
							<span className="mr-2 flex h-5 items-center">
								<ArrowLeft width="18px" height="18px" />
							</span>
							<span className="flex h-5 items-center">
								<p>Information</p>
							</span>
						</div>

						<div className="main_content_cont flex min-h-screen w-full px-6 py-6 min-[760px]:px-[98px]">
							<div className="h-full w-full">
								<div className="content_post_cont mb-6 border-b border-solid border-light-border">
									<HeaderContent
										src={User1}
										height={36}
										width={36}
										heightCont={38}
										name="Giulio Sudjatmiko"
										userName="@gegedjatmiko"
										sizeName="text-sm"
										sizeUserName="text-xs"
									/>

									<div className="post_main_cont mb-[14px] w-full rounded-2xl bg-[#F4F6F9] p-5">
										<div className="mb-6 max-h-32 w-full overflow-hidden">
											<p className="line-clamp-6 text-[13px] font-normal">
												Info! info! macet total gaes, uda kejebak setengah jam
												disini, gak jalan sama sekali dari tadi. Ini aku lagi di
												perempatan besar jemursari arah ke rungkut industri,
												info dong yang lagi disekitar sini, macet kenapa nih?
											</p>
										</div>
										<div className="mb-6 flex max-h-[172px] w-full justify-between space-x-1">
											<div className="post_img_cont flex shrink grow items-center justify-center">
												<Image
													src={Traffic1}
													alt="Post Info Image"
													className="w-full rounded-2xl object-cover"
												/>
											</div>
											<div className="post_img_cont flex shrink grow items-center justify-center">
												<Image
													src={Traffic2}
													alt="Post Info Image"
													className="w-full rounded-2xl object-cover"
												/>
											</div>
											<div className="post_img_cont relative flex shrink grow items-center justify-center">
												<Image
													src={Traffic3}
													alt="Post Info Image"
													className="w-full rounded-2xl object-cover"
												/>
												<div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-primary-base bg-opacity-40">
													<span className="text-[28px] font-medium text-white">
														+3
													</span>
												</div>
											</div>
										</div>
										<div className="flex w-full items-center justify-start space-x-2 text-primary-base">
											<span className="flex h-5 items-center">
												<span>
													<MapO width={18} height={18} />
												</span>
												<span className="ml-2 flex overflow-hidden text-xs font-normal">
													<div className="max-w-60 truncate max-[759px]:max-w-[60px]">
														<span>Jl.Jemursari</span>
													</div>
													<span>, SBY</span>
												</span>
											</span>
											<span className="flex h-5 items-center">
												<RoundSeparator />
											</span>
											<span className="flex h-5 items-center">
												<span className="text-xs font-normal">01/09/2024</span>
											</span>
											<span className="flex h-5 items-center">
												<RoundSeparator />
											</span>
											<span className="flex h-5 items-center">
												<span className="text-xs font-normal text-[#6B7385]">
													16:20 WIB
												</span>
											</span>
											<span className="flex h-5 items-center">
												<RoundSeparator />
											</span>
											<span className="flex h-5 items-center">
												<NewBadge />
											</span>
										</div>
									</div>

									<div className="post_footer_cont mb-6 w-full">
										<div className="flex max-h-[18px] w-full items-center justify-between">
											<IconNText
												sizeCont={18}
												icon={<ReplyO width={18} height={18} />}
												text="Reply"
												count={8}
												textColor="text-primary-base"
											/>
											<IconNText
												sizeCont={18}
												icon={<ReInfo width={18} height={18} />}
												text="Re-Info"
												count={15}
												textColor="text-primary-base"
											/>
											<IconNText
												sizeCont={18}
												icon={<Upvote width={18} height={18} />}
												text="Upvoted"
												count={35}
												textColor="text-upvote-base"
											/>
											<IconNText
												sizeCont={18}
												icon={<Downvote width={18} height={18} />}
												text="Downvote"
												count={3}
												textColor="text-primary-base"
											/>
										</div>
									</div>

									<div className="post_comment_cont mb-6 flex w-full items-center justify-start space-x-[10px]">
										<div className="flex h-11 w-[36px] items-center">
											<RoundImage
												src={Profile}
												height={36}
												width={36}
												alt="User Photo"
												quality={100}
											/>
										</div>

										<div className="relative h-11 w-[236px] min-[760px]:w-[422px]">
											<input
												type="text"
												className="block w-full rounded-lg border border-light-border p-2.5 pe-10 text-sm font-normal text-gray-base focus:border-light-border focus:outline-none focus:ring-0"
												placeholder="Info your comments"
											/>
											<div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3.5">
												<AttachmentO width={16} height={16} />
											</div>
										</div>

										<div className="flex h-11 w-[82px] items-center">
											<Image
												src={SendBtn}
												width={82}
												alt="Send Button"
												quality={100}
												priority={true}
											/>
										</div>
									</div>
								</div>

								<div className="content_reply_cont mb-6 border-b border-solid border-light-border">
									<HeaderContent
										src={User2}
										height={28}
										width={28}
										heightCont={32}
										name="Jane Darsonoe"
										userName="@janedoe"
										sizeName="text-xs"
										sizeUserName="text-[10px]"
									/>

									<div className="post_main_cont mb-[14px] w-full rounded-2xl bg-[#F4F6F9] p-5">
										<div className="mb-6 max-h-32 w-full overflow-hidden">
											<p className="line-clamp-6 text-[13px] font-normal">
												asli parah ini muacet total!!!, aku uda kejebak 1 jam,
												posisiku di depan pabrik sampoerna.
											</p>
										</div>

										<div className="flex w-full items-center justify-start space-x-2 text-primary-base">
											<span className="flex h-5 items-center">
												<span className="text-xs font-normal">01/09/2024</span>
											</span>
											<span className="flex h-5 items-center">
												<RoundSeparator />
											</span>
											<span className="flex h-5 items-center">
												<span className="text-xs font-normal text-[#6B7385]">
													16:25 WIB
												</span>
											</span>
										</div>
									</div>

									<div className="post_footer_cont mb-6 w-full">
										<div className="flex max-h-[18px] w-full items-center justify-between">
											<IconNText
												sizeCont={18}
												icon={<ReplyO width={18} height={18} />}
												text="Reply"
												count={2}
												textColor="text-primary-base"
												isComment={true}
											/>
										</div>
									</div>
								</div>

								<div className="content_reply_cont border-b border-solid border-light-border">
									<HeaderContent
										src={User3}
										height={28}
										width={28}
										heightCont={32}
										name="Levi Luciana Fahreza"
										userName="@lelufahreza"
										sizeName="text-xs"
										sizeUserName="text-[10px]"
									/>

									<div className="post_main_cont mb-[14px] w-full rounded-2xl bg-[#F4F6F9] p-5">
										<div className="mb-6 max-h-32 w-full overflow-hidden">
											<p className="line-clamp-6 text-[13px] font-normal">
												Waduh macet total ya, ada jalan alternatif lain yg deket
												kah? aku biasanya ke rungkut lewat jemursari soalnya.
											</p>
										</div>

										<div className="flex w-full items-center justify-start space-x-2 text-primary-base">
											<span className="flex h-5 items-center">
												<span className="text-xs font-normal">01/09/2024</span>
											</span>
											<span className="flex h-5 items-center">
												<RoundSeparator />
											</span>
											<span className="flex h-5 items-center">
												<span className="text-xs font-normal text-[#6B7385]">
													16:27 WIB
												</span>
											</span>
										</div>
									</div>

									<div className="post_footer_cont mb-6 w-full">
										<div className="flex max-h-[18px] w-full items-center justify-between">
											<IconNText
												sizeCont={18}
												icon={<ReplyO width={18} height={18} />}
												text="Reply"
												count={0}
												textColor="text-primary-base"
												isComment={true}
											/>
										</div>
									</div>
								</div>
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
