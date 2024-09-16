import Traffic1 from "@public/assets/images/posts/traffic1.jpg"
import Traffic2 from "@public/assets/images/posts/traffic2.jpg"
import Traffic3 from "@public/assets/images/posts/traffic3.jpg"
import ReplyO from "@public/assets/icons/reply-o.svg"
import ReInfo from "@public/assets/icons/reinfo-bold.svg"
import Upvote from "@public/assets/icons/upvote-bold.svg"
import Downvote from "@public/assets/icons/downvote-o.svg"
import SendBtn from "@public/assets/icons/send.png"
import AttachmentO from "@public/assets/icons/attachment-o.svg"

import Image from "next/image"
import HeaderContent from "./HeaderContent"
import IconNText from "@components/utils/IconNText"
import RoundImage from "@components/utils/RoundImage"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import InfoFooter from "@components/utils/InfoFooter"

type Props = {
	srcProfile: StaticImport
	name: string
	userName: string
	postText: string
	street: string
	city: string
	date: string
	time: string
	countReply: number
}

const ContentPost = (props: Props) => {
	return (
		<div className="content_post_cont mb-6 border-b border-solid border-light-border">
			<HeaderContent
				src={props.srcProfile}
				width={36}
				heightCont={38}
				name={props.name}
				userName={props.userName}
				sizeName="text-sm"
				sizeUserName="text-xs"
			/>

			<div className="post_main_cont mb-[14px] w-full rounded-2xl bg-[#F4F6F9] p-5">
				<div className="post_text_cont mb-6 max-h-32 w-full overflow-hidden">
					<p className="line-clamp-6 text-[13px] font-normal">
						{props.postText}
					</p>
				</div>

				<div className="post_image_cont mb-6 flex max-h-[172px] w-full justify-between space-x-1">
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

				<InfoFooter
					street={props.street}
					city={props.city}
					date={props.date}
					time={props.time}
				/>
			</div>

			<div className="post_footer_cont mb-6 w-full">
				<div className="flex max-h-[18px] w-full items-center justify-between">
					<button>
						<IconNText
							sizeCont={18}
							icon={<ReplyO width={18} height={18} />}
							text="Reply"
							count={props.countReply}
							textColor="text-primary-base"
						/>
					</button>

					<button>
						<IconNText
							sizeCont={18}
							icon={<ReInfo width={18} height={18} />}
							text="Re-Info"
							count={15}
							textColor="text-primary-base"
						/>
					</button>
					<button>
						<IconNText
							sizeCont={18}
							icon={<Upvote width={18} height={18} />}
							text="Upvoted"
							count={35}
							textColor="text-upvote-base"
						/>
					</button>
					<button>
						<IconNText
							sizeCont={18}
							icon={<Downvote width={18} height={18} />}
							text="Downvote"
							count={3}
							textColor="text-primary-base"
						/>
					</button>
				</div>
			</div>

			<div className="post_comment_cont mb-6 flex w-full items-center justify-start space-x-[10px]">
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
					<div className="absolute inset-y-0 end-0 flex items-center pe-3.5">
						<button>
							<AttachmentO width={16} height={16} />
						</button>
					</div>
				</div>

				<div className="flex h-11 w-[82px] items-center">
					<button>
						<Image
							src={SendBtn}
							width={82}
							alt="Send Button"
							quality={100}
							priority={true}
						/>
					</button>
				</div>
			</div>
		</div>
	)
}

export default ContentPost
