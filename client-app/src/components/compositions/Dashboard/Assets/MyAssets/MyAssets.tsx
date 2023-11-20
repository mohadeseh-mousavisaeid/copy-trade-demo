import React from "react";
import styles from "./myAssets.module.css";
import { Alert, Divider, Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import Overview from "./Overview/Overview";
import { useNavigate, useSearchParams } from "react-router-dom";

const MyAssets = () => {
  const [open, setOpen] = React.useState(true);

  const [searchParam] = useSearchParams();
  const navigate = useNavigate();
  const value = searchParam.get("tab") || "1";

  const handleTabValue = (event: React.SyntheticEvent, newValue: string) => {
    navigate(
      `?${new URLSearchParams({
        tab: newValue,
      })}`
    );
  };

  return (
    <div className={`${styles.container} container`}>
      <h2 className={styles.heading}>My Assets</h2>
      {open && (
        <Alert onClose={() => setOpen(false)} severity="warning">
          Your current account security is weak. You're recommended to activate
          Google 2FA verification Link
        </Alert>
      )}

      <TabContext value={value}>
        <Tabs
          value={value}
          className={styles.tabList}
          onChange={handleTabValue}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          <Tab label="Overview" value={"1"} />
          <Tab label="Funds" value={"2"} />
          <Tab label="Futures" value={"3"} />
          <Tab label="Copy Trade" value={"4"} />
          <Tab label="Grid" value={"5"} />
        </Tabs>
        <Divider />
        <TabPanel sx={{ px: 0 }} value="1">
          <Overview />
        </TabPanel>
        <TabPanel sx={{ px: 0 }} value="2">
          Funds
        </TabPanel>
        <TabPanel sx={{ px: 0 }} value="3">
          Futures
        </TabPanel>
        <TabPanel sx={{ px: 0 }} value="4">
          Copy Trade
        </TabPanel>
        <TabPanel sx={{ px: 0 }} value="5">
          Grid
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default MyAssets;
