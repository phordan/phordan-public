import { cn } from '~/utils/utils'

const GoodButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
	return (
		<div className={cn(`rounded bg-linear-180 from-gray-50/27 hover:from-gray-50/72 from-20% to-gray-50/41 hover:to-gray-50/60 border border-gray-50/30 hover:border-gray-50/80 text-lg px-4 pt-2 pb-2.5 text-gray-900 shadow hover:shadow-md transition select-none cursor-pointer translate-y-0 hover:-translate-y-0.5 group`, className)}>
			{children}
		</div>
	)
}

export default GoodButton