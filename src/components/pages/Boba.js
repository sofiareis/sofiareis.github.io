import React from 'react'
import '../../App.css';
import './Boba.css';
import Footer from '../Footer';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import image from '../../images/GIF.gif';

const useStyles = makeStyles((theme) => ({
  git2: {
    color: '#000',
  },
}));


function Boba() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className="boba-container">
          <h1>Boba Buddy</h1>
          <p>
            <Grid container spacing={2}>
              <Grid item xs={4} sm={6} md={4}>
                <img style={{ paddingLeft: 30, paddingTop: 70 }} src={image} alt="image" height={390} />
              </Grid>
              <Grid item xs={8}>
                <p style={{ paddingTop: 35, paddingLeft: 50, marginLeft: 30 }}>
                  <p>
                    Bubble tea is one of the most popular drinks on campus,
                    and you'd often see long lines at UBC's boba hotspots. What makes
                    it special is the variety of flavours to choose from and the option to
                    customize to perfection with different levels of sugar and ice.
                    Although boba-lovers have their favourites, it can be hard for bubble
                    tea beginners to decide what they want. This app shows the menus of
                    two bubble tea places at UBC, Coco and Pearl Fever, which allows people
                    to choose ahead of time and compare the options at the different locations.
                    In addition, it provides a simple quiz if you're having a bit of trouble choosing your
                    drink. Based on a series of personality-based questions, your responses to
                    the quiz will determine what drink you should get!
                  </p>

                  <br></br>
                  <p>We used Flutter and Dart, along with hand-drawn graphics to enhance
                  the app's UI. Building this app was a steep learning curve for us, as most of the
                  team was new to mobile development. We learned how to write code in Dart for
                  specific functionalities, as well as basic app design for a more streamlined user experience.
                  Expanding the menus and adding in different quizzes will be next for this project!
                  </p>
                </p>

              </Grid>
            </Grid>
          </p>
          <div style={{ paddingBottom: 40, paddingTop: 50 }} className='code'>
            Checkout the code &nbsp;
                <a target="_blank" href='https://github.com/sofiareis/Boba-Buddy' className={classes.git2}>
              <i paddingRight='20px' class="fab fa-github fa-2x" ></i>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Boba
