import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";

import redhat from "../../assets/images/partners/redhat_black.svg";
import uem from "../../assets/images/partners/uem_black.svg";
import utaustin from "../../assets/images/partners/ut-austin_black.svg";
import citrix from "../../assets/images/partners/citrix.svg";
import hashicorp from "../../assets/images/partners/hashicorp_vertical_black.svg";
import hpe from "../../assets/images/partners/hpe_side_black.svg";

import SectionTitle from "../../reusecore/SectionTitle";


import PartnerItemWrapper from "./partnerSection.style";

const Projects = () => {
  return (
    <PartnerItemWrapper>
      <Container>
        <Row>
          <SectionTitle
            className="section-title"
            leftAlign={true}
            UniWidth="75%"
          >
            <h4>OUR PARTNERS</h4>
          </SectionTitle>
        </Row>
        <Row>
          <Col sm={8} md={6} lg={4}>
            <a className="partner-card" href="/partners#redhat" target="_blank" rel="noreferrer">
              <div className="partner__block__inner">
                <img src={redhat} alt="redhat" />
              </div>
            </a>
          </Col>
          <Col sm={6} md={4} lg={2}>
            <a className="partner-card" href="/partners#uem" target="_blank" rel="noreferrer">
              <div className="partner__block__inner">
                <img src={uem} alt="uem" />
              </div>
            </a>
          </Col>
          <Col sm={6} md={4} lg={2}>
            <a className="partner-card" href="/partners#utaustin" target="_blank" rel="noreferrer">
              <div className="partner__block__inner">
                <img src={utaustin} alt="ut_austin" />
              </div>
            </a>
          </Col>
          <Col sm={6} md={4} lg={2}>
            <a className="partner-card" href="/partners#citrix" target="_blank" rel="noreferrer">
              <div className="partner__block__inner">
                <img src={citrix} alt="citrix" />
              </div>
            </a>
          </Col>
          <Col sm={6} md={4} lg={2}>
            <a className="partner-card" href="https://www.hashicorp.com/" target="_blank" rel="noreferrer">
              <div className="partner__block__inner">
                <img src={hashicorp} alt="hashicorp" />
              </div>
            </a>
          </Col>
          <Col sm={6} md={4} lg={2}>
            <a className="partner-card" href="/partners#hpe" target="_blank" rel="noreferrer">
              <div className="partner__block__inner">
                <img src={hpe} alt="hpe" />
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </PartnerItemWrapper>
  );
};

export default Projects;
