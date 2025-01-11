import MessageBubble from "~/components/message-bubble";
import GoodButton from "~/components/ui/good-button";
import { Link } from "@remix-run/react";
import { ArrowDown, BadgeHelp } from "lucide-react";

export default function BubbleBento() {
	return (
		<div className="pt-10 pb-8 sm:pt-16 sm:pb-16 selection:bg-gray-500/20">
			<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 justify-center">
				<div className="flex flex-col w-full items-center gap-4">
					<MessageBubble animated><h2 className="text-center text-base/7 font-semibold">Phordan's</h2></MessageBubble>
					<MessageBubble type="incoming" animated>
						<p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
							iOS <span className="font-light">✕ AE</span>
						</p>
					</MessageBubble>
					<h2 className="text-center text-base/7 text-gray-500 font-semibold leading-5 opacity-100 starting:opacity-0 transition-all duration-700 ease-in-out">
						After Effects Expression <br/> Template / Toolkit
					</h2>
				</div>
				<div className="mt-6 grid gap-4 sm:mt-6 lg:grid-cols-3 lg:grid-rows-2">
					<div className="relative lg:row-span-2">
						<div className="absolute inset-px rounded-lg bg-white/91 lg:rounded-l-[2rem]"></div>
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
							<div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
								<p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
									Supports all iOS Message Types
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
									Incoming. Outgoing. iMessage. SMS. All in one comp template.  
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
									Responsive and simple to use.</p>
							</div>
							<div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
								
									<img
										className="size-fit object-cover object-top translate-y-10 scale-95 dark:shadow-lg"
										src="assets/images/example.png"
										alt=""
									/>
							
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
					</div>
					<div className="relative max-lg:row-start-1">
						<div className="absolute inset-px rounded-lg bg-white/91 max-lg:rounded-t-[2rem]"></div>
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
							<div className="px-8 pt-8 sm:px-10 sm:pt-10">
								<p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">As close as I could get</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
									Shapes, Gaps, Colors, and Text match iOS reference as closely as possible.
								</p>
							</div>
							<div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
								<img
									className="w-full max-lg:max-w-xs rounded shadow-lg"
									src="assets/images/reference.png"
									alt=""
								/>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
					</div>
					<div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
						<div className="absolute inset-px rounded-lg bg-white/91"></div>
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
							<div className="px-8 pt-8 sm:px-10 sm:pt-10">
								<p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Stack Easier with Guides</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
									Toggle the different handy guides to build conversations with ease.
								</p>
							</div>
							<div className="@container flex flex-1 items-center justify-center max-lg:py-6 lg:pb-2">
								<img
									className="h-[min(200px,40cqw)] object-cover rounded dark:shadow-lg"
									src="assets/images/guides.png"
									alt="Toggle handy guides for replies and concurrent message spacing."
								/>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
					</div>
					<div className="relative lg:row-span-2">
						<div className="absolute inset-px rounded-lg bg-white/91 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
							<div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
								<p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
									Easy Property Controls
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
									Simple properties allow you to populate each message instance. <br/><br/>
									Revisions are now less hassle than ever before.
								</p>
							</div>
							<div className="@container flex flex-1 min-h-[30rem] w-full grow items-center justify-center">
								<img 
								className="w-full max-lg:max-w-xs rounded scale-95 shadow-lg"
								src="assets/images/controls.png"
								alt="Text Bubble Property Controls"
								
								/>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] ring-1 shadow-sm ring-black/5"></div>
					</div>
				</div>
			</div>
						
			<div className="flex flex-col gap-3 text-center w-full items-center justify-center p-2 pt-16">
				<GoodButton><span className="font-medium text-gray-700 ">.aep Project</span> File – <span className="font-medium text-gray-700 ">$6,000</span></GoodButton>
				<GoodButton className="pb-1.75"><span className="font-medium ">Make it Yourself <span className="text-gray-500 group-hover:text-gray-700 transition font-light">$0.00</span> <ArrowDown className="inline-block w-5 h-5 pb-1 ml-1 text-gray-500 group-hover:text-gray-700 transition" /></span></GoodButton>
				<div className="w-12 m-3 h-[2px] shadow-xs bg-gray-400/47 border-b border-gray-400"/>
				<Link to="/ios-ae/docs"><GoodButton className="pb-1 pt-1 pr-2 pl-3"><span className="font-medium text-gray-600">How to Use <BadgeHelp className="inline-block w-5 h-5 pb-1 ml-1 text-gray-500 group-hover:text-gray-700 transition" /></span></GoodButton></Link>
				<div className="space-y-6 border rounded p-3 border-slate-300 bg-slate-200/40 inset-shadow-lg mt-10">
					<p className="text-slate-800 font-semibold">I also plan to make more UI kits for After Effects.<br/> I chose text bubbles to start with because they:</p>
					<ul className="text-left text-gray-700 marker:text-gray-500 marker:text-sm marker:text-center marker:font-light marker:list-disc marker:ml-4 marker:mt-2">
						<li>• Gave me enough problems to figure out how UI could be easier in AE</li>
						<li>• Allows me to branch to the conversation / full screen UI</li>
						<li>• Starting with iOS reference will let me make generic UI kits too</li>
					</ul>
				</div>
			</div>
				</div>
	)
}


