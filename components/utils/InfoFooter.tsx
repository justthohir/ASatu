import MapO from "@public/assets/icons/map-o.svg"
import RoundSeparator from "@components/utils/RoundSeparator"
import NewBadge from "@components/utils/NewBadge"

type Props = {
	isComment?: boolean
	street?: string
	city?: string
	date: string
	time: string
}

const InfoFooter = ({ isComment = false, ...props }: Props) => {
	return (
		<div className="info_footer_cont flex w-full items-center justify-start space-x-2 text-primary-base">
			{isComment ? (
				""
			) : (
				<>
					<span className="flex h-5 items-center">
						<span>
							<MapO width={18} height={18} />
						</span>
						<span className="ml-2 flex overflow-hidden text-xs font-normal">
							<div className="max-w-60 truncate max-[759px]:max-w-[60px]">
								<span>{props.street}</span>
							</div>
							<span>, {props.city}</span>
						</span>
					</span>
					<span className="flex h-5 items-center">
						<RoundSeparator />
					</span>
				</>
			)}

			<span className="ml-0 flex h-5 items-center">
				<span className="text-xs font-normal">{props.date}</span>
			</span>
			<span className="flex h-5 items-center">
				<RoundSeparator />
			</span>
			<span className="flex h-5 items-center">
				<span className="text-xs font-normal text-[#6B7385]">
					{props.time} WIB
				</span>
			</span>

			{isComment ? (
				""
			) : (
				<>
					<span className="flex h-5 items-center">
						<RoundSeparator />
					</span>
					<span className="flex h-5 items-center">
						<NewBadge />
					</span>
				</>
			)}
		</div>
	)
}

export default InfoFooter
