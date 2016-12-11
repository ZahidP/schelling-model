import * as d3 from "d3";

const colorLookup = {
	a: "green",
	b: "blue",
	c: "red",
	d: "yellow",
	e: "black",
};

const getColor = (cType) => {
	if (cType !== undefined) {
		return colorLookup[cType];
	} else {
		return "white";
	}
};

export const renderGrid = (grid, domNode) => {

	// list.reduce(
	//     (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
	// );

	const squareMapping = grid.map((row, rowIndex) => {
		return row.map((col, colIndex) => {
			return {
				x_axis: colIndex * 5,
				y_axis: rowIndex * 5,
				height: 20,
				width: 20,
				color: getColor(col.name)
			};
		});
	});

	const reducedMapping = squareMapping.reduce((a, b) => {
		return a.concat(b);
	}, []);

	if (d3.select("svg") !== undefined) {
		d3.select("svg").remove();
	}

	const svgContainer = d3.select(domNode).append("svg").attr("width", 600).attr("height", 600);

	const square = svgContainer.selectAll("square")
		.data(reducedMapping)
		.enter()
		.append("square");

	square.attr("x", function(d) {
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
