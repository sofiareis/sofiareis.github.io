import React from 'react'
import './AboutMe.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import sofia from '../images/sofia.jpeg';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    

  },
  image: {
    backgroundImage: `url(${sofia})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
    
  },
  paper: {
    margin: theme.spacing(15, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   
    
  },

  socialcontainer: {
    background: '#eee',
    padding: '25px 50px',
  },

  git: {
    paddingLeft: '35px',
    paddingRight: '20px',
    color: '#000',

  },

  link: {
    paddingRight: '20px',
    color: '#000',
  },

  email: {
    color: '#000',

  },

 
}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root} >
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <p style={{margin: '0in', lineHeight:'130%',fontSize:'20px',fontFamily:"Bodoni Moda", 
        color: 'black',textAlign:'justify'}}><strong>
             <span style={{fontSize:'16px',lineHeight:'130%',fontFamily:"Bodoni Moda"}}>
             Hello there!</span></strong></p>

             <p style={{margin: '0in', lineHeight:'140%',fontSize:'20px',fontFamily:"Arial", 
        color: 'black',textAlign:'justify'}}><strong>
             <span style={{fontSize:'16px',lineHeight:'120%',fontFamily:"Bodoni Moda"}}>
             I am a computer engineering student at The University of British Columbia.
              My passion is software programming and I have experience in full-stack development and data analysis. 
              I love to write code and explore what 
              software engineering can offer us – programming is like trying to solve a puzzle that just keeps going and require my full focus!</span></strong></p>

<           p style={{margin: '0in', lineHeight:'140%',fontSize:'20px',fontFamily:"Arial", 
        color: 'black',textAlign:'justify'}}><strong>
             <span style={{fontSize:'16px',lineHeight:'120%',fontFamily:"Bodoni Moda"}}>
             Feel free to explore my main projects and my resume. &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
             <br></br> <br></br></span></strong></p>
             <div className={classes.socialcontainer}>
            <h3> &nbsp; &nbsp; Contact me / Follow me </h3>
            <br></br>
            <a  target="_blank" href='https://github.com/sofiareis' className={classes.git}>
            <i class="fab fa-github fa-2x" ></i>
            </a>
            <a target="_blank" href='https://www.linkedin.com/in/sofiabandeira/' className={classes.link}>
            <i class="fab fa-linkedin fa-2x" ></i>
            </a>
            <a target="_blank" href='mailto:sofiareis2018@gmail.com' className={classes.email}>
            <i class="fas fa-envelope fa-2x"></i>
            </a>
            </div>
        </div>
      </Grid>
    </Grid>


  );
}
