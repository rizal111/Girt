import Post from "./Post";
function Posts() {
	var post = [
		{
			key: "123123123123",
			name: "Shahrizal",
			username: "@Rzal",
			message:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor tempor tristique. Phasellus eget ligula orci. Sed euismod iaculis risus. Morbi magna sem, dictum sit amet fermentum at, sodales non nulla. Integer at sagittis urna. Sed sagittis, odio vel eleifend facilisis, metus massa blandit nulla, in lacinia libero lacus sit amet felis. Aenean vulputate blandit ligula, eu tempor mi. Donec posuere, velit eu tempus suscipit, nulla eros porttitor felis, vitae egestas erat quam id risus. Maecenas auctor justo ut libero volutpat commodo. Mauris et mauris pellentesque, consectetur sapien quis, scelerisque nulla. Mauris gravida justo sit amet mauris porttitor dictum. Aliquam sed massa gravida, mollis dolor et, varius turpis. Maecenas eget accumsan massa, quis egestas elit. Praesent diam dolor, interdum vel rutrum at, cursus nec nunc. ",
			timestamp: "27 june 2020",
		},
		{
			key: "123123123123",
			name: "Shahrizal",
			username: "@Rzal",
			message:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor tempor tristique. Phasellus eget ligula orci. Sed euismod iaculis risus. Morbi magna sem, dictum sit amet fermentum at, sodales non nulla. Integer at sagittis urna. Sed sagittis, odio vel eleifend facilisis, metus massa blandit nulla, in lacinia libero lacus sit amet felis. Aenean vulputate blandit ligula, eu tempor mi. Donec posuere, velit eu tempus suscipit, nulla eros porttitor felis, vitae egestas erat quam id risus. Maecenas auctor justo ut libero volutpat commodo. Mauris et mauris pellentesque, consectetur sapien quis, scelerisque nulla. Mauris gravida justo sit amet mauris porttitor dictum. Aliquam sed massa gravida, mollis dolor et, varius turpis. Maecenas eget accumsan massa, quis egestas elit. Praesent diam dolor, interdum vel rutrum at, cursus nec nunc. ",
			timestamp: "27 june 2020",
		},
		{
			key: "123123123123",
			name: "Shahrizal",
			username: "@Rzal",
			message:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor tempor tristique. Phasellus eget ligula orci. Sed euismod iaculis risus. Morbi magna sem, dictum sit amet fermentum at, sodales non nulla. Integer at sagittis urna. Sed sagittis, odio vel eleifend facilisis, metus massa blandit nulla, in lacinia libero lacus sit amet felis. Aenean vulputate blandit ligula, eu tempor mi. Donec posuere, velit eu tempus suscipit, nulla eros porttitor felis, vitae egestas erat quam id risus. Maecenas auctor justo ut libero volutpat commodo. Mauris et mauris pellentesque, consectetur sapien quis, scelerisque nulla. Mauris gravida justo sit amet mauris porttitor dictum. Aliquam sed massa gravida, mollis dolor et, varius turpis. Maecenas eget accumsan massa, quis egestas elit. Praesent diam dolor, interdum vel rutrum at, cursus nec nunc. ",
			timestamp: "27 june 2020",
		},
	];
	return (
		<div className="space-y-4">
			{post.map((post) => (
				<Post
					key={post.key}
					name={post.name}
					username={post.username}
					message={post.message}
					timestamp={post.timestamp}
				/>
			))}
		</div>
	);
}

export default Posts;
