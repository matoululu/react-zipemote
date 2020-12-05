import upload from '../images/upload.svg';

function Uploader() {
  return (
    <main className="container">
      <div className="uploader">
        <img src={upload} className="upload-icon" alt="Upload" />
        <label htmlFor="uploader">Drop your .png or .jpg file or click here!</label>
        <input id="uploader" type="file" accept="image/*" name="uploader"/>
      </div>
    </main>
  );
}

export default Uploader;
