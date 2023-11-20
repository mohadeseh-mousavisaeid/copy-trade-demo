import styles from "./login.module.css";
import Input from "components/ui-components/Input/Input";
import { BsQrCode as QrCodeIcon } from "react-icons/bs";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import Button from "@mui/material/Button";
import CustomHr from "components/compositions/CustomHr/CustomHr";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "store/store";
import { useNavigate } from "react-router-dom";
import CountrySelect from "components/compositions/CountrySelect/CountrySelect";
import { FormControl } from "@mui/material";
import { ILogin } from "api/types/ILogin";
import { IUser } from "types/User";
import { authenticateUser } from "store/slices/userSlice";
import { loginRequest } from "api/LoginRequest";

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

const Login = () => {
  const [value, setValue] = useState("1");

  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[] | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const [inputs, setInputs] = useState<ILogin>({
    email: "",
    phoneNumber: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch: Dispatch = useDispatch();

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

  const handleLogin = () => {
    const loginData: ILogin = {
      email: inputs.email,
      phoneNumber: "",
      password: inputs.password,
    };

    setInputs({
      email: "",
      phoneNumber: "",
      password: "",
    });

    loginRequest(loginData).then((res) => {
      setAccessToken(res.data);
      if (!res.isSuccess) {
        setIsSuccess(false);
        setErrors(res.errors);
      }
    });
  };

  useEffect(() => {
    if (accessToken !== null) {
      const user: IUser = {
        isAuth: true,
        token: accessToken,
      };
      dispatch(authenticateUser(user));
      navigate("/");
    }
  }, [accessToken, dispatch, navigate]);

  const handleToRegister = () => {
    navigate("/register");
  };

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>Login</h2>
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
                      label="Email Address"
                      name="email"
                      type="email"
                      value={inputs?.email}
                      placeholder="example@email.com"
                      onChange={handleInputChange}
                    />
                    <div>
                      <Input
                        id="password"
                        label="Password"
                        name="password"
                        value={inputs?.password}
                        type="password"
                        placeholder="Enter a password of 8-30 character"
                        onChange={handleInputChange}
                      />
                      <Button variant="text">Forget Password?</Button>
                    </div>

                    <Button
                      sx={btnStyle}
                      variant="contained"
                      onClick={handleLogin}
                    >
                      Login
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
                    <span>No Account?</span>
                    <Button variant="text" onClick={handleToRegister}>
                      Register
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
                  <Button variant="text">Forget Password?</Button>
                </div>

                <Button sx={btnStyle} variant="contained" onClick={handleLogin}>
                  Login
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
                    <span>No Account?</span>
                    <Button variant="text" onClick={handleToRegister}>
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabContext>
        </Box>

        <div className={styles.box}>
          <div className={styles.qrCodeBox}>
            <div className="heading">
              <h4>Login with QR code</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              totam vitae ad cum placeat
            </p>

            <div className="qrBox">
              <QrCodeIcon size={130} />
            </div>
            <CustomHr />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              totam vitae ad cum placeat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
