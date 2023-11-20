import { Box, Button, Divider } from "@mui/material";
import TradeCard from "../../components/compositions/TradeCard/TradeCard";
import styles from "./copyTrading.module.css";
import { BsArrowRight as RightArrowIcon } from "react-icons/bs";
import { IoCopyOutline as CopyIcon } from "react-icons/io5";
import { LiaExchangeAltSolid as TradeIcon } from "react-icons/lia";
import { RiUserFollowLine as FollowingIcon } from "react-icons/ri";
import { LiaCopyright as CopyRightIcon } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { data as traderData } from "./fakeData";

const CopyTrading = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.container}`}>
      <div className={styles.introBox}>
        <section className={styles.intro}>
          <div className={styles.heading}>
            <h1>Copy Global Elite Traders</h1>
            <h2>
              Established <span className={styles.statisticNum}>6,212,026</span>{" "}
              Copy Relationship
            </h2>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "flex-start", md: "center" },
                gap: "0.5rem",
                mt: "1rem",
              }}
            >
              <Button sx={{ textTransform: "none" }}>
                Apply to be a Trader
                <RightArrowIcon size={16} style={{ marginInline: "0.5rem" }} />
              </Button>
              <Divider
                orientation="vertical"
                sx={{
                  width: "2px",
                  height: "1rem",
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              />
              <Button
                sx={{
                  textTransform: "none",
                  display: { xs: "block", md: "none" },
                }}
              >
                Copy Trading Guides
                <CopyIcon size={16} style={{ marginInline: "0.5rem" }} />
              </Button>
              <Button
                sx={{
                  textTransform: "none",
                  display: { xs: "none", md: "block" },
                }}
              >
                <CopyIcon size={16} style={{ marginInline: "0.5rem" }} />
                Copy Trading Guides
              </Button>
            </Box>
          </div>
        </section>
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.toolbar}>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                marginInlineStart: "auto",
                color: "gray",
                borderColor: "gray",
                "&:hover": { borderColor: "gray" },
              }}
            >
              <TradeIcon size={20} />
              <Box
                component="span"
                sx={{
                  marginInlineStart: "0.5rem",
                }}
              >
                My Trades
              </Box>
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "gray",
                borderColor: "gray",
                marginInlineEnd: { xs: "auto", md: "unset" },
                "&:hover": { borderColor: "gray" },
              }}
            >
              <FollowingIcon size={20} />
              <Box
                component="span"
                sx={{
                  marginInlineStart: "0.5rem",
                }}
              >
                Following
              </Box>
            </Button>
          </Box>
        </div>

        {traderData.map((trader, index) => (
          <TradeCard
            key={index}
            isActive={false}
            name={trader.name}
            description={trader.description}
            bio={trader.bio}
            imgUrl={trader.imgUrl}
            onClick={() => navigate(`/trader-profile/${trader.id}`)}
          />
        ))}
      </div>
      <Divider sx={{ width: "100%" }} />
      <div className={styles.copyRight}>
        <span>BlueBits 2023</span>
        <CopyRightIcon />
      </div>
    </div>
  );
};

export default CopyTrading;
