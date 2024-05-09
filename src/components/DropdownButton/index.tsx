import { Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { GrTransaction } from 'react-icons/gr';
import { PiChartLineDown, PiChartLineUp } from 'react-icons/pi';

const DropdownButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        className="flex items-center gap-4 p-4 rounded-full text-white font-sans text-lg bg-[#373f51] w-fit min-w-[150px]
        hover:opacity-80 mb-2"
        onClick={handleClick}
      >
        <FaPlus />
        Novo
      </button>
      <Menu
        className="mt-1"
        id="demo-positioned-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose} className="flex flex-row gap-4">
          <div className="flex flex-row gap-4 justify-center items-center text-[18px]">
            <PiChartLineUp color="#009532" />
            Receitas
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose} className="flex flex-row gap-4">
          <div className="flex flex-row gap-4 justify-center items-center text-[18px]">
            <PiChartLineDown color="#ff5454" />
            Despesas
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose} className="flex flex-row gap-4">
          <div className="flex flex-row gap-4 justify-center items-center text-[18px]">
            <GrTransaction color="#616161" />
            Investimento
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownButton;
