import React from "react";

export default function Info() {
  return (
    <div className="info">
      <img
        alt="woman"
        src="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <div className="info-content">
        <div className="title">
          <h2>Name Surname</h2>
          <p>Frontend Developer</p>
        </div>
        <div className="buttons">
          <a className="btn btn-email" href="www.email.com">
            Email
          </a>
          <a className="btn btn-linkedin" href="www.linkedin.com">
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
