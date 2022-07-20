import { Link, useParams } from "react-router-dom";
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
import HeaderPage from "../../components/HeaderPage";
import Box from "@mui/material/Box";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { usersData } from "../../data/dummy";

type Props = {};

const Invoice = (props: Props) => {
  const eventNewClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log(e);
  };

  // let params = useParams();
  // console.log("🚀 ~ file: Home.tsx ~ line 7 ~ Home ~ params", params);

  return (
    <div className=" md:mx-10 mt-24 p-2 m-2 md:p-10 bg-white rounded-3xl   ">
      <HeaderPage
        category="Page"
        title="Invoice"
        textButton=""
        eventHandler={eventNewClick}
        showButton={false}
      />
      <Box sx={{ height: 600 }}>
        <DataGrid
          rows={usersData}
          columns={[
            { field: "id", headerName: "ID", width: 90 },
            {
              field: "firstName",
              headerName: "First name",
              width: 350,
              editable: true,
            },
            {
              field: "lastName",
              headerName: "Last name",
              width: 350,
              editable: true,
            },
            {
              field: "age",
              headerName: "Age",
              type: "number",
              width: 110,
              editable: true,
            },
            {
              field: "fullName",
              headerName: "Full name",
              description:
                "This column has a value getter and is not sortable.",
              sortable: false,
              width: 350,
              valueGetter: (params: GridValueGetterParams) =>
                `${params.row.firstName || ""} ${params.row.lastName || ""}`,
            },
            {
              field: "action",
              headerName: "Action",
              width: 150,
              renderCell: (params) => {
                return (
                  <div>
                    <Link to={"/invoice/" + params.row.id}>
                      <button className="ml-3 text-blue-500">
                        <FiEdit />
                      </button>
                    </Link>
                    <button className="ml-3 text-red-500">
                      <BsTrash />
                    </button>
                  </div>
                );
              },
            },
          ]}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default Invoice;
