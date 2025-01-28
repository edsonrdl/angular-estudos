// Mock de uma lista de objetos do tipo "Produto"

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  estoque: number;
}

export const produtosMock: Produto[] = [
  {
    id: 1,
    nome: 'Notebook Dell XPS 13',
    preco: 9999.99,
    categoria: 'Eletrônicos',
    estoque: 10
  },
  {
    id: 2,
    nome: 'Cadeira Gamer XYZ',
    preco: 1499.49,
    categoria: 'Móveis',
    estoque: 25
  },
  {
    id: 3,
    nome: 'Smartphone Galaxy S23',
    preco: 4999.90,
    categoria: 'Eletrônicos',
    estoque: 5
  },
  {
    id: 4,
    nome: 'Livro: Clean Code',
    preco: 129.90,
    categoria: 'Livros',
    estoque: 50
  },
  {
    id: 5,
    nome: 'Mesa de Escritório',
    preco: 899.99,
    categoria: 'Móveis',
    estoque: 12
  }
];
