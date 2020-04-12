import React from 'react';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    width: '100%',
  },
  chip: {
    margin: '0 5px',
    background: 'linear-gradient(45deg, #d41b2c 30%, #93291e 90%)',
    color: '#ffffff',
  },
});

export const JobCard = ({ job }) => {
  const classes = useStyles();
  const { jobTitle: title, description, postedDate, skills } = job;
  const date = Date.parse(postedDate);
  return (
    <ListItem>
      <Card classes={{ root: classes.card }}>
        <CardHeader
          title={title}
          subheader={`Posted ${moment(date).fromNow()}`}
        />
        <CardContent>
          <Typography paragraph>{description}</Typography>
          {skills.map((skill) => (
            <Chip
              classes={{ root: classes.chip }}
              key={`skill-${skill}`}
              size="small"
              label={skill}
            />
          ))}
        </CardContent>
      </Card>
    </ListItem>
  );
};
