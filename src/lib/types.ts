import { CartProduct } from "@/app/cart/page";

export enum SHIPPING_METHOD {
  BIKE = "Bike",
  STANDARD = "Standard",
}

export enum PAYMENT_METHOD {
  CASH = "Cash",
  CARD = "Card",
  CRYPTO = "Crypto",
}

export enum COUNTRY {
  PL = "PL",
  US = "US",
}

export type Address = {
  street: string;
  city: string;
  country: COUNTRY;
};

export type CartContext = {
  products: CartProduct[];
  address: Address;
  shippingMethod: SHIPPING_METHOD;
  paymentMethod: PAYMENT_METHOD;
};

export type CartEvents =
  | { type: "ADDRESS" }
  | { type: "SELECT_SHIPPING" }
  | { type: "SKIP_SHIPPING" }
  | { type: "SELECT_PAYMENT" }
  | { type: "SKIP_PAYMENT" }
  | { type: "COMPLETE" }
  | { type: "ADD_PRODUCT"; newProduct: CartProduct }
  | { type: "ADD_ADDRESS"; newAddress: Address }
  | { type: "ADD_SHIPPING_METHOD"; newShippingMethod: SHIPPING_METHOD }
  | { type: "ADD_PAYMENT_METHOD"; newPaymentMethod: PAYMENT_METHOD }
  | { type: "REMOVE_PRODUCT"; productID: string }
  | { type: "UPDATE_PRODUCT_SHIPPING_INFO"; productID: string }
  | { type: "UPDATE_PRODUCT_COUNT"; productID: string; count: number }
  | { type: "RESET" };
