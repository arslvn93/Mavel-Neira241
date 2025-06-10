import React from "react";
import Image from "next/image";
import Link from "next/link";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { agents4 } from "@/data/agents";
export default function Agents() {
  return (
    <section className="section-local-agent tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section mb-48 text-center">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Choose Your Local Agent" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                vel lobortis justo
              </p>
            </div>
            <div className="tf-grid-layout-2 md-col-4 mb-48">
              {agents4.map((agent) => (
                <div
                  className={`agent-item hover-img ${agent.wowClass}`}
                  key={agent.id}
                >
                  <div className="image-wrap">
                    <Link href={`/agents-details/${agent.id}`}>
                      <Image
                        className="lazyload"
                        data-src={agent.imageSrc}
                        alt=""
                        width={435}
                        height={585}
                        src={agent.imageSrc}
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
                      <p className="text-2 lh-18">Sale agent</p>
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
            <p className="text-center text-1 mb-48">
              Explore Property agents are here to help with all your buying,
              renting and selling goals. <br />
              Find the home of your dreams with an expert you can trust.
              <a href="#">Let’s chat</a>
            </p>
            <a href="#" className="tf-btn bg-color-primary pd-3 fw-6 mx-auto">
              Find your location agent <i className="icon-MagnifyingGlass" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
