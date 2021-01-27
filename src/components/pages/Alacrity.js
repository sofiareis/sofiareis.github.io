import React, { useEffect } from 'react'
import '../../App.css';
import './Alacrity.css';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import image from '../../images/alacrity_certo.png';
import Footer from '../Footer'

const useStyles = makeStyles((theme) => ({

  git2: {
    color: '#000',
  },

}));

function Alacrity() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className="Alacrity-container">
          <h1>Alacrity</h1>
          <p>
            <Grid container spacing={2}>
              <Grid item xs={4} sm={6} md={4}>
                <img style={{ paddingLeft: 8 }} src={image} alt="image" height={190} />
              </Grid>
              <Grid item xs={8}>
                <p style={{ fontSize: 17,paddingTop: 50, paddingLeft: 80, marginLeft: 30, paddingBottom: 50, textAlign: 'justify' }}>
              Alacrity is a web app meant to help students manage their time.
              It provides an interface for students to enter their due dates, plan work sessions
              and rearrange those work sessions to spread the work out more evenly.
              </p>
              </Grid>
            </Grid>
          </p>
          <div style={{ paddingBottom: 70 }} className='code'>
            Checkout the code &nbsp;
                <a target="_blank" href='https://github.com/sofiareis/Alacrity' className={classes.git2}>
              <i paddingLeft='20px' class="fab fa-github fa-2x" ></i>
            </a>
          </div>
          <h2>Product Description</h2>
          <p>
            - Individual user accounts with data stored in MySQL database <br></br>
            - Sign-in with Google authentication <br></br>
            - Single calendar view<br></br>
            - Manual movement of workload around calendar<br></br>
            - Automatic optimization of personal calendar using algorithm to spread work out as evenly as possible<br></br>
          </p>
          <h2>Technologies</h2>
          <p>
            - Apache server for frontend <br></br>
            - MySQL database to store user and schedule block data <br></br>
            - Flask (python) backend using mod_WSGI to connect to Apache server <br></br>
            - React frontend with React Bootstrap<br></br>
          </p>

          <h2>User Experience</h2>
          <p>
            The user inputs tasks as they normally would with any to-do list but also
            how much time the task will take and how many days they would like to work on it.
            The program takes this information and schedule blocks of time to work on the
            task ahead of the deadline. For example, let's say you have math homework due on
            Friday which takes total 3 hours to be completed and you want to spread it over 3 days.
            Assuming it is currently Monday night, it will let the program schedule 1 hour blocks on
            Tuesday, Wednesday and Thursday in your calendar for a total of 3 hours of work before the
            Friday deadline. <br></br>

            When the user does this with all their tasks, there is likely to be an uneven distribution
            of work over time. If more deadlines are on Mondays than the other days, for example,
            Sundays will probably have more work than Tuesdays. The program helps the user visualize
            this unevenness with a colour gradient graphic using red to indicate periods with lots of
            work and blue to indicate no work. So the user will be able to move work sessions back to even
            out their workload.
            </p>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Alacrity
