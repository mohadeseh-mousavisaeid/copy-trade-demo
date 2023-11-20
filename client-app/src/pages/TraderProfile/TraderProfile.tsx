import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data as traderData } from "../CopyTrading/fakeData";
import { Trader } from "types/Trader";
import { Avatar, Button, Divider } from "@mui/material";
import TraderStatsPanel from "components/compositions/TraderStatsPanel/TraderStatsPanel";

const TraderProfile = () => {
  const params = useParams();
  const traderID = params.traderID;
  const [trader, setTrader] = useState<Trader>();

  useEffect(() => {
    const trData = traderData.find((trader) => trader.id === traderID);
    setTrader(trData);
  }, [traderID]);

  return (
    <div className="container">
      <div
        style={{
          maxWidth: "1200px",
          marginInline: "auto",
          marginTop: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Avatar
              sx={{ width: "100px", height: "100px", marginInlineEnd: "1rem" }}
              src={trader?.imgUrl}
              alt="trader"
            />
            <div>
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {trader?.name}
                <Button
                  variant="outlined"
                  sx={{
                    height: "1.5rem",
                    borderRadius: "1rem",
                  }}
                >
                  + Follow
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "0.8rem",
                }}
              >
                <div>
                  {trader?.followers} <span>Followers</span>
                </div>
                <Divider
                  orientation="vertical"
                  sx={{ height: "1rem", width: "2px", mx: "0.5rem" }}
                  light
                />
                <div>{trader?.nationality} </div>
                <Divider
                  orientation="vertical"
                  sx={{ height: "1rem", width: "2px", mx: "0.5rem" }}
                  light
                />
                <div>
                  {trader?.joiningDate} <span>Joined</span>
                </div>
              </div>
            </div>
          </div>
          <Button variant="contained" sx={{ color: "white" }}>
            Copy
          </Button>
        </div>
      </div>
      <TraderStatsPanel />
    </div>
  );
};

export default TraderProfile;
