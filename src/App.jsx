import React, { PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {Controls} from "./components/Controls";
import {GridVisual} from "./components/GridMap";
import * as ModelActions from "./actions/actions";

const App = ({grid, satisfactionGrid, actions}) => (
  <div>
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
);

App.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	grid: state.grid,
	satisfactionGrid: state.satisfactionGrid,
	initialParams: state.initialParams
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({ModelActions}, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
