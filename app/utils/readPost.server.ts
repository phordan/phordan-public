import fs from "fs/promises";

export async function readPost(fileName: string) {
	const file = await fs.readFile(`../posts/${fileName}.mdx`, "utf8");
	return file.toString();
}
