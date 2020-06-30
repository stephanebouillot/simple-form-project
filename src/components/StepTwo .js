import React from "react";

const StepTwo = (props) => {
  return (
    <>
      <div className="result">
        <div className="resultdeux">
          Name :<div className="resulttrois">{props.infos.username}</div>
        </div>
        <div className="resultdeux">
          Email:<div className="resulttrois">{props.infos.email}</div>
        </div>

        <div className="resultdeux">
          Pasword:<div className="resulttrois">{props.infos.password}</div>
        </div>

        <button className="submit2" onClick={props.onEdit}>
          Edit your information
        </button>
      </div>
    </>
  );
};

export default StepTwo;
