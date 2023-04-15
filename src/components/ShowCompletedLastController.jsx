import React from "react";
import { Switch } from "@mui/material";
import { styled } from "@mui/material";

const ShowCompletedLastButton = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#7e93d8',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#fff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    color: '#7e93d8',
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: '#fff',
    boxSizing: 'border-box',
  },
}));

const ShowCompletedLastController = ({ShowCompletedLast, handleShowCompletedLast}) => {

  return (
    <div className="ShowCompletedLastControllerContainer">
      <label style={{ marginRight: '5px' }}>Move done things to end?</label>
      <ShowCompletedLastButton checked={ShowCompletedLast} onClick={handleShowCompletedLast}/>
    </div>
  )
};

export default ShowCompletedLastController;