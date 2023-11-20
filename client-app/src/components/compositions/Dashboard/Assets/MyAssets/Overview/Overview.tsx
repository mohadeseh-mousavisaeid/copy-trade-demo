import React from "react";
import styles from "./overview.module.css";
import { Button, Divider } from "@mui/material";

const Overview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        {/* TODO: set heading icons */}
        <h4 className={styles.title}>Total Assets (USDT)</h4>
        <p className={styles.amountBox}>
          <span className={styles.totalAmount}>0.00000000</span>
          <br />
          <span className={styles.totalMoney}>$0.00</span>
        </p>
      </div>

      <div className={styles.btnBox}>
        {/* TODO: wire up the buttons */}
        <Button
          className={styles.btn}
          sx={{ color: "white" }}
          variant="contained"
        >
          Deposit
        </Button>
        <Button className={styles.btn} variant="outlined">
          Withdraw
        </Button>
        <Button className={styles.btn} variant="outlined">
          Transfer
        </Button>
        <Button className={styles.btn} variant="outlined">
          Convery
        </Button>
      </div>

      <div className={styles.contentBox}>
        <div className={styles.accountDetailBox}>
          <h4 className={styles.contentTitle}>Account Details</h4>
          <Divider />
          <div className={styles.listItem}>
            <h4 className={styles.listItemTitle}>Fund Account</h4>
            <span className={styles.listItemAmount}>0.00</span>
            <span className={styles.almost}>≈</span>
            <span className={styles.listItemMoney}>$0.00</span>
          </div>
          <Divider />

          <div className={styles.listItem}>
            <h4 className={styles.listItemTitle}>Futures Account</h4>
            <span className={styles.listItemAmount}>0.00</span>
            <span className={styles.almost}>≈</span>
            <span className={styles.listItemMoney}>$0.00</span>
          </div>
          <Divider />
          <div className={styles.listItem}>
            <h4 className={styles.listItemTitle}>Copy Trade</h4>
            <span className={styles.listItemAmount}>0.00</span>
            <span className={styles.almost}>≈</span>
            <span className={styles.listItemMoney}>$0.00</span>
          </div>
          <Divider />

          <div className={styles.listItem}>
            <h4 className={styles.listItemTitle}>Grid Account</h4>
            <span className={styles.listItemAmount}>0.00</span>
            <span className={styles.almost}>≈</span>
            <span className={styles.listItemMoney}>$0.00</span>
          </div>
          <Divider />

          <div className={styles.listItem}>
            <h4 className={styles.contentTitle}>NFT Shards</h4>
          </div>
          <Divider />
        </div>
        <div className={styles.recentActivity}>
          <h4 className={styles.contentTitle}>
            Recent Deposit and Withdrawals
          </h4>
          <div className={styles.imgBox}>
            <img
              src="https://bin.bb-os.com/_nuxt/img/img-search.8e6600a.png"
              alt="search"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
