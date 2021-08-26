function Leftbar() {
	return (
		<div
			className="sticky top-[56px] z-50 flex-inital flex-col pl-4 hidden lg:flex self-start max-w-[360px] w-[360px]"
			style={{}}
		>
			<div className="relative flex pt-3 pl-2">
				<div
					className="z-0 absolute left-2 mini-banner bg-cover rounded-r-lg"
					style={{
						backgroundImage: `url("https://i.ibb.co/89G2xr4/profile-2.jpg")`,
						left: "58px",
					}}
				></div>
				<img
					src="https://i.ibb.co/89G2xr4/profile-2.jpg"
					className="z-10 rounded-full border-4"
					width="116px"
					height="116px"
				/>
				<div className="z-10 self-end p-3">
					<p>Shahrizal</p>
					<p>@Rzal</p>
				</div>
			</div>
			<div className="sidenav p-2 flex justify-center">
				<button className="btn-side">Profile</button>
			</div>
			<div className="sidenav p-2 flex justify-center">
				<button className="btn-side">Friend</button>
			</div>
			<div className="sidenav p-2 flex justify-center">
				<button className="btn-side">Photo</button>
			</div>
		</div>
	);
}

export default Leftbar;
