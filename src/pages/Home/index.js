import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img
          src='https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/9e34e6901fe742fcbe00aab70149fd38_9366/Tenis_Alphabounce+_Preto_EG1452_01_standard.jpg'
          alt='tenis'
        />
        <strong>Tênis muito legal</strong>
        <span>R$349,99</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color='#fff' />3{' '}
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src='https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/9e34e6901fe742fcbe00aab70149fd38_9366/Tenis_Alphabounce+_Preto_EG1452_01_standard.jpg'
          alt='tenis'
        />
        <strong>Tênis muito legal</strong>
        <span>R$349,99</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color='#fff' />3{' '}
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src='https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/9e34e6901fe742fcbe00aab70149fd38_9366/Tenis_Alphabounce+_Preto_EG1452_01_standard.jpg'
          alt='tenis'
        />
        <strong>Tênis muito legal</strong>
        <span>R$349,99</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color='#fff' />3{' '}
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src='https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/9e34e6901fe742fcbe00aab70149fd38_9366/Tenis_Alphabounce+_Preto_EG1452_01_standard.jpg'
          alt='tenis'
        />
        <strong>Tênis muito legal</strong>
        <span>R$349,99</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color='#fff' />3{' '}
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src='https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/9e34e6901fe742fcbe00aab70149fd38_9366/Tenis_Alphabounce+_Preto_EG1452_01_standard.jpg'
          alt='tenis'
        />
        <strong>Tênis muito legal</strong>
        <span>R$349,99</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color='#fff' />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src='https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/9e34e6901fe742fcbe00aab70149fd38_9366/Tenis_Alphabounce+_Preto_EG1452_01_standard.jpg'
          alt='tenis'
        />
        <strong>Tênis muito legal</strong>
        <span>R$349,99</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color='#fff' />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

export default Home;
