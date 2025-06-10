import React from "react";
import Slider2 from "./sliders/Slider2";
import PropertyOverview from "./PropertyOverview";
import VideoReview from "./VideoReview";
import ExtraInfo from "./ExtraInfo";
import Features from "./Features";
import Location from "./Location";
import FloorPlan from "./FloorPlan";
import Attachments from "./Attachments";
import VirtualTour from "./VirtualTour";
import LoanCalculator from "./LoanCalculator";
import PropertyNearby from "./PropertyNearby";
import Reviews from "./Reviews";
import Sidebar from "./Sidebar";

export default function Details2({ property }) {
  return (
    <section className="section-property-detail style-2">
      <div className="tf-container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <Slider2 />
            <div className="wg-property box-overview style-2">
              <PropertyOverview property={property} />
            </div>
            <div className="wg-property video spacing-2">
              <VideoReview />
            </div>
            <div className="wg-property box-property-detail spacing-1">
              <ExtraInfo />
            </div>
            <div className="wg-property box-amenities spacing-3">
              <Features />
            </div>
            <div className="wg-property single-property-map spacing-9">
              <Location />
            </div>
            <div className="wg-property single-property-floor spacing-4">
              <FloorPlan />
            </div>
            <div className="wg-property box-attachments spacing-5">
              <Attachments />
            </div>
            <div className="wg-property box-virtual-tour spacing-6">
              <VirtualTour />
            </div>
            <div className="wg-property box-loan spacing-4">
              <LoanCalculator />
            </div>
            <div className="wg-property single-property-nearby spacing-7">
              <PropertyNearby />
            </div>
            <div className="wg-property mb-0 box-comment spacing-8">
              <Reviews />
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
