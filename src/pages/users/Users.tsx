import "./users.scss";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/datatable/DataTable";
import { userInput, userRows, userState } from "./usersData";
import { useState } from "react";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => (
      <img src={params.row.img || "/noavatar.png"} alt="avatar" />
    ),
  },
  {
    field: "firstName",
    headerName: "First name",
    type: "string",
    width: 120,
  },
  {
    field: "lastName",
    headerName: "Last name",
    type: "string",
    width: 120,
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 200,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "string",
    width: 120,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    type: "string",
    width: 120,
  },
  {
    field: "verified",
    headerName: "Verified",
    type: "boolean",
    width: 90,
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button type="button" onClick={() => setOpen(true)}>
          Add New User
        </button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && (
        <Add
          slug="User"
          input={userInput}
          setOpen={setOpen}
          initialState={userState}
        />
      )}
    </div>
  );
};

export default Users;
