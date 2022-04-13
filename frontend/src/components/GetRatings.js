import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ExportComponent() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://127.0.0.1:8000/api/ratings/")
			.then((response) => {
				console.log(response.data);
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
            <section className="text-white text-center text-lg">
                Song Ratings
            </section>
			{data.map(({ username, song, rating }) => {
				return (
					<div className="text-white">
						<div> {username} </div>
                        <div> {song} </div>
                        <div> {rating} </div>
					</div>
				);
			})}
		</div>
	);
}
