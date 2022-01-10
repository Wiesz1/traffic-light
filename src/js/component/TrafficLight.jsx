import React from "react";

export const TrafficLight = () => {
	const [color, setColor] = React.useState("green");

	return (
		<div className="text-center mt-5">
			<div className="traffic-light">
				<div
					className={
						color === "red" ? "red-light onstate" : "red-light"
					}
					onClick={() => {
						setColor("red");
					}}></div>
				<div
					className={
						color === "yellow"
							? "yellow-light onstate"
							: "yellow-light"
					}
					onClick={() => {
						setColor("yellow");
					}}></div>
				<div
					className={
						color === "green"
							? "green-light onstate"
							: "green-light"
					}
					onClick={() => {
						setColor("green");
					}}></div>
			</div>
		</div>
	);
};
