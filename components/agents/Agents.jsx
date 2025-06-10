"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import DropdownSelect from "../common/DropdownSelect";
import { agents2 } from "@/data/agents";
export default function Agents() {
  return (
    <section className="section-agent">
      <div className="tf-container">
        <div className="row">
          <div className="box-title style-2 mb-48">
            <h2>Agents</h2>
            <div className="wrap-sort">
              <form onSubmit={(e) => e.preventDefault()}>
                <fieldset>
                  <input
                    className=""
                    type="text"
                    placeholder="Agent name"
                    name="name"
                    tabIndex={2}
                    aria-required="true"
                  />
                </fieldset>
              </form>

              <DropdownSelect
                options={[
                  "All agency",
                  "Floating baths",
                  "Massage baths",
                  "Floor-standing bath",
                ]}
                addtionalParentClass=""
              />

              <DropdownSelect
                options={[
                  "All location",
                  "Floating baths",
                  "Massage baths",
                  "Floor-standing bath",
                ]}
                addtionalParentClass=""
              />

              <DropdownSelect
                options={["Sort by (Default)", "Newest", "Oldest"]}
                addtionalParentClass="select-sort style-2"
              />
            </div>
          </div>
          <div className="tf-grid-layout-2 lg-col-4 md-col-3 sm-col-2">
            {agents2.map((agent) => (
              <div key={agent.id} className="agent-item hover-img">
                <div className="image-wrap">
                  <Link href={`/agents-details/${agent.id}`}>
                    <Image
                      className="lazyload"
                      data-src={agent.image}
                      alt=""
                      width={435}
                      height={585}
                      src={agent.image}
                    />
                  </Link>
                  <ul className="tf-social style-3">
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
                <div className="content">
                  <div className="author">
                    <h5 className="name lh-30">
                      <Link href={`/agents-details/${agent.id}`}>
                        {agent.name}
                      </Link>
                    </h5>
                    <p className="text-2 lh-18">{agent.role}</p>
                  </div>
                  <div className="wrap-btn-icon">
                    <a href="#" className="btn-icon">
                      <i className="icon-phone-3" />
                    </a>
                    <a href="#" className="btn-icon">
                      <i className="icon-letter" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="wrap-pagination">
            <p className="text-1">1 – 20 of 250+ property available</p>
            <ul className="wg-pagination justify-center">
              <li className="arrow">
                <a href="#">
                  <i className="icon-arrow-left" />
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li className="active">
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">...</a>
              </li>
              <li>
                <a href="#">20</a>
              </li>
              <li className="arrow">
                <a href="#">
                  <i className="icon-arrow-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
