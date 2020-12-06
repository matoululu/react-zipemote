import upload from '../images/upload.svg';
import loading from '../images/loading.gif';
import React from "react";
import Dropzone from 'react-dropzone';
import Resizer from 'react-image-file-resizer';

class Uploader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showError:false,
      imageResized: false,
      isInactive: true
    };
    this.resizedImageArray = [];
    this.sizeArray = [28,56,112];
  }

  handleAcceptedDrop = async (file) => {
    await this.resizeFile(file[0]);

    this.setState(state => ({
      isInactive: true,
      imageResized: true
    }));
  }

  handleRejectedDrop = () => {
    this.setState(state => ({
      showError: true
    }));
  }

  resizeFile = (blob) => new Promise(resolve => {

    this.setState(state => ({
      isInactive: false,
      imageResized: false
    }));

    this.resizedImageArray = [];

    this.sizeArray.map((size) => {
      Resizer.imageFileResizer(blob, size, size, 'PNG', 100, 0,
      uri => {
        resolve(this.resizedImageArray.push(uri));
      },
      'base64'
      );

      return true;
    })
  });

  render() {
    return (
      <main className="container">
        {this.state.showError ? <p className="warning">Image type must be .jpeg or .png</p> : null }
        <div className="uploader">
        {this.state.isInactive ?
          <Dropzone onDropAccepted={this.handleAcceptedDrop} onDropRejected={this.handleRejectedDrop} accept="image/jpeg, image/png">
            {({getRootProps, getInputProps}) => (
              <div className="uploader__form" {...getRootProps()}>
                <input {...getInputProps()} />
                <img src={upload} className="upload-icon" alt="Upload" />
                <label>Drop your .png or .jpg file or click here!</label>
              </div>
            )}
          </Dropzone>
          : <div className="uploader"><img src={loading} className="loading-icon" alt="Loading" /></div> }
        </div>

        {this.state.imageResized ?
        <ul className="preview">
          {this.resizedImageArray.map(preview => {
            return <li key={preview}><img src={preview} alt="preview"/></li>
          })}
        </ul>
        : null }

      </main>
    );
  }
}

export default Uploader;
