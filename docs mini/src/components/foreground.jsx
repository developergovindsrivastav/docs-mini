import React, { useRef, useState } from "react";
import Card from "./card";
import { MdClear } from "react-icons/md";
const Foreground = () => {
  const reference = useRef(null)
  let data = [
    {
      title: "lorem ipsum dolor sit amet, consectetur adipiscing",
      iconvalue: false,
      icon: <MdClear />,
      Color: "green",
      Textcolor : "black",
      filesize: "0.9mb",
      taglist: {
        isactive: false,
        tagdisc: "Download now",
      },
    },
    {
      title: "lorem ipsum dolor sit amet, consectetur adipiscing",
      iconvalue: true,
      icon: <MdClear />,
      Color: "white",
      Textcolor : "black",
      filesize: "0.9mb",
      taglist: {
        isactive: true,
        tagdisc: "Download now",
      },
    },
    {
      title: "lorem ipsum dolor sit amet, consectetur adipiscing",
      iconvalue: true,
      icon: <MdClear />,
      Color: "white",
      Textcolor : "black",
      filesize: "0.9mb",
      taglist: {
        isactive: true,
        tagdisc: "Download now",
      },
    },
    {
      title: "lorem ipsum dolor sit amet, consectetur adipiscing",
      iconvalue: false,
      icon: <MdClear />,
      Color: "green",
      Textcolor : "black",
      filesize: "0.9mb",
      taglist: {
        isactive: false,
        tagdisc: "Download now",
      },
    },
    {
      title: "lorem ipsum dolor sit amet, consectetur adipiscing",
      iconvalue: true,
      icon: <MdClear />,
      Color: "white",
      Textcolor : "black",
      filesize: "0.9mb",
      taglist: {
        isactive: true,
        tagdisc: "Download now",
      },
    },
  ];
  return (
    <div ref={reference} className="w-full h-screen flex flex-wrap flex-shrink-0">
      {data.map((index, key) => (
        <Card data={index} reference = {reference}  key={key} />
      ))}
    </div>
  );
};

export default Foreground;
