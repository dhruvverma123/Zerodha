import React from "react";

function RightSection({
  ImageUrl,
  productName,
  productDescription,
  tryDemo,
  linkName1,
}) {
  return (
    <div className="container p-5">
      <div className="row">
        <div
          className="col-6"
          style={{
            padding: "40px 140px 30px 140px",
            fontSize: "17px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3 style={{ color: "#444", marginBottom: "25px" }}>{productName}</h3>
          <p style={{ lineHeight: "1.8" }}>{productDescription}</p>

          <a href={tryDemo} style={{ textDecoration: "none" }}>
            {linkName1}
          </a>
        </div>
        <div className="col-6 ">
          <img src={ImageUrl} alt="Title" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
