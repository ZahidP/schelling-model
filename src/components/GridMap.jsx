import React, {Component} from "react";
import {renderGrid} from "../visualization/gridLayout";



export default class GridVisual extends Component {

	componentDidMount() {
		const {grid} = this.props;
		renderGrid(grid, "#grid-render");
	}

	render() {
		const {grid} = this.props;
		renderGrid(grid, "#grid-render");
		return (<div id="grid-render"></div>);
	}
}
