import React, { createContext, useState } from 'react';


export const CartContext = createContext();



const CarroContextProvider = ({ children }) => {
  const [myData, setMyData] = useState([]);

  const addProducto = (id, titulo, precio, cantidad) => {
    const exists = myData.find(p => p.id === id);
    if (exists){
        exists.cantidad = cantidad;
        return
    };
    setMyData([...myData, { id, titulo, precio, cantidad }]);
  };

  const clearCart = () => {
      setMyData([]);
  }

  const removeProducto = (id) => {
    setMyData({myData: myData.filter(function(id) { 
        return id !== myData.id;
    })});
  }

  return (
    <CartContext.Provider value={{ myData, addProducto }}>
      {children}
    </CartContext.Provider>
  );
};

export default CarroContextProvider;
