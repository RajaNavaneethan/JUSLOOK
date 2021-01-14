import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Posts from './Posts'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { red } from '@material-ui/core/colors';
import './Main.scss'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import RefreshIcon from '@material-ui/icons/Refresh';
interface Props {
    window?: () => Window;
    children: React.ReactElement;
  }
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
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
  let pt : [] =[] ;
  let some = "asdfasd fsdf asdsadfasdfasdfasdf";
  const [dropopen,setbackdrop] = useState(true);
  const [expanded, setExpanded] = React.useState(false);
  const [PostData,setPostData] = useState<any[]>([]);
  const [search,setSearch] = useState<any[]>([]);
  const [searchval,setval] = useState(some)
  const [showsearch,setShow] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const loadData = async () =>{
      let data: [] = [];
      setbackdrop(true);
      await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=`+props.user.id)
      .then((response)=>{
          data= response.data;
      })
      setPostData(data);
      setbackdrop(false);
      setShow(false);
      setval(some.toString())
  }
  const triggerSearch = (val:String) => {
    console.log(val)
    var temp: React.SetStateAction<any[]> = [];
    if(val.length>0)
    {
        console.log('val')
        let temp:any = [];
        PostData.map((value,index)=>{
        if(value.title.includes(val) || value.body.includes(val))
            temp.push(PostData[index]);
        })
        console.log(temp)
        setShow(true);
        setSearch(temp);
        setval(val.toString());
    }
    else
    {
        setShow(false);
        setval(some.toString())
    }
  }
  useEffect(() => {
    console.log(`this is  a sample`);
    loadData();
  },[]);

  console.log(search);
  return (
    <div className="posts">
         <Backdrop className={classes.backdrop} open={dropopen}>
            <CircularProgress color="inherit" />
        </Backdrop>
        <u>Posts By {props.user.name}</u>
        <div className="search-container">
            <RefreshIcon onClick={()=>loadData()} style={{position:'relative',right:'10px',top:'7px',cursor:'pointer'}}></RefreshIcon>
            <input type="text" onChange={(val:any)=>triggerSearch(val.target.value)} placeholder="Search.." name="search"/>
        </div>
        <br/><br/>
        {showsearch ? search.map((value,index)=><div><Posts title={value.title} body={value.body} search={[searchval]}></Posts><br/></div>) : 
        PostData.map((value,index)=><div><Posts title={value.title} body={value.body} search={[searchval]}></Posts><br/></div>)}
        
    </div>
  );
}
export default RecipeReviewCard;