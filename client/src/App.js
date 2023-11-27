import { useRef, useState, useEffect } from "react";
import "./App.css";
import { uploadFile } from "./services/api";
import UploadFile from "./components/UploadFile";
import { copyIcon } from "./assets/uploadcloud";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

  const copyLink = () => {
    navigator.clipboard.writeText(result);
    toast.success("Copied to clipboard");
  };

  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        console.log(response);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);

  return (
    <div className="container flex flex-col items-center justify-center gap-10 bg-primary">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "text-lg",
          duration: 5000,

          style: {
            background: "#1F6E8C",
            color: "#0E2954",
            fontWeight: 500,
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <div className="flex flex-col items-center justify-center gap-10 wrapper">
        <h1 className="text-5xl italic font-bold text-light font-libre">
          Simple File Sharing App!
        </h1>
        <p className="text-lg font-semibold capitalize text-body">
          Upload and share the download link.
        </p>

        <label htmlFor="upload_file">
          <UploadFile setFile={setFile} />
        </label>

        <input
          id="upload_file"
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        {
          <div
            className={`flex items-center border w-fit border-body transition-opacity ${
              result ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="p-2 text-light">{result}</p>
            <button className="w-10 h-full px-2 bg-body" onClick={copyLink}>
              {copyIcon({ color: "#84A7A1" })}
            </button>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
