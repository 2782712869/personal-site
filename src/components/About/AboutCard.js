import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            我是来自四川成都的辛克莱 <span className="purple"> 叫辛克莱 </span>是
            <span className="purple"> 来自《德米安：彷徨少年时》这本书</span>
            <br />
            我热爱于研究有趣的炫酷的东西底层
            <br />
            我热衷于函数式编程
            <br />
            <br />
            但是在敲代码之外，我想应该还要有其他的生活，我还喜欢
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 玩游戏
            </li>
            <li className="about-activity">
              <ImPointRight /> 骑车
            </li>
            <li className="about-activity">
              <ImPointRight /> 看书
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Stay Hungry. Stay Foolish!"{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
