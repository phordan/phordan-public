import { Link } from "@remix-run/react";

export default function PostsIndex() {
	return(
<div className="p-8">
<h1 className="text-3xl font-bold">All Posts</h1>
<ul>
	<li><Link to="/posts/example">Example post</Link></li>
				<li><Link to="/posts/a">Example post a</Link></li>
				<li><Link to="/posts/b">Example post b</Link></li>
				<li><Link to="/posts/c">Example post c</Link></li>
</ul>
			<Link to="/"> <h2 className="text-2xl font-bold">Go Home</h2> </Link>
</div>
	)
}