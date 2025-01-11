import JsonCreator from "~/components/json-creator";
import { ArrowLeft } from "lucide-react";
import { Link } from "@remix-run/react";

export default function Index() {
	return (
		
		<div className="flex flex-col h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
			<Link to="/" className="flex items-center font-medium text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 dark:border-transparent text-center bg-gray-50 dark:bg-transparent hover:bg-gray-100 hover:dark:bg-gray-800/35 border border-gray-200 hover:border-gray-400 hover:dark:border-gray-600/66 transition px-4 py-2 rounded-md text-lg mt-8"><ArrowLeft className="mr-2 w-5 h-5" />Back</Link>
			<div>
				<JsonCreator />
			</div>
		</div>
	)
}