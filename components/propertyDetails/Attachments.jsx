import React from "react";
import Image from "next/image";
export default function Attachments() {
  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">
        File Attachments
      </div>
      <div className="row">
        <div className="col-sm-6">
          <a href="#" target="_blank" className="attachments-item">
            <div className="box-icon w-60">
              <Image
                alt="file"
                src="/images/items/download-1.png"
                width={80}
                height={80}
              />
            </div>
            <span>Villa-Document.pdf</span>
            <i className="icon icon-DownloadSimple" />
          </a>
        </div>
        <div className="col-sm-6">
          <a href="#" target="_blank" className="attachments-item">
            <div className="box-icon w-60">
              <Image
                alt="file"
                src="/images/items/download-2.png"
                width={80}
                height={80}
              />
            </div>
            <span>Villa-Document.pdf</span>
            <i className="icon icon-DownloadSimple" />
          </a>
        </div>
      </div>
    </>
  );
}
