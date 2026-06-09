import { create } from "zustand";

export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];

  cartCount: () => number;

  cartTotal: () => number;

  addToCart: (
    product: CartItem
  ) => void;

  removeFromCart: (
    id: number
  ) => void;

  increaseQuantity: (
    id: number
  ) => void;

  decreaseQuantity: (
    id: number
  ) => void;

  clearCart: () => void;
}

const getInitialCart = (): CartItem[] => {
  if (
    typeof window === "undefined"
  )
    return [];

  try {
    const storedCart =
      localStorage.getItem("cart");

    return storedCart
      ? JSON.parse(storedCart)
      : [];
  } catch {
    return [];
  }
};

const saveCart = (
  cart: CartItem[]
) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );
};

export const useCartStore =
  create<CartStore>(
    (set, get) => ({
      cart: getInitialCart(),

      cartCount: () =>
        get().cart.reduce(
          (total, item) =>
            total + item.quantity,
          0
        ),

      cartTotal: () =>
        get().cart.reduce(
          (total, item) =>
            total +
            item.price *
              item.quantity,
          0
        ),

      addToCart: (product) =>
        set((state) => {
          let cart: CartItem[];

          const existing =
            state.cart.find(
              (item) =>
                item.id ===
                product.id
            );

          if (existing) {
            cart =
              state.cart.map(
                (item) =>
                  item.id ===
                  product.id
                    ? {
                        ...item,
                        quantity:
                          item.quantity +
                          1,
                      }
                    : item
              );
          } else {
            cart = [
              ...state.cart,
              {
                ...product,
                quantity: 1,
              },
            ];
          }

          saveCart(cart);

          return { cart };
        }),

      removeFromCart: (id) =>
        set((state) => {
          const cart =
            state.cart.filter(
              (item) =>
                item.id !== id
            );

          saveCart(cart);

          return { cart };
        }),

      increaseQuantity: (id) =>
        set((state) => {
          const cart =
            state.cart.map(
              (item) =>
                item.id === id
                  ? {
                      ...item,
                      quantity:
                        item.quantity +
                        1,
                    }
                  : item
            );

          saveCart(cart);

          return { cart };
        }),

      decreaseQuantity: (id) =>
        set((state) => {
          const cart =
            state.cart.map(
              (item) =>
                item.id === id
                  ? {
                      ...item,
                      quantity:
                        Math.max(
                          item.quantity -
                            1,
                          1
                        ),
                    }
                  : item
            );

          saveCart(cart);

          return { cart };
        }),

      clearCart: () =>
        set(() => {
          localStorage.removeItem(
            "cart"
          );

          return {
            cart: [],
          };
        }),
    })
  );