"use client";
import React from "react";
import DropdownSelect from "../common/DropdownSelect";

export default function LoanCalculator() {
  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">
        Loan Calculator
      </div>
      <form className="form-pre-approved" onSubmit={(e) => e.preventDefault()}>
        <div className="cols">
          <fieldset>
            <label className="text-1 fw-6 mb-12" htmlFor="amount">
              Total Amount
            </label>
            <input type="number" id="amount" placeholder={1000} />
          </fieldset>
          <div className="wrap-input">
            <fieldset className="payment">
              <label className="text-1 fw-6 mb-12" htmlFor="payment">
                Down Payment
              </label>
              <input type="number" id="payment" placeholder={2000} />
            </fieldset>
            <fieldset className="percent">
              <input className="input-percent" type="text" defaultValue="20%" />
            </fieldset>
          </div>
        </div>
        <div className="cols">
          <fieldset className="interest-rate">
            <label className="text-1 fw-6 mb-12" htmlFor="interest-rate">
              Interest Rate
            </label>
            <input type="number" id="interest-rate" placeholder={0} />
          </fieldset>
          <div className="select">
            <label className="text-1 fw-6 mb-12">
              Amortization Period (months)
            </label>
            <DropdownSelect
              options={[
                "Select amortization period",
                "1 month",
                "2 months",
                "3 months",
                "4 months",
                "5 months",
              ]}
            />
          </div>
        </div>
        <div className="cols">
          <fieldset>
            <label className="text-1 fw-6 mb-12" htmlFor="tax">
              Property Tax
            </label>
            <input type="number" id="tax" placeholder="$3000" />
          </fieldset>
          <fieldset>
            <label className="text-1 fw-6 mb-12" htmlFor="insurance">
              Home Insurance
            </label>
            <input type="number" id="insurance" placeholder="$3000" />
          </fieldset>
        </div>
        <div className="wrap-btn flex items-center justify-between">
          <a href="#" className="tf-btn bg-color-primary pd-22 fw-7">
            Calculate now <i className="icon-arrow-right-2 fw-4" />
          </a>
          <p className="text-1 mb-0 fw-5 text-color-heading">
            Your estimated monthly payment:
            <span>$599.25</span>
          </p>
        </div>
      </form>
    </>
  );
}
