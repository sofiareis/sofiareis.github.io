import React from 'react'
import '../../App.css'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import alacrity from '../../images/alacrity_certo.png'
import tora from '../../images/Tora_5.JPG'
import sven from '../../images/sven.JPG'
import boba from '../../images/GIF.gif'

const useStyles = makeStyles((theme) => ({

  maincontainer: {
    
    boxShadow: 'inset 0 0 0 1000px rgba(239, 235, 233, 0.9)',

  },

  heroContent: {
    
    padding: theme.spacing(8, 0, 6),
    
  },

  heroButtons: {
    marginTop: theme.spacing(4),
    fontFamily: 'Bodoni Moda'
    
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8),
    
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },

  cardHeader: {
    backgroundColor: 'rgba(181, 190, 152, 0.4)',
    
  },

  cardContent: {
    flexGrow: 1,
    
    
  },

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

  title: {
    fontFamily: 'Bodoni Moda'

  },

}));

const cards = [
    {
        title: 'Alacrity',
        description: 'Alacrity is a web app meant to help students manage their time...',
        images : alacrity, 
        page : '/alacrity',
       
    },
    

    {
        title: 'Dancing Robot',
        description: 'A robot that moves like it is dancing...',
        images: tora,
        page : '/tora',
        
    },
    {
        title: 'Robot Dog',
        description: 'A robot that has dog life features (tail, voice control, movement)...',
        images : sven,
        page : '/sven'
    },
    {
        title: 'BobaBuddy',
        description: 'An app to dertermine which is your favourite Bubble Tea flavor...',
        images : boba,
        page : '/boba'
    }

];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline /> 
      <main>
        {/* Hero unit */}
        <div className={classes.maincontainer}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography className={classes.title} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              My Projects
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Feel free to take a look!
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={cards.title} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardHeader
                    title={card.title}
                    titleTypographyProps={{ align: 'center' }}
                    className={classes.cardHeader}
                  />

                  <CardMedia
                    className={classes.cardMedia}
                    image={card.images}
                  />

                  <CardContent className={classes.cardContent}>
                    <Typography> 
                        {card.description}   
                    </Typography>
                  </CardContent>

                  <CardActions style={{ display: "flex", width: "100%", alignItems:"center", justifyContent: "center" }}>
                  <Button href={card.page} style={{fontFamily: 'Arial', color: "#003300"}}>VIEW</Button>
                
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </div>
      </main>
      {/* Footer */}
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
      {/* End footer */}
    </React.Fragment>
  );
}