import React from 'react'
import '../../App.css';
import './Boba.css';
import Footer from '../Footer';


import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import image from '../../images/GIF.gif';

const useStyles = makeStyles((theme) => ({

    git2: {
        color: '#000',
      },

      footer: {
        backgroundColor: 'rgba(239, 235, 233, 0.6)',
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

    }));


function Boba() {
    const classes = useStyles();
    return (
        <React.Fragment>
      <CssBaseline /> 
      <main>
        <div className= "boba-container">
            <h1>Boba Buddy</h1>

            <p>
            <Grid container spacing={2}>
            <Grid item xs={4}>
            <img style={{paddingLeft: 80, paddingTop: 45}} src={image} alt="image" height={350} />
            </Grid>
            <Grid item xs={8}>
              <p style={{paddingTop: 35, paddingLeft: 50, marginLeft: 30}}> 
              <p>
            Bubble tea is one of the most popular drinks on campus, and you'd often see long lines at UBC's boba hotspots. What makes it special is the variety of flavours to choose from and the option to customize to perfection with different levels of sugar and ice. Although boba-lovers have their favourites, it can be hard for bubble tea beginners to decide what they want. This app shows the menus of two bubble tea places at UBC, Coco and Pearl Fever, which allows people to choose ahead of time and compare the options at the different locations. In addition, it provides a simple quiz if you're having a bit of trouble choosing your drink. Based on a series of personality-based questions, your responses to the quiz will determine what drink you should get!

<br></br> <br></br>We used Flutter and Dart, along with hand-drawn graphics to enhance the app's UI. Building this app was a steep learning curve for us, as most of the team was new to mobile development. We learned how to write code in Dart for specific functionalities, as well as basic app design for a more streamlined user experience. Expanding the menus and adding in different quizzes will be next for this project!

            </p>
              </p>
              <br></br><br></br>
            </Grid>
            </Grid>
            </p>

            <div className='code'>
                Checkout the code &nbsp; 
                <a target="_blank" href='https://github.com/sofiareis/Boba-Buddy' className={classes.git2}>
            <i paddingRight='20px' class="fab fa-github fa-2x" ></i>
            </a>
            </div>
        </div>
        
        </main>
      <footer className={classes.footer}>
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
    </footer>
    </React.Fragment>
    )
}

export default Boba
