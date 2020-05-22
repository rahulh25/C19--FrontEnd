import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import Chip from "@material-ui/core/Chip";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function getStyles(dropdown, data) {
  return {
    fontWeight: data.indexOf(dropdown) === -1 ? "normal" : "bold",
  };
}
class MultiValuedSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      selectedData:
        typeof props.selectedData !== undefined && props.selectedData != null
          ? props.selectedData
          : [],
      readOnly: false,
    };
  }
  handleChange = (event) => {
    this.setState({
      selectedData: event.target.value,
    });
    this.props.updateForm(event.target.name, event.target.value);
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedData:
        typeof nextProps.selectedData !== undefined &&
        nextProps.selectedData != null
          ? nextProps.selectedData
          : [],
      data: nextProps.data,
      readOnly: nextProps.readOnly,
    });
  }
  render() {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;

    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };
    const { data, selectedData } = this.state;
    return (
      <div>
        <Select
          name={this.props.name}
          style={{
            width: "-webkit-fill-available",
            border: "1px solid darkgrey",
            borderBottom: 0,
          }}
          multiple
          disabled={this.state.readOnly}
          value={selectedData}
          onChange={this.handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {selected.map((value) => (
                <Chip key={value} label={value} style={{ margin: 2 }} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          <MenuItem value="" disabled>
            Select Skills
          </MenuItem>
          {this.props.data.map((dropdown) => (
            <MenuItem
              key={dropdown}
              value={dropdown}
              style={getStyles(dropdown, data)}
            >
              {dropdown}
            </MenuItem>
          ))}
        </Select>
      </div>
    );
  }
}

export default MultiValuedSelect;
