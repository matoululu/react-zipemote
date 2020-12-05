import upload from '../images/upload.svg';
import React from "react";
import Dropzone from 'react-dropzone';

class Uploader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showError:false};
  }

  handleAcceptedDrop = (file) => {
    const blob = URL.createObjectURL(file[0]);
    console.log(blob);
  }

  handleRejectedDrop = () => {
    this.setState(state => ({
      showError: true
    }));
  }

  render() {
    return (
      <main className="container">
        {this.state.showError ? <p className="warning">Image type must be .jpeg or .png</p> : null }
        <Dropzone onDropAccepted={this.handleAcceptedDrop} onDropRejected={this.handleRejectedDrop} accept="image/jpeg, image/png">
          {({getRootProps, getInputProps}) => (
            <div className="uploader" {...getRootProps()}>
              <input {...getInputProps()} />
              <img src={upload} className="upload-icon" alt="Upload" />
              <label>Drag 'n' drop your image file here, or click to select an image</label>
              <em>(Only *.jpeg and *.png images will be accepted)</em>
            </div>
          )}
        </Dropzone>
      </main>
    );
  }
}

export default Uploader;
