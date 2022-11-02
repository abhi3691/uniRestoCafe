import create from 'zustand';

const useCartItemCount = create(set => ({
  cartItem: 0,
  addCartItem: () => set(state => ({cartItem: state.cartItem + 1})),
  removeCartItem: () => set(state => ({cartItem: state.cartItem - 1})),
}));

export default useCartItemCount;
