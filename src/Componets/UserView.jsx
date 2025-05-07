import React from "react";
import { useContextBox } from "../ContextProvider";

const UserView = () => {
  const { view } = useContextBox();
  const {
    name,
    username,
    avatar,
    email,
    address,
    birthday,
    age,
    phoneNumber,
    website,
    company,
  } = view;

  return (
    <div class="container">
      <div class="row align-items-center flex-row-reverse">
        <div class="col-lg-6">
          <div class="about-text go-to">
            <h3 class="dark-color">About Me</h3>
            {console.log(view)}
            {address && <p>{company.about}</p>}
            <div class="row about-list">
              <div class="col-md-6">
                <div class="media">
                  <label>Birthday</label>
                  <p>{birthday}</p>
                </div>
                {address.city && (
                  <>
                    <div class="media">
                      <label>Age</label>
                      <p>{age} Yr</p>
                    </div>
                  </>
                )}
                <div class="media">
                  <label>Address</label>
                  <p className="user-info">
                    {address.street} {address.suite} {address.city}-
                    {address.zipcode}
                  </p>
                </div>
                <div class="media">
                  <label>Company name</label>
                  <p>{company.name}</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="media">
                  <label>E-mail</label>
                  <p>{email}</p>
                </div>
                <div class="media">
                  <label>Website</label>
                  <p>{website}</p>
                </div>
                <div class="media">
                  <label>Phone</label>
                  {phoneNumber ? <p>{phoneNumber}</p> : "nill"}
                </div>
                <div class="media">
                  <label>Work Experience</label>
                  {company.experience ? <p>{company.experience} yr</p> : "0"}
                </div>
              </div>
            </div>
          </div>
        </div>
        {avatar ? (
          <div class="col-lg-4">
            <div class="about-avatar">
              <h1 className="dark-color">{username}</h1>
              <img src={avatar} width={"300px"} height={"400px"} alt="Avatar" />
            </div>
          </div>
        ) : (
          <div class="col-lg-5">
            <div class="about-avatar">
              <h1 className="dark-color">{username}</h1>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="Default Avatar"
                width={"350px"}
                height={"350px"}
              />
            </div>
          </div>
        )}
      </div>
      {/* <div class="counter">
          <div class="row">
            <div class="col-6 col-lg-3">
              <div class="count-data text-center">
                <h6 class="count h2" data-to="500" data-speed="500">
                  500
                </h6>
                <p class="m-0px font-w-600">Happy Clients</p>
              </div>
            </div>
            <div class="col-6 col-lg-3">
              <div class="count-data text-center">
                <h6 class="count h2" data-to="150" data-speed="150">
                  150
                </h6>
                <p class="m-0px font-w-600">Project Completed</p>
              </div>
            </div>
            <div class="col-6 col-lg-3">
              <div class="count-data text-center">
                <h6 class="count h2" data-to="850" data-speed="850">
                  850
                </h6>
                <p class="m-0px font-w-600">Photo Capture</p>
              </div>
            </div>
            <div class="col-6 col-lg-3">
              <div class="count-data text-center">
                <h6 class="count h2" data-to="190" data-speed="190">
                  190
                </h6>
                <p class="m-0px font-w-600">Telephonic Talk</p>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default UserView;
