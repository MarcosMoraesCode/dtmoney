import { useEffect } from "react";
import { Container } from "./style";
import { api } from "../../services/api";

export const TransactionsTable = () => {
  useEffect(() => {
    api.get("transactions").then((res) => console.log(res.data));
  });

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$ 12.000,00 </td>
            <td>Projetos</td>
            <td>20/11/2023</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 2.000,00 </td>
            <td>Casa</td>
            <td>20/11/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
