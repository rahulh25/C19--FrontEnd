import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import ListItem from '@material-ui/core/ListItem';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  list: {
    width: '100%',
  },
  listItem: {
    width: '100%',
  },
  card: {
    width: '100%',
  },
  headerSkeleton: {
    marginBottom: '15px',
  },
});

export const JobsSkeleton = () => {
  const classes = useStyles();
  const emptyData = [{}, {}, {}, {}, {}];
  return (
    <>
      {emptyData.map((_item) => (
        <ListItem classes={{ root: classes.listItem }} disableGutters>
          <Card classes={{ root: classes.card }}>
            <CardHeader
              title={
                <Skeleton
                  classes={{ root: classes.headerSkeleton }}
                  variant="rect"
                  width={200}
                />
              }
              subheader={
                <Skeleton
                  classes={{ root: classes.headerSkeleton }}
                  variant="rect"
                  width={250}
                />
              }
            />
            <CardContent>
              <Skeleton
                classes={{ root: classes.headerSkeleton }}
                variant="rect"
              />
              <Skeleton
                classes={{ root: classes.headerSkeleton }}
                variant="rect"
              />
              <Skeleton
                classes={{ root: classes.headerSkeleton }}
                variant="rect"
              />
              <Skeleton
                classes={{ root: classes.headerSkeleton }}
                variant="rect"
              />
            </CardContent>
          </Card>
        </ListItem>
      ))}
    </>
  );
};
