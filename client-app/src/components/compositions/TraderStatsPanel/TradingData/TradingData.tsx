import styles from "./tradingData.module.css";
import RoiChart from "../../Chart/RoiChart/RoiChart";
import BarChart from "../../Chart/BarCahrt/BarChart";
import { Button, Divider, SxProps } from "@mui/material";
import { useEffect, useState } from "react";

const TradingData = () => {
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const date = new Date().toLocaleString();
  const btnRoiChartStyle: SxProps = {
    height: "2rem",
    borderRadius: "1rem",
    color: "black",
    fontSize: "0.8rem",
    paddingInline: "0.25rem",
  };

  // const handleActiveBtn = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // useEffect(() => {
  //   console.log(anchorEl?.id);
  // }, [anchorEl]);

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <span>
          Last Updated: <span>{date}</span>
        </span>
        <span>
          Profit Share: <span>13%</span>
        </span>
      </div>

      <div className={styles.innerContainer}>
        <div className={styles.dataOverview}>
          <div className={styles.title}>Data Overview</div>
          <div className={styles.dataBox}></div>
          <div className={styles.dataRow}>
            <div className={styles.key}>Account Assets</div>
            <div className={styles.value}>3,382.34</div>
          </div>

          <div className={styles.dataRow}>
            <div className={styles.key}>Copier Profit</div>
            <div className={`${styles.value} ${styles.positive}`}>
              +285,143.11
            </div>
          </div>

          <Divider light sx={{ margin: "1rem" }} />

          <div className={styles.dataRow}>
            <div className={styles.key}>Copiers</div>
            <div className={styles.value}>38600</div>
          </div>

          <div className={styles.dataRow}>
            <div className={styles.key}>Risk</div>
            <div className={`${styles.value} ${styles.badge}`}>2</div>
          </div>
        </div>

        <div className={styles.chartContainer}>
          <div className={styles.roiChart}>
            <div className={styles.title}>ROI</div>
            <RoiChart />
            <div className={styles.btnBox}>
              <Button
                id="roi"
                variant="text"
                sx={btnRoiChartStyle}
                // onClick={handleActiveBtn}
              >
                ROI
              </Button>
              <Button
                id="PnL"
                variant="text"
                sx={btnRoiChartStyle}
                // onClick={handleActiveBtn}
              >
                Cumulative PnL
              </Button>
              <Button
                id="assets"
                variant="text"
                sx={btnRoiChartStyle}
                // onClick={handleActiveBtn}
              >
                Account Assets
              </Button>
            </div>
          </div>
          <div className={styles.barCharBox}>
            <div className={styles.weekly}>
              <div className={styles.title}>Weekly Profit</div>
              <BarChart />
              <div className={styles.guidBox}>
                <span className={styles.profitBadge}>Profit</span>
                <span className={styles.lossBadge}>Loss</span>
              </div>
            </div>
            <div className={styles.risk}>
              <div className={styles.title}>Risk Assessment</div>
              <BarChart />
              <div className={styles.footer}>
                <div className={styles.footnote}>30D Max.Loss</div>
                <div className={styles.footerBox}>
                  <div className={styles.day}>
                    <span className={styles.value}>-1.95%</span>
                    <span>Day</span>
                  </div>
                  <Divider
                    sx={{ width: "2px", height: "2rem" }}
                    orientation="vertical"
                    light
                  />
                  <div className={styles.week}>
                    <span className={styles.value}>--</span>
                    <span>Week</span>
                  </div>
                  <Divider
                    sx={{ width: "2px", height: "2rem" }}
                    orientation="vertical"
                    light
                  />
                  <div className={styles.month}>
                    <span className={styles.value}>--</span>
                    <span>Month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingData;
