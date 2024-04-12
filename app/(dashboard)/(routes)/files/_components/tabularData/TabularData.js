"use client";
import React, { useState } from "react";
import { Trash2, Link2, SquareArrowOutUpRight } from "lucide-react";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import { app } from "@/firebaseConfig";
import Link from 'next/link'
import Image from "next/image";
import SortBy from "./SortBy";
function TabularData({ snapData, setLoad, load }) {
  const startDelete = async (id) => {
    const db = getFirestore(app);
    await deleteDoc(doc(db, "uploadedFile", id));
    setLoad(!load);
  };
  
  let s = 0;
  const[sortBy, setSortBy]=useState('');
  snapData.map((item) => {s += item.fileSize;

  item.mainUrl=  item.fileUrl.split("?")[0]});
  let k = "";
  if (s / 1024 > 1024) {
    k = String((s / 1024 / 1024).toFixed(2)) + " MB";
  } else if (s / 1024 / 1024 > 1024) {
    k = String((s / 1024 / 1024 / 1024).toFixed(2)) + " GB";
  } else {
    k = String((s / 1024).toFixed(2)) + " KB";
  }

  return (
    <div>
      <div className=" p-3  h-screen">
        <div className="flex justify-between">

          <p>File Count:&nbsp;{snapData.length}</p>
          <p>Space Occupied:&nbsp; {k}</p>

        {/* <select value={sortBy} defaultValue={""} onChange={(e)=>setSortBy(e.target.value)} >
        <option value="" disabled>Sort By</option>
        <option value="createdAt">Added Date</option>
        <option value="name">Name</option>
        <option value="size">Size</option>
      </select> */}
      <SortBy setSortBy={setSortBy} />
        </div>

        {snapData.length > 0 ? (
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm p">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900 ">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">
                  Size
                </th>
                
                <th className="px-4 py-2">CDN Link</th>

                <th className="px-4 py-2 hidden md:block">Remove</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {snapData .sort((a, b) => {
            // Sort based on selected criteria
            switch (sortBy) {
              case 'createdAt':
                return new Date(b.createdAt.seconds * 1000 + b.createdAt.nanoseconds / 1000000) - new Date(a.createdAt.seconds * 1000 + a.createdAt.nanoseconds / 1000000);
              case 'name':
                return a.fileName.localeCompare(b.fileName); // Sort by name alphabetically
              case 'size':
                return a.fileSize - b.fileSize; // Sort by size
              default:
                return 0;
            }
          }).map((element, index) => {
                return (
                  <tr key={index}>
                    <td className="whitespace-nowrap px-2 md:px-4 py-2 font-medium text-gray-900 text-center scale-110 hover:text-primary hover:underline">
                      <Link
                        href={
                          process.env.NEXT_PUBLIC_BASE_URL +
                          "/file-preview/" +
                          element.id
                        }
                        target="_blank"
                        className="scale-110"
                      >
                       {element.fileName.length>26?element.fileName.slice(0,26)+'...':element.fileName}
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-2 md:px-4 py-2 text-gray-700 text-center">
                      {((element.fileSize / 1024)>1024)?String((element.fileSize/1024/1024).toFixed(2))+' MB':
                     String((element.fileSize/1024).toFixed(2))+' KB'}
                    </td>

                    <td className="whitespace-nowrap px-2 md:px-4 py-2 flex justify-center">
                      <Link
                        href={element.fileUrl}
                        target="_blank"
                        className="inline-block rounded px-4 py-2 text-xs font-medium hover:text-primary "
                      >
                        {/* <Link2 className="w-5 md:w-6" /> */}

                          
                            {element.mainUrl.endsWith("pdf")
                           ? (
                            <Image
                              src={"/pdf.png"}
                              height={25}
                              width={20}
                              alt="icon"
                            />
                          ) : element.mainUrl.endsWith("mp4") ||
                            element.mainUrl.endsWith("avi") ||
                            element.mainUrl.endsWith("mov") ||
                            element.mainUrl.endsWith("wmv") ? (
                            <Image
                              src={"/video2.png"}
                              alt="thumbnail"
                              width={20}
                              height={25}
                             className="scale-110"
                            />
                          ) : element.mainUrl.endsWith("mp3") ||
                            element.mainUrl.endsWith("wav") ||
                            element.mainUrl.endsWith("flac") ? (
                            <Image
                              src={"/audio.png"}
                              alt="thumbnail"
                              width={20}
                              height={25}
                             
                            />
                          ) : element.mainUrl.endsWith("jpg") ||
                            element.mainUrl.endsWith("jpeg") ||
                            element.mainUrl.endsWith("png") ||
                            element.mainUrl.endsWith("gif") ? (
                            <Image
                              src={ "/image.png"}
                              alt="thumbnail"
                              width={20}
                              height={25}
                             
                            />
                          ) : (
                            <Image
                              src={"/file.png"}
                              alt="thumbnail"
                              width={20}
                              height={25}
                             
                            />
                          )
                        }
                    
                      </Link>
                    </td>

                    <td className="whitespace-nowrap px-2 md:px-4 py-2 text-gray-700 text-center hover:text-primary">
                      <button onClick={() => startDelete(element.id)}>
                        <Trash2 className="w-5 md:w-6" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500 mt-16">
            Upload some file to view details here
          </p>
        )}
      </div>
     
    </div>
  );
}

export default TabularData;
