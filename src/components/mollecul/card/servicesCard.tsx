"use client";

import { useState, useRef, useEffect } from "react";
import "@/components/styles/servicesCard.module.css";

export default function ServiceCard({
  title,
  photo,
  desc,
  backContent,
}: {
  title: string;
  photo: string;
  desc: string;
  backContent: string;
}) {
  const [flip, setFlip] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h6 = ref.current?.querySelector("h6");
    const p = ref.current?.querySelector("p");
    if (h6) h6.innerText = "";
    if (p) p.innerText = "";

    setTimeout(() => {
      if (flip) {
        if (p) p.innerText = backContent;
      } else {
        if (p) p.innerText = desc;
        if (h6) h6.innerText = title;
      }
    }, 590);
  }, [flip]);

  return (
    <div
      className={`item ${!flip ? "flipBack" : "flipped"}`}
      ref={ref}
      onClick={() => {
        setFlip((prev) => !prev);
      }}
    >
      <div className={`${!flip ? "front" : "back"}`}>
        <span className="icon feature-box">
          <i className="fa fa-android"></i>
        </span>
        {!flip ? (
          <>
            <h6 className="text-blue-gray-800 font-bold text-center">{title}</h6>
            <div className="photo align-center" style={{ width: '250px', height: '200px' }}>{photo}</div>
            <p className="text-blue-gray-800 text-center">{desc}</p>
          </>
        ) : (
          <p className="text-blue-gray-800">{backContent}</p>
        )}
      </div>
    </div>
  );
}
