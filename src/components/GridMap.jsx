import {Component} from "react";
import {renderGrid} from "../visualization/gridLayout";



export default class GridVisual extends Component {
	render() {
		const {grid} = this.props;
		renderGrid(grid);

		return (<div id="grid-render"></div>);
	}
}
