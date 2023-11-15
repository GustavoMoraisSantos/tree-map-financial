import IncomeTable from "@/components/IncomeTable";
import { Divider, Drawer } from "antd";
import ExpensesTable from "./ExpensesTable";

const MainDrawer = ({ isOpen, onCloseDrawer }) => {
  return (
    <Drawer
      title="Controle Financeiro"
      placement={"left"}
      closable={true}
      onClose={onCloseDrawer}
      open={isOpen}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>Vamos montar a sua tree map personalizada!</p>
      </div>
      <div>
        <h3
          style={{
            background: "#3CB371",
            marginBottom: "8px",
            marginTop: "16px",
            display: "flex",
            justifyContent: "center",
            color: "whitesmoke",
            padding: "4px",
          }}
        >
          Rendimentos
        </h3>
        <IncomeTable />
        <Divider />
        <h3
          style={{
            background: "#FF6347",
            marginBottom: "8px",
            marginTop: "16px",
            display: "flex",
            justifyContent: "center",
            color: "whitesmoke",
            padding: "4px",
          }}
        >
          Gastos
        </h3>
        <ExpensesTable />
      </div>
    </Drawer>
  );
};

export default MainDrawer;
