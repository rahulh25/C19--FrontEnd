import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import Chip from "@material-ui/core/Chip";
import Stats from "./Stats";

function getStyles(skill, selectedSkill) {
  return {
    fontWeight: selectedSkill.indexOf(skill) === -1 ? "normal" : "bold",
  };
}

class Third extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      education: "",
      selectedSkills: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
    this.props.update("type", event.target.value);
  };

  handleSkillsChange = (event) => {
    this.setState({
      selectedSkills: event.target.value,
    });
    let skillsCommaSeparated = event.target.value.toString();
    this.props.update("skills", skillsCommaSeparated);
  };
  handleChangeEducation = (event) => {
    this.setState({
      education: event.target.value,
    });
    this.props.update("education", event.target.value);
  };
  updatePortfoliolink = (event) => {
    this.props.update(event.target.name, event.target.value);
  };
  render() {
    const skillsData = [
      "Web Development",
      "Node JS",
      "MongoDB",
      "PowerBI",
      "Tableau",
      "ASP.NET",
      "C#",
      "JAVA",
      "Javascript",
      "Python",
    ];
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
    const validate = () => {
      this.props.previousStep();
    };
    const submit = () => {};
    const { value, education, selectedSkills } = this.state;
    return (
      <div>
        <div>
          <label>
            User type <span className="requiredColor">*</span>
          </label>{" "}
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="type"
              value={value}
              onChange={this.handleChange}
            >
              <FormControlLabel
                value="Researcher"
                control={<Radio style={{ height: 10 }} />}
                label="Researcher"
              />
              <FormControlLabel
                value="Volunteer"
                control={<Radio style={{ height: 10 }} />}
                label="Volunteer"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <label>
            Education <span className="requiredColor">*</span>
          </label>
          <Select
            style={{ width: 500 }}
            id="education"
            value={education}
            onChange={this.handleChangeEducation}
          >
            <MenuItem value="Bachelors">Bachelors</MenuItem>
            <MenuItem value="Masters">Masters</MenuItem>
          </Select>
          <FormHelperText>Highest degree pursued!</FormHelperText>
        </div>
        <div>
          <label>
            Skills <span className="requiredColor">*</span>
          </label>
          <div>
            <Select
              id="skills"
              style={{ width: "-webkit-fill-available" }}
              multiple
              value={selectedSkills}
              onChange={this.handleSkillsChange}
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
              {skillsData.map((skill) => (
                <MenuItem
                  key={skill}
                  value={skill}
                  style={getStyles(skill, selectedSkills)}
                >
                  {skill}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
        <div>
          <label>
            Portfolio link <span className="requiredColor">*</span>
          </label>
          <input
            required
            type="text"
            className="form-control"
            name="portfolioLink"
            placeholder="Portfolio link"
            onChange={this.updatePortfoliolink}
          />
        </div>
        <Stats
          step={3}
          {...this.props}
          previousStep={validate}
          nextStep={submit}
        />
      </div>
    );
  }
}

export default Third;
