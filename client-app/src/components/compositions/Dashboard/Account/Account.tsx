import { useState } from "react";
import { TabContext, TabPanel } from "@mui/lab";
import { Tab, Tabs } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./account.module.css";
import useMedia from "../../../../utils/useMedia";

const Account = () => {
  const [value, setValue] = useState("/panel/account/security");
  const navigate = useNavigate();
  const isSm = useMedia("sm");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };
  return (
    <TabContext value={value}>
      <div className={styles.dashboard}>
        <Tabs
          value={value}
          onChange={handleChange}
          orientation={isSm ? "vertical" : "horizontal"}
          allowScrollButtonsMobile
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab
            className={styles.tab}
            label="Account"
            value="/panel/account"
            // icon={<WalletIcon className={styles.icon} size={24} />}
            iconPosition="start"
            disabled
          />

          <Tab
            className={styles.tab}
            // icon={<DepositIcon className={styles.icon} size={24} />}
            iconPosition="start"
            label="Account & Security"
            value="/panel/account/security"
          />

          <Tab
            className={styles.tab}
            // icon={<WithdrawIcon className={styles.icon} size={24} />}
            iconPosition="start"
            label="Identity Verification"
            value="/panel/account/sample3"
            disabled
          />

          <Tab
            className={styles.tab}
            // icon={<TransferIcon className={styles.icon} size={24} />}
            iconPosition="start"
            label="My Trades"
            value="/panel/account/sample4"
            disabled
          />

          <Tab
            className={styles.tab}
            // icon={<ReportIcon className={styles.icon} size={24} />}
            iconPosition="start"
            label="Preferences"
            value="/panel/account/pref"
          />
        </Tabs>
      </div>
      <div className={styles.panelContainer}>
        <TabPanel sx={{ p: 0, height: "100%" }} value="/panel/account">
          <Outlet />
        </TabPanel>
        <TabPanel sx={{ p: 0, height: "100%" }} value="/panel/account/security">
          <Outlet />
        </TabPanel>
        <TabPanel sx={{ p: 0, height: "100%" }} value="/panel/account/sample3">
          <Outlet />
        </TabPanel>
        <TabPanel sx={{ p: 0, height: "100%" }} value="/panel/account/sample4">
          <Outlet />
        </TabPanel>
        <TabPanel sx={{ p: 0, height: "100%" }} value="/panel/account/pref">
          <Outlet />
        </TabPanel>
      </div>
    </TabContext>
  );
};

export default Account;
