import React from 'react'
import '../../App.css';
import './Tora.css';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import image from '../../images/Tora_5.JPG';
import Footer from '../Footer'


const useStyles = makeStyles((theme) => ({
  git2: {
    color: '#000',
  },
}));


function Tora() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div style={{ paddingTop: '100px', paddingBottom: '100px' }} className="tora-container">
          <h1>Dancing BiPed</h1>
          <p>
            <Grid container spacing={2}>
              <Grid item xs={4} sm={6} md={4}>
                <img style={{ paddingLeft: 50 }} src={image} alt="image" height={300} />
              </Grid>
              <Grid item xs={8}>
                <p style={{ paddingTop: 50, paddingLeft: 60, marginLeft: 30, paddingBottom: 50 }}>
                  A robot that moves like it is dancing! <br></br>
                  To have to robot seemingly do multiple things at once, we broke each task down to smaller tasks and
                  then cycled through all of the tasks in the master loop. The ultrasonic sensor, and the LCD updates took negligible time but the dance
                  moves and music needed to be broken up into smaller tasks. All dance moves were comprised of “mini moves” and the “mini move”
                  to be executed was chosen based on the iteration of the master loop. For the music, the note and pause were chosen
                  based on the iteration of the master loop.
                </p>
              </Grid>
            </Grid>
          </p>
          <div style={{ paddingBottom: 50 }} className='code'>
            Checkout the code &nbsp;
                <a target="_blank" href='https://github.com/sofiareis/DancingBiPed' className={classes.git2}>
              <i paddingRight='20px' class="fab fa-github fa-2x" ></i>
            </a>
          </div>
          <h3>Dance Moves</h3>
          <h2>Awkward Shuffle</h2>
          <p>
            The awkward shuffle is a simple shuffle of each foot in a
            45 degree range, moving out from 90 degrees (feet facing forwards).
            One foot shuffles and moves back to 90 degrees, and then the other
            foot does the same. This dance is performed when the ultrasonic sensor
            detects an object within 20 cm of the robot.
            </p>
          <br></br>
          <h2>Slide and Tap</h2>
          <p>
            The slide and tap is a series of foot slides from left to right,
            and then a double tap of the right foot. The slides consist of a
            leg rotation from 0 degrees to 180 degrees, and then back to 0 degrees.
            The taps consist of a foot rotation from 90 degrees to 45 degrees and back.
          </p>
          <br></br>
          <h2>Swivel</h2>
          <p>Swivel is a series of simultaneous, same-side foot and leg
          rotations. First, the left foot is moved from 90 to 135 degrees.
          Once there, the left leg moves from 90 to 0 degrees while the
          left foot moves from 135 to 90 degrees. Next, the left leg moves
          from 0 to 90 degrees while the left foot moves from 90 to 135 degrees.
          Then, the movement is reversed, and the left leg is back to 90 degrees,
          and the left foot is back to 135 degrees. Last, the left foot is moved
          back from 135 to 90 degrees. Afterwards, it mirrors that movement with
          the right leg and foot.
          </p>
          <br></br>
          <h2>Pivot Dance</h2>
            <p>
            This dance is broken down into three stages: tilt, slide, 
            and pivot. In the tilt stage, the robot will tilt one way 
            (by tilting one foot and sliding the other), reset to normal, tilt 
            the other way and reset. In the slide stage, the robot will slide 
            side to side (and effectively travel a short distance) by moving both 
            its legs in synchronization - this is repeated twice. In the final pivot 
            stage, the robot will tilt to the right and “pivot” its left foot twice before 
            returning to a neutral position and repeating the same set of movements on 
            its opposite side.
            </p>
            <br></br>
          <h2>Wave Dance</h2>
          <p>The wave dance consists of three movements: zigzag, twist, and wave.
             Both legs move to the right or left side in a 45 degree range during the 
             zigzag stage. The robot lifts the right foot when both legs go to the right
              and the same applies to the opposite direction, which is the twist stage. 
             For the wave dance move, it starts the wave on one foot, transition through 
             ankles by controlling the lower servo motors, then ends the wave on the other foot.
            </p>
            <br></br>
          <h2>Brazil Funk</h2>
          <p>The dance is based on brazilian dance moves, being mostly random with different 
            angles and speed: both legs move sideways until 175 degrees, and then return to the 
            beginning. The right foot moves side to side twice, and both legs begin to move. 
            Then a sequence of left foot and right foot moving beggins, mostly varying the 
            timing to reach different angles.This makes the robot move back and to the front. 
            The legs of the robot move slowly until they reach a small angle and then return. 
            Finally, there is a sequence of right and left foot movement.
            </p> 
            <br></br>
            <h2>Jump Dance</h2>
          <p>This dance is meant to be energetic and fun, with the robot jumping up and 
            down and moving its legs in an out like the Charleston dance move. It starts 
            by tilting the legs by to 180/0 degrees to make the feet perpendicular to the 
            ground. Then, it sweeps the legs 45 degrees inward to imitate pulling its legs together, 
            and then it sweeps the legs 45 degrees back, to imitate its legs going outwards.
            </p>
            <br></br>
          <h3>LCD Functionality</h3>
          <p>The image displayed on the LCD is dependent on the sensor readings; if a nearby 
            object is detected, the robot will revert to the awkward shuffle dance and display 
            an uncomfortable line: “... hi?” . Otherwise, if no nearby objects are in sensed, 
            the robot will move to one of its carefree, expressive dances and this will be reflected 
            on the LCD screen by the lyrics to the song the buzzer is playing. If the robot is awkward 
            dancing, it will display a statement to go with it. The LCD is mounted on a protoboard and 
            secured to hover just above the top of the robot’s body, like a face.
            </p>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Tora
