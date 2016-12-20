import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Controls from "./components/Controls.jsx";
import GridVisual from "./components/GridMap.jsx";
import * as ModelActions from "./actions/actions";
import "./App.css";

export class AppPresenter extends Component {

	componentDidMount() {
		const {actions, initialParams, types} = this.props;
		actions.generateInitialGrid({types, ...initialParams});
	}

	render() {
		const {actions, grid, satisfactionGrid, initialParams, types} = this.props;

		return (
			<div className="container">
				<div className="col-sm-10 offset-sm-2">
					<div className="header-row row">
						<div className="col-sm-6">
							<h2> Schelling Segregation Model </h2>
						</div>
					</div>
					<Controls start={actions.start}
						nextStep={actions.nextStep}
						clear={actions.clear}
						updateNumberOfTiles={actions.updateNumberOfTiles}
						updateNumberOfTypes={actions.updateNumberOfTypes} />
					<GridVisual
						grid={grid}
						satisfactionGrid={satisfactionGrid}
						actions={actions} />
				</div>
			</div>);
	}
}


const mapStateToProps = (state) => ({
	grid: state.grid,
	satisfactionGrid: state.satisfactionGrid,
	initialParams: state.initialParams,
	types: state.types
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(ModelActions, dispatch)
});

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppPresenter);
