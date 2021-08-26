function Rightbar() {
	return (
		<div className="flex-initial flex-shrink-0 self-start sticky top-[56px] z-50 max-w-[360px] w-[360px]">
			<div className="p-2">
				<div className="p-2">
					<p>Trending</p>
				</div>
				<div></div>
			</div>
			<div className="fixed bottom-0 right-360 max-w-[360px]">
				<p>Friend</p>
			</div>
		</div>
	);
}

export default Rightbar;
