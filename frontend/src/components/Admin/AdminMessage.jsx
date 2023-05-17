import React, { Fragment, useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import "./AdminMessage.css";
import { DataGrid } from "@material-ui/data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  deleteMessageAction,
  getAllMessage,
} from "../../actions/messageAction";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { MESSAGE_DELETE_RESET } from "../../constant/messageConstant";
import UnauthorizedAccess from "./UnauthorizedAccess";

const AdminMessage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { messages, error } = useSelector((state) => state.allMessages);
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deletemessage
  );
  const { isLogin } = useSelector((state) => state.adminLogin);

  const deleteMessageHandler = (id) => {
    dispatch(deleteMessageAction(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Message Deleted Successfully");
      dispatch({ type: MESSAGE_DELETE_RESET });
      navigate("/admin/messages");
    }
    dispatch(getAllMessage());
  }, [alert, dispatch, error, isDeleted, deleteError, navigate]);

  const rows = [];
  const columns = [
    {
      field: "id",
      headerName: "User Id",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "name",
      headerName: "Name",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "phone",
      headerName: "Phone",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "message",
      headerName: "Message",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.3,
      type: "number",
      minWidth: 100,
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Button
              onClick={() =>
                deleteMessageHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  messages &&
    messages.forEach((item, index) => {
      rows.push({
        id: item.id,
        name: item.name,
        email: item.email,
        phone: item.phone,
        message: item.message,
      });
    });

  return (
    <Fragment>
      <section className="adminMessageContainer"></section>

      {localStorage.getItem("token") ? (
        <Fragment>
          <div className="adminMessageContainer1">
            <div className="adminSidebar">
              <AdminSidebar />
            </div>

            <div className="container messageGrid">
              <h1 className="allmessagesHeading">All Messages</h1>

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
        </Fragment>
      ) : (
        <UnauthorizedAccess/>
      )}
    </Fragment>
  );
};

export default AdminMessage;
