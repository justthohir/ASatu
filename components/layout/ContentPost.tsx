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

import Image from "next/image"
import HeaderContent from "./HeaderContent"
import RoundSeparator from "@components/utils/RoundSeparator"
import NewBadge from "@components/utils/NewBadge"
import IconNText from "@components/utils/IconNText"
import RoundImage from "@components/utils/RoundImage"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

type Props = {
	isComment?: boolean
	srcProfile: StaticImport
	name: string
	userName: string
	postText: string
	countReply: number
}

const ContentPost = ({ isComment = false, ...props }: Props) => {
	let prefix = isComment ? "reply" : "post"
	let contClass = `content_${prefix}_cont`
	let widthPostHeader = isComment ? 36 : 28
	let heightContPostHeader = isComment ? 38 : 32
	let sizeName = isComment ? "text-sm" : "text-xs"
	let sizeUserName = isComment ? "text-xs" : "text-[10px]"
	let isShow = isComment ? "hidden" : "flex"

	return (
		<div
			className={`${contClass} mb-6 border-b border-solid border-light-border`}
		>
			<HeaderContent
				src={props.srcProfile}
				width={widthPostHeader}
				heightCont={heightContPostHeader}
				name={props.name}
				userName={props.userName}
				sizeName={sizeName}
				sizeUserName={sizeUserName}
			/>

			<div
				className={`${prefix}_main_cont mb-[14px] w-full rounded-2xl bg-[#F4F6F9] p-5`}
			>
				<div
					className={`${prefix}_text_cont mb-6 max-h-32 w-full overflow-hidden`}
				>
					<p className="line-clamp-6 text-[13px] font-normal">
						{props.postText}
					</p>
				</div>

				<div
					className={`${prefix}_image_cont mb-6 ${isShow} max-h-[172px] w-full justify-between space-x-1`}
				>
					<div className="flex shrink grow items-center justify-center">
						<Image
							src={Traffic1}
							alt="Post Info Image"
							className="w-full rounded-2xl object-cover"
						/>
					</div>
					<div className="flex shrink grow items-center justify-center">
						<Image
							src={Traffic2}
							alt="Post Info Image"
							className="w-full rounded-2xl object-cover"
						/>
					</div>
					<div className="relative flex shrink grow items-center justify-center">
						<Image
							src={Traffic3}
							alt="Post Info Image"
							className="w-full rounded-2xl object-cover"
						/>
						<div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-primary-base bg-opacity-40">
							<span className="text-[28px] font-medium text-white">+3</span>
						</div>
					</div>
				</div>

				<div
					className={`${prefix}_footer_cont flex w-full items-center justify-start space-x-2 text-primary-base`}
				>
					<span className={`${isShow} h-5 items-center`}>
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
					<span className={`${isShow} h-5 items-center`}>
						<RoundSeparator />
					</span>
					<span className="ml-0 flex h-5 items-center">
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
					<span className={`${isShow} h-5 items-center`}>
						<RoundSeparator />
					</span>
					<span className={`${isShow} h-5 items-center`}>
						<NewBadge />
					</span>
				</div>
			</div>

			<div className={`${prefix}_footer_cont mb-6 w-full`}>
				<div className="flex max-h-[18px] w-full items-center justify-between">
					<IconNText
						sizeCont={18}
						icon={<ReplyO width={18} height={18} />}
						text="Reply"
						count={props.countReply}
						textColor="text-primary-base"
						isComment={isComment}
					/>
					{isComment ? (
						""
					) : (
						<>
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
						</>
					)}
				</div>
			</div>

			<div
				className={`${prefix}_comment_cont mb-6 ${isShow} w-full items-center justify-start space-x-[10px]`}
			>
				<div className="flex h-11 w-[36px] items-center">
					<RoundImage
						src={props.srcProfile}
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
	)
}

export default ContentPost
