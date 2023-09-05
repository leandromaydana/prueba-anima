import React from "react";
import { AboutUsAboutUs } from "../../components/AboutUsAboutUs";
import { AboutUsFrame } from "../../components/AboutUsFrame";
import { Component } from "../../components/Component";
import { OurServices } from "../../components/OurServices";
import { OurTeam } from "../../components/OurTeam";
import { Text } from "../../components/Text";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="overlap">
        <div className="overlap-group">
          <div className="overlap-2">
            <div className="ellipse" />
            <div className="frame-2">
              <Text property1="frame-8" />
              <p className="en-codesigners-tu">
                En Codesigners, tu experiencia junto a nosotros es una huella valiosa en nuestra trayectoria, por lo que
                queremos asegurarnos de cumplir con tus expectativas. 
                <br />
                Para nosotros, la excelencia no es una meta, sino el punto de partida y nuestro equipo de expertos está
                entusiasmado por enfrentar tu desafío. 
                <br />
                ¿Buscás la mejor solución para tu proyecto? La encontraste.
              </p>
            </div>
            <img
              className="img"
              alt="Vector"
              src="https://generation-sessions.s3.amazonaws.com/02e2a0a911765d9779b6f7df9967659b/img/vector-3.svg"
            />
            <img
              className="image"
              alt="Image"
              src="https://generation-sessions.s3.amazonaws.com/02e2a0a911765d9779b6f7df9967659b/img/image-3@2x.png"
            />
            <div className="group">
              <div className="group-2">
                <p className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet consectetur. Vitae magna eget tristique non arcu bibendum. Imperdiet non
                  adipiscing pellentesque ullamcorper mi sed in. Non enim magnis lectus elit malesuada egestas nisl.
                  Malesuada amet nisl.
                  <br />
                  Lorem ipsum dolor sit amet consectetur. Vitae magna eget tristique non arcu bibendum. Imperdiet non
                  adipiscing pellentesque ullamcorper mi sed in. Non enim magnis lectus elit malesuada egestas nisl.
                  Malesuada amet nisl.
                  <br />
                  Lorem ipsum dolor sit amet consectetur. Vitae magna eget tristique non arcu bibendum. Imperdiet non
                  adipiscing pellentesque ullamcorper mi sed in. Non enim magnis lectus elit malesuada egestas nisl.
                  Malesuada amet nisl.
                </p>
                <div className="rectangle" />
                <div className="rectangle-2" />
                <div className="rectangle-3" />
              </div>
            </div>
          </div>
          <div className="overlap-3">
            <img
              className="vector-2"
              alt="Vector"
              src="https://generation-sessions.s3.amazonaws.com/02e2a0a911765d9779b6f7df9967659b/img/vector-2.svg"
            />
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/02e2a0a911765d9779b6f7df9967659b/img/line-1.svg"
            />
          </div>
          <div className="group-3">
            <img
              className="recurso"
              alt="Recurso"
              src="https://generation-sessions.s3.amazonaws.com/02e2a0a911765d9779b6f7df9967659b/img/recurso-6-2.svg"
            />
            <div className="text-wrapper-4">CODESIGNERS</div>
          </div>
          <div className="group-4">
            <div className="text-2">{""}</div>
            <img
              className="material-symbols"
              alt="Material symbols"
              src="https://generation-sessions.s3.amazonaws.com/02e2a0a911765d9779b6f7df9967659b/img/material-symbols-language.svg"
            />
          </div>
        </div>
        <div className="overlap-4">
          <div className="frame-3">
            <div className="overlap-group-2">
              <AboutUsAboutUs className="design-component-instance-node" />
              <AboutUsFrame className="design-component-instance-node" />
              <div className="frame-4" />
            </div>
            <div className="overlap-5">
              <OurTeam
                className="design-component-instance-node"
                hasOurTeam={false}
                hasSpanNavIndicator={false}
                property1="frame-3"
              />
              <div className="frame-5">
                <div className="span-nav-indicator-3" />
                <div className="text-wrapper-5">OUR TEAM</div>
              </div>
            </div>
            <OurServices
              className="our-services-instance"
              hasOurServices={false}
              hasSpanNavIndicator={false}
              property1="frame-2"
            />
          </div>
          <div className="frame-6">
            <div className="span-nav-indicator-3" />
            <div className="text-wrapper-5">OUR SERVICES</div>
          </div>
          <div className="frame-7">
            <div className="span-nav-indicator-3" />
            <div className="text-wrapper-5">ABOUT US</div>
          </div>
          <div className="frame-5">
            <div className="span-nav-indicator-4" />
            <div className="about-us-wrapper">
              <div className="about-us">HOME</div>
            </div>
          </div>
        </div>
        <Component className="component-26" property1="group-19" vectorClassName="component-instance" />
      </div>
    </div>
  );
};
