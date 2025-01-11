import { Calculator, Ratio } from 'lucide-react';
import React, { useState, useEffect } from 'react';
//import { Input } from '@/components/ui/input';
//import { Label } from '@/components/ui/label';
//import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const AspectRatioCalculator = () => {
	const [width, setWidth] = useState('');
	const [height, setHeight] = useState('');
	const [ratio, setRatio] = useState('16:9');
	const [calculatedWidth, setCalculatedWidth] = useState('');
	const [calculatedHeight, setCalculatedHeight] = useState('');

	useEffect(() => {
		const [ratioWidth, ratioHeight] = ratio.split(':').map(Number);

		if (width && !height) {
			const newHeight = (Number(width) * ratioHeight) / ratioWidth;
			setCalculatedHeight(newHeight.toFixed(2));
			setCalculatedWidth('');
		} else if (height && !width) {
			const newWidth = (Number(height) * ratioWidth) / ratioHeight;
			setCalculatedWidth(newWidth.toFixed(2));
			setCalculatedHeight('');
		} else {
			setCalculatedWidth('');
			setCalculatedHeight('');
		}
	}, [width, height, ratio]);

	const handleRatioChange = (e: any) => {
		setRatio(e.target.value);
		setWidth('');
		setHeight('');
		setCalculatedWidth('');
		setCalculatedHeight('');
	};

	return (
		<div className="w-full max-w-md mx-auto">
			<div>
				<div className='pt-10 text-2xl font-light grid grid-flow-col gap-3 justify-center'>Aspect Ratio Calculator <Calculator className="mt-1"/><Ratio className="mt-1"/></div>
			<p className='text-center text-gray-700 pb-10'>By Phordan</p>
			</div>
			<div>
				<div className="space-y-4">
					<div>
						<div>Aspect Ratio</div>
						<input
							id="ratio"
							value={ratio}
							onChange={handleRatioChange}
							placeholder="e.g. 16:9"
							className="w-full px-3 py-2 border border-gray-400 /22 focus:border-gray-600/35 rounded-md bg-gray-50 focus:bg-white dark:bg-gray-800 dark:border-gray-700 ring-none focus:dark:border-gray-50/33 focus:outline-none dark:shadow-lg shadow-black/12 dark:focus:shadow-white/3 not-focus:text-gray-600 not-focus:dark:text-gray-300 transition"
						/>
					</div>
					<div>
						<div>Width</div>
						<input
							id="width"
							type="number"
							value={width}
							onChange={(e) => {
								setWidth(e.target.value);
								setHeight('');
							}}
							placeholder="Enter width"
							className="w-full px-3 py-2 border border-gray-400 /22 focus:border-gray-600/35 rounded-md bg-gray-50 focus:bg-white dark:bg-gray-800 dark:border-gray-700 ring-none focus:dark:border-gray-50/33 focus:outline-none dark:shadow-lg shadow-black/12 dark:focus:shadow-white/3 not-focus:text-gray-600 not-focus:dark:text-gray-300 transition"
						/>
						{calculatedWidth && <p className="text-sm text-gray-500 mt-1">Calculated width: {calculatedWidth}</p>}
					</div>
					<div>
						<div>Height</div>
						<input
							id="height"
							type="number"
							value={height}
							onChange={(e) => {
								setHeight(e.target.value);
								setWidth('');
							}}
							placeholder="Enter height"
							className="w-full px-3 py-2 border border-gray-400 /22 focus:border-gray-600/35 rounded-md bg-gray-50 focus:bg-white dark:bg-gray-800 dark:border-gray-700 ring-none focus:dark:border-gray-50/33 focus:outline-none dark:shadow-lg shadow-black/12 dark:focus:shadow-white/3 not-focus:text-gray-600 not-focus:dark:text-gray-300 transition"
						/>
						{calculatedHeight && <p className="text-sm text-gray-500 mt-1">Calculated height: {calculatedHeight}</p>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AspectRatioCalculator;