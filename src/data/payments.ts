export type PaymentMethod = {
  name: string;
  icon: string;
};

export const paymentMethods: PaymentMethod[] = [
  {
    name: "Bank Transfer",
    icon: "/icons/Payments/Bank-Transfer.svg",
  },
  {
    name: "Wise",
    icon: "/icons/Payments/Wise.svg",
  },
];
