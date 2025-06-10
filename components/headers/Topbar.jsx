import React from "react";

export default function Topbar() {
  return (
    <div className="tf-top-bar">
      <div className="tf-container xl">
        <div className="row">
          <div className="col-12">
            <div className="top-bar-inner">
              <ul className="top-bar-info">
                <li>
                  <i className="icon-phone-1" />
                  <p>
                    Phone: <span className="fw-7">(603) 555-0123</span>
                  </p>
                </li>
                <li>
                  <i className="icon-mail" />
                  <p>
                    Email: <a href="#">themesflat@gmail.com</a>
                  </p>
                </li>
              </ul>
              <div className="wrap-social">
                <p>Follow us</p>
                <ul className="tf-social style-2">
                  <li>
                    <a href="#">
                      <i className="icon-fb" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-X" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-linked" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-ins" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
