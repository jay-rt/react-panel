import "./products.scss";
import { useState } from "react";
import DataTable from "../../components/datatable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/Add";
import { productInput, productRows, productState } from "./productData";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => (
      <img src={params.row.img || "/noavatar.png"} alt="" />
    ),
  },
  {
    field: "title",
    headerName: "Title",
    type: "string",
    width: 220,
  },
  {
    field: "color",
    headerName: "Color",
    type: "string",
    width: 120,
  },
  {
    field: "price",
    headerName: "Price",
    type: "string",
    width: 120,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    type: "string",
    width: 120,
  },
  {
    field: "inStock",
    headerName: "In Stock",
    type: "boolean",
    width: 90,
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button type="button" onClick={() => setOpen(true)}>
          Add New Product
        </button>
      </div>
      <DataTable slug="products" columns={columns} rows={productRows} />
      {open && (
        <Add
          slug="Product"
          input={productInput}
          setOpen={setOpen}
          initialState={productState}
        />
      )}
    </div>
  );
};

export default Products;
