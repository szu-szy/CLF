import { Product } from "@/app/cart/page";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

type Data = {
  name: string;
  price: number;
  isShippingRequired: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type Props = {
  addProduct: (newProduct: Product) => void;
  toggleForm: () => void;
};

export const useProductForm = ({ addProduct, toggleForm }: Props): Data => {
  const [newProduct, setNewProduct] = useState<Product>({
    id: "",
    name: "",
    price: 0,
    isShippingRequired: false,
  });

  const { name, price, isShippingRequired } = newProduct;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;

    if (type === "number" && value.startsWith("0")) {
      toast.error("Please enter a positive number");
      return;
    }

    setNewProduct({
      ...newProduct,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isNewProductValid =
      newProduct.name.length >= 6 && newProduct.price >= 0;

    if (!isNewProductValid) {
      toast.error("Please fill all fields");
      return;
    }

    addProduct(newProduct);

    setNewProduct({
      id: "",
      name: "",
      price: 0,
      isShippingRequired: false,
    });

    toggleForm();
    toast.success("Product added");
  };
  return {
    name,
    price,
    isShippingRequired,
    handleChange,
    handleSubmit,
  };
};
