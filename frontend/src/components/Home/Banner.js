import React from "react";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="container">
          <div className="row align-items-center">
            <span id="get-part" className="col-sm-2">
              A place to get
            </span>
            <div className="col input-group">
              <input
                id="search-box"
                type="search"
                className="form-control"
                placeholder="What is it that you truly desire?"
                minLength="3"
                onChange={(e) => {
                  if (e.target.value.length >= 3) {
                    e.preventDefault();
                    props.search(e.target.value);
                  }
                }}
              />
              {/* <button className="btn btn-secondary" type="button" onClick={()=>{search()}} >
                    <i className="bi bi-search"></i>
                  </button> */}
            </div>
            <span className="col-sm-2"> the cool stuff.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
