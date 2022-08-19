export type Users = {
  id: number;
  name: string;
  cpf: number;
  birthDate: string;
  balance: number;
  extract: {
    valor: number;
    data: string;
    description: string;
  };
};



export const users: Users[] = [
  {
    id: 1,
    name: "Felix Effect",
    cpf: 12345678910,
    birthDate: "30-07-2000",
    balance: 1500,
    extract: {
      valor: 150,
      data: "10-06-2022",
      description: "saque conta corrente",
    },
  },
  {
    id: 2,
    name: "Ana State",
    cpf: 23456789101,
    birthDate: "25-03-2001",
    balance: 2000,
    extract: {
      valor: 390,
      data: "02-04-2022",
      description: "transferência bancaria",
    },
  },
  {
    id: 3,
    name: "Gomes UseForm",
    cpf: 34567891011,
    birthDate: "15-10-1999",
    balance: 2500,
    extract: {
      valor: 865,
      data: "19-08-2022",
      description: "pagamento supermercado jesus",
    },
  },
  {
    id: 4,
    name: "Luan Hooks",
    cpf: 45678910111,
    birthDate: "02-02-2002",
    balance: 3000,
    extract: {
      valor: 55,
      data: "10-05-2022",
      description: "pagamento petshop petlove",
    },
  },
  {
    id: 5,
    name: "Sabrina Packagejson",
    cpf: 56789101112,
    birthDate: "08-05-1995",
    balance: 15000,
    extract: { valor: 6, data: "01-01-2022", description: "sorveteria xing" },
  },
];
