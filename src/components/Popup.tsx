import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
} from "@mui/material";

interface PopupProps {
  open: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  message: string;
  confirmButtonText?: string;
}

const Popup: React.FC<PopupProps> = ({
  open,
  onClose,
  onConfirm,
  message,
  confirmButtonText = "OK",
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Notification</DialogTitle>
      <DialogContent>
        <Typography>{message}</Typography>
      </DialogContent>
      <DialogActions>
        {onConfirm && (
          <Button onClick={onConfirm} color="primary" variant="contained">
            {confirmButtonText}
          </Button>
        )}
        <Button onClick={onClose} color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
