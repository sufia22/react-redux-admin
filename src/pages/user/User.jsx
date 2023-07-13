import { useEffect } from "react";
import doctor01 from "../../assets/img/doctors/doctor-thumb-01.jpg";
import patient01 from "../../assets/img/patients/patient1.jpg";
import ModalPopup from "../../components/ModalPopup/ModalPopup";
import DataTable from "datatables.net-dt";

const User = () => {
  useEffect(() => {
    new DataTable(".table");
  });
  return (
    <>
      <div className="page-header">
        <ModalPopup target={"userModalPopup"}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            illum adipisci cumque, sit quae beatae quaerat. Rerum, eligendi
            tempore, in blanditiis possimus voluptate nisi maiores saepe
            voluptatibus minima libero eaque aut molestias sequi ex omnis
            numquam accusamus nostrum corrupti quaerat, quas dolorem quia
            reiciendis beatae. Voluptate mollitia illo saepe quo!
          </p>
        </ModalPopup>

        <div className="row">
          <div className="col-sm-12">
            <h3 className="page-title">Welcome Admin!</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item active">User</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            {/* Add user modal */}
            <button
              className="btn btn-primary my-3"
              data-toggle="modal"
              data-target="#userModalPopup"
            >
              Add new user
            </button>
            <div className="card card-table">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Doctor Name</th>
                        <th>Speciality</th>
                        <th>Patient Name</th>
                        <th>Apointment Time</th>
                        <th>Status</th>
                        <th className="text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile.html"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={doctor01}
                                alt="User Image"
                              />
                            </a>
                            <a href="profile.html">Dr. Ruby Perrin</a>
                          </h2>
                        </td>
                        <td>Dental</td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile.html"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={patient01}
                                alt="User Image"
                              />
                            </a>
                            <a href="profile.html">Charlene Reed </a>
                          </h2>
                        </td>
                        <td>
                          9 Nov 2019{" "}
                          <span className="text-primary d-block">
                            11.00 AM - 11.15 AM
                          </span>
                        </td>
                        <td>
                          <div className="status-toggle">
                            <input
                              type="checkbox"
                              id="status_1"
                              className="check"
                              checked
                            />
                            <label htmlFor="status_1" className="checktoggle">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="text-right">$200.00</td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile.html"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={doctor01}
                                alt="User Image"
                              />
                            </a>
                            <a href="profile.html">Dr. Darren Elder</a>
                          </h2>
                        </td>
                        <td>Dental</td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile.html"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={patient01}
                                alt="User Image"
                              />
                            </a>
                            <a href="profile.html">Travis Trimble </a>
                          </h2>
                        </td>

                        <td>
                          5 Nov 2019{" "}
                          <span className="text-primary d-block">
                            11.00 AM - 11.35 AM
                          </span>
                        </td>
                        <td>
                          <div className="status-toggle">
                            <input
                              type="checkbox"
                              id="status_2"
                              className="check"
                              checked
                            />
                            <label htmlFor="status_2" className="checktoggle">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="text-right">$300.00</td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile.html"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={doctor01}
                                alt="User Image"
                              />
                            </a>
                            <a href="profile.html">Dr. Deborah Angel</a>
                          </h2>
                        </td>
                        <td>Cardiology</td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile.html"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={patient01}
                                alt="User Image"
                              />
                            </a>
                            <a href="profile.html">Carl Kelly</a>
                          </h2>
                        </td>
                        <td>
                          11 Nov 2019{" "}
                          <span className="text-primary d-block">
                            12.00 PM - 12.15 PM
                          </span>
                        </td>
                        <td>
                          <div className="status-toggle">
                            <input
                              type="checkbox"
                              id="status_3"
                              className="check"
                              checked
                            />
                            <label htmlFor="status_3" className="checktoggle">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="text-right">$150.00</td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile.html"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={doctor01}
                                alt="User Image"
                              />
                            </a>
                            <a href="profile.html">Dr. Sofia Brient</a>
                          </h2>
                        </td>
                        <td>Urology</td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile.html"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={patient01}
                                alt="User Image"
                              />
                            </a>
                            <a href="profile.html"> Michelle Fairfax</a>
                          </h2>
                        </td>
                        <td>
                          7 Nov 2019
                          <span className="text-primary d-block">
                            1.00 PM - 1.20 PM
                          </span>
                        </td>
                        <td>
                          <div className="status-toggle">
                            <input
                              type="checkbox"
                              id="status_4"
                              className="check"
                              checked
                            />
                            <label htmlFor="status_4" className="checktoggle">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="text-right">$150.00</td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile.html"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={doctor01}
                                alt="User Image"
                              />
                            </a>
                            <a href="profile.html">Dr. Marvin Campbell</a>
                          </h2>
                        </td>
                        <td>Orthopaedics</td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile.html"
                              className="avatar avatar-sm mr-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={patient01}
                                alt="User Image"
                              />
                            </a>
                            <a href="profile.html">Gina Moore</a>
                          </h2>
                        </td>

                        <td>
                          15 Nov 2019{" "}
                          <span className="text-primary d-block">
                            1.00 PM - 1.15 PM
                          </span>
                        </td>
                        <td>
                          <div className="status-toggle">
                            <input
                              type="checkbox"
                              id="status_5"
                              className="check"
                              checked
                            />
                            <label htmlFor="status_5" className="checktoggle">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="text-right">$200.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
