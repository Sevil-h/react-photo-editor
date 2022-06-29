import React, { useState } from "react";
import Slider from "./components/Slider";
import SidebarItem from "./components/SidebarItem";
import "./App.css";

const DEFAULT_OPTIONS = [
	{
		id: 1,
		name: "Brightness",
		property: "brightness",
		value: 100,
		range: {
			min: 0,
			max: 200,
		},
		unit: "%",
	},
	{
		id: 2,
		name: "Contrast",
		property: "contrast",
		value: 100,
		range: {
			min: 0,
			max: 200,
		},
		unit: "%",
	},
	{
		id: 3,
		name: "Saturation",
		property: "saturate",
		value: 100,
		range: {
			min: 0,
			max: 200,
		},
		unit: "%",
	},
	{
		id: 4,
		name: "Grayscale",
		property: "grayscale",
		value: 0,
		range: {
			min: 0,
			max: 100,
		},
		unit: "%",
	},
	{
		id: 5,
		name: "Sepia",
		property: "sepia",
		value: 0,
		range: {
			min: 0,
			max: 100,
		},
		unit: "%",
	},
	{
		id: 6,
		name: "Hue Rotate",
		property: "hue-rotate",
		value: 0,
		range: {
			min: 0,
			max: 360,
		},
		unit: "deg",
	},
	{
		id: 7,
		name: "Blur",
		property: "blur",
		value: 0,
		range: {
			min: 0,
			max: 20,
		},
		unit: "px",
	},
];

function App() {
	const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
	const [options, setOptions] = useState(DEFAULT_OPTIONS);
	const selectedOption = options[selectedOptionIndex];

	const handleSliderChange = (e) => {
		setOptions((prevoptions) => {
			return prevoptions.map((option, index) => {
				if (index !== selectedOptionIndex) return option;
				return { ...option, value: e.target.value };
			});
		});
	};

	const getImageStyle = () => {
		const filters = options.map((option) => {
			return `${option.property}(${option.value}${option.unit})`;
		});
		return { filter: filters.join(" ") };
	};

	return (
		<div className="container">
			<div className="main-image" style={getImageStyle()}></div>
			<div className="sidebar">
				{options.map((option, index) => (
					<SidebarItem
						key={index}
						name={option.name}
						active={index === selectedOptionIndex}
						handleClick={() => setSelectedOptionIndex(index)}
					/>
				))}
			</div>

			<Slider
				min={selectedOption.range.min}
				max={selectedOption.range.max}
				value={selectedOption.value}
				handleChange={handleSliderChange}
			/>
		</div>
	);
}

export default App;
