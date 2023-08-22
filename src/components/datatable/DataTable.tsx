import "./datatable.scss";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import AutoSizer from "react-virtualized-auto-sizer";
import Box from "@mui/material/Box";

type Props<T> = {
  slug: string;
  columns: GridColDef[];
  rows: T[];
};

const DataTable = <T extends object>(props: Props<T>) => {
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
      <AutoSizer>
        {({ width, height }) => (
          <Box sx={{ width: width, height: height }}>
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
          </Box>
        )}
      </AutoSizer>
    </div>
  );
};

export default DataTable;
