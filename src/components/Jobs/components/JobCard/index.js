import React from 'react';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import LabelIcon from '@material-ui/icons/Label';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
  },
  chip: {
    margin: '0 5px',
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
  },
  weeklyTime: {
    marginRight: '10px',
  },
}));

export const JobCard = ({ job }) => {
  const classes = useStyles();
  const {
    jobTitle: title,
    weeklycommitment,
    description,
    postedDate,
    skills,
  } = job;
  const date = Date.parse(postedDate);
  return (
    <ListItem disableGutters>
      <Card classes={{ root: classes.card }}>
        <CardHeader
          title={title}
          subheader={`Posted ${moment(date).fromNow()}`}
        />
        <CardContent>
          <Typography paragraph>{description}</Typography>
          <HourglassFullIcon />
          <Typography classes={{ root: classes.weeklyTime }} variant="caption">
            {weeklycommitment} hrs/wk
          </Typography>
          <LabelIcon />
          {typeof skills === 'array' ? (
            skills.map((skill) => (
              <Chip
                classes={{ root: classes.chip }}
                key={`skill-${skill}`}
                size="small"
                label={skill}
              />
            ))
          ) : (
            <Chip
              classes={{ root: classes.chip }}
              key={`skill-${skills}`}
              size="small"
              label={skills}
            />
          )}
        </CardContent>
      </Card>
    </ListItem>
  );
};
