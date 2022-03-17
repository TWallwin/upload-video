import cloudinary from "cloudinary";
function App() {
  console.log(process.env);
  return (
    <div className="App">
      <header className="App-header">Upload a photo to cloudinary</header>
      {cloudinary.openUploadWidget(
        {
          cloud_name: `${process.env.REACT_APP_NAME}`,
          upload_preset: `${process.env.REACT_APP_UPLOAD_PRESET}`,
        },
        function (error, result) {
          console.log(error, result);
        },
      )}
    </div>
  );
}

export default App;
