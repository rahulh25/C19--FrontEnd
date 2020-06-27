import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { MdClear } from 'react-icons/md';
import { MultiValuedSelect } from '../../../../components';
import { skillsData } from '../../../../constants';

const useStyles = makeStyles({
  card: {
    width: '30%',
    marginRight: '20px',
  },
  button: {
    margin: '3%',
    height: '30px',
    width: '150px',
  },
  divider: {
    marginTop: '20px',
    color: 'lightgrey',
  },
});

export const JobsFilterBox = ({ setQuery }) => {
  const classes = useStyles();
  const userData = useSelector((state) => state.getUserInfoReducer);
  const [selectedSkills, setSelectedSkills] = useState([]);

  useEffect(() => {
    // user logged in
    if (userData.data.skills !== undefined && userData.data.skills !== null) {
      setSelectedSkills(userData.data.skills);
    }
  }, [userData]);

  const handleClearSkills = () => {
    setQuery('');
    setSelectedSkills([]);
  };
  return (
    <Card classes={{ root: classes.card }}>
      <CardContent>
        <h5>Skills</h5>
        <MultiValuedSelect
          name="skills"
          selectedData={selectedSkills}
          data={skillsData}
          updateForm={(_key, value) => {
            setQuery(value);
            setSelectedSkills(value);
          }}
        />
        <Button
          color="primary"
          variant="contained"
          onClick={handleClearSkills}
          classes={{ root: classes.button }}
        >
          Clear Skills <MdClear />
        </Button>

        <Divider classes={{ root: classes.divider }} />
      </CardContent>
    </Card>
  );
};
