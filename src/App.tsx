import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import PostCard from './Components/PostCard'
import { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';
import './Components/Main.scss'
import UserCard from './Components/UserCard';
import Header from './Components/header';
// import data from './Components/Data.json';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import axios from 'axios';

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      width:'80vw',
      height:'80vh',
      overflow:'scroll',
      border: '2px outset #000',
      boxShadow: '5px 10px 8px #888888',
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [dropopen,setbackdrop] = useState(true);
  const [user,seluser] = React.useState();
  const [data,setData] = useState([]);
  const handleOpen = (userData:any) => {
    console.log(userData)
    seluser(userData);
    setOpen(true);
  };
  const loadData = () =>{
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((val:any)=>{
        setData(val.data);
        setbackdrop(false);
      })
  }
  useEffect(() => {
    console.log(`this is  a sample`);
    loadData();
  },[]);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Backdrop className={classes.backdrop} open={dropopen}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Header></Header><br/><br/>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <PostCard user={user}></PostCard>
          </div>
        </Fade>
      </Modal>
      <div className="horizontal-scroll-wrapper squares">
        {data.map((values,index)=><div><UserCard modalopen={handleOpen} data={values}/></div>)}
      </div>
    </div>
  );  
}

export default App;
