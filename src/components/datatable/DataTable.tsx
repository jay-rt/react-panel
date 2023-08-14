import { Link } from "react-router-dom";
import "./datatable.scss";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

type UserRows = {
  id: number;
  img: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  verified?: boolean;
};

type Props = {
  slug: string;
  columns: GridColDef[];
  rows: UserRows[];
};

const DataTable = (props: Props) => {
  const handleDelete = (id: number) => {
    console.log(id + " has been deleted.");
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => (
      <div className="action">
        <div className="view">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
        </div>
        <div className="delete" onClick={() => handleDelete(params.row.id)}>
          <img src="/delete.svg" alt="" />
        </div>
      </div>
    ),
  };
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
