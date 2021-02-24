import React from "react";
import styled from "styled-components";
import { useTable, usePagination } from "react-table";
import AddItem from "./AddItem";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }

      input {
        font-size: 1rem;
        padding: 0;
        margin: 0;
        border: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;

// Create an editable cell renderer
const EditableCell = (cellObj) => {
  // We need to keep and update the state of the cell normally
  const {
    value: initialValue,
    row: index,
    column: id,
    updateMyData, // This is a custom function that we supplied to our table instance
    deleteOneObject,
  } = cellObj;

  const [value, setValue] = React.useState(initialValue);

  const onChange = (e) => setValue(e.target.value);

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value, cellObj.row.original._id);
  };

  // If the initialValue is changed external, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  let columnHeader = cellObj.column.Header;
  if (columnHeader !== "Delete") {
    let notSupported = [];
    if (notSupported.includes(columnHeader)) {
      return <div>{value}</div>;
    } else {
      return <input value={value} onChange={onChange} onBlur={onBlur} />;
    }
  } else
    return (
      <input
        type="button"
        value="delete"
        onClick={() => {
          deleteOneObject(cellObj.row.original._id);
        }}
      ></input>
    );
};

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
  Cell: EditableCell,
};

// Be sure to pass our updateMyData and the skipPageReset option
function Table({
  columns,
  data,
  updateMyData,
  skipPageReset,
  deleteOneObject,
}) {
  // For this example, we're using pagination to illustrate how to stop
  // the current page from resetting when our data changes
  // Otherwise, nothing is different here.
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      // use the skipPageReset option to disable page resetting temporarily
      autoResetPage: !skipPageReset,
      // updateMyData isn't part of the API, but
      // anything we put into these options will
      // automatically be available on the instance.
      // That way we can call this function from our
      // cell renderer!
      updateMyData,
      deleteOneObject,
    },
    usePagination
  );

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

function EditableTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Renter Name",
        accessor: "renterName",
      },
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Item Name",
        accessor: "itemName",
      },
      {
        Header: "Item Value",
        accessor: "itemValue",
      },
      {
        Header: "Delete",
      },
    ],
    []
  );
  // const makeData = (num) => {
  //   return [
  //     { id: 1, name: "Harry Potter", age: 20 },
  //     { id: 2, name: "Hermione Granger", age: 20 },
  //     { id: 3, name: "Ron Weasley", age: 20 },
  //     { id: 4, name: "You know who", age: 150 },
  //     { id: 5, name: "Professor Dumbledore", age: 170 },
  //     { id: 6, name: "Professor Snape", age: 60 },
  //     { id: 7, name: "Rubeus Hagrid", age: 50 },
  //   ];
  // };

  const [data, setData] = React.useState([]);
  const [skipPageReset, setSkipPageReset] = React.useState(false);

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value, objectId) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true);

    let modifiedObj = data.find((obj) => obj._id === objectId);
    if (!modifiedObj || !columnId || !columnId.id)  // || !modifiedObj[columnId.id]
      return;
    if (modifiedObj[columnId.id] === value) return;

    modifiedObj[columnId.id] = value;
    actOnData("POST", "insurance/", modifiedObj).then((data) => {
      //console.log(data); // JSON data parsed by `data.json()` call
      setData(formatData(data));
    });
  };

  const deleteOneObject = (idPara) => {
    setSkipPageReset(true);
    actOnData("DELETE", `insurance/item/${idPara}`).then((data) => {
      //console.log(data); // JSON data parsed by `data.json()` call
      setData(formatData(data));
    });
  };

  // After data chagnes, we turn the flag back off
  // so that if data actually changes when we're not
  // editing it, the page is reset
  React.useEffect(() => {
    setSkipPageReset(false);
  }, [data]);

  // load data from web
  React.useEffect(() => {
    async function loadInsuranceData() {
      const response = await fetch("insurance");
      const data = await response.json();
      setData(formatData(data));
    }
    loadInsuranceData();
  }, []);

  return (
    <div>
      <AddItem reloadData={newData => setData(formatData(newData))} />
      <br />
      <h4>Hint: click table cell to edit its value</h4>
      <Styles>
        <Table
          columns={columns}
          data={data}
          updateMyData={updateMyData}
          deleteOneObject={deleteOneObject}
          skipPageReset={skipPageReset}
        />
      </Styles>
    </div>
  );
}

function formatData(data) {
  return data.map((item) => {
    let obj = {
      _id: item._id,
      renterName: item.renterName,
      itemName: item.itemName,
      itemValue: item.itemValue,
      category: item.category,
    };

    return obj;
  });
}

async function actOnData(method = "POST", url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: method, // POST, GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export default EditableTable;
