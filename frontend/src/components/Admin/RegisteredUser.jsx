import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./RegisteredUser.css";
import AdminSidebar from "./AdminSidebar";
import { Button } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import UnauthorizedAccess from "./UnauthorizedAccess";
import { useSelector } from "react-redux";

const RegisteredUser = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { isLogin } = useSelector((state) => state.adminLogin);

  const message = [
    {
      id: "1",
      name: "User 1",
      email: "user@demo.com",
      message: "hello how are you",
    },
    {
      id: "2",
      name: "User 1",
      email: "user@demo.com",
      message: "hello how are you",
    },
    {
      id: "3",
      name: "User 1",
      email: "user@demo.com",
      message: "hello how are you",
    },
    {
      id: "4",
      name: "User 1",
      email: "user@demo.com",
      message: "hello how are you",
    },
    {
      id: "5",
      name: "User 1",
      email: "user@demo.com",
      message: "hello how are you",
    },
    {
      id: "6",
      name: "User 1",
      email: "user@demo.com",
      message: "hello how are you",
    },
    {
      id: "7",
      name: "User 1",
      email: "user@demo.com",
      message: "hello how are you",
    },
    {
      id: "8",
      name: "User 1",
      email: "user@demo.com",
      message: "hello how are you",
    },
    {
      id: "9",
      name: "User 1",
      email: "user@demo.com",
      message: "hello how are you",
    },
    {
      id: "10",
      name: "User 1",
      email: "user@demo.com",
      message: "hello how are you",
    },
    {
      id: "11",
      name: "User 1",
      email: "user@demo.com",
      message: "hello how are you",
    },
    {
      id: "12",
      name: "User 1",
      email: "user@demo.com",
      message: "hello how are you",
    },
    {
      id: "13",
      name: "User 1",
      email: "user@demo.com",
      message: "hello how are you",
    },
    {
      id: "14",
      name: "User 1",
      email: "user@demo.com",
      message: "hello how are you",
    },
    {
      id: "15",
      name: "User 1",
      email: "user@demo.com",
      message: "hello how are you",
    },
  ];

  const rows = [];
  const columns = [
    {
      field: "id",
      headerName: "User Id",
      minWidth: 180,
      flex: 0.8,
    },

    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "message",
      headerName: "Message",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.5,
      type: "number",
      minWidth: 150,
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Button
            //   onClick={() =>
            //     deleteUserHandler(params.getValue(params.id, "id"))
            //   }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  message &&
    message.forEach((item, index) => {
      rows.push({
        id: item.id,
        message: item.message,
        email: item.email,
        name: item.name,
      });
    });
  return (
    <Fragment>
      <section className="container adminRegisterContainer"></section>

      {localStorage.getItem("token") ? (
        <Fragment>
          <section className="adminRegisterContainer1">
            <div className="adminSidebar">
              <AdminSidebar />
            </div>
            <div className="userDataGrid">
              <h1 className="allUsersHeading">All Users</h1>

              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
                className="messageListTable"
                autoHeight
              />
            </div>
          </section>
        </Fragment>
      ) : (
        <UnauthorizedAccess/>
      )}
    </Fragment>
  );
};

export default RegisteredUser;
