import { ChangeEvent, useState } from "react";
import { CartMachineContext } from "@/lib/xstate";

export type Product = {
  id: string;
  name: string;
  price: number;
  isShippingRequired: boolean;
};

export type CartProduct = Product & {
  count: number;
};

type Data = {
  products: CartProduct[];
  isFormVisible: boolean;
  handleShippingInfo: (id: string) => void;
  handleCount: (event: ChangeEvent<HTMLInputElement>) => void;
  removeProduct: (id: string) => void;
  getFullyPrice: () => string;
  addProduct: (newProduct: Product) => void;
  toggleForm: () => void;
};

export const useNewProductList = (): Data => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const cartRef = CartMachineContext.useActorRef();
  const {
    context: { products },
  } = CartMachineContext.useSelector(({ context }) => ({
    context,
  }));

  const toggleForm = () => setIsFormVisible((prevState) => !prevState);

  const handleShippingInfo = (id: string) => {
    cartRef.send({ type: "UPDATE_PRODUCT_SHIPPING_INFO", productID: id });
  };

  const handleCount = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name: id } = event.target;
    cartRef.send({
      type: "UPDATE_PRODUCT_COUNT",
      productID: id,
      count: parseInt(value),
    });
  };

  const getFullyPrice = () => {
    let fullyPrice = 0;

    products.forEach((product) => {
      fullyPrice += product.price * product.count;
    });

    return (fullyPrice.toFixed(2) + " PLN").toString();
  };

  const addProduct = (newProduct: Product) => {
    cartRef.send({
      type: "ADD_PRODUCT",
      newProduct: {
        ...newProduct,
        id: (Math.random() * 10000).toString(),
        count: 1,
      },
    });
  };

  const removeProduct = (id: string) => {
    cartRef.send({ type: "REMOVE_PRODUCT", productID: id });
  };

  return {
    products,
    isFormVisible,
    toggleForm,
    addProduct,
    getFullyPrice,
    removeProduct,
    handleCount,
    handleShippingInfo,
  };
};
