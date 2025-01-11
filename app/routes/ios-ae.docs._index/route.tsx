import { Link } from "@remix-run/react";
import { ArrowLeft } from "lucide-react";

export default function IOSToolkitDocs() {
	return (
		<div className="flex flex-col min-h-screen items-center justify-start bg-gray-200 dark:bg-gray-800">
			<Link to="/" className="flex items-center font-medium text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 dark:border-transparent text-center bg-gray-50 dark:bg-transparent hover:bg-gray-100 hover:dark:bg-gray-800/35 border border-gray-200 hover:border-gray-400 hover:dark:border-gray-600/66 transition px-4 py-2 rounded-md text-lg mt-8 prose"><ArrowLeft className="mr-2 w-5 h-5" />Back</Link>
			<h1 className="text-2xl py-8 text-slate-400">iOS ✕ AE Documentation</h1>
			<div id="doc-area" className="w-auto px-2 container">
					<h2 className="text-4xl py-2">Opinionation & Spec</h2>
				<div className="prose border rounded bg-gray-50/56 mb-6 p-6 border-gray-300 dark:border-slate-200/20  dark:bg-gray-50/85">
					<p className="">This is a toolkit for creating <b className="font-semibold">faithful iOS graphics within After Effects</b>.</p>
					<p className="">The entire toolkit is made for <b className="font-semibold">1170px width</b>.</p>
					<p>Between base-iPhone/Pro and Plus/ProMax models, there is only a small height difference that can usually be dismissed; otherwise this resolution works for most modern iPhones.</p>
				</div>
					<h2 className="text-4xl py-2">Components</h2>
				<div className="prose">
					<div className="border rounded bg-gray-50/56 mb-4 p-6 border-gray-300 dark:border-slate-200/20  dark:bg-gray-50/85">
						<h3 className="text-2xl font-semibold pb-2">iOS Message (Text Bubble)</h3>
						<p className="mb-2">A comp that represents one message. It handles all message types and looks.
							<br/>
							This is an <i>"easy-to-dupe"</i> component with simple and stable controls. 
						</p>
						<p className="mb-2 pb-2">The <b className="font-semibold">fixed 1170px width</b> means it always fits perfectly – only worry about the  <b className="font-semibold">Y-Position</b> <i>(with the help of the handy guides!)</i></p>
						<h3 className="text-lg font-medium">Essential Properties</h3>
						<h4 className="font-medium">Main Controls</h4>

						<ul className="mb-2 list-inside list-disc marker:text-slate-600">
							<li>Message Text Content</li>
							<li>Message Type</li>
							<li>Show Tail</li>
							<li>Trailing Status</li>
						</ul>
						<h4 className="font-medium">Guides</h4>
						<ul className="mb-2 list-inside list-disc marker:text-slate-600">
							<li>Reply Gap Guide</li>
							<li>Concurrent Gap Guide</li>
						</ul>
						<h4 className="font-medium">Image Mode</h4>
						<ul className="mb-2 list-inside list-disc marker:text-slate-600">
							<li>Enable Image Mode</li>
							<li>Image Frame Size</li>
						</ul>
						<h4 className="font-medium">System Controls</h4>
						<ul className="list-inside list-disc marker:text-slate-600">
							<li>Dark Mode</li>
							<li>Bold Text </li>
							<li>Text Size (unfinished)</li>
						</ul>
					</div>
					<div className="border rounded bg-gray-50/56 mb-4 p-6 border-gray-300 dark:border-slate-200/20  dark:bg-gray-50/85">
						<h3 className="text-2xl font-semibold pb-2">iOS Message Timestamp</h3>
						<p className="mb-2">The message timestamps that are found between messages</p>
						<h3 className="text-lg font-medium">Essential Properties</h3>
						<ul className="mb-2 list-inside list-disc marker:text-slate-600">
							<h4 className="font-medium">Main Controls</h4>
							<li>Timestamp Type</li>
							<li>Day of Week</li>
							<li>Month</li>
							<li>Day</li>
							<li>Hour</li>
							<li>Minute</li>
						</ul>
						<h4 className="font-medium">System Controls</h4>
						<ul className="list-inside list-disc marker:text-slate-600">
							<li>Dark Mode</li>
							<li>Bold Text </li>
						</ul>
					</div>
					<div className="border rounded bg-gray-50/56 mb-4 p-6 border-gray-300 dark:border-slate-200/20  dark:bg-gray-50/85">
						<h3 className="text-2xl font-semibold pb-2">iOS Status Bar</h3>
						<p className="mb-2">A comp containing the elements for the Status Bar. Should match 1:1 if pinned to top.</p>
						<p className="mb-2">Signal & Battery levels have simple controls.</p>
						<p className="mb-2 pb-2">Made with only AE shapes; color changes and everything else are made to <i className="font-medium">just work</i>.</p>

						<h3 className="text-lg font-medium">Essential Properties</h3>

						<ul className="mb-2 list-inside list-disc marker:text-slate-600">
							<li>Battery Type</li>
							<li>Battery Level</li>
							<li>Cell Signal Level</li>
							<li>Wi-Fi Signal Level</li>
							<li>Time: Hour</li>
							<li>Time: Minute</li>
							<li>Low Power Mode</li>
						</ul>
						<h4 className="font-medium">System Controls</h4>
						<ul className="list-inside list-disc marker:text-slate-600">
							<li>Dark Mode</li>
							<li>Bold Text </li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
