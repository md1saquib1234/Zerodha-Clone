import React from "react";

function LeftSection({
  imageuRL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
        <div className="row">
            <div className="col-6 p-3">
                <img src={imageURL} />
            </div>
            <div className="col-6">
              <h1></h1>
            </div>
        </div>
      
    </div>
  );
}

export default LeftSection;
