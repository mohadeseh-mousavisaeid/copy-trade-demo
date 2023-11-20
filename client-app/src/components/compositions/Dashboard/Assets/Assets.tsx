import { useState } from "react";
import { TabContext, TabPanel } from "@mui/lab";
import { Tab, Tabs } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { PiWalletBold as WalletIcon } from "react-icons/pi";
import {
  BiExit as DepositIcon,
  BiTransferAlt as TransferIcon,
} from "react-icons/bi";
import { IoExitOutline as WithdrawIcon } from "react-icons/io5";
import { TbFileReport as ReportIcon } from "react-icons/tb";
import styles from "./assets.module.css";
import useMedia from "../../../../utils/useMedia";

const Assets = () => {
  const [value, setValue] = useState("/panel/assets");
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
            label="My Assets"
            value="/panel/assets"
            icon={<WalletIcon className={styles.icon} size={24} />}
            iconPosition="start"
          />

          <Tab
            className={styles.tab}
            icon={<DepositIcon className={styles.icon} size={24} />}
            iconPosition="start"
            label="Deposit"
            value="/panel/assets/sample2"
            disabled
          />

          <Tab
            className={styles.tab}
            icon={<WithdrawIcon className={styles.icon} size={24} />}
            iconPosition="start"
            label="Withdraw"
            value="/panel/assets/sample3"
            disabled
          />

          <Tab
            className={styles.tab}
            icon={<TransferIcon className={styles.icon} size={24} />}
            iconPosition="start"
            label="Transfer"
            value="/panel/assets/sample4"
            disabled
          />

          <Tab
            className={styles.tab}
            icon={<ReportIcon className={styles.icon} size={24} />}
            iconPosition="start"
            label="Report"
            value="/panel/assets/sample5"
            disabled
          />
        </Tabs>
      </div>
      <div className={styles.panelContainer}>
        <TabPanel sx={{ p: 0 }} value="/panel/assets">
          <Outlet />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="/panel/assets/sample2">
          <Outlet />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="/panel/assets/sample3">
          <Outlet />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="/panel/assets/sample4">
          <Outlet />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="/panel/assets/sample5">
          <Outlet />
        </TabPanel>
      </div>
    </TabContext>
  );
};

export default Assets;
