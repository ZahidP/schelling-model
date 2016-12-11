import React, {Component} from "react";
import "./controls.css";



export default class GridVisual extends Component {
	render() {
		const {
			start,
			nextStep,
			clear,
			updateNumberOfTypes,
			updateNumberOfTiles
		} = this.props;

		const startHandler = () => {
			start();
		};

		const nextStepHandler = () => {
			nextStep();
		};

		const clearHandler = () => {
			clear();
		};

		return (
			<div id="controls" className="row">
				<div className="controls-buttons-row row">
					<div className="col-md-4 start">
						<button
							id="start-button"
							className="btn btn-primary control-button"
							onClick={startHandler}>
							Start
						</button>
					</div>
					<div className="col-md-4 next-step">
						<button
							className="btn btn-primary control-button"
							onClick={nextStepHandler}>
							Next Step
						</button>
					</div>
					<div className="col-md-4 restart">
						<button
							className="btn btn-primary control-button"
							onClick={clearHandler}>
							Clear
						</button>
					</div>
				</div>
				<div id="input-row" className="row">
					<div className="col-md-4">
						Number of Types
						<input
							className="form-control control-input"
							onChange={updateNumberOfTypes}
							max={5}
							type="number"
						/>
					</div>
					<div className="col-md-4">
						Number of Tiles
						<input
							className="form-control control-input"
							onChange={updateNumberOfTiles}
							max={100}
							type="number"/>
					</div>
				</div>
			</div>
		);
	}
}
