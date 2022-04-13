import logo from "./logo.svg";
import "tailwindcss/tailwind.css";
import "./App.css";
import PostRating from "./components/PostRating";
import GetRating from "./components/GetRatings";

function App() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-slate-800">
			<PostRating />
			<GetRating />
		</div>
	);
}

export default App;
