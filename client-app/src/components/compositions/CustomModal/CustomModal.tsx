import { Box, Button, Modal } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  handleOnOk?: () => void;
};

const CustomModal = ({ children, onClose, open, handleOnOk }: Props) => {
  return (
    <div>
      <Modal onClose={onClose} open={open}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            border: "none",
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
          }}
        >
          {children}
          {/* <Button
            sx={{ width: "100%" }}
            variant="contained"
            color="success"
            onClick={handleOnOk}
          >
            OK
          </Button> */}
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
