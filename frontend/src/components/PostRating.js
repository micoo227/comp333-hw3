import React, { useEffect, useState } from "react";

const postDb = [
	{
		action: "title",
		type: "text",
		placeholder: "enter song title",
	},
	{
		action: "artist",
		type: "text",
		placeholder: "enter artist name",
	},
	{
		action: "rating",
		type: "text",
		placeholder: "rate song from 1 - 10",
	},
];

export default function PostRating() {
	const [res, setRes] = useState({
		title: "",
		artist: "",
		rating: "",
	});
	const [submit, setSubmit] = useState(false);

	useEffect(() => {}, [res]);

	const handleSubmit = () => {
		if (!submit) {
			//check data
			//post data
			//catch errors
		}
	};

    const handleChange = (event) => {
        setRes({...setRes, [event.target.name]: event.target.value })
    }

	return (
		<div className="min-h-screen bg-slate-800">
			<div className="text-3xl font-bold text-center text-white pt-20 pb-10">
				Create Rating
			</div>
			<div className="grid place-items-center">
				<section className="w-10/12 bg-slate-600 p-4">

                    <div className="flex text-white text-lg font-semibold space-x-4 my-2">
                        <div className="w-20 flex justify-end">Title</div>
                        <input 
                            id="title"
                            type="text"
                            value={res.title}
                            placeholder="enter title here"
                            className="w-full "
                        />
                    </div>

                    <div className="flex text-white text-lg font-semibold space-x-4 my-2">
                        <div className="w-20  flex justify-end">Artist</div>
                        <input 
                            id="artist"
                            type="text"
                            value={res.artist}
                            placeholder="enter artist here"
                            className="w-full"
                        />
                    </div>

                    <div className="flex text-lg font-semibold space-x-4">
                        <div className="w-20 text-white  flex justify-end">Title</div>
                        <input 
                            id="rating"
                            type="number"
                            min="1"
                            max="10"
                            value={res.rating}
                            placeholder="enter title here"
                            className="w-full "
                        />
                    </div>


					

					<div className="flex justify-end">
						<button className="bg-red-300 px-3 py-2 font-semibold hover:bg-yellow-300 transition ease-in duration-200 text-lg">
							Submit
						</button>
					</div>
				</section>
			</div>
		</div>
	);
}
