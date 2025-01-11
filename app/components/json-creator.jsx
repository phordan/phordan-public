import React, { useState } from 'react';
import { Plus, Save, Copy } from 'lucide-react';

const JsonCreator = () => {
	const [entries, setEntries] = useState([]);
	const [currentEntry, setCurrentEntry] = useState({
		header: '',
		code: '',
		description: ''
	});

	const addEntry = () => {
		if (currentEntry.header || currentEntry.code || currentEntry.description) {
			setEntries([...entries, { ...currentEntry, id: Date.now() }]);
			setCurrentEntry({ header: '', code: '', description: '' });
		}
	};

	return (
		<div className="w-full max-w-4xl mx-auto p-6 space-y-6">
			<div className="grid grid-cols-2 gap-6">
				{/* Entry Form */}
				<div className="space-y-4">
					<div className="flex flex-col space-y-2 gap-1">
						<input
							type="text"
							value={currentEntry.header}
							onChange={(e) => setCurrentEntry({ ...currentEntry, header: e.target.value })}
							className="w-full px-3 py-2 border border-gray-400/22 focus:border-gray-600/35 rounded-md bg-gray-50 focus:bg-white dark:bg-gray-800 dark:border-gray-700 ring-none focus:dark:border-gray-50/33 focus:outline-none dark:shadow-lg shadow-black/12 dark:focus:shadow-white/3 not-focus:text-gray-600 not-focus:dark:text-gray-300 transition"
						/>
						<label className="text-sm order-first font-medium text-gray-500 peer-focus:text-gray-800 dark:text-gray-400 dark:peer-focus:text-gray-300 transition">
							Header
						</label>
					</div>

					<div className="flex flex-col space-y-2 gap-1">
						<textarea
							value={currentEntry.code}
							onChange={(e) => setCurrentEntry({ ...currentEntry, code: e.target.value })}
							className="w-full px-3 py-2 field-sizing-content border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700 font-mono ring-none focus:dark:border-gray-50/33 focus:outline-none shadow-lg shadow-black/12 focus:shadow-white/3 not-focus:text-gray-300 transition"
							rows={4}
						/>
						<label className="text-sm order-first font-medium text-gray-700  dark:text-gray-400 peer-focus:dark:text-gray-300 transition">
							Code
						</label>
					</div>

					<div className="flex flex-col space-y-2 gap-1">
						<textarea
							value={currentEntry.description}
							onChange={(e) => setCurrentEntry({ ...currentEntry, description: e.target.value })}
							className="w-full px-3 py-2 peer field-sizing-content border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700 ring-none focus:dark:border-gray-50/33 focus:outline-none shadow-lg shadow-black/12 focus:shadow-white/3 not-focus:text-gray-300 transition"
							rows={3}
						/>
						<label className="text-sm font-medium order-first text-gray-700 dark:text-gray-400 peer-focus:dark:text-gray-300 transition">
							Description
						</label>
					</div>

					<button
						onClick={addEntry}
						className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
					>
						<Plus size={16} />
						Add Entry
					</button>
				</div>

				{/* JSON Preview */}
				<div className="space-y-4">
					<div className="p-4 bg-gray-900 rounded-md">
						<pre className="text-sm text-gray-300 font-mono overflow-auto">
							{JSON.stringify(entries, null, 2)}
						</pre>
					</div>
					<div className="flex gap-2">
						<button
							onClick={() => navigator.clipboard.writeText(JSON.stringify(entries, null, 2))}
							className="flex items-center gap-2 px-4 py-2 bg-gray-950 text-white rounded-md hover:bg-gray-700 transition"
						>
							<Copy size={16} />
							Copy JSON
						</button>
						<button
							onClick={() => {/* Add save functionality */ }}
							className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
						>
							<Save size={16} />
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JsonCreator;