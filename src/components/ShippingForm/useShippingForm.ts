import { Address, SHIPPING_METHOD } from "@/lib/types";
import { CartMachineContext } from "@/lib/xstate";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

type Data = {
  address: Address | null;
  shippingMethod: SHIPPING_METHOD;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const useShippingForm = (): Data => {
  const [shippingMethod, setShippingMethod] = useState<SHIPPING_METHOD>(
    SHIPPING_METHOD.STANDARD
  );
  const cartRef = CartMachineContext.useActorRef();
  const {
    context: { address },
  } = CartMachineContext.useSelector(({ context }) => ({
    context,
  }));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShippingMethod(e.target.value as SHIPPING_METHOD);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!shippingMethod) {
      toast.error("Please fill all fields");
      return;
    }

    cartRef.send({
      type: "ADD_SHIPPING_METHOD",
      newShippingMethod: shippingMethod,
    });
    toast.success("Shipping method added");
  };
  return {
    address,
    shippingMethod,
    handleChange,
    handleSubmit,
  };
};
