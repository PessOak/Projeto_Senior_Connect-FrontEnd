using System;

struct Menu 
{
    public string Nome;
    public string Descr;
    public double Preço;
    public bool Estoque;
}

class Program
{
    static void Main(string[] args)
    {
        Menu[] produtos = new Menu[3];
        int produtoIndex = 0;
        bool continuarCadastro = true;

        while (continuarCadastro && produtoIndex < produtos.Length)
        {
            Console.Write("Digite o nome do produto: ");
            produtos[produtoIndex].Nome = Console.ReadLine();

            Console.Write("Digite a descrição do produto: ");
            produtos[produtoIndex].Descr = Console.ReadLine();

            bool precoValido = false;
            while (!precoValido)
            {
                Console.Write("Digite o preço do produto: ");
                if (double.TryParse(Console.ReadLine(), out double preco))
                {
                    produtos[produtoIndex].Preço = preco;
                    precoValido = true;
                }
                else
                {
                    Console.WriteLine("\nEntrada inválida. Por favor, insira um número válido.\n");
                }
            }

            bool estoqueValido = false;
            while (!estoqueValido)
            {
                Console.Write("Possui o produto em estoque? (sim/nao): ");
                string entradaEstoque = Console.ReadLine().ToLower();
                if (entradaEstoque == "sim" || entradaEstoque == "nao")
                {
                    produtos[produtoIndex].Estoque = entradaEstoque == "sim";
                    estoqueValido = true;
                }
                else
                {
                    Console.WriteLine("\nEntrada inválida. Por favor, responda com 'sim' ou 'não'.\n");
                }
            }

            produtoIndex++;
            ListarProdutos(produtos);

            if (produtoIndex < produtos.Length)
            {
                bool continuarValido = false;
                while (!continuarValido)
                {
                    Console.Write("\nProsseguir com o cadastro de produtos? (sim/nao): ");
                    string resposta = Console.ReadLine().ToLower();
                    if (resposta == "sim" || resposta == "nao")
                    {
                        continuarCadastro = resposta == "sim";
                        continuarValido = true;
                    }
                    else
                    {
                        Console.WriteLine("\nEntrada inválida. Por favor, responda com 'sim' ou 'não'.\n");
                    }
                }
            }
        }

        Array.Sort(produtos, (x, y) => x.Preço.CompareTo(y.Preço));
        ListarProdutos(produtos);

        bool nomeValido = false;
        while (!nomeValido)
        {
            Console.Write("\nDigite o nome do produto que deseja buscar: ");
            string nome = Console.ReadLine();
            bool encontrado = BuscarProduto(produtos, nome);

            if (!encontrado)
            {
                Console.WriteLine("\nProduto não encontrado. Entrada inválida.\n");
            }
            else
            {
                nomeValido = true;
            }
        }

        Console.ReadKey();
    }

    static void ListarProdutos(Menu[] produtos) 
    {
        Console.Clear();
        foreach (Menu produto in produtos)
        {
            if (!string.IsNullOrEmpty(produto.Nome))
            {
                Console.WriteLine("Nome: " + produto.Nome);
                Console.WriteLine("Descrição: " + produto.Descr);
                Console.WriteLine("Preço: " + produto.Preço);
                Console.WriteLine("Tem Estoque?: " + (produto.Estoque ? "sim" : "não"));
                Console.WriteLine();
            }
        }
    }

    static bool BuscarProduto(Menu[] produtos, string nome)
    {
        Console.Clear();
        bool encontrado = false;
        foreach (Menu produto in produtos)
        {
            if (!string.IsNullOrEmpty(produto.Nome) && produto.Nome.Equals(nome, StringComparison.OrdinalIgnoreCase))
            {
                Console.WriteLine("Nome: " + produto.Nome);
                Console.WriteLine("Descrição: " + produto.Descr);
                Console.WriteLine("Preço: " + produto.Preço);
                Console.WriteLine("Estoque: " + (produto.Estoque ? "sim" : "não"));
                Console.WriteLine();
                encontrado = true;
                break; // Se encontrado, podemos sair do loop
            }
        }

        if (!encontrado)
        {
            Console.WriteLine("\nProduto não encontrado.\n");
        }

        return encontrado;
    }
}
