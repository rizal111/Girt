function Header() {
	return (
		<div className="header flex p-2 sticky top-0">
			<div className="flex-auto hidden lg:block">Logo</div>
			<div className="flex justify-between" style={{ width: "700px" }}>
				<div className="flex items-center">
					<p className="font-bold">Home</p>
				</div>

				<button className="btn" type="">
					Explore
				</button>
			</div>
			<div className="flex-auto ">right</div>
		</div>
	);
}

export default Header;
