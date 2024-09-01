import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

type Props = {
	src: StaticImport
	height: number
	width: number
	alt: string
	quality: number
}

const RoundImage = (props: Props) => {
	return (
		<div className={`h-[${props.height}px] w-[${props.width}px] rounded-full`}>
			<Image
				{...props}
				alt={props.alt}
				priority={true}
				className="rounded-full object-cover"
			/>
		</div>
	)
}

export default RoundImage
