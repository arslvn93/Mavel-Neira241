"use client";
import DropdownSelect from "@/components/common/DropdownSelect";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { siteContent } from "@/data/siteContent";
import useForm from "../../../hooks/useForm";

export default function LoanCalculator() {
  const { formData, formState, formError, handleChange, handleSubmit, setFormData } = useForm(
    {
      totalAmount: "1000",
      downPayment: "200",
    interestRate: "5",
    amortizationPeriod: "30",
    propertyTax: "3000",
    homeInsurance: "1000",
    formName: "Loan Calculator",
    },
    siteContent.agent.email
  );

  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const handleAmortizationChange = (value) => {
    handleChange({ target: { name: "amortizationPeriod", value } });
  };

  const calculateMonthlyPayment = () => {
    const P = parseFloat(formData.totalAmount) - parseFloat(formData.downPayment);
    const r = parseFloat(formData.interestRate) / 100 / 12;
    const n = parseFloat(formData.amortizationPeriod) * 12;
    const tax = parseFloat(formData.propertyTax) / 12;
    const insurance = parseFloat(formData.homeInsurance) / 12;

    if (P > 0 && r > 0 && n > 0) {
      const M = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setMonthlyPayment(M + tax + insurance);
    } else {
      setMonthlyPayment(0);
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    calculateMonthlyPayment();
    handleSubmit(e);
  };
  
  const handleStartOver = (e) => {
    e.preventDefault();
    setFormData({
      totalAmount: "1000",
      downPayment: "200",
      interestRate: "5",
      amortizationPeriod: "30",
      propertyTax: "3000",
      homeInsurance: "1000",
      formName: "Loan Calculator",
    });
    setMonthlyPayment(0);
  };

  useEffect(() => {
    calculateMonthlyPayment();
  }, [formData]);

  return (
    <section className="section-calculate">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="box-calculate">
              <div className="image-wrap">
                <Image
                  className="lazyload parallax-img"
                  data-src="/images/section/section-calculate.jpg"
                  alt=""
                  width={1280}
                  height={472}
                  src="/images/section/section-calculate.jpg"
                />
              </div>
              <form className="form-pre-approved" onSubmit={handleCalculate}>
                <div className="heading-section mb-48">
                  <h2
                    className="title wow animate__fadeInUp animate__animated"
                    data-wow-duration="1s"
                    data-wow-delay="0s"
                  >
                    {siteContent.loanProcess.calculatorTitle}
                  </h2>
                  <p
                    className="text-1 wow animate__fadeInUp animate__animated"
                    data-wow-duration="1s"
                    data-wow-delay="0s"
                  >
                    {siteContent.loanProcess.calculatorDescription}
                  </p>
                </div>
                <div className="cols">
                  <fieldset>
                    <label className="text-1 fw-6 mb-12" htmlFor="amount">
                      Total Amount
                    </label>
                    <input type="number" id="amount" name="totalAmount" value={formData.totalAmount} onChange={handleChange} />
                  </fieldset>
                  <div className="wrap-input">
                    <fieldset className="payment">
                      <label className="text-1 fw-6 mb-12" htmlFor="payment">
                        Down Payment
                      </label>
                      <input type="number" id="payment" name="downPayment" value={formData.downPayment} onChange={handleChange} />
                    </fieldset>
                  </div>
                </div>
                <div className="cols">
                  <fieldset className="interest-rate">
                    <label
                      className="text-1 fw-6 mb-12"
                      htmlFor="interest-rate"
                    >
                      Interest Rate (%)
                    </label>
                    <input type="number" id="interest-rate" name="interestRate" value={formData.interestRate} onChange={handleChange} />
                  </fieldset>
                  <div className="select">
                    <label className="text-1 fw-6 mb-12">
                      Amortization Period (years)
                    </label>
                    <DropdownSelect
                      options={[
                        "15",
                        "20",
                        "25",
                        "30",
                      ]}
                      selectedValue={formData.amortizationPeriod}
                      onChange={handleAmortizationChange}
                    />
                  </div>
                </div>
                <div className="cols">
                  <fieldset>
                    <label className="text-1 fw-6 mb-12" htmlFor="tax">
                      Property Tax (yearly)
                    </label>
                    <input type="number" id="tax" name="propertyTax" value={formData.propertyTax} onChange={handleChange} />
                  </fieldset>
                  <fieldset>
                    <label className="text-1 fw-6 mb-12" htmlFor="insurance">
                      Home Insurance (yearly)
                    </label>
                    <input type="number" id="insurance" name="homeInsurance" value={formData.homeInsurance} onChange={handleChange} />
                  </fieldset>
                </div>
                <p className="text-1">
                  Your estimated monthly payment: <span>${monthlyPayment.toFixed(2)}</span>
                </p>
                <div className="wrap-btn">
                  <button type="submit" className="tf-btn bg-color-primary pd-6 fw-7" disabled={formState === 'submitting'}>
                    {formState === 'submitting' ? 'Submitting...' : 'Calculate and Submit'}
                  </button>
                  <a href="#" className="tf-btn style-border pd-7" onClick={handleStartOver}>
                    Start over
                  </a>
                </div>
                {formState === 'success' && (
                  <p className="text-success">Your submission has been received!</p>
                )}
                {formState === 'error' && (
                  <p className="text-error">
                    {formError || 'An error occurred. Please try again.'}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
