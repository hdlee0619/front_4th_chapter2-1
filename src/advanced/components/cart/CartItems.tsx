import React from 'react';
import { CartItem, useCartStore } from '../../stores/cartStore';

export const CartItems = () => {
  const { cartList } = useCartStore((state) => state);

  return (
    <div id="cart-items">
      {cartList.map((item) => (
        <ItemRow key={item.id} item={item} />
      ))}
    </div>
  );
};

const ItemRow = ({ item }: { item: CartItem }) => {
  const { updateQuantity, removeToCart } = useCartStore((state) => state);

  const handleUpdateQuantity = (productId: string, change: number) => {
    updateQuantity(productId, change);
  };

  const handleRemoveFromCart = (productId: string) => {
    removeToCart(productId);
  };

  return (
    <div id={item.id} className="flex justify-between items-center mb-2">
      <span>
        {item.name} - {item.price}원 x {item.quantity}
      </span>
      <div>
        <button
          onClick={() => handleUpdateQuantity(item.id, -1)}
          className="quantity-change bg-blue-500 text-white px-2 py-1 rounded mr-1"
        >
          -
        </button>
        <button
          onClick={() => handleUpdateQuantity(item.id, 1)}
          className="quantity-change bg-blue-500 text-white px-2 py-1 rounded mr-1"
        >
          +
        </button>
        <button
          onClick={() => handleRemoveFromCart(item.id)}
          className="remove-item bg-red-500 text-white px-2 py-1 rounded"
        >
          삭제
        </button>
      </div>
    </div>
  );
};