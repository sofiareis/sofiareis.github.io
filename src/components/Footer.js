import React, {useStyles} from 'react';
import './Footer.css';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

function Footer(){
    const classes = useStyles();
    return(

    <div className='footer-container'>
      <Typography variant="h6" align="center" gutterBottom>
        Contact me / Follow me
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      <a target="_blank" href='https://github.com/sofiareis' className={classes.git}>
          <i paddingRight='20px' class="fab fa-github fa-2x" ></i>
          </a>
          <a target="_blank" href='https://www.linkedin.com/in/sofiabandeira/' className={classes.link}>
          <i class="fab fa-linkedin fa-2x" ></i>
          </a>
          <a target="_blank" href='mailto:sofiareis2018@gmail.com' className={classes.email}>
          <i class="fas fa-envelope fa-2x"></i>
          </a>
      </Typography> 
    </div>
    )   

}

export default Footer;
