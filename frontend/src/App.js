import logo from "./logo.svg";
import "tailwindcss/tailwind.css";
import "./App.css";
import PostRating from "./components/PostRating";
import GetRating from "./components/GetRatings";

function App() {
	return (
		<div>
			<PostRating />
			<GetRating />
		</div>
	);
}

export default App;
