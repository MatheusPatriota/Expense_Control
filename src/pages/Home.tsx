import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { AiFillBank } from 'react-icons/ai';
import { CiCreditCard1 } from 'react-icons/ci';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

import Card from '../components/Card';

function Home() {
  const [paymentDate, setPaymentDate] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setPaymentDate(event.target.value);
  };
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={paymentDate}
              className="text-[14px] !rounded-full"
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Selecione uma Data</em>
              </MenuItem>
              <MenuItem value={20}>Fevereiro - 2024</MenuItem>
              <MenuItem value={10}>Janeiro - 2024</MenuItem>
              <MenuItem value={30}>Dezembro - 2023</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        <h1 className="text-[32px] font-medium">Dashboard</h1>
      </div>
      <div className="flex gap-2 flex-wrap mt-4">
        <Card
          title="Saldo atual"
          value="8.536,84"
          iconBackgroundColor="2196f3"
          icon={<AiFillBank color="#fff" size={"28px"} />}
        />
        <Card
          title="Receita"
          value="8.536,84"
          iconBackgroundColor="4caf50"
          icon={<FaArrowUp color="#fff" size={"28px"} />}
        />
        <Card
          title="Despesas"
          value="8.536,84"
          iconBackgroundColor="f44336"
          icon={<FaArrowDown color="#fff" size={"28px"} />}
        />
        <Card
          title="Cartão de crédito"
          value="8.536,84"
          iconBackgroundColor="00796b"
          icon={<CiCreditCard1 color="#fff" size={"28px"} />}
        />
      </div>
    </div>
  );
}

export default Home;
