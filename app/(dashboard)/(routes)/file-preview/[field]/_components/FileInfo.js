import React, { useEffect, useState } from "react";
import Image from "next/image";
function FileInfo({ file }) {
  const [imageUrl, setImageUrl] = useState("");
  const [imageName, setImageName] = useState("");
  const [imageSize, setImageSize] = useState(0);
  const [imageType, setImageType] = useState("");
  const [mainUrl, setMainUrl] = useState("");

  let errImg = "/file.png";
  useEffect(() => {
    if (file) {
      setImageUrl(file.fileUrl);
      setImageName(file.fileName);
      setImageSize(file.fileSize);
      setImageType(file.fileType);
      setMainUrl(file.fileUrl.split("?")[0]);
    }
   
  }, [file]);
  return (
    <div className="w-full md:w-2/3 border h-full max-h-full border-gray-300  mr-2 rounded-lg">
      <div className="w-full flex-col flex justify-center items-center h-full px-10 py-[4.5rem] space-y-1">
        <div className="flex justify-center items-center overflow-hidden w-64 h-32 object-cover">
          {mainUrl.endsWith("jpg") ||
          mainUrl.endsWith("jpeg") ||
          mainUrl.endsWith("png") ||
          mainUrl.endsWith("gif") ? (
            <Image
              src={imageUrl || "/file.png"}
              alt="thumbnail"
              width={300}
              height={100}
           
            />
          ) : mainUrl.endsWith("pdf") ? (
            <Image
              src={"/pdf.png"}
              alt="thumbnail"
              width={100}
              height={150}
           
            />
          ) : (mainUrl.endsWith('mp4') || mainUrl.endsWith('avi') || mainUrl.endsWith('mov') || mainUrl.endsWith('wmv')) ? <Image
          src={"/video.png"}
          alt="thumbnail"
          width={100}
          height={150}
      
        /> :( mainUrl.endsWith('mp3') || mainUrl.endsWith('wav') || mainUrl.endsWith('flac') ) ?
        <Image
          src={"/audio.png"}
          alt="thumbnail"
          width={100}
          height={150}
         
        />:
            <Image
              src={"/file.png"}
              alt="thumbnail"
              width={100}
              height={150}
       
            />
          }
        </div>

        <h2 className="text-center text-xl pt-4">{imageName}</h2>
        <p className="text-center ">{imageType}</p>
        <p className="text-center">
          {imageSize / 1024 > 1024
            ? String((imageSize / 1024 / 1024).toFixed(2)) + " MB"
            : String((imageSize / 1024).toFixed(2)) + " KB"}
        </p>
      </div>
    </div>
  );
}

export default FileInfo;
