import { create } from 'zustand';

const useStore = create((set) => ({
  cartItems: [],
  wishlist: [],

  // Savatga qo'shish
  addToCart: (product) => 
    set((state) => ({ cartItems: [...state.cartItems, product] })),

  // Sevimlilarga qo'shish/o'chirish
  toggleWishlist: (product) => 
    set((state) => {
      const isExist = state.wishlist.find((item) => item.id === product.id);
      if (isExist) {
        return { wishlist: state.wishlist.filter((item) => item.id !== product.id) };
      }
      return { wishlist: [...state.wishlist, product] };
    }),

  // Savatdan o'chirish
  removeFromCart: (id) => 
    set((state) => ({ cartItems: state.cartItems.filter(item => item.id !== id) })),
}));

export default useStore;