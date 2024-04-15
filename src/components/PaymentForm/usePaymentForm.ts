import { Address, PAYMENT_METHOD } from "@/lib/types";
import { CartMachineContext } from "@/lib/xstate";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

type Data = {
  address: Address | null;
  paymentMethod: PAYMENT_METHOD | null;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const usePaymentForm = (): Data => {
  const [paymentMethod, setPaymentMethod] = useState<PAYMENT_METHOD>(
    PAYMENT_METHOD.CARD
  );
  const { context } = CartMachineContext.useSelector(({ context }) => ({
    context,
  }));
  const { address } = context;
  const cartRef = CartMachineContext.useActorRef();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value as PAYMENT_METHOD);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!paymentMethod) {
      toast.error("Please fill all fields");
      return;
    }

    cartRef.send({
      type: "ADD_PAYMENT_METHOD",
      newPaymentMethod: paymentMethod,
    });
    toast.success("Shipping method added");
  };
  return {
    address,
    paymentMethod,
    handleChange,
    handleSubmit,
  };
};
