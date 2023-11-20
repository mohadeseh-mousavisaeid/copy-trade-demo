import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import TradingData from "./TradingData/TradingData";

const TraderStatsPanel = () => {
  const [tabValue, setTabValue] = useState("1");
  const handleTabs = (e: SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <div
      style={{ maxWidth: "1200px", marginInline: "auto", marginTop: "3rem" }}
    >
      <TabContext value={tabValue}>
        <TabList
          onChange={handleTabs}
          textColor="secondary"
          indicatorColor="secondary"
          variant="scrollable"
          allowScrollButtonsMobile
          sx={{
            borderBlockEnd: "1px solid #f6f6f6",
          }}
        >
          <Tab
            label="Trading Data"
            value={"1"}
            sx={{
              fontWeight: "bold",
              color: "#999",
            }}
          />
          <Tab
            label="Current Positions"
            value={"2"}
            sx={{
              fontWeight: "bold",
              color: "#999",
            }}
          />
          <Tab
            label="Trade History"
            value={"3"}
            sx={{
              fontWeight: "bold",
              color: "#999",
            }}
          />
          <Tab
            label="Transfer Records"
            value={"4"}
            sx={{
              fontWeight: "bold",
              color: "#999",
            }}
          />
          <Tab
            label="Copiers"
            value={"5"}
            sx={{
              fontWeight: "bold",
              color: "#999",
            }}
          />
        </TabList>

        <TabPanel sx={{ px: 0 }} value="1">
          <TradingData />
        </TabPanel>
        <TabPanel sx={{ px: 0 }} value="2">
          Current Positions
        </TabPanel>
        <TabPanel sx={{ px: 0 }} value="3">
          Trade History
        </TabPanel>
        <TabPanel sx={{ px: 0 }} value="4">
          Transfer Records
        </TabPanel>
        <TabPanel sx={{ px: 0 }} value="5">
          Copiers
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default TraderStatsPanel;
