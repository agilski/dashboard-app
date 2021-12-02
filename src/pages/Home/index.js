import { createContext, useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";
import { fetchUserList } from "../../redux/action-creators";

// Custom Component
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import Loader from "../../components/Loader/Loader";

// Custom Hooks
import useInput from "../../hooks/useInput";
import useSelect from "../../hooks/useSelect";

const column = [
  {
    header: "Username",
    dataKey: "username",
  },
  {
    header: "Name",
    dataKey: "fullName",
  },
  {
    header: "Email",
    dataKey: "email",
  },
  {
    header: "Gender",
    dataKey: "gender",
  },
  {
    header: "Registered",
    dataKey: "registered",
  },
];

const genderOptions = [
  { key: "male", value: "male", text: "Male" },
  { key: "female", value: "female", text: "Female" },
];

const initialStateInput = {
  search: "",
  email: "",
};

const initialStateSelect = {
  gender: "",
};

const initialSorting = {
  sortOrder: "ascending",
  sortBy: "",
};

export const SortContext = createContext("");

function sortingReducer(state, action) {
  switch (action.type) {
    case "CHANGE_SORT":
      if (state.sortBy === action.sortBy) {
        return {
          ...state,
          sortOrder:
            state.sortOrder === "ascending" ? "descending" : "ascending",
        };
      }

      return {
        sortBy: action.sortBy,
        sortOrder: "ascending",
      };
    case "RESET_SORT":
      return initialSorting;
    default:
      throw new Error();
  }
}

function Home({ getUserList, data, isLoading, isEmpty }) {
  const [inputValues, setInputValues, inputHandleChange] =
    useInput(initialStateInput);
  const [selectValues, setSelectValues, selectHandleChange] =
    useSelect(initialStateSelect);

  const [page, setPage] = useState(1);
  const [sortState, dispatch] = useReducer(sortingReducer, initialSorting);
  const pageSize = 5;

  useEffect(() => {
    getData();
  }, [page, sortState]);

  function getData() {
    let params = {
      keyword: inputValues.search,
      gender: selectValues.gender,
      page,
      pageSize,
      sortOrder: sortState.sortOrder,
      sortBy: sortState.sortBy,
    };
    getUserList(params);
  }

  function handleResetFilter() {
    setPage(1);
    setInputValues(initialStateInput);
    setSelectValues(initialStateSelect);
    dispatch({ type: "RESET_SORT" });
  }

  function handleOnClickSort(e) {
    let columnName = e.target.getAttribute("name");
    dispatch({ type: "CHANGE_SORT", sortBy: columnName });
  }

  return (
    <>
      <Loader active={isLoading}></Loader>
      <Input
        name="search"
        value={inputValues.search}
        icon="search"
        placeholder="Search"
        onChange={inputHandleChange}
        onActionClick={() => getData()}
      />
      <Select
        name="gender"
        value={selectValues.gender}
        placeholder="Choose Gender"
        options={genderOptions}
        onChange={selectHandleChange}
      />
      <Button label="Reset Filter" onClick={() => handleResetFilter()} />
      <SortContext.Provider value={sortState}>
        <Table
          data={data}
          column={column}
          activePage={page}
          onPageChange={(e, data) => setPage(data.activePage)}
          onClickHeader={(e) => handleOnClickSort(e)}
        />
      </SortContext.Provider>
    </>
  );
}

const mapStateToProps = ({ data = [], isLoading, isEmpty }) => ({
  data,
  isLoading,
  isEmpty,
});

const mapDispatchToProps = (dispatch) => ({
  getUserList: (params) => dispatch(fetchUserList(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
