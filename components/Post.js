function Post({ name, message, username, timestamp, profilepic }) {
	return (
		<div className="box">
			<div className="flex p-2">
				<img
					className="flex-initial"
					src="https://i.ibb.co/89G2xr4/profile-2.jpg"
					className="z-10 rounded-full "
					width="40px"
					height="40px"
				/>
				<p className="flex-initial self-end pl-2">{name}</p>
				<p className="flex-initial self-end pl-2">{username}</p>
				<p className="flex-initial self-end pl-2">{timestamp}</p>
			</div>
			<div></div>
			<div className="flex p-2">
				<p>{message}</p>
			</div>
		</div>
	);
}

export default Post;
