import React, { Component, Fragment} from 'react';
import "./visualizations.component.css";
import GridList from '@material-ui/core/GridList';
import data from './mock-data';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        marginLeft : '5px',
        marginRight : '5px'
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    text : {
        fontSize : 'large',
    }
  }));
  
  export default function Visualizations() {
    const classes = useStyles();
   
    return (
        <Fragment>
            <div id="title-text">Visualizations..</div>
            <div className={classes.root}>
                <GridList cellHeight={180} cols={6} spacing={15}>
                
                {data.map((tile) => (
                    <GridListTile key={tile.img}>
                    <img src={tile.img} loading="lazy" alt={tile.title} />
                    <GridListTileBar
                        title={tile.title}
                        subtitle={<span>by: {tile.contributor}</span>}
                        actionIcon={
                        <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                            <InfoIcon />
                        </IconButton>
                        }
                    />
                    </GridListTile>
                ))}
                </GridList>
            </div>
        </Fragment>
    );
  }






