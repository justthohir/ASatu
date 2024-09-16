import MapO from "@public/assets/icons/map-o.svg"
import ReplyO from "@public/assets/icons/reply-o.svg"
import ReInfo from "@public/assets/icons/reinfo-bold.svg"
import Upvote from "@public/assets/icons/upvote-bold.svg"
import Downvote from "@public/assets/icons/downvote-o.svg"
import SendBtn from "@public/assets/icons/send.png"
import AttachmentO from "@public/assets/icons/attachment-o.svg"

import Image from "next/image"
import HeaderContent from "./HeaderContent"
import RoundSeparator from "@components/utils/RoundSeparator"
import NewBadge from "@components/utils/NewBadge"
import IconNText from "@components/utils/IconNText"
import RoundImage from "@components/utils/RoundImage"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import InfoFooter from "@components/utils/InfoFooter"

type Props = {
	srcProfile: StaticImport
	name: string
	userName: string
	postText: string
	date: string
	time: string
	countReply: number
}

const ContentComment = (props: Props) => {
	return (
		<div className="content_comment_cont mb-6 border-b border-solid border-light-border">
			<HeaderContent
				src={props.srcProfile}
				width={28}
				heightCont={32}
				name={props.name}
				userName={props.userName}
				sizeName="text-xs"
				sizeUserName="text-[10px]"
			/>

			<div className="comment_main_cont mb-[14px] w-full rounded-2xl bg-[#F4F6F9] p-5">
				<div className="comment_text_cont mb-6 max-h-32 w-full overflow-hidden">
					<p className="line-clamp-6 text-[13px] font-normal">
						{props.postText}
					</p>
				</div>

				<InfoFooter isComment={true} date={props.date} time={props.time} />
			</div>

			<div className="comment_action_footer_cont mb-6 w-full">
				<div className="flex max-h-[18px] w-full items-center justify-between">
					<button>
						<IconNText
							sizeCont={18}
							icon={<ReplyO width={18} height={18} />}
							text="Reply"
							count={props.countReply}
							textColor="text-primary-base"
							isComment={true}
						/>
					</button>
				</div>
			</div>
		</div>
	)
}

export default ContentComment
