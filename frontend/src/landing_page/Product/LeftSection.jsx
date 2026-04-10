import React from "react";

function LeftSection({
  ImageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  linkName1,
  linkName2,
}) {
  return (
    <div className="container p-5">
      <div className="row" style={{ paddingLeft: "25px" }}>
        <div className="col-6 ">
          <img src={ImageUrl} alt="Title" />
        </div>
        <div
          className="col-6 "
          style={{ padding: "40px 140px 30px 140px", fontSize: "17px" }}
        >
          <h3 style={{ color: "#444", marginBottom: "25px" }}>{productName}</h3>
          <p style={{ lineHeight: "1.8" }}>{productDescription}</p>
          <div className="">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              {linkName1}
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "60px", textDecoration: "none" }}
            >
              {linkName2}
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media\googlePlayBadge.svg" alt="playStore " />
            </a>
            <a href={appStore} style={{ marginLeft: "20px" }}>
              <img src="media\appstoreBadge.svg" alt="appStore" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
