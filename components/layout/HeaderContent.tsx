import { StaticImport } from "next/dist/shared/lib/get-img-props"
import RoundImage from "@components/utils/RoundImage"
import DotMenu from "@public/assets/icons/dot-menu-.svg"

type Props = {
	src: StaticImport
	width: number
	heightCont: number
	name: string
	userName: string
	sizeName: string
	sizeUserName: string
}

const HeaderContent = (props: Props) => {
	return (
		<div className="post_header_cont mb-[14px] flex w-full items-center justify-between">
			<div
				className={`ph_user_cont flex h-[${props.heightCont}px] items-center`}
			>
				<RoundImage
					src={props.src}
					height={props.width}
					width={props.width}
					alt="User Photo"
					quality={100}
				/>
				<div className="ml-2 flex h-full flex-col">
					<span className={`${props.sizeName} font-semibold text-primary-base`}>
						{props.name}
					</span>
					<span className={`${props.sizeUserName} font-medium text-gray-base`}>
						{props.userName}
					</span>
				</div>
			</div>
			<div className="ph_menu_cont">
				<DotMenu width="18px" height="18px" />
			</div>
		</div>
	)
}

export default HeaderContent
