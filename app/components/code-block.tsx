"use client"

import { useState } from "react"
import { Check, Copy } from 'lucide-react'
import { cn } from "~/utils/utils"

interface CodeBlockProps {
	code: string
	language?: string
	filename?: string
	className?: string
}

export function CodeBlock({ code, language = "jsx", filename, className }: CodeBlockProps) {
	const [copied, setCopied] = useState(false)

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(code)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<div className={cn("rounded-lg border border-gray-700/70 bg-gray-950/80 max-w-4xl min-w-2xl place-self-center", className)}>
			{filename && (
				<div className="flex items-center justify-between border-b bg-gray-900 rounded-t-md border-gray-700 px-4 py-2">
					<span className="text-sm text-gray-400">{filename}</span>
					<button
						onClick={copyToClipboard}
						className="ml-auto flex h-6 w-6 items-center justify-center rounded-md transition-colors hover:bg-muted"
					>
						{copied ? (
							<Check className="h-4 w-4 text-green-500" />
						) : (
							<Copy className="h-4 w-4 text-gray-400" />
						)}
						<span className="sr-only">Copy code</span>
					</button>
				</div>
			)}
			<div className="relative">
				<pre className="overflow-x-auto p-4 text-sm text-gray-300">
					<code className={`language-${language}`}>
						{code.split("\n").map((line, i) => (
							<div key={i} className="table-row">
								<span className="table-cell pr-4 text-gray-600 select-none">{i + 1}</span>
								<span className="table-cell">{line}</span>
							</div>
						))}
					</code>
				</pre>
			</div>
		</div>
	)
}
