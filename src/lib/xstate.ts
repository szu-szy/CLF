import { createActorContext } from "@xstate/react";
import { assign, createMachine } from "xstate";
import {
  Address,
  CartContext,
  CartEvents,
  PAYMENT_METHOD,
  SHIPPING_METHOD,
} from "./types";
import { CartProduct } from "@/components/NewProductList/useNewProductList";

export const cartMachine = createMachine({
  id: "cart",
  initial: "CART",
  schemas: {
    context: {} as CartContext,
    events: {} as CartEvents,
  },
  context: {
    products: [
      {
        id: "1",
        name: "Ciastka",
        price: 100,
        count: 1,
        isShippingRequired: true,
      },
      {
        id: "2",
        name: "Karmel",
        price: 200,
        count: 1,
        isShippingRequired: false,
      },
      {
        id: "3",
        name: "Czekolada",
        price: 300,
        count: 1,
        isShippingRequired: true,
      },
    ] as CartProduct[],
    address: null as Address | null,
    shippingMethod: null as SHIPPING_METHOD | null,
    paymentMethod: null as PAYMENT_METHOD | null,
  },
  states: {
    CART: {
      on: {
        ADDRESS: {
          target: "ADDRESSED",
        },
      },
    },

    ADDRESSED: {
      on: {
        CART: {
          target: "CART",
        },
        SELECT_SHIPPING: {
          target: "SHIPPING_SELECTED",
        },
        SKIP_SHIPPING: {
          target: "SHIPPING_SKIPPED",
        },
      },
    },

    SHIPPING_SELECTED: {
      on: {
        SELECT_PAYMENT: {
          target: "PAYMENT_SELECTED",
        },
        SKIP_PAYMENT: {
          target: "PAYMENT_SKIPPED",
        },
        ADDRESS: {
          target: "ADDRESSED",
        },
      },
    },

    SHIPPING_SKIPPED: {
      on: {
        SELECT_PAYMENT: {
          target: "PAYMENT_SELECTED",
        },
        SKIP_PAYMENT: {
          target: "PAYMENT_SKIPPED",
        },
        ADDRESS: {
          target: "ADDRESSED",
        },
      },
    },

    PAYMENT_SELECTED: {
      on: {
        COMPLETE: {
          target: "COMPLETED",
        },
        ADDRESS: {
          target: "ADDRESSED",
        },
        SELECT_SHIPPING: {
          target: "SHIPPING_SELECTED",
        },
        SKIP_SHIPPING: {
          target: "SHIPPING_SKIPPED",
        },
      },
    },

    PAYMENT_SKIPPED: {
      on: {
        COMPLETE: {
          target: "COMPLETED",
        },
        ADDRESS: {
          target: "ADDRESSED",
        },
        SELECT_SHIPPING: {
          target: "SHIPPING_SELECTED",
        },
        SKIP_SHIPPING: {
          target: "SHIPPING_SKIPPED",
        },
      },
    },
    COMPLETED: {
      on: {
        RESET_CART: {
          target: "CART",
        },
      },
    },
  },
  on: {
    ADD_PRODUCT: {
      actions: assign({
        products: ({ context, event }) => [
          ...context.products,
          event.newProduct,
        ],
      }),
    },
    ADD_ADDRESS: {
      actions: assign({
        address: ({ event }) => event.newAddress,
      }),
    },
    ADD_SHIPPING_METHOD: {
      actions: assign({
        shippingMethod: ({ event }) => event.newShippingMethod,
      }),
    },
    ADD_PAYMENT_METHOD: {
      actions: assign({
        paymentMethod: ({ event }) => event.newPaymentMethod,
      }),
    },
    REMOVE_PRODUCT: {
      actions: assign({
        products: ({ context, event }) =>
          context.products.filter((product) => product.id !== event.productID),
      }),
    },
    UPDATE_PRODUCT_SHIPPING_INFO: {
      actions: assign({
        products: ({ context, event }) =>
          context.products.map((product) => {
            if (product.id !== event.productID) return product;
            return {
              ...product,
              isShippingRequired: !product.isShippingRequired,
            };
          }),
      }),
    },
    UPDATE_PRODUCT_COUNT: {
      actions: assign({
        products: ({ context, event }) =>
          context.products.map((product) => {
            if (product.id !== event.productID) return product;
            return {
              ...product,
              count: event.count,
            };
          }),
      }),
    },
    RESET: {
      actions: assign({
        products: [],
        address: null,
        shippingMethod: null,
        paymentMethod: null,
      }),
    },
  },
});

export const CartMachineContext = createActorContext(cartMachine);
