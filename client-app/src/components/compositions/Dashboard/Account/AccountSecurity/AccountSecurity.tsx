import { useRef, useState } from "react";
import styles from "./accountSecurity.module.css";
import { Box, Button, Divider } from "@mui/material";
import {
  accountInformation,
  securityInformation,
  advSecurityInformation,
} from "./data";
import CustomModal from "../../../CustomModal/CustomModal";
import DefaultModalBody, {
  ISaveValue,
} from "../../../ModalComponents/DefaultModalBody/DefaultModalBody";
import { InputType } from "./InputType";

const AccountSecurity = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<InputType>(undefined);
  const modalBodyRef = useRef<ISaveValue>(null);

  const handleOnClick = (type: InputType | undefined) => {
    if (typeof type !== "undefined") {
      setIsOpen(true);
      setType(type);
    }
  };

  const handleOnOk = () => {
    const isSuccess = modalBodyRef.current?.save();
    console.log({ isSuccess });
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.heading}>
        <h4>Account & Security</h4>
      </div>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h2 className={styles.title} style={{ paddingBlock: "2rem" }}>
            Account Information
          </h2>

          {accountInformation.map((accInfo, index) => (
            <div key={index}>
              <div className={styles.infoBox}>
                <div className={styles.label}>{accInfo.label}</div>
                <div className={styles.value}>{accInfo.value}</div>
                <div className={styles.btnBox}>
                  {accInfo.actionLabel && (
                    <Button
                      variant="outlined"
                      sx={{ width: "100%" }}
                      onClick={() => handleOnClick(accInfo?.type)}
                      disabled={accInfo.isActive ? false : true}
                    >
                      {accInfo.actionLabel}
                    </Button>
                  )}
                </div>
              </div>
              <Divider light />
            </div>
          ))}

          <h2
            className={styles.title}
            style={{ paddingTop: "4rem", paddingBottom: "2rem" }}
          >
            Security Center
          </h2>

          {securityInformation.map((secInfo, index) => (
            <div key={index}>
              <div className={styles.infoBox}>
                <div className={styles.textBox}>
                  <div className={styles.label}>{secInfo.label}</div>
                  <div className={styles.desc}>{secInfo?.description}</div>
                </div>
                <div className={styles.value}>{secInfo.value}</div>
                <div className={styles.btnBox}>
                  <Button
                    variant="outlined"
                    sx={{ width: "100%" }}
                    onClick={() => handleOnClick(secInfo?.type)}
                    disabled={secInfo.isActive ? false : true}
                  >
                    {secInfo.actionLabel}
                  </Button>
                </div>
              </div>
              <Divider light />
            </div>
          ))}

          <h2
            className={styles.title}
            style={{ paddingTop: "4rem", paddingBottom: "2rem" }}
          >
            Advanced Security
          </h2>

          {advSecurityInformation.map((advSecInfo, index) => (
            <div key={index}>
              <div className={styles.infoBox}>
                <div className={styles.textBox}>
                  <div className={styles.label}>{advSecInfo.label}</div>
                  <div className={styles.desc}>{advSecInfo?.description}</div>
                </div>
                <div className={styles.value}>{advSecInfo.value}</div>
                <div className={styles.btnBox}>
                  <Button
                    variant="outlined"
                    sx={{ width: "100%" }}
                    onClick={() => handleOnClick(advSecInfo?.type)}
                    disabled={advSecInfo.isActive ? false : true}
                  >
                    {advSecInfo.actionLabel}
                  </Button>
                </div>
              </div>
              <Divider light />
            </div>
          ))}
        </div>

        {/* Modal Wrapper*/}

        <CustomModal open={isOpen} onClose={() => setIsOpen(false)}>
          <DefaultModalBody type={type} ref={modalBodyRef} />
          <Box sx={{ width: "100%", display: "flex", gap: "1rem" }}>
            <Button
              sx={{ flex: 1 }}
              variant="outlined"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button
              sx={{ flex: 1, color: "white" }}
              variant="contained"
              onClick={handleOnOk}
            >
              OK
            </Button>
          </Box>
        </CustomModal>
      </div>
    </>
  );
};

export default AccountSecurity;
