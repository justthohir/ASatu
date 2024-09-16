"use client"

import { useState } from "react"

type Props = {}

const ModalContent = (props: Props) => {
	const [showModal, setShowModal] = useState<string>("flex")

	const handleChange = () => {
		setShowModal("hidden")
	}

	return (
		<div className={`relative ${showModal} justify-center`}>
			<div
				className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50"
				aria-labelledby="modal-title"
				role="dialog"
				aria-modal="true"
			>
				<div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
					<span
						className="hidden sm:inline-block sm:h-screen sm:align-middle"
						aria-hidden="true"
					>
						&#8203;
					</span>

					<div className="relative inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle rtl:text-right">
						<div>
							<div className="mt-2 text-center">
								<h3
									className="text-lg font-medium capitalize leading-6 text-primary-base"
									id="modal-title"
								>
									ASatu - Note
								</h3>
								<p className="mt-2 text-sm text-gray-base">
									This project currently in development.
									<br />
									Build with NextJS and Tailwind CSS
									<br /> <br />
									Me and friends start talking about fun ideas. &quot;What if we
									have a sosial media that peoples can post information about
									traffic jam or maybe road accident, and the peoples nearby
									will verify that information&quot;.
									<br /> <br />
									And we called the idea &quot;ASatu&quot; which is slang in
									indonesia that stand for &quot;Valid Information&quot;.
								</p>
							</div>
						</div>

						<div className="mt-5 sm:flex sm:items-center sm:justify-end">
							<div className="sm:flex sm:items-center ">
								<button
									onClick={handleChange}
									className="mt-2 w-full transform rounded-md bg-primary-base px-4 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-primary-base-500 focus:outline-none focus:ring focus:ring-primary-base-500 focus:ring-opacity-40 sm:mt-0 sm:w-auto"
								>
									close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalContent
