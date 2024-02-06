import { AiFillBank } from "react-icons/ai";
import Card from "../components/Card";
import { CiCreditCard1 } from "react-icons/ci";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function Home() {
  return (
    <div>
      <div className="flex justify-center">Datas</div>
      <div>
        <h1 className="text-[32px] font-medium">Dashboard</h1>
      </div>
      <div className="flex gap-2 flex-wrap mt-4">
        <Card
          title="Saldo atual"
          value="8.536,84"
          iconBackgroundColor="2196f3"
          icon={<AiFillBank color="#fff" size={"28px"}/>}
        />
        <Card
          title="Receita"
          value="8.536,84"
          iconBackgroundColor="4caf50"
          icon={<FaArrowUp color="#fff" size={"28px"}/>}
        />
        <Card
          title="Despesas"
          value="8.536,84"
          iconBackgroundColor="f44336"
          icon={<FaArrowDown color="#fff" size={"28px"}/>}
        />
        <Card
          title="Cartão de crédito"
          value="8.536,84"
          iconBackgroundColor="00796b"
          icon={<CiCreditCard1 color="#fff" size={"28px"}/>}
        />
      </div>
    </div>
  );
}

export default Home;
