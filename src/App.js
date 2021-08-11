import React, {useState} from 'react';
import {Catalogo} from './components/Catalogo';
import {productos} from './productos';

export const App = () => {
  const [soloStock, setSoloStock] = useState(false);

  return (
    <div className="App">
      <h1>Catálogo de Productos</h1>
      <div className="toggle-container">
        <label htmlFor="stock">Toggle Stock</label>
        <input
          onChange={() => setSoloStock(!soloStock)}
          name="stock"
          type="checkbox"
          checked={soloStock}
        />
      </div>
      {soloStock ? (
        <Catalogo productos={productos.filter((prod) => prod.stock)} />
      ) : (
        <Catalogo productos={productos} />
      )}

      <button onClick={() => setSoloStock(true)}>
        Mostrar los que están en Stock
      </button>
    </div>
  );
};
