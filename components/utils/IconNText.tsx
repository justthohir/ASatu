import { ReactNode } from "react"

type Props = {
	sizeCont: number
	icon: ReactNode
	text: string
	count: number
	textColor: string
	isComment?: boolean
}

const IconNText = (props: Props) => {
	return (
		<div className="flex items-center justify-start space-x-[6px]">
			<div className={`h-[${props.sizeCont}px] w-[${props.sizeCont}px]`}>
				{props.icon}
			</div>
			<div className={`flex items-center text-xs font-bold ${props.textColor}`}>
				{props.isComment ? (
					<span>{props.text}&nbsp;</span>
				) : (
					<span className="hidden min-[760px]:block">{props.text}&nbsp;</span>
				)}
				<span>{`(${props.count})`}</span>
			</div>
		</div>
	)
}

IconNText.defaultProps = {
	isComment: false,
}

export default IconNText
