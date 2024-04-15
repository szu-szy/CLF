import { Address, COUNTRY, PAYMENT_METHOD, SHIPPING_METHOD } from "@/lib/types";
import { CartMachineContext } from "@/lib/xstate";
import { CartProduct } from "../NewProductList/useNewProductList";

type Data = {
  products: CartProduct[];
  address: Address | null;
  shippingMethod: SHIPPING_METHOD | null;
  paymentMethod: PAYMENT_METHOD | null;
  getFullyPrice: () => string;
  getCurrency: () => string;
};

export const useSummaryDetails = (): Data => {
  const { context } = CartMachineContext.useSelector(({ context }) => ({
    context,
  }));

  const { products, address, shippingMethod, paymentMethod } = context;

  const getFullyPrice = () => {
    let fullyPrice = 0;

    products.forEach((product) => {
      fullyPrice += product.price * product.count;
    });

    return (fullyPrice.toFixed(2) + " PLN").toString();
  };

  const getCurrency = () => (address?.country === COUNTRY.PL ? "PLN" : "USD");

  return {
    products,
    address,
    shippingMethod,
    paymentMethod,
    getFullyPrice,
    getCurrency,
  };
};
