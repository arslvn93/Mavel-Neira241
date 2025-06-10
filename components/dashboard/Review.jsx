import React from "react";
import Image from "next/image";
export default function Review() {
  return (
    <div className="main-content w-100">
      <div className="main-content-inner style-3">
        <div className="button-show-hide show-mb">
          <span className="body-1">Show Dashboard</span>
        </div>
        <div className="widget-box-2 mess-box">
          <h3 className="title">Recent Reviews</h3>
          <ul className="list-mess">
            <li className="mess-item">
              <div className="user-box">
                <div className="avatar">
                  <Image
                    alt="avt"
                    src="/images/avatar/avt-png13.png"
                    width={51}
                    height={51}
                  />
                </div>
                <div className="content justify-content-start">
                  <div className="name fw-6">Bessie Cooper</div>
                  <span className="caption-2 text-variant-3">3 day ago</span>
                </div>
              </div>
              <p>
                Maecenas eu lorem et urna accumsan vestibulum vel vitae magna.
              </p>
              <div className="ratings">
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
              </div>
            </li>
            <li className="mess-item">
              <div className="user-box">
                <div className="avatar">
                  <Image
                    alt="avt"
                    src="/images/avatar/avt-png14.png"
                    width={68}
                    height={68}
                  />
                </div>
                <div className="content justify-content-start">
                  <div className="name fw-6">Annette Black</div>
                  <span className="caption-2 text-variant-3">3 day ago</span>
                </div>
              </div>
              <p>
                Nullam rhoncus dolor arcu, et commodo tellus semper vitae.
                Aenean finibus tristique lectus, ac lobortis mauris venenatis
                ac.
              </p>
              <div className="ratings">
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
              </div>
            </li>
            <li className="mess-item">
              <div className="user-box">
                <div className="avatar">
                  <Image
                    alt="avt"
                    src="/images/avatar/avt-png15.png"
                    width={51}
                    height={51}
                  />
                </div>
                <div className="content justify-content-start">
                  <div className="name fw-6">Ralph Edwards</div>
                  <span className="caption-2 text-variant-3">3 day ago</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                viverra semper convallis. Integer vestibulum tempus tincidunt.
              </p>
              <div className="ratings">
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
              </div>
            </li>
            <li className="mess-item">
              <div className="user-box">
                <div className="avatar">
                  <Image
                    alt="avt"
                    src="/images/avatar/avt-png16.png"
                    width={51}
                    height={51}
                  />
                </div>
                <div className="content justify-content-start">
                  <div className="name fw-6">Jerome Bell</div>
                  <span className="caption-2 text-variant-3">3 day ago</span>
                </div>
              </div>
              <p>
                Fusce sit amet purus eget quam eleifend hendrerit nec a erat.
                Sed turpis neque, iaculis blandit viverra ut, dapibus eget nisi.
              </p>
              <div className="ratings">
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
              </div>
            </li>
            <li className="mess-item">
              <div className="user-box">
                <div className="avatar">
                  <Image
                    alt="avt"
                    src="/images/avatar/avt-png17.png"
                    width={51}
                    height={51}
                  />
                </div>
                <div className="content justify-content-start">
                  <div className="name fw-6">Albert Flores</div>
                  <span className="caption-2 text-variant-3">3 day ago</span>
                </div>
              </div>
              <p>
                Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum.
                Fusce at dui tincidunt nulla semper venenatis at et magna.
                Mauris turpis lorem, ultricies vel justo sed.
              </p>
              <div className="ratings">
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
              </div>
            </li>
          </ul>
        </div>
        {/* .footer-dashboard */}
        <div className="footer-dashboard">
          <p>Copyright © {new Date().getFullYear()} Popty</p>
          <ul className="list">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        {/* .footer-dashboard */}
      </div>
      <div className="overlay-dashboard" />
    </div>
  );
}
