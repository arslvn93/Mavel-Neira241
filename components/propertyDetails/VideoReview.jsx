"use client";
import Image from "next/image";
import ModalVideo from "../common/ModalVideo";
import { useState } from "react";
export default function VideoReview() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">Video</div>
      <div className="widget-video style-1">
        <Image
          className="lazyload"
          data-src="/images/section/property-detail.jpg"
          alt=""
          src="/images/section/property-detail.jpg"
          width={792}
          height={446}
        />
        <a onClick={() => setIsOpen(true)} className="popup-youtube">
          <i className="icon-play" />
        </a>
      </div>
      <ModalVideo
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        videoId={"XHOmBV4js_E"}
      />
    </>
  );
}
