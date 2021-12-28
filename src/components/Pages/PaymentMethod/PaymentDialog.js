import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const PaymentDialog = () =>  {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {

    e.preventDefault();
  }
 
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Add New
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle style={{fontWeight: '600', color: 'gray', fontSize: '19px'}}  id="responsive-dialog-title">
          Add Payment Method
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
          <TextField fullWidth label="Method Name" color="primary" focused />
          <TextField style={{marginTop: '20px'}} fullWidth label="Amount" color="primary" focused />
          <TextField style={{marginTop: '20px'}} fullWidth label="Daily Limit" color="primary" focused />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="error" autoFocus onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" type="submit" color="primary" onClick={handleClose} autoFocus>
              Save 
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
export default PaymentDialog;