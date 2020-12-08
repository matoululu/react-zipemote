import upload from '../images/upload.svg';
import React from "react";
import Dropzone from 'react-dropzone';
import Resizer from 'react-image-file-resizer';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import Chat from '../component/Chat.js';

class Uploader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showError:false,
      imageResized: false
    };
    this.originalImage = '';
    this.resizedImageArray = [];
    this.sizeArray = [28,56,112];
    this.zip = new JSZip();
  }

  handleReset = () => {
    this.originalImage = '';
    this.resizedImageArray = [];
    this.zip = new JSZip();
    this.setState(state => ({
      imageResized: false,
      showError: false
    }));
  }

  handleDownload = () => {
    this.zip.generateAsync({type:"blob"}).then((content) => {
      saveAs(content, `${Date.now()}.zip`);
    });
  }

  handleRejectedDrop = () => {
    this.setState(state => ({
      showError: true
    }));
  }

  handleAcceptedDrop = async (file) => {
    this.originalImage = URL.createObjectURL(file[0]);
    await this.resizeFile(file[0]);

    this.setState(state => ({
      imageResized: true
    }));
  }

  resizeFile = async (blob) => {
    this.resizedImageArray = [];
    this.setState(state => ({
      imageResized: false
    }));

    await Promise.all(this.sizeArray.map((size) => {
      return new Promise((resolve) => {
        Resizer.imageFileResizer(blob, size, size, 'PNG', 100, 0, uri => resolve(this.resizedImageArray.push(uri)), 'base64');
        this.zip.file(`${size}.png`, blob);
      });
    }));
  }

  render() {
    return (
      <main className="container">
        {this.state.showError ? <p className="warning">Image type must be .jpeg or .png</p> : null }
        <div className="uploader">
        {!this.state.imageResized ?
          <Dropzone onDropAccepted={this.handleAcceptedDrop} onDropRejected={this.handleRejectedDrop} accept="image/jpeg, image/png">
            {({getRootProps, getInputProps}) => (
              <div className="uploader__form" {...getRootProps()}>
                <input {...getInputProps()} />
                <img src={upload} className="uploader__icon" alt="Upload" />
                <label>Drop your .png or .jpg file or click here!</label>
              </div>
            )}
          </Dropzone>
          :
          <div className="preview">
            <span className="preview__source"><img src={this.originalImage} alt="Source" className="preview__source-image"/></span>

            <div className="preview__container">
              <ul className="preview__list">
                {this.resizedImageArray.map(preview => {
                  return <li key={preview}><img src={preview} alt="preview"/></li>
                })}
              </ul>
              <div className="preview__buttons">
                <button onClick={this.handleDownload} className="get-zip">Download .zip</button>
                <button onClick={this.handleReset} className="secondary reset">Reset</button>
              </div>

            </div>
          </div>
          }
        </div>

        {this.state.imageResized ? <Chat emote={this.originalImage}/> : null }
      </main>
    );
  }
}

export default Uploader;
