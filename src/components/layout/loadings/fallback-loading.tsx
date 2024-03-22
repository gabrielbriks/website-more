//TODO: move for new component
const FallbackLoading = () => (
	<div className="flex min-h-screen min-w-full flex-1 items-center justify-center ">
		<span className="relative flex h-3 w-3">
			<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-500 opacity-75"></span>
			<span className="relative inline-flex h-3 w-3 rounded-full bg-purple-700"></span>
		</span>
	</div>
);

export default FallbackLoading;
