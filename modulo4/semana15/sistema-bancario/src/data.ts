export type Users = {
  id: number;
  name: string;
  cpf: number;
  birthDate: string;
  balance: number;
  extract:Extract[]
};

export type Extract = {
    valor: number;
    data: string;
    description: string;
}

export const users: Users[] = [
  {
    id: 1,
    name: "Felix Effect",
    cpf: 12345678910,
    birthDate: "30-7-2000",
    balance: 1500,
    extract: [{
      valor: 150,
      data: "10-6-2022",
      description: "saque conta corrente",
    }],
  },
  {
    id: 2,
    name: "Ana State",
    cpf: 23456789101,
    birthDate: "25-3-2001",
    balance: 2000,
    extract: [{
      valor: 390,
      data: "2-4-2022",
      description: "transferência bancaria",
    }],
  },
  {
    id: 3,
    name: "Gomes UseForm",
    cpf: 34567891011,
    birthDate: "15-10-1999",
    balance: 2500,
    extract: [{
      valor: 865,
      data: "19-8-2022",
      description: "pagamento supermercado jesus",
    }],
  },
  {
    id: 4,
    name: "Luan Hooks",
    cpf: 45678910111,
    birthDate: "2-2-2002",
    balance: 3000,
    extract: [{
      valor: 55,
      data: "10-5-2022",
      description: "pagamento petshop petlove",
    }],
  },
  {
    id: 5,
    name: "Sabrina Packagejson",
    cpf: 56789101112,
    birthDate: "8-5-1995",
    balance: 15000,
    extract: [{ valor: 6, data: "1-1-2022", description: "sorveteria xing" }],
  },
];
