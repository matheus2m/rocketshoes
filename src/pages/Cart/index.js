import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src='https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/9e34e6901fe742fcbe00aab70149fd38_9366/Tenis_Alphabounce+_Preto_EG1452_01_standard.jpg'
                alt='tenis'
              />
            </td>
            <td>
              <strong>Tenis muito massa</strong>
              <span>R$349,99</span>
            </td>
            <td>
              <div>
                <button>
                  <MdRemoveCircleOutline color={20} color='#7159c1' />
                </button>
                <input type='number' readOnly value={2} />
                <button>
                  <MdAddCircleOutline color={20} color='#7159c1' />
                </button>
              </div>
            </td>
            <td>R$699,98</td>
            <td>
              <button>
                <MdDelete size={20} color='#7159c1' />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button>Finalizar peido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$1920,20</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;
