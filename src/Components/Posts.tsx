import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import data from './Data.json';
import { TextField } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import HighLigher from './TextHighlighter';
import './Main.scss'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const RecipeReviewCard = (props:any) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
        <div className="postTitle"><HighLigher title={props.title} search={props.search}></HighLigher> </div> 
        <div className="content"><HighLigher title={props.body} search={props.search}></HighLigher></div> 
    </div>
  );
}
export default RecipeReviewCard;