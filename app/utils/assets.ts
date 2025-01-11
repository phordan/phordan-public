const ASSET_BASE_URL = process.env.NODE_ENV === 'production' 
	? 'https://assets.phordan.com'
	: '';

export const getAssetUrl = (path: string): string => {
  // Ensure path starts with a forward slash
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	return `${ASSET_BASE_URL}/assets${normalizedPath}`;
};

// Usage example:
// const imageUrl = getAssetUrl('/images/my-screenshot.png');