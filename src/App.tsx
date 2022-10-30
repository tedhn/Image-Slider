import { useEffect, useState } from "react";
import styled from "styled-components";
import anime from "animejs";

const images = [
	{ index: 0, url: "https://i.imgur.com/0D9aav7.png" },
	{ index: 1, url: "https://i.imgur.com/dv6o7kQ.png" },
	{ index: 2, url: "https://i.imgur.com/CXK9rEr.png" },
	{ index: 3, url: "https://i.imgur.com/IrXbnRG.png" },
	{ index: 4, url: "https://i.imgur.com/H7bl79i.png" },
	{ index: 5, url: "https://i.imgur.com/KAlZiAu.png" },
];

function App() {
	const [focusedImage, setFocusedImage] = useState(3);
	const [arr, setArr] = useState([{ index: 0, url: "" }]);

	useEffect(() => {
		let newArr = [];

		if (focusedImage === 0) {
			newArr.push(
				images[images.length - 1],
				images[focusedImage],
				images[focusedImage + 1]
			);
		} else if (focusedImage === images.length - 1) {
			newArr.push(images[focusedImage - 1], images[focusedImage], images[0]);
		} else {
			newArr.push(
				images[focusedImage - 1],
				images[focusedImage],
				images[focusedImage + 1]
			);
		}

		setArr(newArr);
	}, [focusedImage]);

	// const handleHover = (value: number) => {
	// 	anime({ targets: "#image", rotateY: value });
	// };

	return (
		<div className='flex justify-center items-center w-screen h-screen'>
			{arr.map((image, index) => {
				if (index === 1) {
					return (
						<div
							className='w-96'
							id='image'
							key={image.index}
							// onMouseEnter={() => handleHover(30)}
							// onMouseLeave={() => handleHover(0)}
						>
							<img src={image.url} alt='404' className='a w-full' />
						</div>
					);
				} else {
					return (
						<div
							className='w-44'
							key={image.index}
							onClick={() => setFocusedImage(image.index)}>
							<img src={image.url} alt='404' className='w-full' />
						</div>
					);
				}
			})}
		</div>
	);
}

const Hello = styled.div`
	background: transparent;
	border-radius: 3px;
	border: 2px solid palevioletred;
	color: palevioletred;
	margin: 0 1em;
	padding: 0.25em 1em;
`;

export default App;
