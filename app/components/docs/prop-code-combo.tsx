import { CodeBlock } from "~/components/code-block";


export interface codeComboProps {
	title: string,
	description: string,
	codeTitle: string,
	code: string
}

const PropCodeCombo = (props: codeComboProps) => {
	return (
		<div className="px-10 border-b border-y-gray-500/20 bg-gray-900/43 py-3">
			<h3 className="text-white text-3xl font-light py-1">{props.title}</h3>
			<div className="p-4">
				<CodeBlock
					code={props.code}
					language="jsx"
					filename={props.codeTitle}
				/>
			</div>
		</div>
)}


export default PropCodeCombo