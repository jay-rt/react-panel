import "./users.scss";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/datatable/DataTable";
import { userRows } from "./usersData";

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
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button type="button">Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
    </div>
  );
};

export default Users;
