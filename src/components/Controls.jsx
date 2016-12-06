import {Component} from "react";



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
				<div className="row">
					<div className="col-md-4 start">
						<button onClick={startHandler}>
							Start
						</button>
					</div>
					<div className="col-md-4 next-step">
						<button onClick={nextStepHandler}>
							Next Step
						</button>
					</div>
					<div className="col-md-4 restart">
						<button onClick={clearHandler}>
							Clear
						</button>
					</div>
				</div>
				<div id="input-row" className="row">
					<div className="col-md-4">
						Number of Types
						<input
							onChange={updateNumberOfTypes}
							type="text" 
						/>
					</div>
					<div className="col-md-4">
						Number of Tiles
						<input
							onChange={updateNumberOfTiles}
							type="text"
						/>
					</div>
				</div>
			</div>
		);
	}
}
