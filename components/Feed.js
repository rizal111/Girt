import Posts from "./Posts";

function Feed() {
	return (
		<div className="flex-grow flex justify-center pt-2 pl-2 pr-2 ">
			<div className="space-y-4" style={{ width: "700px" }}>
				<div className="flex flex-initial space-x-2 p-2 items-center box">
					<img
						src="https://i.ibb.co/89G2xr4/profile-2.jpg"
						className="z-10 rounded-full "
						width="40px"
						height="40px"
					/>
					<form className="flex flex-1">
						<input
							className="flex-grow"
							type="text"
							name="post"
							placeholder="What's you gaming?"
						/>
					</form>
					<button className="btn" type="">
						Post
					</button>
				</div>
				<Posts />
			</div>
		</div>
	);
}

export default Feed;
