import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              让我  自我 <span className="purple">介绍一下</span>
            </h1>
            <p className="home-about-body">
              我喜欢编程，我想我至少学会了一些东西... 🤷‍♂️
              <br />
              <br />我熟练并且喜欢
              <i>
                <b className="purple"> Typescript, Javascript 和 React。 </b>
              </i>
              <br />
              <br />
              我感兴趣的是函数式编程范式在前端方面的实践应用 &nbsp;
              <i>
                <b className="purple">以及游戏开发Godot </b> 和
                Babylon等{" "}
                <b className="purple">
                  领域。
                </b>
              </i>
              <br />
              <br />
              目前我正在学习 <b className="purple">Node.js</b> 和
              <i>
                <b className="purple">
                  {" "}
                  React中前沿的
                </b>
              </i>
              &nbsp; 框架
              <i>
                <b className="purple"> Next.js 和 Nest.js。</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>找到我</h1>
            <p>
              请随时 和我 <span className="purple"> 联系</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/2782712869"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
