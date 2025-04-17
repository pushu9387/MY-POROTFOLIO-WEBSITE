import React from 'react';

function Resume() {
  return(
    <div className="section">
      <h2>My Resume</h2>
      <p>You can download my resume below.</p>
      <a href="resume.html" target="_blank" rel="noopener noreferrer">View My-Resume</a> 
      <br/>
      <a href="/my-Resume.md" download> Download My-Resume(README)</a>
    </div>
  );
}

export default Resume;
