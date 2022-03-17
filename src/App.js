import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function App() {
  const onDrop = useCallback((files) => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_NAME}/video/upload`;
    console.log(files);

    files.forEach(async (file) => {
      const formData = new FormData();

      formData.append("file", file);
      formData.append(
        "upload_preset",
        `${process.env.REACT_APP_UPLOAD_PRESET}`,
      );
      let response;
      try {
        response = await fetch(url, {
          method: "post",
          body: formData,
        });
        const data = await response.json();
        console.log(data);
        console.log("done");
      } catch (err) {
        console.log(err);
      }
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accepts: "*",
    multiple: false,
  });
  return (
    <div className="App">
      <header className="App-header">Upload a photo to cloudinary</header>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
}

export default App;
