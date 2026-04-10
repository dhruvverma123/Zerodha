import React from "react";
import "./CreateTicket.css";

import { Context } from "../ContextApi";
import { useContext } from "react";

function CreateTicket() {
  let { upperIcon, setUpperIcon } = useContext(Context);

  const sections = [
    {
      title: "Account Opening",
      icon: <i className="fa-solid fa-circle-plus icon"></i>,
      list: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: <i className="fa-solid fa-circle-user icon"></i>,
      list: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      icon: <i className="fa-brands fa-uikit icon"></i>,
      list: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      title: "Funds",
      icon: <i className="fa-solid fa-indian-rupee-sign icon"></i>,
      list: ["Add money", "Withdraw money", "Add blank account", "eMandates"],
    },
    {
      title: "Console",
      icon: <i className="fa-brands fa-creative-commons-zero icon"></i>,
      list: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      title: "Coin",
      icon: <i className="fa-solid fa-coins icon"></i>,
      list: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  let handleToggle = (index) => {
    setUpperIcon(upperIcon === index ? null : index);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 mt-5">
          {sections.map((item, index) => (
            <ul key={index}>
              <div
                className="hoverEffect border"
                onClick={() => handleToggle(index)}
              >
                <div className="innerChild">
                  <div className="innerFirstchild">{item.icon}</div>
                  <h1 className="heading">{item.title}</h1>
                </div>
                <i
                  className={`fa-solid fa-angle-up upperIconEffect ${index == upperIcon ? "up" : "down"}`}
                  style={{ color: "blue" }}
                ></i>
              </div>
              <div
                className={`border height0 ${index == upperIcon ? "open" : "close"}`}
                style={{
                  padding: "15px 0px 15px 60px",
                  lineHeight: "2.5",
                  marginTop: "-1px",
                }}
              >
                {item.list.map((e, idx) => (
                  <li className="liColor" key={idx}>
                    <a href="" className="aHover">
                      {e}
                    </a>
                  </li>
                ))}
              </div>
            </ul>
          ))}
        </div>
        <div className="col-4 mt-5">
          <div className="row">
            <div className="">
              <div className="ulParent">
                <ul className="ulStyle">
                  <li className="liStyle">
                    <a href="" style={{ fontSize: "18px" }}>
                      Latest Intraday leverages and Square-off <br />
                      timings
                    </a>
                  </li>
                  <li className="liStyle">
                    <a href="" style={{ fontSize: "18px" }}>
                      Surveillance measure on scrips - February <br />
                      2026
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex flex-column ">
              <div className="heading2">Quick links</div>
              <a href="" className="aTag border p-3">
                1. Track account opening
              </a>

              <a href="" className="aTag border p-3">
                2. Track segment activation
              </a>

              <a href="" className="aTag border p-3">
                3. Intraday margins
              </a>

              <a href="" className="aTag border p-3">
                4. kite user manual
              </a>

              <a href="" className="aTag border p-3">
                5. Learn how to create a ticket
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
