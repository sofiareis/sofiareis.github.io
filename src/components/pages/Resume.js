import React from 'react'
import '../../App.css'
import './Resume.css'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from '../Footer'

const useStyles = makeStyles((theme) => ({

  git2: {
    color: '#000',
  },

}));

function Resume() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main>

        <div style={{ paddingTop: '150px', paddingBottom: '100px', paddingLeft: "20px", paddingRight: '20px' }} className="resume-container">

          <h2 style={{ paddingBottom: 20 }}>Checkout my resume!</h2>

          <p style={{ margin: '0in', lineHeight: '130%', fontSize: '50px', fontFamily: "Arial", color: '#004d40', textAlign: 'justify' }}><strong>
            <span style={{ fontSize: '20px', lineHeight: '130%', fontFamily: "Arial Unicode MS", paddingTop: "40px" }}> EDUCATION &nbsp; </span></strong></p>

          <p style={{ margin: '0in', lineHeight: '130%', fontSize: '15px', fontFamily: "Arial", color: 'black', textAlign: 'justify' }}><strong>
            <span style={{ fontSize: '14px', lineHeight: '130%', fontFamily: "Arial" }}>University of British Columbia</span></strong>
            <span style={{ fontSize: '14px', lineHeight: '130%', fontFamily: "Arial" }}>&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                   <strong>Expected Graduation: 2023&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;</strong></span></p>

          <p style={{ margin: '0in', lineHeight: '130%', fontSize: '10px', fontFamily: "Arial", color: 'black', textAlign: 'justify' }}>
            <span style={{ fontSize: '14px', lineHeight: '130%', fontFamily: "Arial" }}>Bachelor of Applied Science, Computer Engineering &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                 &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</span></p>

          <p style={{ margin: '0in', lineHeight: '130%', fontSize: '70px', fontFamily: "Arial", color: '#004d40', textAlign: 'justify' }}><strong>
            <span style={{ fontSize: '20px', lineHeight: '130%', fontFamily: "Arial Unicode MS" }}> TECHINAL SKILLS &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </span></strong></p>

          <ul style={{ listStyleType: 'disc' }}>
            <li><strong><span style={{ fontSize: '10.0pt' }}>Programming Languages</span></strong>
              <span style={{ fontFamily: 'Arial', fontSize: '10.0pt' }}>: C, C++, Python, Java, MATLAB,
                     Assembly, Verilog, Dart, JavaScript, CSS, SQL</span></li>

            <li><strong><span style={{ fontSize: '10.0pt' }}>Backend</span></strong>
              <span style={{ fontFamily: 'Arial', fontSize: '10.0pt' }}>: MySQL, Firebase, Flask, Node.js</span></li>

            <li><strong><span style={{ fontSize: '10.0pt' }}>Fronted</span></strong>
              <span style={{ fontFamily: 'Arial', fontSize: '10.0pt' }}>: React, React Native, Figma, HTML</span></li>

            <li><strong><span style={{ fontSize: '10.0pt' }}>Tools</span></strong>
              <span style={{ fontFamily: 'Arial', fontSize: '10.0pt' }}>: Android Studio, Visual Studio,
                    Eclipse, IntelliJ, SolidWorks, Microsoft Office, Airtable, GitHub, Git</span></li>
            <li><strong><span style={{ fontSize: '10.0pt' }}>Operational Systems</span></strong>
              <span style={{ fontFamily: 'Arial', fontSize: '10.0pt' }}>: Windows, Linux</span></li>

            <li><strong><span style={{ fontSize: '10.0pt' }}>Hardware</span></strong>
              <span style={{ fontFamily: 'Arial', fontSize: '10.0pt' }}>: Arduino, Raspberry Pi, DE1-SoC</span></li>

            <p style={{ margin: '0in', lineHeight: '130%', fontSize: '70px', fontFamily: "Arial", color: '#004d40', textAlign: 'justify' }}><strong>
              <span style={{ fontSize: '20px', lineHeight: '130%', fontFamily: "Arial Unicode MS" }}> WORK EXPERIENCE &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp;</span></strong></p>

            <p style={{ margin: '0in', lineHeight: '130%', fontSize: '20px', fontFamily: "Arial", color: 'black', textAlign: 'justify' }}><strong>
              <span style={{ fontSize: '14px', lineHeight: '130%', fontFamily: "Arial" }}>Integrated Renewal Program (IRP), Vancouver BC</span></strong></p>
            <p style={{ margin: '0in', lineHeight: '130%', fontSize: '20px', fontFamily: "Arial", color: 'black', textAlign: 'justify' }}><strong>
              <span style={{ fontSize: '14px', lineHeight: '130%', fontFamily: "Arial" }}>Learning Rover Team Lead &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                     &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  September, 2020 &ndash; December, 2020</span></strong></p>

            <li><span style={{ fontFamily: 'Arial', fontSize: '10.0pt' }}>Updated the database of UBC employees through
            Airtable management by creating Python API scripts and constantly
                       updating them to match the given data</span></li>

            <li><span style={{ fontFamily: 'Arial', fontSize: '10.0pt' }}>Created Excel graphs based on Airtable information to clearly present data to the IRP community</span></li>

            <li><span style={{ fontFamily: 'Arial', fontSize: '10.0pt' }}>Led a team of 4 Co-op students to assist the UBC community on using Workday</span></li>

            <li><span style={{ fontFamily: 'Arial', fontSize: '10.0pt' }}>Attended weekly meetings with the Co-op students’
                       supervisor to give feedback about the tasks performed, discuss new assignments, and report and solve any issues</span></li>

            <li><span style={{ fontFamily: 'Arial', fontSize: '10.0pt' }}>Improved teamwork and adaptability skills by working alongside 20 Co-op students</span></li>


            <p style={{ margin: '0in', lineHeight: '130%', fontSize: '30px', fontFamily: "Arial", color: 'black', textAlign: 'justify' }}><strong>
              <span style={{ fontSize: '14px', lineHeight: '130%', fontFamily: "Arial" }}>Learning Rover &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; September, 2020 &ndash; December, 2020</span></strong></p>

            <li><span style={{ fontFamily: 'Arial', fontSize: '10.0pt' }}>Used HTML to update websites by formatting the content and constantly updating pages</span></li>

            <li><span style={{ fontFamily: 'Arial', fontSize: '10.0pt' }}>Taught and assisted over 200 people on using Workday through video calls and tutorials</span></li>
            <li><span style={{ fontFamily: 'Arial', fontSize: '10.0pt' }}>Enhanced the ability to present information effectively to diverse audiences and to answer questions properly</span></li>

          </ul>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Resume

