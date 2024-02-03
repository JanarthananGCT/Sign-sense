// src/App.js
import React from 'react';
import './App.css';
import browser from 'webextension-polyfill';

function App() {
  const handleDownload = () => {
    // Send a message to the background script
    browser.runtime.sendMessage({ action: "download" })
      .then(response => {
        console.log("Message sent with response:", response);
      })
      .catch(error => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <div className="App">
      <div className='heading' >
        Sign-Sense
      </div>
      <div className='content' >
      A Chrome Extension for Sign Language Recognition
      </div>

      <button onClick={handleDownload}>Download Transcript</button>
    </div>
  );
}

export default App;
