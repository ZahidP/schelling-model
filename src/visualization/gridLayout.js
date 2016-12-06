import {d3} from "d3";

const colorLookup = {
	a: "green",
	b: "blue",
	c: "red",
	d: "yellow",
	e: "black"
};


export const renderGrid = (grid) => {

	const squareMapping = grid.map((row, rowIndex) => {
		return row.map((col, colIndex) => {
			return {
				x_axis: colIndex * 5,
				y_axis: rowIndex * 5,
				height: 20,
				width: 20,
				color: colorLookup[col.type]
			};
		});
	});

	const svgContainer = d3.select("#grid-render").append("svg").attr("width", 600).attr("height", 600);

	const squares = svgContainer.selectAll("square").data(squareMapping).enter().append("square");

	squares.attr("x", function(d) {
		return d.x_axis;
	}).attr("y", function(d) {
		return d.y_axis;
	}).attr("height", function(d) {
		return d.height;
	}).attr("weight", function(d) {
		return d.width;
	}).style("fill", function(d) {
		return d.color;
	});

};
