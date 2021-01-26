import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

  git: {

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

}))

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
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
