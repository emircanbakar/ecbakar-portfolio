import React from "react";
import BigCards from "../UI/BigCards";
import "../assets/Jobs.css";

const Jobs = () => {
  return (
    <div className="card-container">
      <BigCards>
        <div className="title-head">{"<projects>"}</div>
        <div className="list">
          <ul>
            <li className="list-item">
              <p>E-commerce Project </p>
              <a
                href="https://ecommerce-shop-frontend-4tjtwi6zu-emircans-projects-bbfbf17d.vercel.app"
                className="link-img"
              >
                <img
                  width="36"
                  height="36"
                  src="https://img.icons8.com/ios-filled/50/link--v1.png"
                  alt="link--v1"
                />
              </a>
            </li>
            <li className="list-item">
              <p>Map App</p>
              <a
                href="https://github.com/emircanbakar/map-app"
                className="link-img"
              >
                <img
                  width="36"
                  height="36"
                  src="https://img.icons8.com/ios-filled/50/link--v1.png"
                  alt="link--v1"
                />
              </a>
            </li>
            <li className="list-item">
              <p>45Press Landing Page</p>
              <a
                href="https://github.com/emircanbakar/45press"
                className="link-img"
              >
                <img
                  width="36"
                  height="36"
                  src="https://img.icons8.com/ios-filled/50/link--v1.png"
                  alt="link--v1"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="title-head">{"</projects>"}</div>
      </BigCards>
      <BigCards>
        <div className="title-head">{"<experience>"}</div>
        <div className="list">
          <ul>
            <li className="list-item">
              <p>Jotform - UI Developer </p>
              <img
                width="36"
                height="36"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jotform.com%2Ftr%2Fresources%2F&psig=AOvVaw03Ftez913NCN-qssOtrM-h&ust=1726518473171000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjgldTkxYgDFQAAAAAdAAAAABAE"
                alt="link--v1"
              />
            </li>
            <li className="list-item">
              <p>Ldap - IT Solutions Support</p>
              <img
                width="36"
                height="36"
                src="https://img.icons8.com/ios-filled/50/link--v1.png"
                alt="link--v1"
              />
            </li>
            <li className="list-item">
              <div>
                <p>IMU - MIS - G.Date: 2024 GPA:3.3</p>
              </div>
              <img
                width="36"
                height="36"
                src="https://img.icons8.com/ios-filled/50/link--v1.png"
                alt="link--v1"
              />
            </li>
          </ul>
        </div>
        <div className="title-head">{"</experience>"}</div>
      </BigCards>
    </div>
  );
};

export default Jobs;
