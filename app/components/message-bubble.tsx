const MessageBubble = (
	{
		children,
		type = 'outgoing',
		showTail = true,
		animated = false,
		className = ''
	}: {
		children: React.ReactNode
		type?: 'incoming' | 'outgoing' | 'sms'
		showTail?: boolean
		animated?: boolean
		className?: string
	}) => {
	// Colors matching your documentation
	const colors = {
		incoming: 'bg-gray-300/73 rounded-bl-md pb-4',
		outgoing: 'bg-blue-500 rounded-br-md',
		sms: 'bg-green-500 rounded-br-md'
	};

	const animatedStyles = {
		incoming: 'starting:translate-x-9',
		outgoing: 'starting:-translate-x-5',
		sms: 'starting:-translate-x-5'
	};

	const textColors = {
		incoming: 'text-black',
		outgoing: 'text-white',
		sms: 'text-white'
	};

	// Base styles for the bubble
	const bubbleStyles = `
		relative  
		inline-block 
		px-4 py-1 
		rounded-3xl
		shadow-xl shadow-gray-950/4
		-translate-x-0 opacity-100 starting:opacity-0 transition-all duration-500 ease-in-out
		${colors[type]} 
		${textColors[type]}
		${animated ? animatedStyles[type] : ''}
	`;

	return (
		<div className={`relative ${className}`}>
			<div className={bubbleStyles}>
				{children}
			</div>
		</div>
	);
};

export default MessageBubble;