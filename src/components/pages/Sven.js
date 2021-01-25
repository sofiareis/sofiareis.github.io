import React from 'react'
import '../../App.css';
import './Sven.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import image from '../../images/sven.JPG';

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


function Sven() {
    const classes = useStyles();
    return (

        <React.Fragment>
      <CssBaseline /> 
      <main>
        <div style={{paddingTop:'100px', paddingBottom:'100px'}} className= "sven-container">
            <h1>Robot Dog</h1>


            <p>
            <Grid container spacing={2}>
            <Grid item xs={4}>
            <img style={{paddingLeft: 80}} src={image} alt="image" height={300} />
            </Grid>
            <Grid item xs={8}>
              <p style={{paddingTop: 100, paddingLeft: 50, marginLeft: 30}}> 
              The main robot was constructed using the provided robot kit, with the motors being connected to the motor hat that sits on top of the Raspberry Pi. External batteries were used to power both the motor hat and the Pi itself - we used a set of 5 AA batteries and a battery pack to provide power to the two components, respectively. 
              </p>
              <br></br><br></br>
            </Grid>
            </Grid>
            </p>

            
            <br></br>
            <div className='code'>
                Checkout the code &nbsp; 
                <a target="_blank" href='https://github.com/sofiareis/RobotDog' className={classes.git2}>
            <i paddingRight='20px' class="fab fa-github fa-2x" ></i>
            </a>
            </div>
            <br></br><br></br><br></br>
            <h2>Reflective optical sensors</h2>
            <p>Four optical sensors were used to implement the line tracking functionality and were arranged immediately side by side in a single straight line row. To optimize the location of the sensors with respect to the ground, they were soldered to a protoboard in the described configuration and placed at the front of the robot, facing directly towards the ground. This allowed us to record the digital readings of each individual sensor to store in an array. Using four sensors allowed us to predict the next movements of the robot by investigating the combinations of 0’s and 1’s in the sensor array. We used a reference combination of 0110, meaning that the middle two sensors are above the black line and the outer two sensors are above a light surface. All other array configurations were used to sense the position of the robot relative to the reference and send corresponding data to the PID controller.</p>
            <br></br><br></br>
            <h2>Line tracking algorithm</h2>
            <p>Using four reflective optical sensors arranged in a straight line, a digital output was recorded from each sensor to determine the robot’s position with respect to the black line. When a sensor is over a light surface, it outputs a value of 0, and when it is over the black line, it outputs a value of 1. These individual values were compiled into a 4-element array (one element per specific sensor), and its combinations of 1’s and 0’s gave information on the robot’s location. For example, if the rightmost sensor was on the black line, while all other sensors were not, this signalled that the track was undergoing a sharp right turn, which tells us to adjust the motors to turn right. Specialized motor control was implemented with a PID, specifically the P and D components. It calculates the error between the actual speed and the target speed and applies a corrective action. For proportional control, the motor speed is adjusted by adding the value of error which was converted by multiplying a constant KP to get a proportional change. Derivative control decides the rate of change by using another constant KD and the previous error to calculate the adjustment.
            </p>
            <br></br><br></br>
            <h2>Headless Pi usage</h2>
            <p>For the most part, both Raspberry Pis were run headless throughout the project using VNC Viewer. The biggest problem encountered was that the Pis typically would not display the desktop on the machine attempting to access it when turning in for the first time, and required an HDMI connection to a monitor before the display would appear on VNC Viewer. Our approach to this was to first attempt a connection without the use of an additional monitor, and only connect it if absolutely necessary. We eventually ended up changing the config file to allow VNC access without first using the HDMI cord.</p>
            <br></br><br></br>
            <h2>Battery-operated robot implementation</h2>
            <p>The DC motors were run using 5 AA batteries in the provided casing, and the Pi was powered with an external battery pack. When switching out the motor batteries for fresh ones the morning of the main functionality demo, our robot began to move significantly faster than it did during all of our tests, causing a lot of our code to be ill suited to controlling the robot. Our line tracking in particular suffered from this, as the robot began to move too quickly and not register turns as well as it had before. Another part of the robot implementation was the on-off switch. Our decision was to implement a remote virtual switch controlled by voice commands (part of the additional functionality). For the main demonstration, it was decided that we should implement a simpler version using input from the command line on the controller Pi. However, integration with the motors was left until the last minute, and several unexpected issues popped up with our initial design structure (see part D for a more in-depth description). We were unaware of the fact that Python does not support killing threads before they have finished executing, and so we had to completely change our implementation. Because of this, we were unable to finish before the main functionality demonstration. However, we were able to fix this before the additional functionality demo. We simulated threading with a function that was frequently called to check the command from the controller, and selected another function based on the given command. If the command received was ‘treat’, the robot would wake up and be receptive to other commands. If the command was ‘sleep’, the robot would stop all movement and only listen for the wake-up word (treat). Additional commands to switch modes included ‘follow’ and ‘walk’.</p>
            <br></br><br></br>
            <h2>Object Tracking with Camera</h2>
            <p>Description: When given a command from the controller, Sven will look for a green ball. Once located, he will travel towards the ball.
            <br></br><br></br>
Components: Raspberry Pi, 2 DC motors and camera.
<br></br><br></br>
Hardware Implementation: Simply connected each individual to the Raspberry Pi.
<br></br><br></br>
Software Implementation: Continuously takes photos with the camera and applies a mask to determine which of the pixels represent the ball. The masking is done using the color of the specific ball. Then, the average position of a ball pixel as well as the percentage of ball pixels is used to determine how much to power each motor with the goal of moving towards the ball until a threshold of ball pixels is reached.</p>

<br></br><br></br>
<h2>Wireless Controller with Voice Recognition</h2>
<p>Description: Using a USB microphone connected to one of the Raspberry Pis, Sven is able to listen to specific voice commands and select a functionality based on the command.
<br></br><br></br>
Components: Raspberry Pi, microphone
<br></br><br></br>
Hardware Implementation: Simply connected the microphone to the Raspberry PI via USB port
<br></br><br></br>
Software Implementation: The designated controller Pi runs a program based on a Google example to convert speech to text. If it recognizes specific words associated with our chosen commands, it will send the command to the Raspberry Pi mounted on the robot and that Pi will choose a function to execute based on the given command. If the command received was ‘treat’, the robot would wake up and be receptive to other commands. If the command was ‘sleep’, the robot would stop all movement and only listen for the wake-up word (treat). Additional commands to switch modes included ‘follow’ and ‘walk’.</p>
<br></br><br></br>
<h2>LCD Screen Using ItsyBitsy</h2>
<p>Description: The LCD screen displayed a series of image expressions with fun captions that describe a number of emotions that our robot (or “pet”) may be feeling.
<br></br><br></br>
Components: The LCD, interfacing with the ItsyBitsy was used.
<br></br><br></br>
Hardware Implementation: We used a protoboard to implement a cleaner design with the ItsyBitsy.
<br></br><br></br>
Software Implementation: To display images and captions, Palette and TileGrid attributes of the displayio library are mainly used. Since each mode shows different colors of background with images, we put a color code, coordinates, and a file name as parameters when the function gets called.</p>

<br></br><br></br>
<h2>Servo Dog Tail Using ItsyBitsy</h2>
<p>Description: The movements of the servo tail are used to compliment what is displayed on the LCD screen. For example, if the displayed emotion is “happy”, the tail will wag back and forth in a lively manner, simulating a real dog’s tail movements when experiencing joy.
<br></br><br></br>
Components: The tail consists of three servo motors, along with popsicle sticks and rubber bands used for the physical construction. The ItsyBitsy was also used to communicate with the servos.
<br></br><br></br>
Hardware Implementation: We used a single protoboard to connect the servos to the physical tail (re-used from Mini-project 1). We also connected servo pins to the digital pins on the ItsyBitsy.
<br></br><br></br>
Software Implementation: The tail is controlled by a while loop calling functions of five different movements. It changes the angles of three servo motors and uses for loops to repeat the movement.</p>
<br></br><br></br>
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

export default Sven
