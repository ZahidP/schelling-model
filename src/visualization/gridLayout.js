import * as d3 from "d3";

const colorLookup = {
	a: "rgb(100,180,120)",
	b: "rgb(100,120,180)",
	c: "rgb(180,100,100)",
	d: "yellow",
	e: "black",
};

const getColor = (cType) => {
	if (cType !== undefined) {
		return colorLookup[cType];
	} else {
		return "rgb(140,140,140)";
	}
};

export const renderGrid = (grid, domNode) => {

	// list.reduce(
	//     (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
	// );

	const squareMapping = grid.map((row, rowIndex) => {
		return row.map((col, colIndex) => {
			return {
				x_axis: colIndex * 30,
				y_axis: rowIndex * 30,
				height: 30,
				width: 30,
				color: getColor(col.name)
			};
		});
	});

	/**
	* We need to flatten the row[col, col, col] structure
	**/
	const flattenedMapping = squareMapping.reduce((a, b) => {
		return a.concat(b);
	}, []);

	if (d3.select("svg") !== undefined) {
		d3.select("svg").remove();
	}

	const svgContainer = d3.select(domNode).append("svg").attr("width", 900).attr("height", 600);

	const square = svgContainer.selectAll("rect")
		.data(flattenedMapping)
		.enter()
		.append("rect");

	square.attr("x", function(d) {
		return d.x_axis;
	}).attr("y", function(d) {
		return d.y_axis;
	}).attr("height", function(d) {
		return d.height;
	}).attr("width", function(d) {
		return d.width;
	}).style("fill", function(d) {
		return d.color;
	}).style("stroke", function(d) {
		return "black";
	});

};
