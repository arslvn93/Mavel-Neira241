"use client";
import React from "react";
import Image from "next/image";
import DropdownSelect from "../common/DropdownSelect";
export default function AddProperty() {
  return (
    <div className="main-content w-100">
      <div className="main-content-inner">
        <div className="button-show-hide show-mb">
          <span className="body-1">Show Dashboard</span>
        </div>
        <div className="widget-box-2 mb-20">
          <h3 className="title">Upload Media</h3>
          <div className="box-uploadfile text-center">
            <div className="uploadfile">
              <a
                href="#"
                className=" tf-btn bg-color-primary pd-10 btn-upload mx-auto"
              >
                <svg
                  width={21}
                  height={20}
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.625 14.375V17.1875C13.625 17.705 13.205 18.125 12.6875 18.125H4.5625C4.31386 18.125 4.0754 18.0262 3.89959 17.8504C3.72377 17.6746 3.625 17.4361 3.625 17.1875V6.5625C3.625 6.045 4.045 5.625 4.5625 5.625H6.125C6.54381 5.62472 6.96192 5.65928 7.375 5.72834M13.625 14.375H16.4375C16.955 14.375 17.375 13.955 17.375 13.4375V9.375C17.375 5.65834 14.6725 2.57417 11.125 1.97834C10.7119 1.90928 10.2938 1.87472 9.875 1.875H8.3125C7.795 1.875 7.375 2.295 7.375 2.8125V5.72834M13.625 14.375H8.3125C8.06386 14.375 7.8254 14.2762 7.64959 14.1004C7.47377 13.9246 7.375 13.6861 7.375 13.4375V5.72834M17.375 11.25V9.6875C17.375 8.94158 17.0787 8.22621 16.5512 7.69876C16.0238 7.17132 15.3084 6.875 14.5625 6.875H13.3125C13.0639 6.875 12.8254 6.77623 12.6496 6.60041C12.4738 6.4246 12.375 6.18614 12.375 5.9375V4.6875C12.375 4.31816 12.3023 3.95243 12.1609 3.6112C12.0196 3.26998 11.8124 2.95993 11.5512 2.69876C11.2901 2.4376 10.98 2.23043 10.6388 2.08909C10.2976 1.94775 9.93184 1.875 9.5625 1.875H8.625"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Select photos
                <input type="file" className="ip-file" />
              </a>
              <p className="file-name fw-5">
                or drag photos here <br />
                <span>(Up to 10 photos)</span>
              </p>
            </div>
          </div>
          <div className="box-img-upload">
            <div className="item-upload file-delete">
              <Image
                alt="img"
                width={615}
                height={405}
                src="/images/home/house-db-1.jpg"
              />
              <span className="icon icon-trashcan1 remove-file" />
            </div>
            <div className="item-upload file-delete">
              <Image
                alt="img"
                width={615}
                height={405}
                src="/images/home/house-db-2.jpg"
              />
              <span className="icon icon-trashcan1" />
            </div>
            <div className="item-upload file-delete">
              <Image
                alt="img"
                width={615}
                height={405}
                src="/images/home/house-db-3.jpg"
              />
              <span className="icon icon-trashcan1 remove-file" />
            </div>
            <div className="item-upload file-delete">
              <Image
                alt="img"
                width={615}
                height={405}
                src="/images/home/house-db-4.jpg"
              />
              <span className="icon icon-trashcan1 remove-file" />
            </div>
            <div className="item-upload file-delete">
              <Image
                alt="img"
                width={615}
                height={405}
                src="/images/home/house-db-5.jpg"
              />
              <span className="icon icon-trashcan1 remove-file" />
            </div>
          </div>
        </div>
        <div className="widget-box-2 mb-20">
          <h5 className="title">Information</h5>
          <form
            className="box-info-property"
            onSubmit={(e) => e.preventDefault()}
          >
            <fieldset className="box box-fieldset">
              <label htmlFor="title">
                Title:<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Choose"
              />
            </fieldset>
            <fieldset className="box box-fieldset">
              <label htmlFor="desc">Description:</label>
              <textarea
                className="textarea"
                placeholder="Your Decscription"
                defaultValue={""}
              />
            </fieldset>
            <div className="box grid-layout-3 gap-30">
              <fieldset className="box-fieldset">
                <label htmlFor="address">
                  Full Address:<span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter property full address"
                />
              </fieldset>
              <fieldset className="box-fieldset">
                <label htmlFor="zip">
                  Zip Code:<span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter property zip code"
                />
              </fieldset>
              <fieldset className="box-fieldset">
                <label htmlFor="country">
                  Country:<span>*</span>
                </label>

                <DropdownSelect
                  options={["United States", "United Kingdom", "Russia"]}
                  addtionalParentClass=""
                />
              </fieldset>
            </div>
            <div className="box grid-layout-2 gap-30">
              <fieldset className="box-fieldset">
                <label htmlFor="state">
                  Province/State:<span>*</span>
                </label>

                <DropdownSelect
                  options={["None", "Texas", "New York"]}
                  addtionalParentClass=""
                />
              </fieldset>
              <fieldset className="box-fieldset">
                <label htmlFor="neighborhood">
                  Neighborhood:<span>*</span>
                </label>

                <DropdownSelect
                  options={["None", "Little Italy", "Bedford Park"]}
                  addtionalParentClass=""
                />
              </fieldset>
            </div>
            <div className="box box-fieldset">
              <label htmlFor="location">
                Location:<span>*</span>
              </label>
              <div className="box-ip">
                <input
                  type="text"
                  className="form-control"
                  defaultValue="None"
                />
                <a href="#" className="btn-location">
                  <i className="icon icon-location" />
                </a>
              </div>
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d135905.11693909427!2d-73.95165795400088!3d41.17584829642291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1727094281524!5m2!1sen!2s"
                width="100%"
                height={456}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </form>
        </div>
        <div className="widget-box-2 mb-20">
          <h3 className="title">Price</h3>
          <div className="box-price-property">
            <form
              className="box grid-2 gap-30"
              onSubmit={(e) => e.preventDefault()}
            >
              <fieldset className="box-fieldset mb-30">
                <label htmlFor="price">
                  Price:<span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Example value: 12345.67"
                />
              </fieldset>
              <fieldset className="box-fieldset mb-30">
                <label htmlFor="neighborhood">
                  Unit Price:<span>*</span>
                </label>

                <DropdownSelect
                  options={["None", "1000", "2000"]}
                  addtionalParentClass=""
                />
              </fieldset>
              <div className="grid-layout-2 gap-30">
                <fieldset className="box-fieldset">
                  <label htmlFor="price">
                    Before Price Label:<span>*</span>
                  </label>
                  <input type="text" className="form-control" />
                </fieldset>
                <fieldset className="box-fieldset">
                  <label htmlFor="price">
                    After Price Label:<span>*</span>
                  </label>
                  <input type="text" className="form-control" />
                </fieldset>
              </div>
            </form>
          </div>
        </div>
        <div className="widget-box-2 mb-20">
          <h3 className="title">Addtional Infomation</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="box grid-layout-3 gap-30">
              <fieldset className="box-fieldset">
                <label htmlFor="type">
                  Property Type:<span>*</span>
                </label>

                <DropdownSelect
                  options={["Apartment", "Villa", "Studio", "Office"]}
                  addtionalParentClass=""
                />
              </fieldset>
              <fieldset className="box-fieldset">
                <label htmlFor="status">
                  Property Status:<span>*</span>
                </label>

                <DropdownSelect
                  options={["Choose", "For Rent", "For Sale"]}
                  addtionalParentClass=""
                />
              </fieldset>
              <fieldset className="box-fieldset">
                <label htmlFor="label">
                  Property Label:<span>*</span>
                </label>

                <DropdownSelect
                  options={["Choose", "New Listing", "Open House"]}
                  addtionalParentClass=""
                />
              </fieldset>
            </div>
            <div className="box grid-layout-3 gap-30">
              <fieldset className="box-fieldset">
                <label htmlFor="size">
                  Size (SqFt):<span>*</span>
                </label>
                <input type="text" className="form-control" />
              </fieldset>
              <fieldset className="box-fieldset">
                <label htmlFor="land">
                  Land Area (SqFt):<span>*</span>
                </label>
                <input type="text" className="form-control" />
              </fieldset>
              <fieldset className="box-fieldset">
                <label htmlFor="id">
                  Property ID:<span>*</span>
                </label>
                <input type="text" className="form-control" />
              </fieldset>
            </div>
            <div className="box grid-layout-3 gap-30">
              <fieldset className="box-fieldset">
                <label htmlFor="rom">
                  Rooms:<span>*</span>
                </label>
                <input type="text" className="form-control" />
              </fieldset>
              <fieldset className="box-fieldset">
                <label htmlFor="bedrooms">
                  Bedrooms:<span>*</span>
                </label>
                <input type="text" className="form-control" />
              </fieldset>
              <fieldset className="box-fieldset">
                <label htmlFor="bathrooms">
                  Bathrooms:<span>*</span>
                </label>
                <input type="text" className="form-control" />
              </fieldset>
            </div>
            <div className="box grid-layout-3 gap-30">
              <fieldset className="box-fieldset">
                <label htmlFor="garages">
                  Garages:<span>*</span>
                </label>
                <input type="text" className="form-control" />
              </fieldset>
              <fieldset className="box-fieldset">
                <label htmlFor="garages-size">
                  Garages Size (SqFt):<span>*</span>
                </label>
                <input type="text" className="form-control" />
              </fieldset>
              <fieldset className="box-fieldset">
                <label htmlFor="year">
                  Year Built:<span>*</span>
                </label>
                <input type="text" className="form-control" />
              </fieldset>
            </div>
          </form>
        </div>
        <div className="widget-box-2 mb-20">
          <h5 className="title">
            Amenities<span>*</span>
          </h5>
          <div className="box-amenities-property">
            <div className="box-amenities">
              <div className="title-amenities fw-6 text-color-heading text-1">
                Home safety:
              </div>
              <div className="list-amenities">
                <fieldset className="checkbox-item  style-1  ">
                  <label>
                    <span className="text-4">Smoke alarm</span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1  ">
                  <label>
                    <span className="text-4">Self check-in with lockbox</span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1  ">
                  <label>
                    <span className="text-4">Carbon monoxide alarm</span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1  ">
                  <label>
                    <span className="text-4">Security cameras</span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
              </div>
            </div>
            <div className="box-amenities">
              <div className="title-amenities fw-6 text-color-heading text-1">
                Bedroom
              </div>
              <div className="list-amenities">
                <fieldset className="checkbox-item style-1  ">
                  <label>
                    <span className="text-4">Hangers</span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1  ">
                  <label>
                    <span className="text-4">Extra pillows &amp; blankets</span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1  ">
                  <label>
                    <span className="text-4">Bed linens</span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1  ">
                  <label>
                    <span className="text-4">TV with standard cable</span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
              </div>
            </div>
            <div className="box-amenities">
              <div className="title-amenities fw-6 text-color-heading text-1">
                Kitchen:
              </div>
              <div className="list-amenities">
                <fieldset className="checkbox-item style-1  ">
                  <label>
                    <span className="text-4">Refrigerator</span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1  ">
                  <label>
                    <span className="text-4">Dishwasher</span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1  ">
                  <label>
                    <span className="text-4">Microwave</span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1  ">
                  <label>
                    <span className="text-4">Coffee maker</span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-box-2 mb-20">
          <h3 className="title">Virtual Tour 360</h3>
          <div className="box-radio-check">
            <div className="text-btn mb-16">Virtual Tour Type:</div>
            <form onSubmit={(e) => e.preventDefault()}>
              <fieldset className="radio-item   ">
                <label>
                  <span className="text-1">Embedded code</span>
                  <input type="radio" name="radio" id="radio1" />
                  <span className="btn-radio" />
                </label>
              </fieldset>
              <fieldset className="radio-item  style-1  ">
                <label>
                  <span className="text-1">Upload image</span>
                  <input type="radio" name="radio" id="radio2" />
                  <span className="btn-radio" />
                </label>
              </fieldset>
              <fieldset className="box-fieldset">
                <label htmlFor="embedded">Embedded Code Virtual 360</label>
                <textarea className="textarea" defaultValue={""} />
              </fieldset>
            </form>
          </div>
        </div>
        <div className="widget-box-2 mb-20">
          <h3 className="title">Videos</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <fieldset className="box-fieldset">
              <label htmlFor="video" className="text-btn">
                Video URL:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Youtube, vimeo url"
              />
            </fieldset>
          </form>
        </div>
        <div className="widget-box-2 mb-20">
          <h3 className="title">Floors</h3>
          <div className="box-radio-check mb-16">
            <div className="text-1 mb-12">Enable Floor Plan:</div>
            <fieldset className="radio-item mb-8">
              <label>
                <span className="text-1">Enable</span>
                <input type="radio" name="radio" id=" floor-plan-1" />
                <span className="btn-radio" />
              </label>
            </fieldset>
            <fieldset className="radio-item  style-1  ">
              <label>
                <span className="text-1">Disable</span>
                <input type="radio" name="radio" id="  floor-plan-2 " />
                <span className="btn-radio" />
              </label>
            </fieldset>
          </div>
          <div className="box-floor-property file-delete">
            <div className="top d-flex justify-content-between align-items-center">
              <h6>Floor 1:</h6>
              <a href="#" className="remove-file">
                <span className="icon icon-close" />
              </a>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <fieldset className="box box-fieldset">
                <label htmlFor="name">Floor Name:</label>
                <input type="text" className="form-control " />
              </fieldset>
              <div className="grid-layout-2 box gap-30">
                <fieldset className="box-fieldset">
                  <label htmlFor="floor-price">
                    Floor Price (Only Digits):
                  </label>
                  <input type="text" className="form-control " />
                </fieldset>
                <fieldset className="box-fieldset">
                  <label htmlFor="price-postfix">Price Postfix:</label>
                  <input type="text" className="form-control " />
                </fieldset>
              </div>
              <div className="grid-layout-2 box gap-30">
                <fieldset className="box-fieldset">
                  <label htmlFor="floor-size">Floor Size (Only Digits):</label>
                  <input type="text" className="form-control " />
                </fieldset>
                <fieldset className="box-fieldset">
                  <label htmlFor="size-postfix">Size Postfix:</label>
                  <input type="text" className="form-control " />
                </fieldset>
              </div>
              <div className="grid-layout-2 box gap-30">
                <fieldset className="box-fieldset">
                  <label htmlFor="bedrooms">Bedrooms:</label>
                  <input type="text" className="form-control " />
                </fieldset>
                <fieldset className="box-fieldset">
                  <label htmlFor="bathrooms">Bathrooms:</label>
                  <input type="text" className="form-control " />
                </fieldset>
              </div>
              <div className="grid-layout-2 box gap-30">
                <fieldset className="box-fieldset">
                  <label htmlFor="bedrooms">Floor Image:</label>
                  <div className="box-floor-img uploadfile">
                    <a
                      href="#"
                      className="btn-upload tf-btn bg-color-primary pd-10"
                    >
                      <svg
                        width={21}
                        height={20}
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.375 13.125L6.67417 8.82583C6.84828 8.65172 7.05498 8.51361 7.28246 8.41938C7.50995 8.32515 7.75377 8.27665 8 8.27665C8.24623 8.27665 8.49005 8.32515 8.71754 8.41938C8.94502 8.51361 9.15172 8.65172 9.32583 8.82583L13.625 13.125M12.375 11.875L13.5492 10.7008C13.7233 10.5267 13.93 10.3886 14.1575 10.2944C14.385 10.2001 14.6288 10.1516 14.875 10.1516C15.1212 10.1516 15.365 10.2001 15.5925 10.2944C15.82 10.3886 16.0267 10.5267 16.2008 10.7008L18.625 13.125M3.625 16.25H17.375C17.7065 16.25 18.0245 16.1183 18.2589 15.8839C18.4933 15.6495 18.625 15.3315 18.625 15V5C18.625 4.66848 18.4933 4.35054 18.2589 4.11612C18.0245 3.8817 17.7065 3.75 17.375 3.75H3.625C3.29348 3.75 2.97554 3.8817 2.74112 4.11612C2.5067 4.35054 2.375 4.66848 2.375 5V15C2.375 15.3315 2.5067 15.6495 2.74112 15.8839C2.97554 16.1183 3.29348 16.25 3.625 16.25ZM12.375 6.875H12.3817V6.88167H12.375V6.875ZM12.6875 6.875C12.6875 6.95788 12.6546 7.03737 12.596 7.09597C12.5374 7.15458 12.4579 7.1875 12.375 7.1875C12.2921 7.1875 12.2126 7.15458 12.154 7.09597C12.0954 7.03737 12.0625 6.95788 12.0625 6.875C12.0625 6.79212 12.0954 6.71263 12.154 6.65403C12.2126 6.59542 12.2921 6.5625 12.375 6.5625C12.4579 6.5625 12.5374 6.59542 12.596 6.65403C12.6546 6.71263 12.6875 6.79212 12.6875 6.875Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Choose File
                      <input type="file" className="ip-file" />
                    </a>
                    <p className="file-name">Or drop file here to upload</p>
                  </div>
                </fieldset>
                <fieldset className="box-fieldset">
                  <label htmlFor="bathrooms">Description:</label>
                  <textarea className="textarea" defaultValue={""} />
                </fieldset>
              </div>
            </form>
          </div>
          <div className="text-center">
            <a href="#" className="btn-add-floor">
              <span className="icon icon-plus" />
            </a>
          </div>
        </div>
        <div className="widget-box-2 mb-20">
          <h3 className="title">Agent Infomation</h3>
          <div className="box-radio-check">
            <div className="text-1 mb-16">Choose type agent information?</div>
            <fieldset className="radio-item mb-8">
              <label>
                <span className="text-1">Your current user information</span>
                <input type="radio" name="radio" id=" floor-plan-1" />
                <span className="btn-radio" />
              </label>
            </fieldset>
            <fieldset className="radio-item  style-1  ">
              <label>
                <span className="text-1">Other contact</span>
                <input type="radio" name="radio" id="  floor-plan-2 " />
                <span className="btn-radio" />
              </label>
            </fieldset>
          </div>
        </div>
        <div className="box-btn">
          <a href="#" className="tf-btn bg-color-primary pd-13">
            Add Property
          </a>
          <a href="#" className="tf-btn style-border pd-10">
            Save &amp; Preview
          </a>
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
        {/* /.footer-dashboard */}
      </div>
      <div className="overlay-dashboard" />
    </div>
  );
}
