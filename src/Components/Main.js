import React, { useState } from 'react';
import './Main.css'; // Import your CSS file (if applicable)
import Tesseract from 'tesseract.js';
import $ from 'jquery';

function Main() {
  const [processingText, setProcessingText] = useState(false);
  const [extractedText, setExtractedText] = useState('');
  const [fileName, setFileName] = useState('No file chosen...');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      let name = file.name;
      if (name.length > 14) {
          name  = name.substring(0, 14) + '...'; // If the string is already 6 characters or less, return it as is
      }
      setFileName(name);
      setFile(file);
    } else {
      setFile(null);
      setFileName('No file chosen...');
    }
  };

  const handleButtonClick = async () => {
    if (file == null) {
      return;
    }

    setProcessingText(true);

    try {
      const text = await processImage(file);
      setExtractedText(text);
    } catch (error) {
      console.error('Error processing image:', error);
    } finally {
      setProcessingText(false);
      setFile(null);
      setFileName('No file chosen...');
    }
  };

  const processImage = async (imageFile) => {
    const result = await Tesseract.recognize(
      imageFile,
      'eng', // adjust language code as needed
      { logger: (m) => console.log(m) } // optional logger
    );

    return result.data.text;
  };

  const startOver = async() => {
        setProcessingText(false);
        setExtractedText('');
        setFile(null);
        setFileName('No file chosen...');
  }

  const copyText = async() => {
          const textField = document.createElement('textarea');
            textField.innerText = extractedText;
            document.body.appendChild(textField);
            textField.select();
            document.execCommand('copy');
            textField.remove();
    }

  return (
    <div className="ring-container"> {/* Wrap rings in a container */}
    { extractedText == '' && (
      <div className="ring">
        <i style={{ '--clr': '#00ff0a' }}></i>
        <i style={{ '--clr': '#ff0057' }}></i>
        <i style={{ '--clr': '#fffd44' }}></i>

        <label className="upload-image">
          <div className="file-upload">
                <div className="file-select">
                  <div className="file-select-button" id="fileName">
                    Choose File
                  </div>
                  <div className="file-select-name" id="noFile">
                    {fileName}
                  </div>
                  <input
                    type="file"
                    name="chooseFile"
                    id="chooseFile"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
          <button onClick={handleButtonClick}>{processingText ? "Extracting ...." : "Extract text" }</button>
        </label>
      </div>
     )}
      {extractedText && (

      <article class="card">
        <h1 class="card__title"><mark>Extracted text</mark></h1>
        <p class="card__description">{extractedText}</p>

        <div class="card__actions">
          <div onClick={copyText} class="card__button" target="_blank">Copy Text</div>
          <div target="_blank" onClick={startOver} class="card__button">Start Over</div>
        </div>
      </article>
      )}
    </div>
  );
}

export default Main;