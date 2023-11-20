import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import styles from "./modalBody.module.css";
import { forwardRef, useImperativeHandle } from "react";
import { UserData } from "api/types/UserData";
import { userUpdateRequests } from "api/UserUpdateRequest";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { InputType } from "components/compositions/Dashboard/Account/AccountSecurity/InputType";

export interface ISaveValue {
  save: () => boolean;
}

type Props = {
  type: InputType;
};

const DefaultModalBody = forwardRef<ISaveValue, Props>(({ type }, ref) => {
  const [value, setValue] = React.useState<string | number>();
  const [data, setData] = React.useState<UserData>(null);
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);

  const accessToken = useSelector((state: RootState) => state.user.token);
  useImperativeHandle(ref, () => ({
    save() {
      if (accessToken !== null) {
        userUpdateRequests(type, data, accessToken).then((res) => {
          res.isSuccess && setIsSuccess(true);
        });
      }
      return isSuccess;
    },
  }));

  useEffect(() => {
    setData({ [type as string]: value });
  }, [value, type]);

  const handleChange = (event: SelectChangeEvent) => {
    const numValue = parseInt(event.target.value);
    setValue(numValue);
  };

  const handleOnInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  switch (type) {
    case "gender":
      return (
        <div className={styles.container}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="select-label">Gender</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={value + ""}
              label="Gender"
              onChange={handleChange}
            >
              <MenuItem value={0}>male</MenuItem>
              <MenuItem value={1}>female</MenuItem>
              <MenuItem value={2}>prefer not to say</MenuItem>
            </Select>
          </FormControl>
        </div>
      );
      break;
    case "description":
      return (
        <div className={styles.container}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              id="textfield"
              label="Profile Bio"
              multiline
              rows={7}
              defaultValue={value}
              onChange={handleOnInput}
            />
            <FormHelperText>With label + helper text</FormHelperText>
          </FormControl>
        </div>
      );
      break;

    case "nickname":
    case "referrer":
      return (
        <div className={styles.container}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              id="input"
              label={type}
              multiline
              rows={1}
              defaultValue={value}
              onChange={handleOnInput}
            />
          </FormControl>
        </div>
      );
      break;

    default:
      return <div className={styles.container}>Empty Modal</div>;
      break;
  }
});

export default DefaultModalBody;
