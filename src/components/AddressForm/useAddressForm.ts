import { Address, COUNTRY } from "@/lib/types";
import { CartMachineContext } from "@/lib/xstate";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

type Data = {
  street: string;
  city: string;
  country: COUNTRY;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const useAddressForm = (): Data => {
  const cartRef = CartMachineContext.useActorRef();
  const { context } = CartMachineContext.useSelector(({ context }) => ({
    context,
  }));
  const [address, setAddress] = useState<Address>({
    street: "",
    city: "",
    country: COUNTRY.PL,
  });

  const { street, city, country } = address;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setAddress((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!street || !city || !country) {
      toast.error("Please fill all fields");
      return;
    }

    cartRef.send({ type: "ADD_ADDRESS", newAddress: address });
    toast.success("Address added");
  };

  useEffect(() => {
    const { address } = context;

    if (address) {
      setAddress(address);
    }
  }, [context]);

  return {
    street,
    city,
    country,
    handleSubmit,
    handleChange,
  };
};
