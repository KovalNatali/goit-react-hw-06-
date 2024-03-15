import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";

import { setFilter } from "../../redux/filtersSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
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
