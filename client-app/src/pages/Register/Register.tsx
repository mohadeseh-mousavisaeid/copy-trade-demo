import styles from "./register.module.css";
import Input from "components/ui-components/Input/Input";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import Button from "@mui/material/Button";
import CustomHr from "components/compositions/CustomHr/CustomHr";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CountrySelect from "components/compositions/CountrySelect/CountrySelect";
import { FormControl } from "@mui/material";
import { registerRequest } from "api/registerRequest";
import { IRegister } from "api/types/IRegister";

const btnStyle = {
  color: "white",
  width: "100%",
  height: "48px",
};

const btnOutline = {
  color: "black",
  width: "100%",
  height: "48px",
  border: "1px solid gray !important",
};

const tabContextStyle = {
  width: "100%",
  paddingInline: 0,
};

const Register = () => {
  const [value, setValue] = useState("1");
  const [inputs, setInputs] = useState<IRegister | null>({
    email: "",
    password: "",
    passwordRetry: "",
  });
  const [isAgreeChecked, setIsAgreeChecked] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSendData = () => {
    const registerData: IRegister = {
      email: inputs?.email,
      password: inputs?.password,
      passwordRetry: inputs?.passwordRetry,
    };

    registerRequest(registerData).then((res) => {
      setIsSuccess(res.isSuccess);
    });

    setInputs({
      email: "",
      password: "",
      passwordRetry: "",
    });
    setIsAgreeChecked(false);
  };

  const navigate = useNavigate();
  const handleToLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    isSuccess && navigate("/login");
  }, [isSuccess, navigate]);

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>Get Started</h2>
      <div className={styles.container}>
        <Box sx={{ flex: 1, p: 2 }}>
          <TabContext value={value}>
            <Box>
              <TabList onChange={handleChange} aria-label="tabs">
                <Tab label="Email" value="1" />
                <Tab label="Phone" value="2" disabled />
              </TabList>
            </Box>
            <TabPanel sx={tabContextStyle} value="1">
              <div className={styles.box}>
                <FormControl>
                  <div className={styles.innerBox}>
                    <Input
                      id="email"
                      name="email"
                      label="Email Address"
                      type="email"
                      value={inputs?.email}
                      placeholder="example@email.com"
                      onChange={handleInputChange}
                    />

                    <Input
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      value={inputs?.password}
                      placeholder="Enter a password of 8-30 character"
                      onChange={handleInputChange}
                    />
                    <Input
                      id="re-password"
                      name="passwordRetry"
                      label="Repeat Password"
                      type="password"
                      value={inputs?.passwordRetry}
                      placeholder="Repeat your password"
                      onChange={handleInputChange}
                    />
                    <span className={styles.agreementBox}>
                      <input
                        type="checkbox"
                        name="agreementCheckbox"
                        id="agreementCheckbox"
                        aria-label="agreement"
                        checked={isAgreeChecked}
                        onChange={() => setIsAgreeChecked(!isAgreeChecked)}
                      />
                      <p id="agreement">
                        I have read and agree to the
                        <a href="#">Customer Agreement</a> and
                        <a href="#">Privacy Policy</a>
                      </p>
                    </span>
                    {/* </div> */}

                    <Button
                      sx={btnStyle}
                      variant="contained"
                      disabled={!isAgreeChecked}
                      onClick={handleSendData}
                    >
                      Sign Up
                    </Button>
                  </div>
                </FormControl>
                <CustomHr text="or" />

                <div className={styles.endBox}>
                  <Button sx={btnOutline} variant="outlined">
                    <GoogleIcon
                      size={24}
                      style={{ marginInlineEnd: "0.5rem" }}
                    />
                    Continue with Google
                  </Button>

                  <div>
                    <span>Existing Account?</span>
                    <Button variant="text" onClick={handleToLogin}>
                      Log In
                    </Button>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel sx={tabContextStyle} value="2">
              <div className={styles.box}>
                <div className={styles.phoneBox}>
                  <CountrySelect />
                  <Input
                    id="phone"
                    label="Phone Number"
                    type="tel"
                    placeholder="9300000000"
                  />
                </div>

                <div className={styles.passwordBox}>
                  <Input
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="Enter a password of 8-30 character"
                  />
                  <span className={styles.agreementBox}>
                    <input
                      type="checkbox"
                      name="agreementCheckbox"
                      id="agreementCheckbox"
                      aria-label="agreement"
                    />
                    <p id="agreement">
                      I have read and agree to the
                      <a href="#">Customer Agreement</a> and
                      <a href="#">Privacy Policy</a>
                    </p>
                  </span>
                </div>

                <Button sx={btnStyle} variant="contained">
                  Sign Up
                </Button>

                <CustomHr text="or" />

                <div className={styles.endBox}>
                  <Button sx={btnOutline} variant="outlined">
                    <GoogleIcon
                      size={24}
                      style={{ marginInlineEnd: "0.5rem" }}
                    />
                    Continue with Google
                  </Button>

                  <div>
                    <span>Existing Account?</span>
                    <Button variant="text" onClick={handleToLogin}>
                      Log In
                    </Button>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default Register;
