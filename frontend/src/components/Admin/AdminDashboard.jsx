import React, { Fragment, useEffect, useState } from "react";
import "./AdminDashboard.css";
import AdminSidebar from "./AdminSidebar";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import { useAlert } from "react-alert";
import { clearErrors, getAllAdmin } from "../../actions/adminAction";
import UnauthorizedAccess from "./UnauthorizedAccess";
import axios from "axios";
const AdminDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const alert = useAlert();
  const { admins, error } = useSelector((state) => state.admin);
  const [adminData ,setAdminData] = useState([]);
  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors());
  //   }
  //   dispatch(getAllAdmin());
  // }, [alert, dispatch, error]);

  useEffect(()=> {
       fetchAdmins()

    }
  , []);

  async function fetchAdmins(){
    console.log("ya samma ayo ta ?/", localStorage.getItem("token"));
    const res = await axios.get('/api/v1/admins', {
      headers: {"Authorization": localStorage.getItem("token")}
    })
    setAdminData(res.data.admins)
  }

  const rows = [];
  const columns = [
    {
      field: "id",
      headerName: "Id",
      minWidth: 100,
      flex: 1,
    },

    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 100,
      flex: 0.8,
    },
  ];
// console.log("admin >> ", admin);
adminData.length && (
  adminData.forEach((item, index) => {
      rows.push({
        id: item.id,
        name: item.name,
        email: item.email,
      })
    }))
  return (
    <Fragment>
      {localStorage.getItem("token") ? (
        <Fragment>
          <section className="adminSection"></section>

          <section className="adminSection1">
            <div className="adminSidebar">
              <AdminSidebar />
            </div>

            <div className="adminDetails">
              <div className="container messageGrid">
                <h1 className="allmessagesHeading">All Admins</h1>
                {/* {
                adminData.length && (
                  adminData.map((item,index)=> (
                    <div>
                      <h1> {item.name} </h1>
                      <h1> {item.email} </h1>
                    </div>
                  ))
                )} */}
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  disableSelectionOnClick
                  className="messageListTable"
                  autoHeight
                />
              </div>
            </div>
          </section>
        </Fragment>
      ) : (
        <Fragment>
          <section className="adminSection"></section>
          <UnauthorizedAccess />
        </Fragment>
      )}
    </Fragment>
  );
};

export default AdminDashboard;
