import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
// import { filterContacts } from "../../redux/contactsSlice";
// import { setFilter } from "../../redux/filtersSlice";

import { filterContacts } from "../../redux/contactsSlice";

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Find contacts"
        variant="outlined"
        onChange={handleChange}
      />
    </div>
  );
};
