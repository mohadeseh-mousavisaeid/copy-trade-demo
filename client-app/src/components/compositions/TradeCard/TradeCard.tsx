import { Avatar, Box, Button, Skeleton, SxProps } from "@mui/material";
import styles from "./tradeCard.module.css";
import DemoChart from "../Chart/DemoChart";

const boxStyle: SxProps = {
  width: "100%",
  height: "100%",
  bgcolor: "white",
  borderRadius: "1rem",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  display: "flex",
  flexDirection: "column",
};

const btnStyle: SxProps = {
  color: "primary.100",
  height: "1.5rem",
  width: "2rem",
  padding: 0,
  borderRadius: "1rem",
  fontSize: "0.7rem",
};

type Props = {
  imgUrl?: string;
  name: string;
  description: string;
  bio?: string;
  onClick?: () => void;
  isActive: boolean;
};

const TradeCard = ({
  name,
  description,
  onClick,
  bio,
  imgUrl,
  isActive,
}: Props) => {
  return (
    <div className={styles.container}>
      <Box sx={boxStyle}>
        <div className={styles.heading}>
          {isActive ? (
            <Avatar alt="trader image" src={imgUrl} />
          ) : (
            <Skeleton
              variant="circular"
              animation="wave"
              sx={{ width: "40px", height: "40px" }}
            />
          )}
          <div
            className={styles.infoBox}
            style={{ cursor: "pointer" }}
            onClick={onClick}
          >
            {isActive ? (
              <>
                <div className={styles.name}>{name}</div>
                <div className={styles.desc}>{description}</div>
              </>
            ) : (
              <>
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{ width: "70px" }}
                />
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{ flexGrow: 1 }}
                />
              </>
            )}
          </div>
          <Button variant="contained" sx={btnStyle} disabled>
            Copy
          </Button>
        </div>
        {isActive ? (
          <div className={styles.body}>
            <div className={styles.chart}>
              <DemoChart />
            </div>
            <div className={styles.summery}>
              <div className={styles.roi}>
                <div className={styles.roiPercent}>+19.48%</div>
                30D ROI
              </div>
              <div className={styles.copiers}>
                <div className={styles.copiersCount}>6166</div>
                Copiers
              </div>
              <div className={styles.risk}>
                <div className={styles.riskRate}>3</div>
                Risk
              </div>
            </div>
          </div>
        ) : (
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{ flexGrow: 1 }}
          />
        )}
        <div className={styles.footer}>
          {isActive ? (
            Boolean(bio) ? (
              <div className={styles.footnote}>{bio}</div>
            ) : null
          ) : (
            <Skeleton variant="text" animation="wave" sx={{ flexGrow: 1 }} />
          )}
        </div>
      </Box>
    </div>
  );
};

export default TradeCard;
