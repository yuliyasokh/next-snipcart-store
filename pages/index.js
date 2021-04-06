import Head from 'next/head'
import styles from '../styles/Home.module.css'
import products from '../products.json';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom'
import NumericInput from 'react-numeric-input';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pelmeni Pierogi Vareniki</title>
        <link rel="icon" href="/images/favicon1.png" />
      </Head>
        <nav className="nav-wrapper">
            <div className="container">
                {/*<Link to="/" className="brand-logo">Shopping</Link>*/}

                <ul className="right">
                    <li>
                        {/*<Link to="/">Shop</Link>*/}
                    </li>
                    <li>
                        {/*<Link to="/cart">My cart</Link>*/}
                    </li>
                    <li>
                        {/*<Link to="/cart"><i className="material-icons">shopping_cart</i></Link>*/}
                    </li>
                </ul>
            </div>
        </nav>
        <main className={styles.main}>
        <h1 className={styles.title}>
            Pelmeni Pierogi Vareniki
        </h1>

        <p className={styles.description}>
            Только из 100% натуральных продуктов, ручная лепка!
        </p>
          <div className={styles.grid}>
              {products.map(product => {
                  return (
                      <div key={product.id} className={styles.card}>
                          <img src={product.image} alt={`Preview of ${product.title}`} />
                          <h3 className={styles.title}>{ product.title }</h3>
                          <p><div><div className={styles.ingredients}>Состав: </div> { product.ingredients }</div></p>
                          <p></p>
                          <p>{ product.description }</p>
                          <p className={styles.ldescription}>zł { product.price } / кг</p>
                          <p><div className = {styles.quantity}>
                              <div><NumericInput className="form-control"
                                  value={ 1.0 }
                                  min={ 0.5 }
                                  max={ 100 }
                                  step={ 0.5 }
                                  precision={ 1 }
                                  size={ 5 }
                                  mobile
                              /></div>
                              <div>
                              <button className="btn btn-outline-primary"
                                      data-item-id={product.id}
                                      data-item-image={product.image}
                                      data-item-name={product.title}
                                      data-item-url="/"
                                      data-item-price={product.price}
                              >Добавить</button></div>
                          </div>
                          </p>
                      </div>
                  );
              })}
          </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by yuliya.sokh
        </a>
          <script async src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js" />
          <div hidden id="snipcart" data-api-key="[YOUR-API-KEY]" />
      </footer>
    </div>
  )
}
