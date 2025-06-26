// Dados dos comandos SQL (mantido o original e estendido para atividades)
const sqlCommands = [
    // DQL (Consulta de Dados)
    {
        name: "SELECT",
        description: "Este é o comando mais básico e amplamente utilizado no SQL, sendo universal em diferentes bancos de dados. Ele permite extrair dados de uma ou mais tabelas.",
        isPopular: true,
        category: "Comandos DQL (Consulta de Dados)",
        tables: [
            {
                name: "Clientes",
                headers: ["ClienteID", "Nome", "Email", "Cidade", "Pais"],
                rows: [
                    ["1", "Ana Silva", "ana@email.com", "São Paulo", "Brasil"],
                    ["2", "Carlos Mendes", "carlos@email.com", "Rio de Janeiro", "Brasil"],
                    ["3", "Maria Pereira", "maria@email.com", "Lisboa", "Portugal"]
                ]
            },
            {
                name: "Produtos",
                headers: ["ProdutoID", "NomeProduto", "Categoria", "Preco"],
                rows: [
                    ["101", "Laptop", "Eletrônicos", "1200.00"],
                    ["102", "Mouse", "Eletrônicos", "25.00"],
                    ["103", "Teclado", "Eletrônicos", "75.00"],
                    ["104", "Monitor", "Eletrônicos", "300.00"],
                    ["105", "Impressora", "Periféricos", "150.00"]
                ]
            }
        ],
        examples: [
            {
                title: "Selecionar todas as colunas de uma tabela",
                code: "SELECT * FROM Clientes;",
                explanation: "Retorna todas as colunas e todas as linhas da tabela 'Clientes'.",
                resultTable: {
                    headers: ["ClienteID", "Nome", "Email", "Cidade", "Pais"],
                    rows: [
                        ["1", "Ana Silva", "ana@email.com", "São Paulo", "Brasil"],
                        ["2", "Carlos Mendes", "carlos@email.com", "Rio de Janeiro", "Brasil"],
                        ["3", "Maria Pereira", "maria@email.com", "Lisboa", "Portugal"]
                    ]
                }
            },
            {
                title: "Selecionar colunas específicas",
                code: "SELECT Nome, Email FROM Clientes;",
                explanation: "Seleciona apenas os valores das colunas 'Nome' e 'Email' da tabela 'Clientes'.",
                resultTable: {
                    headers: ["Nome", "Email"],
                    rows: [
                        ["Ana Silva", "ana@email.com"],
                        ["Carlos Mendes", "carlos@email.com"],
                        ["Maria Pereira", "maria@email.com"]
                    ]
                }
            },
            {
                title: "Selecionar com condição WHERE",
                code: "SELECT Nome, Cidade FROM Clientes WHERE Pais = 'Brasil';",
                explanation: "Seleciona o nome e a cidade dos clientes que são do 'Brasil'.",
                resultTable: {
                    headers: ["Nome", "Cidade"],
                    rows: [
                        ["Ana Silva", "São Paulo"],
                        ["Carlos Mendes", "Rio de Janeiro"]
                    ]
                }
            }
        ]
    },
    {
        name: "DISTINCT",
        description: "Utilizado em conjunto com o SELECT, o DISTINCT serve para remover dados duplicados, retornando apenas os valores únicos de uma coluna.",
        isPopular: true,
        category: "Comandos DQL (Consulta de Dados)",
         tables: [
            {
                name: "Produtos",
                headers: ["ProdutoID", "NomeProduto", "Categoria", "Preco"],
                rows: [
                    ["101", "Laptop", "Eletrônicos", "1200.00"],
                    ["102", "Mouse", "Eletrônicos", "25.00"],
                    ["103", "Teclado", "Eletrônicos", "75.00"],
                    ["104", "Monitor", "Eletrônicos", "300.00"],
                    ["105", "Impressora", "Periféricos", "150.00"]
                ]
            }
        ],
        examples: [
            {
                title: "Retornar apenas categorias únicas",
                code: "SELECT DISTINCT Categoria FROM Produtos;",
                explanation: "Retorna apenas os valores únicos da coluna 'Categoria' na tabela 'Produtos'.",
                resultTable: {
                    headers: ["Categoria"],
                    rows: [
                        ["Eletrônicos"],
                        ["Periféricos"]
                    ]
                }
            }
        ]
    },
    {
        name: "WHERE",
        description: "Permite filtrar informações específicas em uma tabela, aplicando condições. É comum o uso de operadores lógicos como AND e OR, e operadores de comparação como >, <, >=, <=, =, e !=.",
        isPopular: true,
        category: "Comandos DQL (Consulta de Dados)",
        tables: [
            {
                name: "Pessoas",
                headers: ["ID", "Nome", "Sobrenome", "Idade", "Cidade"],
                rows: [
                    ["1", "João", "Silva", "30", "São Paulo"],
                    ["2", "Maria", "Miller", "25", "Lisboa"],
                    ["3", "Pedro", "Miller", "35", "Porto"],
                    ["4", "Ana", "Souza", "22", "São Paulo"]
                ]
            },
            {
                name: "Produtos",
                headers: ["ProdutoID", "NomeProduto", "Categoria", "Preco"],
                rows: [
                    ["101", "Laptop", "Eletrônicos", "1200.00"],
                    ["102", "Mouse", "Acessórios", "25.00"],
                    ["103", "Teclado", "Acessórios", "75.00"]
                ]
            }
        ],
        examples: [
            {
                title: "Filtrar por sobrenome específico",
                code: "SELECT * FROM Pessoas WHERE Sobrenome = 'Miller';",
                explanation: "Seleciona todas as colunas de 'Pessoas' onde o 'Sobrenome' é 'Miller'.",
                resultTable: {
                    headers: ["ID", "Nome", "Sobrenome", "Idade", "Cidade"],
                    rows: [
                        ["2", "Maria", "Miller", "25", "Lisboa"],
                        ["3", "Pedro", "Miller", "35", "Porto"]
                    ]
                }
            },
            {
                title: "Filtrar com AND e operador de comparação",
                code: "SELECT Nome, Idade FROM Pessoas WHERE Idade > 28 AND Cidade = 'São Paulo';",
                explanation: "Seleciona pessoas maiores de 28 anos que moram em São Paulo.",
                resultTable: {
                    headers: ["Nome", "Idade"],
                    rows: [
                        ["João", "30"]
                    ]
                }
            },
            {
                title: "Filtrar com OR",
                code: "SELECT NomeProduto, Preco FROM Produtos WHERE Categoria = 'Eletrônicos' OR Preco > 100;",
                explanation: "Seleciona produtos que são da categoria 'Eletrônicos' OU que têm preço superior a 100.",
                resultTable: {
                    headers: ["NomeProduto", "Preco"],
                    rows: [
                        ["Laptop", "1200.00"]
                    ]
                }
            }
        ]
    },
    {
        name: "BETWEEN",
        description: "Usado para encontrar valores que estejam dentro de um intervalo (mínimo e máximo), incluindo os próprios limites. É uma alternativa mais legível a uma combinação de >= e <=. Pode ser aplicado a números e datas. A palavra-chave NOT pode ser usada antes de BETWEEN para encontrar valores que não estejam no intervalo.",
        isPopular: true,
        category: "Comandos DQL (Consulta de Dados)",
        tables: [
            {
                name: "Produtos",
                headers: ["ProdutoID", "NomeProduto", "Preco"],
                rows: [
                    ["1", "TV", "800.00"],
                    ["2", "Geladeira", "1300.00"],
                    ["3", "Máquina de Lavar", "1600.00"],
                    ["4", "Micro-ondas", "250.00"]
                ]
            },
            {
                name: "Pedidos",
                headers: ["PedidoID", "DataPedido", "ValorTotal"],
                rows: [
                    ["P001", "2023-01-15", "500.00"],
                    ["P002", "2023-02-20", "750.00"],
                    ["P003", "2023-03-05", "1200.00"],
                    ["P004", "2023-04-10", "300.00"]
                ]
            }
        ],
        examples: [
            {
                title: "Filtrar preços em um intervalo",
                code: "SELECT * FROM Produtos WHERE Preco BETWEEN 1000 AND 1500;",
                explanation: "Seleciona produtos com preços entre 1000 e 1500 (inclusive).",
                resultTable: {
                    headers: ["ProdutoID", "NomeProduto", "Preco"],
                    rows: [
                        ["2", "Geladeira", "1300.00"]
                    ]
                }
            },
            {
                title: "Filtrar datas fora de um intervalo",
                code: "SELECT * FROM Pedidos WHERE DataPedido NOT BETWEEN '2023-01-01' AND '2023-03-31';",
                explanation: "Seleciona pedidos feitos fora do primeiro trimestre de 2023.",
                resultTable: {
                    headers: ["PedidoID", "DataPedido", "ValorTotal"],
                    rows: [
                        ["P004", "2023-04-10", "300.00"]
                    ]
                }
            }
        ]
    },
    {
        name: "IN",
        description: "Verifica se um valor corresponde a qualquer valor em uma lista. É mais eficiente e limpo do que usar múltiplas condições OR. Também pode ser combinado com NOT.",
        isPopular: true,
        category: "Comandos DQL (Consulta de Dados)",
        tables: [
            {
                name: "Produtos",
                headers: ["ProdutoID", "NomeProduto", "Cor"],
                rows: [
                    ["1", "Camisa", "Azul"],
                    ["2", "Calça", "Vermelho"],
                    ["3", "Meia", "Preto"],
                    ["4", "Jaqueta", "Azul"]
                ]
            },
            {
                name: "Clientes",
                headers: ["ClienteID", "Nome", "Pais"],
                rows: [
                    ["1", "João", "Brasil"],
                    ["2", "Maria", "Portugal"],
                    ["3", "Pedro", "Espanha"]
                ]
            }
        ],
        examples: [
            {
                title: "Filtrar por lista de cores",
                code: "SELECT * FROM Produtos WHERE Cor IN ('Azul', 'Vermelho');",
                explanation: "Seleciona produtos que são 'Azul' ou 'Vermelho'.",
                resultTable: {
                    headers: ["ProdutoID", "NomeProduto", "Cor"],
                    rows: [
                        ["1", "Camisa", "Azul"],
                        ["2", "Calça", "Vermelho"],
                        ["4", "Jaqueta", "Azul"]
                    ]
                }
            },
            {
                title: "Filtrar por lista de países (NOT IN)",
                code: "SELECT * FROM Clientes WHERE Pais NOT IN ('Brasil', 'Portugal');",
                explanation: "Seleciona clientes que NÃO são do 'Brasil' ou 'Portugal'.",
                resultTable: {
                    headers: ["ClienteID", "Nome", "Pais"],
                    rows: [
                        ["3", "Pedro", "Espanha"]
                    ]
                }
            }
        ]
    },
    {
        name: "LIKE",
        description: "Utilizado para buscar dados que correspondam a um padrão específico. Usa caracteres curinga: % (percentual - zero ou mais caracteres) e _ (underscore - um único caractere). No SQL Server, o LIKE é case-insensitive (não diferencia maiúsculas de minúsculas).",
        isPopular: true,
        category: "Comandos DQL (Consulta de Dados)",
        tables: [
            {
                name: "Palavras",
                headers: ["ID", "Palavra"],
                rows: [
                    ["1", "ovelha"],
                    ["2", "ovo"],
                    ["3", "bola"],
                    ["4", "carro"]
                ]
            },
             {
                name: "Nomes",
                headers: ["ID", "Nome"],
                rows: [
                    ["1", "Joaquim"],
                    ["2", "Tomaz"],
                    ["3", "Fantom"]
                ]
            },
            {
                name: "Textos",
                headers: ["ID", "Texto"],
                rows: [
                    ["1", "Essa é uma frase de teste."],
                    ["2", "Acesso e segurança."],
                    ["3", "Processamento de dados."]
                ]
            },
             {
                name: "Letras",
                headers: ["ID", "Sequencia"],
                rows: [
                    ["1", "olho"],
                    ["2", "onda"],
                    ["3", "azul"]
                ]
            }
        ],
        examples: [
            {
                title: "Nomes que começam com 'ov'",
                code: "SELECT * FROM Palavras WHERE Palavra LIKE 'ov%';",
                explanation: "Encontra palavras que começam com 'ov' (ex: 'ovelha', 'ovo').",
                resultTable: {
                    headers: ["ID", "Palavra"],
                    rows: [
                        ["1", "ovelha"],
                        ["2", "ovo"]
                    ]
                }
            },
            {
                title: "Nomes que terminam com 'tom'",
                code: "SELECT * FROM Nomes WHERE Nome LIKE '%tom';",
                explanation: "Encontra nomes que terminam com 'tom' (ex: 'Autom', 'Phantom').",
                resultTable: {
                    headers: ["ID", "Nome"],
                    rows: [
                        ["2", "Tomaz"],
                        ["3", "Fantom"]
                    ]
                }
            },
            {
                title: "Nomes que contêm 'essa'",
                code: "SELECT * FROM Textos WHERE Texto LIKE '%essa%';",
                explanation: "Encontra textos que contêm a sequência 'essa'.",
                resultTable: {
                    headers: ["ID", "Texto"],
                    rows: [
                        ["1", "Essa é uma frase de teste."]
                    ]
                }
            },
            {
                title: "Padrão de dois caracteres (ex: 'o_')",
                code: "SELECT * FROM Letras WHERE Sequencia LIKE 'o_';",
                explanation: "Encontra sequências de dois caracteres que começam com 'o' (ex: 'ol', 'on').",
                resultTable: {
                    headers: ["ID", "Sequencia"],
                    rows: [
                        ["1", "olho"],
                        ["2", "onda"]
                    ]
                }
            }
        ]
    },
    {
        name: "TOP",
        description: "Utilizado para limitar a quantidade de dados retornados por um comando SELECT. A sintaxe pode variar entre bancos de dados (e.g., LIMIT no MySQL, ROWNUM no Oracle).",
        isPopular: true,
        category: "Comandos DQL (Consulta de Dados)",
        tables: [
            {
                name: "Pedidos",
                headers: ["PedidoID", "ClienteID", "Valor", "DataPedido"],
                rows: [
                    ["P001", "C001", "150.00", "2023-01-10"],
                    ["P002", "C002", "200.00", "2023-01-11"],
                    ["P003", "C001", "120.00", "2023-01-12"],
                    ["P004", "C003", "300.00", "2023-01-13"],
                    ["P005", "C002", "80.00", "2023-01-14"],
                    ["P006", "C004", "500.00", "2023-01-15"],
                    ["P007", "C001", "90.00", "2023-01-16"],
                    ["P008", "C005", "250.00", "2023-01-17"],
                    ["P009", "C003", "180.00", "2023-01-18"],
                    ["P010", "C004", "70.00", "2023-01-19"],
                    ["P011", "C002", "400.00", "2023-01-20"]
                ]
            }
        ],
        examples: [
            {
                title: "Retornar os 5 pedidos mais recentes (SQL Server)",
                code: "SELECT TOP 5 * FROM Pedidos ORDER BY DataPedido DESC;",
                explanation: "Retorna as 5 linhas mais recentes da tabela 'Pedidos', ordenadas pela 'DataPedido' em ordem decrescente.",
                resultTable: {
                    headers: ["PedidoID", "ClienteID", "Valor", "DataPedido"],
                    rows: [
                        ["P011", "C002", "400.00", "2023-01-20"],
                        ["P010", "C004", "70.00", "2023-01-19"],
                        ["P009", "C003", "180.00", "2023-01-18"],
                        ["P008", "C005", "250.00", "2023-01-17"],
                        ["P007", "C001", "90.00", "2023-01-16"]
                    ]
                }
            },
            {
                title: "Retornar os 3 pedidos mais caros (MySQL)",
                code: "SELECT * FROM Pedidos ORDER BY Valor DESC LIMIT 3;",
                explanation: "Retorna as 3 linhas da tabela 'Pedidos' com os maiores valores, ordenadas pelo 'Valor' em ordem decrescente (sintaxe MySQL).",
                resultTable: {
                    headers: ["PedidoID", "ClienteID", "Valor", "DataPedido"],
                    rows: [
                        ["P006", "C004", "500.00", "2023-01-15"],
                        ["P011", "C002", "400.00", "2023-01-20"],
                        ["P004", "C003", "300.00", "2023-01-13"]
                    ]
                }
            }
        ]
    },
    {
        name: "ORDER BY",
        description: "Permite ordenar os resultados de uma consulta em ordem crescente (ASC) ou decrescente (DESC) com base em uma ou mais colunas.",
        isPopular: true,
        category: "Comandos DQL (Consulta de Dados)",
        tables: [
            {
                name: "Pessoas",
                headers: ["ID", "Nome", "Sobrenome", "Idade"],
                rows: [
                    ["1", "João", "Silva", "30"],
                    ["2", "Maria", "Miller", "25"],
                    ["3", "Pedro", "Miller", "35"],
                    ["4", "Ana", "Souza", "22"]
                ]
            },
            {
                name: "Funcionarios",
                headers: ["ID", "Nome", "Salario"],
                rows: [
                    ["101", "Carla", "50000.00"],
                    ["102", "Bruno", "75000.00"],
                    ["103", "Diana", "45000.00"]
                ]
            },
            {
                name: "Usuarios",
                headers: ["UsuarioID", "Nome", "Sobrenome", "Cidade"],
                rows: [
                    ["U001", "Mariana", "Santos", "Porto"],
                    ["U002", "Ricardo", "Costa", "Lisboa"],
                    ["U003", "Sofia", "Almeida", "Porto"]
                ]
            }
        ],
        examples: [
            {
                title: "Ordenar por sobrenome em ordem decrescente",
                code: "SELECT * FROM Pessoas ORDER BY Sobrenome DESC;",
                explanation: "Retorna todas as pessoas, ordenadas pelo sobrenome do Z ao A.",
                resultTable: {
                    headers: ["ID", "Nome", "Sobrenome", "Idade"],
                    rows: [
                        ["4", "Ana", "Souza", "22"],
                        ["1", "João", "Silva", "30"],
                        ["2", "Maria", "Miller", "25"],
                        ["3", "Pedro", "Miller", "35"]
                    ]
                }
            },
            {
                title: "Ordenar por salário em ordem crescente (padrão)",
                code: "SELECT Nome, Salario FROM Funcionarios ORDER BY Salario;",
                explanation: "Seleciona nome e salário dos funcionários, ordenando pelo salário do menor para o maior.",
                resultTable: {
                    headers: ["Nome", "Salario"],
                    rows: [
                        ["Diana", "45000.00"],
                        ["Carla", "50000.00"],
                        ["Bruno", "75000.00"]
                    ]
                }
            },
            {
                title: "Ordenar por múltiplas colunas",
                code: "SELECT Nome, Sobrenome, Cidade FROM Usuarios ORDER BY Cidade ASC, Sobrenome ASC;",
                explanation: "Ordena usuários primeiramente pela cidade (ASC) e, em seguida, pelo sobrenome (ASC) para usuários na mesma cidade.",
                resultTable: {
                    headers: ["Nome", "Sobrenome", "Cidade"],
                    rows: [
                        ["Ricardo", "Costa", "Lisboa"],
                        ["Sofia", "Almeida", "Porto"],
                        ["Mariana", "Santos", "Porto"]
                    ]
                }
            }
        ]
    },
    {
        name: "AS",
        description: "Permite renomear uma coluna ou o resultado de uma função de agregação (criar um 'apelido') para melhorar a legibilidade.",
        isPopular: true,
        category: "Comandos DQL (Consulta de Dados)",
        tables: [
            {
                name: "Produtos",
                headers: ["ProdutoID", "NomeProduto", "ListPrice"],
                rows: [
                    ["1", "Tablet", "300.00"],
                    ["2", "Smartphone", "700.00"]
                ]
            }
        ],
        examples: [
            {
                title: "Renomear coluna de preço",
                code: "SELECT ListPrice AS PrecoMedio FROM Produtos;",
                explanation: "Seleciona a coluna 'ListPrice' e a exibe como 'PrecoMedio' no resultado.",
                resultTable: {
                    headers: ["PrecoMedio"],
                    rows: [
                        ["300.00"],
                        ["700.00"]
                    ]
                }
            },
            {
                title: "Renomear resultado de COUNT",
                code: "SELECT COUNT(ClienteID) AS NumeroDeClientes FROM Clientes;",
                explanation: "Conta os clientes e exibe o resultado com o apelido 'NumeroDeClientes'.",
                tables: [
                    {
                        name: "Clientes",
                        headers: ["ClienteID", "Nome"],
                        rows: [
                            ["1", "Joana"],
                            ["2", "Felipe"]
                        ]
                    }
                ],
                resultTable: {
                    headers: ["NumeroDeClientes"],
                    rows: [
                        ["2"]
                    ]
                }
            }
        ]
    },
    {
        name: "Subqueries (Subselect)",
        description: "Uma instrução SELECT aninhada dentro de outra instrução SELECT. Permitem criar consultas mais dinâmicas e poderosas, por exemplo, usando um resultado de uma consulta como filtro para outra.",
        isPopular: true,
        category: "Comandos DQL (Consulta de Dados)",
        tables: [
            {
                name: "Produtos",
                headers: ["ProdutoID", "NomeProduto", "Preco"],
                rows: [
                    ["1", "Câmera", "500.00"],
                    ["2", "Fone de ouvido", "100.00"],
                    ["3", "Smartwatch", "450.00"],
                    ["4", "Drone", "600.00"]
                ]
            }
        ],
        examples: [
            {
                title: "Selecionar produtos mais caros que a média",
                code: "SELECT NomeProduto, Preco\nFROM Produtos\nWHERE Preco > (SELECT AVG(Preco) FROM Produtos);",
                explanation: "Seleciona produtos cujo preço é maior que o preço médio de todos os produtos (média de 412.50).",
                resultTable: {
                    headers: ["NomeProduto", "Preco"],
                    rows: [
                        ["Câmera", "500.00"],
                        ["Smartwatch", "450.00"],
                        ["Drone", "600.00"]
                    ]
                }
            }
        ]
    },
    {
        name: "DATEPART",
        description: "Uma função para extrair diferentes partes de uma data (como ano, mês, dia, etc.) de uma coluna do tipo data/hora.",
        isPopular: true,
        category: "Comandos DQL (Consulta de Dados)",
        tables: [
            {
                name: "Pedidos",
                headers: ["PedidoID", "OrderDate"],
                rows: [
                    ["1", "2023-01-15"],
                    ["2", "2023-05-20"],
                    ["3", "2024-02-10"]
                ]
            },
            {
                name: "Pessoas",
                headers: ["PessoaID", "DataNascimento"],
                rows: [
                    ["1", "1990-03-22"],
                    ["2", "1985-11-01"]
                ]
            }
        ],
        examples: [
            {
                title: "Extrair o mês de uma data de pedido",
                code: "SELECT DATEPART(month, OrderDate) AS Mes FROM Pedidos;",
                explanation: "Retorna o número do mês da coluna 'OrderDate'.",
                resultTable: {
                    headers: ["Mes"],
                    rows: [
                        ["1"],
                        ["5"],
                        ["2"]
                    ]
                }
            },
            {
                title: "Extrair o ano de uma data",
                code: "SELECT DATEPART(year, DataNascimento) AS AnoNascimento FROM Pessoas;",
                explanation: "Retorna o ano da coluna 'DataNascimento'.",
                resultTable: {
                    headers: ["AnoNascimento"],
                    rows: [
                        ["1990"],
                        ["1985"]
                    ]
                }
            }
        ]
    },
    {
        name: "CASE WHEN",
        description: "Permite definir diferentes saídas para uma coluna com base em condições. Funciona como uma estrutura IF-THEN-ELSE no SQL.",
        isPopular: true,
        category: "Comandos DQL (Consulta de Dados)",
        tables: [
            {
                name: "Produtos",
                headers: ["ProdutoID", "NomeProduto", "Preco"],
                rows: [
                    ["101", "Laptop", "1200.00"],
                    ["102", "Mouse", "25.00"],
                    ["103", "Teclado", "75.00"],
                    ["104", "Monitor", "300.00"],
                    ["105", "Impressora", "150.00"]
                ]
            },
             {
                name: "Pedidos",
                headers: ["PedidoID", "Status"],
                rows: [
                    ["P001", "Processando"],
                    ["P002", "Concluído"],
                    ["P003", "Pendente"],
                    ["P004", "Cancelado"]
                ]
            }
        ],
        examples: [
            {
                title: "Categorizar produtos por preço",
                code: "SELECT NomeProduto, Preco,\n       CASE\n           WHEN Preco < 100 THEN 'Barato'\n           WHEN Preco >= 100 AND Preco < 500 THEN 'Médio'\n           ELSE 'Caro'\n       END AS FaixaPreco\nFROM Produtos;",
                explanation: "Cria uma nova coluna 'FaixaPreco' que classifica os produtos em 'Barato', 'Médio' ou 'Caro' com base no seu preço.",
                resultTable: {
                    headers: ["NomeProduto", "Preco", "FaixaPreco"],
                    rows: [
                        ["Laptop", "1200.00", "Caro"],
                        ["Mouse", "25.00", "Barato"],
                        ["Teclado", "75.00", "Barato"],
                        ["Monitor", "300.00", "Médio"],
                        ["Impressora", "150.00", "Médio"]
                    ]
                }
            },
            {
                title: "Exibir status de pedido com mensagens personalizadas",
                code: "SELECT PedidoID,\n       CASE Status\n           WHEN 'Processando' THEN 'Seu pedido está sendo preparado.'\n           WHEN 'Concluído' THEN 'Seu pedido foi entregue!'\n           WHEN 'Cancelado' THEN 'Seu pedido foi cancelado.'\n           ELSE 'Status desconhecido'\n       END AS MensagemStatus\nFROM Pedidos;",
                explanation: "Converte o status do pedido em uma mensagem mais amigável para o usuário.",
                resultTable: {
                    headers: ["PedidoID", "MensagemStatus"],
                    rows: [
                        ["P001", "Seu pedido está sendo preparado."],
                        ["P002", "Seu pedido foi entregue!"],
                        ["P003", "Status desconhecido"],
                        ["P004", "Seu pedido foi cancelado."]
                    ]
                }
            }
        ]
    },

    // JOINs (Mantido como categoria separada pela estrutura fornecida)
    {
        name: "JOIN",
        description: "Usado para combinar linhas de duas ou mais tabelas com base em uma coluna relacionada entre elas.",
        isPopular: true,
        category: "JOINs",
        tables: [
            {
                name: "Clientes",
                headers: ["ClienteID", "NomeCliente"],
                rows: [
                    ["C001", "Ana Silva"],
                    ["C002", "Bruno Costa"],
                    ["C003", "Carla Dias"]
                ]
            },
            {
                name: "Pedidos",
                headers: ["PedidoID", "ClienteID", "ProdutoID"],
                rows: [
                    ["P001", "C001", "PROD001"],
                    ["P002", "C002", "PROD002"],
                    ["P003", "C001", "PROD003"],
                    ["P004", "C004", "PROD004"] // Cliente C004 não existe na tabela Clientes
                ]
            },
            {
                name: "Produtos",
                headers: ["ProdutoID", "NomeProduto"],
                rows: [
                    ["PROD001", "Laptop"],
                    ["PROD002", "Mouse"],
                    ["PROD003", "Teclado"],
                    ["PROD005", "Monitor"] // Produto PROD005 não existe na tabela Pedidos
                ]
            }
        ],
        examples: [
            {
                title: "INNER JOIN (Junção Interna)",
                code: "SELECT Pedidos.PedidoID, Clientes.NomeCliente\nFROM Pedidos\nINNER JOIN Clientes ON Pedidos.ClienteID = Clientes.ClienteID;",
                explanation: "Retorna apenas as linhas que possuem correspondência em ambas as tabelas (interseção dos dados).",
                resultTable: {
                    headers: ["PedidoID", "NomeCliente"],
                    rows: [
                        ["P001", "Ana Silva"],
                        ["P002", "Bruno Costa"],
                        ["P003", "Ana Silva"]
                    ]
                }
            },
            {
                title: "LEFT OUTER JOIN (ou LEFT JOIN)",
                code: "SELECT Clientes.NomeCliente, Pedidos.PedidoID\nFROM Clientes\nLEFT JOIN Pedidos ON Clientes.ClienteID = Pedidos.ClienteID;",
                explanation: "Retorna todos os registros da tabela à esquerda (Clientes) e os registros correspondentes da tabela à direita. Se não houver correspondência na tabela da direita, preenche com NULL.",
                resultTable: {
                    headers: ["NomeCliente", "PedidoID"],
                    rows: [
                        ["Ana Silva", "P001"],
                        ["Ana Silva", "P003"],
                        ["Bruno Costa", "P002"],
                        ["Carla Dias", null]
                    ]
                }
            },
            {
                title: "RIGHT OUTER JOIN (ou RIGHT JOIN)",
                code: "SELECT Pedidos.PedidoID, Produtos.NomeProduto\nFROM Pedidos\nRIGHT JOIN Produtos ON Pedidos.ProdutoID = Produtos.ProdutoID;",
                explanation: "Similar ao LEFT JOIN, mas retorna todos os registros da tabela à direita (Produtos) e os correspondentes da tabela à esquerda. Se não houver correspondência na tabela da esquerda, preenche com NULL.",
                resultTable: {
                    headers: ["PedidoID", "NomeProduto"],
                    rows: [
                        ["P001", "Laptop"],
                        ["P002", "Mouse"],
                        ["P003", "Teclado"],
                        [null, "Monitor"]
                    ]
                }
            }
        ]
    },
    {
        name: "UNION",
        description: "Combina os resultados de duas ou mais instruções SELECT em um único conjunto de resultados. Por padrão, o UNION remove linhas duplicadas. As instruções SELECT combinadas devem ter o mesmo número de colunas, na mesma ordem e com tipos de dados compatíveis.",
        isPopular: true,
        category: "JOINs", // Embora não seja um JOIN, a união de resultados é conceitualmente próxima.
        tables: [
            {
                name: "Clientes",
                headers: ["Nome", "Cidade"],
                rows: [
                    ["Ana", "São Paulo"],
                    ["João", "Rio de Janeiro"],
                    ["Maria", "São Paulo"]
                ]
            },
            {
                name: "Fornecedores",
                headers: ["NomeFornecedor", "Cidade"],
                rows: [
                    ["Empresa A", "São Paulo"],
                    ["Empresa B", "Belo Horizonte"],
                    ["João", "Rio de Janeiro"] // Duplicata proposital
                ]
            }
        ],
        examples: [
            {
                title: "Combinar clientes e fornecedores",
                code: "SELECT Nome, Cidade FROM Clientes\nUNION\nSELECT NomeFornecedor, Cidade FROM Fornecedores;",
                explanation: "Combina nomes e cidades de clientes e fornecedores, removendo duplicatas.",
                resultTable: {
                    headers: ["Nome", "Cidade"],
                    rows: [
                        ["Ana", "São Paulo"],
                        ["João", "Rio de Janeiro"],
                        ["Maria", "São Paulo"],
                        ["Empresa A", "São Paulo"],
                        ["Empresa B", "Belo Horizonte"]
                    ]
                }
            }
        ]
    },
    {
        name: "UNION ALL",
        description: "Similar ao UNION, mas inclui todas as linhas, mesmo as duplicadas.",
        isPopular: true,
        category: "JOINs", // Embora não seja um JOIN, a união de resultados é conceitualmente próxima.
        tables: [
             {
                name: "Clientes",
                headers: ["Nome", "Cidade"],
                rows: [
                    ["Ana", "São Paulo"],
                    ["João", "Rio de Janeiro"],
                    ["Maria", "São Paulo"]
                ]
            },
            {
                name: "Fornecedores",
                headers: ["NomeFornecedor", "Cidade"],
                rows: [
                    ["Empresa A", "São Paulo"],
                    ["Empresa B", "Belo Horizonte"],
                    ["João", "Rio de Janeiro"] // Duplicata proposital
                ]
            }
        ],
        examples: [
            {
                title: "Combinar clientes e fornecedores (incluindo duplicatas)",
                code: "SELECT Nome, Cidade FROM Clientes\nUNION ALL\nSELECT NomeFornecedor, Cidade FROM Fornecedores;",
                explanation: "Combina nomes e cidades de clientes e fornecedores, mantendo todas as entradas, incluindo duplicatas.",
                resultTable: {
                    headers: ["Nome", "Cidade"],
                    rows: [
                        ["Ana", "São Paulo"],
                        ["João", "Rio de Janeiro"],
                        ["Maria", "São Paulo"],
                        ["Empresa A", "São Paulo"],
                        ["Empresa B", "Belo Horizonte"],
                        ["João", "Rio de Janeiro"]
                    ]
                }
            }
        ]
    },
    {
        name: "SELF-JOIN",
        description: "Uma forma de JOIN em que uma tabela é unida a si mesma. É útil para comparar linhas dentro da mesma tabela. Requer o uso de apelidos (aliases) para a tabela.",
        isPopular: true,
        category: "JOINs",
        tables: [
            {
                name: "Funcionarios",
                headers: ["ID", "Nome", "Departamento"],
                rows: [
                    ["1", "Ana", "Vendas"],
                    ["2", "Bruno", "Marketing"],
                    ["3", "Carla", "Vendas"],
                    ["4", "Daniel", "RH"]
                ]
            }
        ],
        examples: [
            {
                title: "Encontrar funcionários no mesmo departamento",
                code: "SELECT A.Nome AS Funcionario1, B.Nome AS Funcionario2, A.Departamento\nFROM Funcionarios A, Funcionarios B\nWHERE A.Departamento = B.Departamento AND A.ID <> B.ID;",
                explanation: "Encontra pares de funcionários que trabalham no mesmo departamento, excluindo a comparação de um funcionário consigo mesmo.",
                resultTable: {
                    headers: ["Funcionario1", "Funcionario2", "Departamento"],
                    rows: [
                        ["Ana", "Carla", "Vendas"],
                        ["Carla", "Ana", "Vendas"]
                    ]
                }
            }
        ]
    },

    // Funções de Agregação
    {
        name: "COUNT()",
        description: "Uma função de agregação que retorna o número de linhas que atendem a uma condição definida.",
        isPopular: true,
        category: "Funções de Agregação",
        tables: [
            {
                name: "Produtos",
                headers: ["ProdutoID", "NomeProduto"],
                rows: [
                    ["1", "TV"],
                    ["2", "Geladeira"],
                    ["3", "Máquina de Lavar"]
                ]
            },
            {
                name: "Clientes",
                headers: ["ClienteID", "Nome", "Cidade"],
                rows: [
                    ["1", "Alice", "São Paulo"],
                    ["2", "Bob", "Rio de Janeiro"],
                    ["3", "Charlie", "São Paulo"],
                    ["4", "Diana", "Curitiba"]
                ]
            }
        ],
        examples: [
            {
                title: "Contar todas as linhas",
                code: "SELECT COUNT(*) FROM Produtos;",
                explanation: "Retorna o número total de produtos na tabela.",
                resultTable: {
                    headers: ["COUNT(*)"],
                    rows: [["3"]]
                }
            }
        ]
    },
    {
        name: "SUM()",
        description: "Uma função de agregação que calcula a soma total dos valores em uma coluna numérica.",
        isPopular: true,
        category: "Funções de Agregação",
        tables: [
            {
                name: "Produtos",
                headers: ["ProdutoID", "Preco"],
                rows: [
                    ["1", "10.00"],
                    ["2", "20.50"],
                    ["3", "15.00"]
                ]
            },
            {
                name: "Vendas",
                headers: ["VendaID", "DataVenda", "ValorVenda"],
                rows: [
                    ["V001", "2023-01-05", "100.00"],
                    ["V002", "2023-01-10", "150.00"],
                    ["V003", "2023-02-01", "200.00"],
                    ["V004", "2023-02-15", "120.00"]
                ]
            }
        ],
        examples: [
            {
                title: "Soma total de preços de produtos",
                code: "SELECT SUM(Preco) FROM Produtos;",
                explanation: "Calcula a soma de todos os preços de produtos.",
                resultTable: {
                    headers: ["SUM(Preco)"],
                    rows: [["45.50"]]
                }
            },
            {
                title: "Soma de vendas por mês (com GROUP BY)",
                code: "SELECT MONTH(DataVenda) AS Mes, SUM(ValorVenda) AS TotalVendas\nFROM Vendas\nGROUP BY MONTH(DataVenda);",
                explanation: "Soma o valor total das vendas por mês (assumindo uma coluna DataVenda com formato de data).",
                resultTable: {
                    headers: ["Mes", "TotalVendas"],
                    rows: [
                        ["1", "250.00"],
                        ["2", "320.00"]
                    ]
                }
            }
        ]
    },
    {
        name: "MIN()",
        description: "Uma função de agregação que retorna o menor valor em uma coluna.",
        isPopular: true,
        category: "Funções de Agregação",
        tables: [
            {
                name: "Produtos",
                headers: ["ProdutoID", "Preco"],
                rows: [
                    ["1", "10.00"],
                    ["2", "20.50"],
                    ["3", "5.00"]
                ]
            }
        ],
        examples: [
            {
                title: "Menor preço de produto",
                code: "SELECT MIN(Preco) FROM Produtos;",
                explanation: "Encontra o preço mais baixo entre todos os produtos.",
                resultTable: {
                    headers: ["MIN(Preco)"],
                    rows: [["5.00"]]
                }
                }
        ]
    },
    {
        name: "MAX()",
        description: "Uma função de agregação que retorna o maior valor em uma coluna.",
        isPopular: true,
        category: "Funções de Agregação",
        tables: [
            {
                name: "Funcionarios",
                headers: ["ID", "Nome", "Salario"],
                rows: [
                    ["1", "Carlos", "50000.00"],
                    ["2", "Fernanda", "80000.00"],
                    ["3", "Gustavo", "60000.00"]
                ]
            }
        ],
        examples: [
            {
                title: "Maior salário de funcionário",
                code: "SELECT MAX(Salario) FROM Funcionarios;",
                explanation: "Encontra o salário mais alto entre todos os funcionários.",
                resultTable: {
                    headers: ["MAX(Salario)"],
                    rows: [["80000.00"]]
                }
            }
        ]
    },
    {
        name: "AVG()",
        description: "Uma função de agregação que calcula a média dos valores em uma coluna numérica.",
        isPopular: true,
        category: "Funções de Agregação",
        tables: [
            {
                name: "Produtos",
                headers: ["ProdutoID", "Preco"],
                rows: [
                    ["1", "10.00"],
                    ["2", "20.00"],
                    ["3", "30.00"]
                ]
            }
        ],
        examples: [
            {
                title: "Média de preços de produtos",
                code: "SELECT AVG(Preco) FROM Produtos;",
                explanation: "Calcula o preço médio de todos os produtos.",
                resultTable: {
                    headers: ["AVG(Preco)"],
                    rows: [["20.00"]]
                }
            }
        ]
    },
    {
        name: "GROUP BY",
        description: "Divide os resultados de uma consulta em grupos com base nos valores de uma ou mais colunas. É frequentemente usado em conjunto com funções de agregação para aplicar os cálculos a cada grupo.",
        isPopular: true,
        category: "Funções de Agregação",
        tables: [
            {
                name: "Vendas",
                headers: ["VendaID", "Mes", "Valor"],
                rows: [
                    ["1", "1", "100"],
                    ["2", "1", "150"],
                    ["3", "2", "200"],
                    ["4", "2", "120"]
                ]
            },
            {
                name: "Clientes",
                headers: ["ClienteID", "Nome", "Cidade"],
                rows: [
                    ["1", "Alice", "São Paulo"],
                    ["2", "Bob", "Rio de Janeiro"],
                    ["3", "Charlie", "São Paulo"]
                ]
            }
        ],
        examples: [
            {
                title: "Agrupar vendas por mês",
                code: "SELECT Mes, AVG(Valor) FROM Vendas GROUP BY Mes;",
                explanation: "Calcula o valor médio de vendas para cada mês.",
                resultTable: {
                    headers: ["Mes", "AVG(Valor)"],
                    rows: [
                        ["1", "125"],
                        ["2", "160"]
                    ]
                }
            },
            {
                title: "Contar clientes por cidade",
                code: "SELECT Cidade, COUNT(ClienteID) AS TotalClientes\nFROM Clientes\nGROUP BY Cidade;",
                explanation: "Conta o número de clientes em cada cidade.",
                resultTable: {
                    headers: ["Cidade", "TotalClientes"],
                    rows: [
                        ["São Paulo", "2"],
                        ["Rio de Janeiro", "1"]
                    ]
                }
            }
        ]
    },
    {
        name: "HAVING",
        description: "Usado para filtrar os grupos de dados que já foram criados pelo GROUP BY. A principal diferença do WHERE é que o HAVING é aplicado depois do agrupamento, enquanto o WHERE é aplicado antes.",
        isPopular: true,
        category: "Funções de Agregação",
        tables: [
            {
                name: "Pessoas",
                headers: ["ID", "Nome", "Titulo"],
                rows: [
                    ["1", "Ana", "Dr."], ["2", "João", "Sr."], ["3", "Maria", "Dr."], ["4", "Pedro", "Dr."],
                    ["5", "Sofia", "Sra."], ["6", "Luis", "Dr."], ["7", "Carla", "Dr."], ["8", "Mario", "Sr."],
                    ["9", "Paula", "Dr."], ["10", "Rui", "Dr."], ["11", "Teresa", "Dr."]
                ]
            },
            {
                name: "Funcionarios",
                headers: ["ID", "Nome", "Departamento", "Salario"],
                rows: [
                    ["1", "Ana", "TI", "60000.00"],
                    ["2", "João", "TI", "55000.00"],
                    ["3", "Maria", "RH", "48000.00"],
                    ["4", "Pedro", "Vendas", "49000.00"],
                    ["5", "Sofia", "Marketing", "52000.00"]
                ]
            }
        ],
        examples: [
            {
                title: "Filtrar grupos com mais de 10 títulos",
                code: "SELECT Titulo, COUNT(Titulo) FROM Pessoas GROUP BY Titulo HAVING COUNT(Titulo) > 10;",
                explanation: "Retorna títulos que aparecem mais de 10 vezes na tabela 'Pessoas'.",
                resultTable: {
                    headers: ["Titulo", "COUNT(Titulo)"],
                    rows: [
                        ["Dr.", "8"] // Assuming there are 8 "Dr."
                    ]
                }
            },
            {
                title: "Filtrar departamentos com salário médio menor que 50000",
                code: "SELECT Departamento, AVG(Salario) AS SalarioMedio\nFROM Funcionarios\nGROUP BY Departamento\nHAVING AVG(Salario) < 50000;",
                explanation: "Mostra departamentos onde o salário médio é inferior a 50000.",
                resultTable: {
                    headers: ["Departamento", "SalarioMedio"],
                    rows: [
                        ["RH", "48000.00"],
                        ["Vendas", "49000.00"]
                    ]
                }
            }
        ]
    },

    // Funções de Manipulação de Strings
    {
        name: "CONCAT",
        description: "Une duas ou mais cadeias de caracteres (strings).",
        isPopular: true,
        category: "Funções de Manipulação de Strings",
        tables: [
            {
                name: "Pessoas",
                headers: ["PessoaID", "FirstName", "LastName"],
                rows: [
                    ["1", "João", "Silva"],
                    ["2", "Maria", "Santos"]
                ]
            }
        ],
        examples: [
            {
                title: "Concatenar nome e sobrenome",
                code: "SELECT CONCAT(FirstName, ' ', LastName) AS FullName FROM Pessoas;",
                explanation: "Cria uma nova coluna 'FullName' combinando 'FirstName', um espaço e 'LastName'.",
                resultTable: {
                    headers: ["FullName"],
                    rows: [
                        ["João Silva"],
                        ["Maria Santos"]
                    ]
                }
            }
        ]
    },
    {
        name: "UPPER() / UCASE()",
        description: "Converte todos os caracteres de uma string para maiúsculas.",
        isPopular: true,
        category: "Funções de Manipulação de Strings",
        tables: [
            {
                name: "Produtos",
                headers: ["ProdutoID", "NomeProduto"],
                rows: [
                    ["1", "laptop"],
                    ["2", "mouse"]
                ]
            }
        ],
        examples: [
            {
                title: "Converter texto para maiúsculas",
                code: "SELECT UPPER(NomeProduto) AS ProdutoMaiusculo FROM Produtos;",
                explanation: "Exibe o nome do produto em letras maiúsculas.",
                resultTable: {
                    headers: ["ProdutoMaiusculo"],
                    rows: [
                        ["LAPTOP"],
                        ["MOUSE"]
                    ]
                }
            }
        ]
    },
    {
        name: "LOWER() / LCASE()",
        description: "Converte todos os caracteres de uma string para minúsculas.",
        isPopular: true,
        category: "Funções de Manipulação de Strings",
        tables: [
            {
                name: "Usuarios",
                headers: ["UsuarioID", "Email"],
                rows: [
                    ["1", "USUARIO@EMAIL.COM"],
                    ["2", "OUTRO@DOMINIO.COM"]
                ]
            }
        ],
        examples: [
            {
                title: "Converter texto para minúsculas",
                code: "SELECT LOWER(Email) AS EmailMinusculo FROM Usuarios;",
                explanation: "Exibe o email do usuário em letras minúsculas.",
                resultTable: {
                    headers: ["EmailMinusculo"],
                    rows: [
                        ["usuario@email.com"],
                        ["outro@dominio.com"]
                    ]
                }
            }
        ]
    },
    {
        name: "LEN() / LENGTH()",
        description: "Retorna o número de caracteres (comprimento) de uma string.",
        isPopular: true,
        category: "Funções de Manipulação de Strings",
        tables: [
            {
                name: "Produtos",
                headers: ["ProdutoID", "NomeProduto"],
                rows: [
                    ["1", "Teclado"],
                    ["2", "Monitor"]
                ]
            }
        ],
        examples: [
            {
                title: "Comprimento do nome do produto",
                code: "SELECT NomeProduto, LEN(NomeProduto) AS ComprimentoNome FROM Produtos;",
                explanation: "Retorna o nome do produto e seu comprimento em caracteres.",
                resultTable: {
                    headers: ["NomeProduto", "ComprimentoNome"],
                    rows: [
                        ["Teclado", "7"],
                        ["Monitor", "7"]
                    ]
                }
            }
        ]
    },
    {
        name: "SUBSTRING()",
        description: "Extrai uma parte de uma string a partir de uma posição inicial e um comprimento especificado.",
        isPopular: true,
        category: "Funções de Manipulação de Strings",
        tables: [
            {
                name: "Pessoas",
                headers: ["PessoaID", "FirstName"],
                rows: [
                    ["1", "Alessandro"],
                    ["2", "Beatriz"]
                ]
            }
        ],
        examples: [
            {
                title: "Extrair os primeiros 3 caracteres do nome",
                code: "SELECT SUBSTRING(FirstName, 1, 3) AS TresPrimeirasLetras FROM Pessoas;",
                explanation: "Extrai os primeiros 3 caracteres da coluna 'FirstName'.",
                resultTable: {
                    headers: ["TresPrimeirasLetras"],
                    rows: [
                        ["Ale"],
                        ["Bea"]
                    ]
                }
            }
        ]
    },
    {
        name: "REPLACE()",
        description: "Substitui todas as ocorrências de uma substring dentro de uma string por outra substring.",
        isPopular: true,
        category: "Funções de Manipulação de Strings",
        tables: [
            {
                name: "Produtos",
                headers: ["ProdutoID", "ProductNumber"],
                rows: [
                    ["1", "ABC-123-X"],
                    ["2", "DEF-456-Y"]
                ]
            }
        ],
        examples: [
            {
                title: "Substituir traços por cerquilhas em números de produto",
                code: "SELECT REPLACE(ProductNumber, '-', '#') AS NovoNumeroProduto FROM Produtos;",
                explanation: "Substitui todos os hífens '-' por cerquilhas '#' na coluna 'ProductNumber'.",
                resultTable: {
                    headers: ["NovoNumeroProduto"],
                    rows: [
                        ["ABC#123#X"],
                        ["DEF#456#Y"]
                    ]
                }
            }
        ]
    },

    // Funções Matemáticas
    {
        name: "ROUND()",
        description: "Arredonda um valor numérico para uma precisão decimal especificada.",
        isPopular: true,
        category: "Funções Matemáticas",
        tables: [
            {
                name: "Produtos",
                headers: ["ProdutoID", "Preco"],
                rows: [
                    ["1", "10.456"],
                    ["2", "20.999"]
                ]
            }
        ],
        examples: [
            {
                title: "Arredondar preço para 2 casas decimais",
                code: "SELECT ROUND(Preco, 2) AS PrecoArredondado FROM Produtos;",
                explanation: "Arredonda os valores da coluna 'Preco' para duas casas decimais.",
                resultTable: {
                    headers: ["PrecoArredondado"],
                    rows: [
                        ["10.46"],
                        ["21.00"]
                    ]
                }
            }
        ]
    },
    {
        name: "SQRT()",
        description: "Calcula a raiz quadrada de um valor.",
        isPopular: true,
        category: "Funções Matemáticas",
        tables: [
            {
                name: "TabelaNumerica",
                headers: ["ID", "Valor"],
                rows: [
                    ["1", "16"],
                    ["2", "25"]
                ]
            }
        ],
        examples: [
            {
                title: "Calcular raiz quadrada de um número",
                code: "SELECT SQRT(9) AS RaizQuadradaDeNove;",
                explanation: "Retorna a raiz quadrada do número 9, que é 3.",
                resultTable: {
                    headers: ["RaizQuadradaDeNove"],
                    rows: [["3"]]
                }
            },
            {
                title: "Calcular raiz quadrada de uma coluna",
                code: "SELECT Valor, SQRT(Valor) AS RaizValor FROM TabelaNumerica;",
                explanation: "Calcula a raiz quadrada para cada valor na coluna 'Valor'.",
                resultTable: {
                    headers: ["Valor", "RaizValor"],
                    rows: [
                        ["16", "4"],
                        ["25", "5"]
                    ]
                }
            }
        ]
    },

    // Comandos DML (Manipulação de Dados)
    {
        name: "INSERT INTO",
        description: "Usado para inserir novas linhas de dados em uma tabela. Pode inserir uma única linha, múltiplas linhas de uma vez, ou dados de outra tabela.",
        isPopular: true,
        category: "Comandos DML (Manipulação de Dados)",
        tables: [
            {
                name: "Clientes (Antes)",
                headers: ["ClienteID", "Nome", "Cidade", "Pais", "DataCadastro"],
                rows: [
                    ["1", "Ana Silva", "ana@email.com", "São Paulo", "Brasil"],
                    ["2", "Carlos Mendes", "rio@email.com", "Rio de Janeiro", "Brasil"]
                ]
            },
            {
                name: "Produtos (Antes)",
                headers: ["ProdutoID", "NomeProduto", "Preco"],
                rows: [
                    ["101", "Câmera", "500.00"],
                    ["102", "Fone", "100.00"]
                ]
            },
            {
                name: "ClientesAntigos (Antes)",
                headers: ["ClienteID", "Nome", "Cidade", "Pais", "DataCadastro"],
                rows: [] /* Tabela inicialmente vazia */
            }
        ],
        examples: [
            {
                title: "Inserir uma única linha",
                code: "INSERT INTO Clientes (Nome, Cidade, Pais) VALUES ('João Silva', 'São Paulo', 'Brasil');",
                explanation: "Insere uma nova linha na tabela 'Clientes' com os valores especificados.",
                afterStateTable: {
                    name: "Clientes (Depois)",
                    headers: ["ClienteID", "Nome", "Cidade", "Pais", "DataCadastro"],
                    rows: [
                        ["1", "Ana Silva", "São Paulo", "Brasil", "2023-01-01"],
                        ["2", "Carlos Mendes", "Rio de Janeiro", "Brasil", "2023-02-15"],
                        ["3", "João Silva", "São Paulo", "Brasil", "(Valor padrão ou NULL)"] // Assumindo ID auto-incremento, e valor padrão/NULL para DataCadastro
                    ]
                }
            },
            {
                title: "Inserir em colunas específicas",
                code: "INSERT INTO Produtos (NomeProduto, Preco) VALUES ('Laptop', 1200.00);",
                explanation: "Insere um novo produto com nome 'Laptop' e preço '1200.00'.",
                afterStateTable: {
                    name: "Produtos (Depois)",
                    headers: ["ProdutoID", "NomeProduto", "Preco"],
                    rows: [
                        ["101", "Câmera", "500.00"],
                        ["102", "Fone", "100.00"],
                        ["103", "Laptop", "1200.00"] // Assumindo ID auto-incremento
                    ]
                }
            }
        ]
    },
    {
        name: "UPDATE",
        description: "Serve para modificar dados existentes em uma ou mais linhas de uma tabela. É crucial usar a cláusula WHERE para especificar quais linhas devem ser atualizadas, caso contrário, todas as linhas serão alteradas.",
        isPopular: true,
        category: "Comandos DML (Manipulação de Dados)",
        tables: [
            {
                name: "Tabela (Antes)",
                headers: ["ID", "Nome"],
                rows: [
                    ["1", "Valor Antigo 1"],
                    ["2", "Valor Antigo 2"],
                    ["3", "Valor Antigo 3"]
                ]
            },
            {
                name: "Produtos (Antes)",
                headers: ["ProdutoID", "Preco", "Estoque"],
                rows: [
                    ["101", "20.00", "100"],
                    ["102", "30.00", "50"]
                ]
            }
        ],
        examples: [
            {
                title: "Atualizar um registro com condição",
                code: "UPDATE Tabela SET Nome = 'Teste' WHERE ID = 3;",
                explanation: "Atualiza o 'Nome' para 'Teste' para a linha onde 'ID' é 3.",
                afterStateTable: {
                    name: "Tabela (Depois)",
                    headers: ["ID", "Nome"],
                    rows: [
                        ["1", "Valor Antigo 1"],
                        ["2", "Valor Antigo 2"],
                        ["3", "Teste"]
                    ]
                }
            },
            {
                title: "Atualizar múltiplos campos",
                code: "UPDATE Produtos SET Preco = 25.00, Estoque = 150 WHERE ProdutoID = 101;",
                explanation: "Atualiza o preço para 25.00 e o estoque para 150 do produto com ID 101.",
                afterStateTable: {
                    name: "Produtos (Depois)",
                    headers: ["ProdutoID", "Preco", "Estoque"],
                    rows: [
                        ["101", "25.00", "150"],
                        ["102", "30.00", "50"]
                    ]
                }
            }
        ]
    },
    {
        name: "DELETE FROM",
        description: "Usado para remover uma ou mais linhas de uma tabela. Assim como o UPDATE, é fundamental usar a cláusula WHERE para especificar as linhas a serem excluídas, caso contrário, todas as linhas da tabela serão apagadas.",
        isPopular: true,
        category: "Comandos DML (Manipulação de Dados)",
        tables: [
            {
                name: "Tabela (Antes)",
                headers: ["ID", "Nome"],
                rows: [
                    ["1", "Item A"],
                    ["2", "Item B"],
                    ["3", "Mudei"]
                ]
            },
            {
                name: "LogErros (Antes)",
                headers: ["LogID", "Mensagem"],
                rows: [
                    ["1", "Erro 1", "2023-01-01"],
                    ["2", "Erro 2", "2023-01-02"]
                ]
            }
        ],
        examples: [
            {
                title: "Excluir registros com condição",
                code: "DELETE FROM Tabela WHERE Nome = 'Mudei';",
                explanation: "Remove todas as linhas da 'Tabela' onde o 'Nome' é 'Mudei'.",
                afterStateTable: {
                    name: "Tabela (Depois)",
                    headers: ["ID", "Nome"],
                    rows: [
                        ["1", "Item A"],
                        ["2", "Item B"]
                    ]
                }
            },
            {
                title: "Excluir todos os registros (sem WHERE)",
                code: "DELETE FROM LogErros;",
                explanation: "ATENÇÃO: Remove TODAS as linhas da tabela 'LogErros'. Use com cautela!",
                afterStateTable: {
                    name: "LogErros (Depois)",
                    headers: ["LogID", "Mensagem", "Data"],
                    rows: [] // Empty table
                }
            }
        ]
    },

    // Comandos DDL (Definição de Dados) e Outros
    {
        name: "CREATE TABLE",
        description: "Comando para criar uma nova tabela no banco de dados. Ao criar uma tabela, você define suas colunas, tipos de dados e restrições (Constraints): NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT.",
        isPopular: true,
        category: "Comandos DDL (Definição de Dados) e Outros",
        tables: [], // No actual table data, as it's creation
        examples: [
            {
                title: "Criar uma tabela com várias restrições",
                code: "CREATE TABLE Funcionarios (\n    ID INT PRIMARY KEY,\n    Nome VARCHAR(255) NOT NULL,\n    Email VARCHAR(255) UNIQUE,\n    DepartamentoID INT,\n    Salario DECIMAL(10, 2) CHECK (Salario > 0),\n    DataContratacao DATE DEFAULT GETDATE(),\n    FOREIGN KEY (DepartamentoID) REFERENCES Departamentos(ID)\n);"
                ,
                explanation: "Cria a tabela 'Funcionarios' com as colunas e restrições especificadas.",
                afterStateTable: {
                    name: "Estrutura da Tabela Funcionarios (Depois)",
                    headers: ["Coluna", "Tipo", "Restrições"],
                    rows: [
                        ["ID", "INT", "PRIMARY KEY"],
                        ["Nome", "VARCHAR(255)", "NOT NULL"],
                        ["Email", "VARCHAR(255)", "UNIQUE"],
                        ["DepartamentoID", "INT", "FOREIGN KEY"],
                        ["Salario", "DECIMAL(10, 2)", "CHECK (Salario > 0)"],
                        ["DataContratacao", "DATE", "DEFAULT GETDATE()"]
                    ]
                }
            }
        ]
    },
    {
        name: "ALTER TABLE",
        description: "Utilizado para modificar a estrutura de uma tabela existente. Pode-se adicionar, remover ou alterar colunas, definir valores padrão, adicionar/remover restrições, e renomear tabelas ou colunas. Para renomear colunas ou tabelas no SQL Server, usa-se o procedimento armazenado sp_rename.",
        isPopular: true,
        category: "Comandos DDL (Definição de Dados) e Outros",
        tables: [
            {
                name: "Clientes (Antes)",
                headers: ["ClienteID", "Nome", "Cidade"],
                rows: [
                    ["1", "Ana", "São Paulo"]
                ]
            },
            {
                name: "Produtos (Antes)",
                headers: ["ProdutoID", "NomeProduto", "Estoque"],
                rows: [
                    ["1", "Caneta", "50"]
                ]
            },
            {
                name: "Pedidos (Antes)",
                headers: ["PedidoID", "DataPedido"],
                rows: [
                    ["1", "2023-01-01 10:00:00"]
                ]
            }
        ],
        examples: [
            {
                title: "Adicionar uma nova coluna",
                code: "ALTER TABLE Clientes ADD Email VARCHAR(255);",
                explanation: "Adiciona uma coluna 'Email' do tipo VARCHAR(255) à tabela 'Clientes'.",
                afterStateTable: {
                    name: "Clientes (Depois)",
                    headers: ["ClienteID", "Nome", "Cidade", "Email"],
                    rows: [
                        ["1", "Ana", "São Paulo", "NULL"] // NULL for existing rows
                    ]
                }
            },
            {
                title: "Excluir uma coluna",
                code: "ALTER TABLE Produtos DROP COLUMN Estoque;",
                explanation: "Remove a coluna 'Estoque' da tabela 'Produtos'.",
                afterStateTable: {
                    name: "Produtos (Depois)",
                    headers: ["ProdutoID", "NomeProduto"],
                    rows: [
                        ["1", "Caneta"]
                    ]
                }
            }
        ]
    },
    {
        name: "DROP TABLE",
        description: "Usado para excluir completamente uma tabela do banco de dados. Uma tabela só pode ser 'dropada' se não for referenciada por outras tabelas (via Chaves Estrangeiras).",
        isPopular: true,
        category: "Comandos DDL (Definição de Dados) e Outros",
        tables: [
            {
                name: "Funcionarios (Antes)",
                headers: ["ID", "Nome"],
                rows: [
                    ["1", "João"]
                ]
            }
        ],
        examples: [
            {
                title: "Excluir uma tabela",
                code: "DROP TABLE Funcionarios;",
                explanation: "Remove permanentemente a tabela 'Funcionarios' e todos os seus dados. ATENÇÃO: Esta operação é irreversível.",
                // No afterStateTable as the table ceases to exist, explanation handles it.
            }
        ]
    },
    {
        name: "TRUNCATE TABLE",
        description: "Remove todas as linhas de uma tabela, mas mantém a estrutura da tabela vazia. É geralmente mais rápido que DELETE FROM sem cláusula WHERE para esvaziar uma tabela, pois não registra cada linha deletada.",
        isPopular: true,
        category: "Comandos DDL (Definição de Dados) e Outros",
        tables: [
            {
                name: "LogErros (Antes)",
                headers: ["LogID", "Mensagem"],
                rows: [
                    ["1", "Erro de sistema"],
                    ["2", "Falha de conexão"]
                ]
            }
        ],
        examples: [
            {
                title: "Esvaziar uma tabela",
                code: "TRUNCATE TABLE LogErros;",
                explanation: "Remove todas as linhas da tabela 'LogErros' de forma eficiente, mas mantém a estrutura da tabela intacta.",
                afterStateTable: {
                    name: "LogErros (Depois)",
                    headers: ["LogID", "Mensagem"],
                    rows: [] // Empty table
                }
            }
        ]
    },
    {
        name: "CREATE VIEW",
        description: "Cria uma 'tabela virtual' baseada no conjunto de resultados de uma consulta SELECT. Views simplificam consultas complexas e podem ser usadas para restringir o acesso a certos dados, mostrando apenas um subconjunto da tabela original.",
        isPopular: true,
        category: "Comandos DDL (Definição de Dados) e Outros",
        tables: [
            {
                name: "Clientes",
                headers: ["ClienteID", "Nome", "Email", "Cidade", "Status"],
                rows: [
                    ["1", "Ana", "ana@email.com", "São Paulo", "Ativo"],
                    ["2", "Bruno", "bruno@email.com", "Rio de Janeiro", "Inativo"],
                    ["3", "Carla", "carla@email.com", "São Paulo", "Ativo"]
                ]
            }
        ],
        examples: [
            {
                title: "Criar uma view de clientes ativos",
                code: "CREATE VIEW ClientesAtivos AS\nSELECT Nome, Email, Cidade\nFROM Clientes\nWHERE Status = 'Ativo';",
                explanation: "Cria uma view chamada 'ClientesAtivos' que mostra apenas os clientes com status 'Ativo'.",
                resultTable: {
                    headers: ["Nome", "Email", "Cidade"],
                    rows: [
                        ["Ana", "ana@email.com", "São Paulo"],
                        ["Carla", "carla@email.com", "São Paulo"]
                    ]
                }
            },
             {
                title: "Consultar uma view",
                code: "SELECT * FROM ClientesAtivos;",
                explanation: "Consulta a view como se fosse uma tabela, mostrando os dados filtrados.",
                resultTable: {
                    headers: ["Nome", "Email", "Cidade"],
                    rows: [
                        ["Ana", "ana@email.com", "São Paulo"],
                        ["Carla", "carla@email.com", "São Paulo"]
                    ]
                }
            }
        ]
    },
    {
        name: "CREATE INDEX",
        description: "Usado para criar índices em tabelas. Índices são usados para recuperar dados do banco de dados mais rapidamente. Eles podem melhorar a performance de consultas, mas podem desacelerar operações de INSERT, UPDATE e DELETE.",
        isPopular: true,
        category: "Comandos DDL (Definição de Dados) e Outros",
        tables: [
            {
                name: "Clientes",
                headers: ["ClienteID", "Nome", "Email", "Cidade"],
                rows: [
                    ["1", "Ana Silva", "ana@email.com", "São Paulo"],
                    ["2", "Carlos Mendes", "carlos@email.com", "Rio de Janeiro"],
                    ["3", "Maria Pereira", "maria@email.com", "Lisboa"]
                ]
            }
        ],
        examples: [
            {
                title: "Criar um índice não clusterizado na coluna Email",
                code: "CREATE INDEX IX_Clientes_Email ON Clientes (Email);",
                explanation: "Cria um índice chamado `IX_Clientes_Email` na coluna `Email` da tabela `Clientes`. Isso acelera buscas por email.",
                // No visual afterStateTable for index creation, as it's an internal optimization.
                // Explanation covers the effect.
            },
            {
                title: "Criar um índice composto em Nome e Sobrenome",
                code: "CREATE INDEX IX_Clientes_NomeSobrenome ON Clientes (Nome, Sobrenome DESC);",
                explanation: "Cria um índice composto nas colunas `Nome` (ascendente) e `Sobrenome` (descendente), útil para consultas que filtram ou ordenam por ambas as colunas."
            }
        ]
    },
    {
        name: "DROP INDEX",
        description: "Usado para excluir um índice existente em uma tabela. Remover índices pode ser necessário para simplificar o esquema do banco de dados ou quando um índice não é mais eficiente.",
        isPopular: true,
        category: "Comandos DDL (Definição de Dados) e Outros",
        tables: [
            {
                name: "Clientes (com índice IX_Clientes_Email)",
                headers: ["ClienteID", "Nome", "Email", "Cidade"],
                rows: [
                    ["1", "Ana Silva", "ana@email.com", "São Paulo"]
                ]
            }
        ],
        examples: [
            {
                title: "Excluir um índice pelo nome",
                code: "DROP INDEX IX_Clientes_Email ON Clientes;",
                explanation: "Remove o índice chamado `IX_Clientes_Email` da tabela `Clientes`. Isso pode afetar a performance de consultas que o utilizavam.",
                // No visual afterStateTable for index deletion, as it's an internal optimization.
            },
            {
                title: "Excluir um índice em MySQL/PostgreSQL (sintaxe alternativa)",
                code: "DROP INDEX IX_Produtos_Nome ON Produtos;",
                explanation: "Sintaxe comum para excluir um índice em outros sistemas de banco de dados, como MySQL e PostgreSQL."
            }
        ]
    },

    // Comandos de Controle de Transação (TCL)
    {
        name: "BEGIN TRANSACTION / START TRANSACTION",
        description: "Inicia uma nova transação. Uma transação é uma sequência de uma ou mais operações que são tratadas como uma única unidade lógica de trabalho: ou todas as operações são concluídas com sucesso, ou nenhuma delas é.",
        isPopular: true,
        category: "Comandos de Controle de Transação (TCL)",
        tables: [
            {
                name: "ContasBancarias",
                headers: ["ContaID", "Cliente", "Saldo"],
                rows: [
                    ["1001", "Alice", "1000.00"],
                    ["1002", "Bob", "500.00"]
                ]
            }
        ],
        examples: [
            {
                title: "Iniciando uma transação",
                code: "BEGIN TRANSACTION;",
                explanation: "Marca o início de um bloco de transação. Nenhuma alteração de dados será permanente até que um COMMIT seja emitido."
            }
        ]
    },
    {
        name: "COMMIT",
        description: "Salva permanentemente todas as alterações feitas na transação atual no banco de dados. Uma vez que o COMMIT é executado, as alterações se tornam visíveis para outras transações e são duráveis.",
        isPopular: true,
        category: "Comandos de Controle de Transação (TCL)",
        tables: [
            {
                name: "ContasBancarias (Antes da Transação)",
                headers: ["ContaID", "Cliente", "Saldo"],
                rows: [
                    ["1001", "Alice", "1000.00"],
                    ["1002", "Bob", "500.00"]
                ]
            }
        ],
        examples: [
            {
                title: "Exemplo de transferência com COMMIT",
                code: "BEGIN TRANSACTION;\nUPDATE ContasBancarias SET Saldo = Saldo - 100 WHERE ContaID = 1001;\nUPDATE ContasBancarias SET Saldo = Saldo + 100 WHERE ContaID = 1002;\nCOMMIT;",
                explanation: "Inicia uma transação, transfere 100 do Saldo de Alice para Bob, e então salva as alterações permanentemente no banco de dados.",
                afterStateTable: {
                    name: "ContasBancarias (Depois do COMMIT)",
                    headers: ["ContaID", "Cliente", "Saldo"],
                    rows: [
                        ["1001", "Alice", "900.00"],
                        ["1002", "Bob", "600.00"]
                    ]
                }
            }
        ]
    },
    {
        name: "ROLLBACK",
        description: "Desfaz todas as alterações feitas na transação atual desde o seu início. Se ocorrer um erro ou se as operações não puderem ser concluídas, o ROLLBACK reverte o banco de dados ao estado anterior à transação, garantindo a atomicidade.",
        isPopular: true,
        category: "Comandos de Controle de Transação (TCL)",
        tables: [
            {
                name: "ContasBancarias",
                headers: ["ContaID", "Cliente", "Saldo"],
                rows: [
                    ["1001", "Alice", "1000.00"],
                    ["1002", "Bob", "500.00"]
                ]
            }
        ],
        examples: [
            {
                title: "Exemplo de transferência com ROLLBACK em caso de erro",
                code: "BEGIN TRANSACTION;\nUPDATE ContasBancarias SET Saldo = Saldo - 200 WHERE ContaID = 1001;\n-- Simula um erro: INSERT INTO TabelaInexistente VALUES (1);\nROLLBACK;",
                explanation: "Inicia uma transação, tenta subtrair 200 do saldo de Alice, mas simula um erro (como tentar inserir dados em uma tabela inexistente). O ROLLBACK garante que a operação de subtração seja desfeita e os saldos voltem ao estado original.",
                afterStateTable: {
                    name: "ContasBancarias (Depois do ROLLBACK)",
                    headers: ["ContaID", "Cliente", "Saldo"],
                    rows: [
                        ["1001", "Alice", "1000.00"],
                        ["1002", "Bob", "500.00"]
                    ]
                }
            }
        ]
    }
];

// --- Nova Seção para Atividades ---

const sqlActivities = [
    // Fácil (Total: 15 atividades)
    {
        id: 1,
        difficulty: "easy",
        title: "Atividade 1: Selecionar Todos os Clientes",
        description: "Selecione todas as colunas e todas as linhas da tabela `Clientes`. Use o comando `SELECT`.",
        initialTable: {
            name: "Clientes",
            headers: ["ClienteID", "Nome", "Email", "Cidade", "Pais"],
            rows: [
                ["1", "Ana Silva", "ana@email.com", "São Paulo", "Brasil"],
                ["2", "Carlos Mendes", "carlos@email.com", "Rio de Janeiro", "Brasil"],
                ["3", "Maria Pereira", "maria@email.com", "Lisboa", "Portugal"]
            ]
        },
        expectedSql: "SELECT * FROM Clientes;",
        expectedResultTable: {
            headers: ["ClienteID", "Nome", "Email", "Cidade", "Pais"],
            rows: [
                ["1", "Ana Silva", "ana@email.com", "São Paulo", "Brasil"],
                ["2", "Carlos Mendes", "carlos@email.com", "Rio de Janeiro", "Brasil"],
                ["3", "Maria Pereira", "maria@email.com", "Lisboa", "Portugal"]
            ]
        }
    },
    {
        id: 2,
        difficulty: "easy",
        title: "Atividade 2: Selecionar Nomes de Produtos",
        description: "Selecione apenas a coluna `NomeProduto` da tabela `Produtos`.",
        initialTable: {
            name: "Produtos",
            headers: ["ProdutoID", "NomeProduto", "Categoria", "Preco"],
            rows: [
                ["101", "Laptop", "Eletrônicos", "1200.00"],
                ["102", "Mouse", "Eletrônicos", "25.00"],
                ["103", "Teclado", "Eletrônicos", "75.00"]
            ]
        },
        expectedSql: "SELECT NomeProduto FROM Produtos;",
        expectedResultTable: {
            headers: ["NomeProduto"],
            rows: [
                ["Laptop"],
                ["Mouse"],
                ["Teclado"]
            ]
        }
    },
    {
        id: 3,
        difficulty: "easy",
        title: "Atividade 3: Filtrar Clientes do Brasil",
        description: "Selecione o `Nome` e a `Cidade` de todos os clientes que são do `Brasil` na tabela `Clientes`. Use o comando `WHERE`.",
        initialTable: {
            name: "Clientes",
            headers: ["ClienteID", "Nome", "Email", "Cidade", "Pais"],
            rows: [
                ["1", "Ana Silva", "ana@email.com", "São Paulo", "Brasil"],
                ["2", "Carlos Mendes", "carlos@email.com", "Rio de Janeiro", "Brasil"],
                ["3", "Maria Pereira", "maria@email.com", "Lisboa", "Portugal"]
            ]
        },
        expectedSql: "SELECT Nome, Cidade FROM Clientes WHERE Pais = 'Brasil';",
        expectedResultTable: {
            headers: ["Nome", "Cidade"],
            rows: [
                ["Ana Silva", "São Paulo"],
                ["Carlos Mendes", "Rio de Janeiro"]
            ]
        }
    },
    {
        id: 4,
        difficulty: "easy",
        title: "Atividade 4: Ordenar Clientes por Nome",
        description: "Selecione todos os clientes da tabela `Clientes` e ordene-os por `Nome` em ordem alfabética crescente.",
        initialTable: {
            name: "Clientes",
            headers: ["ClienteID", "Nome", "Cidade"],
            rows: [
                ["1", "João", "São Paulo"],
                ["2", "Maria", "Rio de Janeiro"],
                ["3", "Ana", "Belo Horizonte"]
            ]
        },
        expectedSql: "SELECT * FROM Clientes ORDER BY Nome ASC;",
        expectedResultTable: {
            headers: ["ClienteID", "Nome", "Cidade"],
            rows: [
                ["3", "Ana", "Belo Horizonte"],
                ["1", "João", "São Paulo"],
                ["2", "Maria", "Rio de Janeiro"]
            ]
        }
    },
    {
        id: 5,
        difficulty: "easy",
        title: "Atividade 5: Contar Total de Produtos",
        description: "Descubra o número total de produtos na tabela `Produtos`.",
        initialTable: {
            name: "Produtos",
            headers: ["ProdutoID", "NomeProduto"],
            rows: [
                ["1", "TV"],
                ["2", "Geladeira"],
                ["3", "Máquina de Lavar"],
                ["4", "Micro-ondas"]
            ]
        },
        expectedSql: "SELECT COUNT(*) FROM Produtos;",
        expectedResultTable: {
            headers: ["COUNT(*)"],
            rows: [["4"]]
        }
    },
    {
        id: 6,
        difficulty: "easy",
        title: "Atividade 6: Selecionar E-mails e Nomes de Clientes",
        description: "Selecione as colunas `Email` e `Nome` da tabela `Clientes`.",
        initialTable: {
            name: "Clientes",
            headers: ["ClienteID", "Nome", "Email"],
            rows: [
                ["1", "Alice", "alice@email.com"],
                ["2", "Bob", "bob@email.com"]
            ]
        },
        expectedSql: "SELECT Email, Nome FROM Clientes;",
        expectedResultTable: {
            headers: ["Email", "Nome"],
            rows: [
                ["alice@email.com", "Alice"],
                ["bob@email.com", "Bob"]
            ]
        }
    },
    {
        id: 7,
        difficulty: "easy",
        title: "Atividade 7: Produtos com Preço Menor que 50",
        description: "Selecione todos os produtos da tabela `Produtos` cujo `Preco` seja menor que 50.",
        initialTable: {
            name: "Produtos",
            headers: ["ProdutoID", "NomeProduto", "Preco"],
            rows: [
                ["101", "Caneta", "2.50"],
                ["102", "Caderno", "45.00"],
                ["103", "Mochila", "120.00"]
            ]
        },
        expectedSql: "SELECT * FROM Produtos WHERE Preco < 50;",
        expectedResultTable: {
            headers: ["ProdutoID", "NomeProduto", "Preco"],
            rows: [
                ["101", "Caneta", "2.50"],
                ["102", "Caderno", "45.00"]
            ]
        }
    },
    {
        id: 8,
        difficulty: "easy",
        title: "Atividade 8: Pessoas com Mais de 30 Anos",
        description: "Selecione o `Nome` e a `Idade` de todas as pessoas da tabela `Pessoas` que têm mais de 30 anos.",
        initialTable: {
            name: "Pessoas",
            headers: ["ID", "Nome", "Idade"],
            rows: [
                ["1", "Clara", "28"],
                ["2", "Daniel", "35"],
                ["3", "Eva", "40"]
            ]
        },
        expectedSql: "SELECT Nome, Idade FROM Pessoas WHERE Idade > 30;",
        expectedResultTable: {
            headers: ["Nome", "Idade"],
            rows: [
                ["Daniel", "35"],
                ["Eva", "40"]
            ]
        }
    },
    {
        id: 9,
        difficulty: "easy",
        title: "Atividade 9: Produtos da Categoria 'Eletrônicos'",
        description: "Selecione o `NomeProduto` e o `Preco` dos produtos que pertencem à categoria 'Eletrônicos' na tabela `Produtos`.",
        initialTable: {
            name: "Produtos",
            headers: ["ProdutoID", "NomeProduto", "Categoria", "Preco"],
            rows: [
                ["1", "Fone", "Eletrônicos", "150.00"],
                ["2", "Livro", "Livros", "30.00"],
                ["3", "Tablet", "Eletrônicos", "800.00"]
            ]
        },
        expectedSql: "SELECT NomeProduto, Preco FROM Produtos WHERE Categoria = 'Eletrônicos';",
        expectedResultTable: {
            headers: ["NomeProduto", "Preco"],
            rows: [
                ["Fone", "150.00"],
                ["Tablet", "800.00"]
            ]
        }
    },
    {
        id: 10,
        difficulty: "easy",
        title: "Atividade 10: Inserir um Novo Produto",
        description: "Insira um novo produto na tabela `Produtos` com `NomeProduto` 'Monitor LCD' e `Preco` '250.00'.",
        initialTable: {
            name: "Produtos (Antes)",
            headers: ["ProdutoID", "NomeProduto", "Preco"],
            rows: [
                ["1", "Teclado", "75.00"]
            ]
        },
        expectedSql: "INSERT INTO Produtos (NomeProduto, Preco) VALUES ('Monitor LCD', 250.00);",
        expectedResultTable: {
            name: "Produtos (Depois)",
            headers: ["ProdutoID", "NomeProduto", "Preco"],
            rows: [
                ["1", "Teclado", "75.00"],
                ["(novo)", "Monitor LCD", "250.00"] // ID simulado para novo item
            ]
        }
    },
    {
        id: 11,
        difficulty: "easy",
        title: "Atividade 11: Atualizar o Estoque de um Produto",
        description: "Atualize o `Estoque` do produto com `ProdutoID` 101 para 200 na tabela `Produtos`.",
        initialTable: {
            name: "Produtos (Antes)",
            headers: ["ProdutoID", "NomeProduto", "Estoque"],
            rows: [
                ["101", "Mouse", "150"],
                ["102", "Teclado", "100"]
            ]
        },
        expectedSql: "UPDATE Produtos SET Estoque = 200 WHERE ProdutoID = 101;",
        expectedResultTable: {
            name: "Produtos (Depois)",
            headers: ["ProdutoID", "NomeProduto", "Estoque"],
            rows: [
                ["101", "Mouse", "200"],
                ["102", "Teclado", "100"]
            ]
        }
    },
    {
        id: 12,
        difficulty: "easy",
        title: "Atividade 12: Excluir Cliente por ID",
        description: "Exclua o cliente com `ClienteID` 2 da tabela `Clientes`.",
        initialTable: {
            name: "Clientes (Antes)",
            headers: ["ClienteID", "Nome"],
            rows: [
                ["1", "João"],
                ["2", "Maria"],
                ["3", "Pedro"]
            ]
        },
        expectedSql: "DELETE FROM Clientes WHERE ClienteID = 2;",
        expectedResultTable: {
            name: "Clientes (Depois)",
            headers: ["ClienteID", "Nome"],
            rows: [
                ["1", "João"],
                ["3", "Pedro"]
            ]
        }
    },
    {
        id: 13,
        difficulty: "easy",
        title: "Atividade 13: Nome de Produto com 'o'",
        description: "Selecione o `NomeProduto` dos produtos que contêm a letra 'o' em qualquer posição.",
        initialTable: {
            name: "Produtos",
            headers: ["ProdutoID", "NomeProduto"],
            rows: [
                ["1", "Teclado"],
                ["2", "Monitor"],
                ["3", "Mouse"]
            ]
        },
        expectedSql: "SELECT NomeProduto FROM Produtos WHERE NomeProduto LIKE '%o%';",
        expectedResultTable: {
            headers: ["NomeProduto"],
            rows: [
                ["Monitor"],
                ["Mouse"]
            ]
        }
    },
    {
        id: 14,
        difficulty: "easy",
        title: "Atividade 14: Preço Mínimo de Produtos",
        description: "Encontre o `Preco` mínimo na tabela `Produtos`.",
        initialTable: {
            name: "Produtos",
            headers: ["ProdutoID", "Preco"],
            rows: [
                ["1", "100.00"],
                ["2", "50.00"],
                ["3", "120.00"]
            ]
        },
        expectedSql: "SELECT MIN(Preco) FROM Produtos;",
        expectedResultTable: {
            headers: ["MIN(Preco)"],
            rows: [["50.00"]]
        }
    },
    {
        id: 15,
        difficulty: "easy",
        title: "Atividade 15: Selecionar Categorias Únicas",
        description: "Liste todas as categorias únicas de produtos na tabela `Produtos`.",
        initialTable: {
            name: "Produtos",
            headers: ["ProdutoID", "Categoria"],
            rows: [
                ["1", "Eletrônicos"],
                ["2", "Livros"],
                ["3", "Eletrônicos"],
                ["4", "Roupas"]
            ]
        },
        expectedSql: "SELECT DISTINCT Categoria FROM Produtos;",
        expectedResultTable: {
            headers: ["Categoria"],
            rows: [
                ["Eletrônicos"],
                ["Livros"],
                ["Roupas"]
            ]
        }
    },

    // Intermediário (Total: 15 atividades)
    {
        id: 16,
        difficulty: "intermediate",
        title: "Atividade 1: Produtos com Preço Entre 100 e 500",
        description: "Selecione todos os produtos cujo `Preco` esteja entre 100 e 500 (inclusive). Use o comando `BETWEEN`.",
        initialTable: {
            name: "Produtos",
            headers: ["ProdutoID", "NomeProduto", "Preco"],
            rows: [
                ["1", "TV", "800.00"],
                ["2", "Geladeira", "1300.00"],
                ["3", "Máquina de Lavar", "1600.00"],
                ["4", "Micro-ondas", "250.00"]
            ]
        },
        expectedSql: "SELECT * FROM Produtos WHERE Preco BETWEEN 100 AND 500;",
        expectedResultTable: {
            headers: ["ProdutoID", "NomeProduto", "Preco"],
            rows: [
                ["4", "Micro-ondas", "250.00"]
            ]
        }
    },
    {
        id: 17,
        difficulty: "intermediate",
        title: "Atividade 2: Contar Clientes por Cidade",
        description: "Conte quantos clientes existem em cada `Cidade`. Use `GROUP BY` e `COUNT()`.",
        initialTable: {
            name: "Clientes",
            headers: ["ClienteID", "Nome", "Cidade"],
            rows: [
                ["1", "Alice", "São Paulo"],
                ["2", "Bob", "Rio de Janeiro"],
                ["3", "Charlie", "São Paulo"],
                ["4", "Diana", "Curitiba"]
            ]
        },
        expectedSql: "SELECT Cidade, COUNT(ClienteID) AS TotalClientes FROM Clientes GROUP BY Cidade;",
        expectedResultTable: {
            headers: ["Cidade", "TotalClientes"],
            rows: [
                ["São Paulo", "2"],
                ["Rio de Janeiro", "1"],
                ["Curitiba", "1"]
            ]
        }
    },
    {
        id: 18,
        difficulty: "intermediate",
        title: "Atividade 3: Renomear Coluna de E-mail",
        description: "Selecione o `Nome` e o `Email` da tabela `Pessoas`, mas exiba a coluna `Email` como `EnderecoEmail`. Use `AS`.",
        initialTable: {
            name: "Pessoas",
            headers: ["PessoaID", "Nome", "Email"],
            rows: [
                ["1", "Fernanda", "fernanda@email.com"],
                ["2", "Gustavo", "gustavo@email.com"]
            ]
        },
        expectedSql: "SELECT Nome, Email AS EnderecoEmail FROM Pessoas;",
        expectedResultTable: {
            headers: ["Nome", "EnderecoEmail"],
            rows: [
                ["Fernanda", "fernanda@email.com"],
                ["Gustavo", "gustavo@email.com"]
            ]
        }
    },
    {
        id: 19,
        difficulty: "intermediate",
        title: "Atividade 4: Encontrar Nomes que Começam com 'M'",
        description: "Selecione todos os nomes da tabela `Pessoas` que começam com a letra 'M'. Use `LIKE`.",
        initialTable: {
            name: "Pessoas",
            headers: ["ID", "Nome"],
            rows: [
                ["1", "Ana"],
                ["2", "Maria"],
                ["3", "João"],
                ["4", "Mariana"]
            ]
        },
        expectedSql: "SELECT * FROM Pessoas WHERE Nome LIKE 'M%';",
        expectedResultTable: {
            headers: ["ID", "Nome"],
            rows: [
                ["2", "Maria"],
                ["4", "Mariana"]
            ]
        }
    },
    {
        id: 20,
        difficulty: "intermediate",
        title: "Atividade 5: Soma Total de Vendas por Mês",
        description: "Calcule a soma total do `ValorVenda` para cada `Mes` na tabela `Vendas`. Use `SUM()` e `GROUP BY`.",
        initialTable: {
            name: "Vendas",
            headers: ["VendaID", "Mes", "ValorVenda"],
            rows: [
                ["V001", "1", "100.00"],
                ["V002", "1", "150.00"],
                ["V003", "2", "200.00"],
                ["V004", "2", "120.00"],
                ["V005", "3", "50.00"]
            ]
        },
        expectedSql: "SELECT Mes, SUM(ValorVenda) AS TotalVendas FROM Vendas GROUP BY Mes;",
        expectedResultTable: {
            headers: ["Mes", "TotalVendas"],
            rows: [
                ["1", "250.00"],
                ["2", "320.00"],
                ["3", "50.00"]
            ]
        }
    },
    {
        id: 21,
        difficulty: "intermediate",
        title: "Atividade 6: Produtos com Preço Fora de um Intervalo",
        description: "Selecione os produtos cujo `Preco` NÃO esteja entre 50 e 150. Use `NOT BETWEEN`.",
        initialTable: {
            name: "Produtos",
            headers: ["ProdutoID", "NomeProduto", "Preco"],
            rows: [
                ["1", "Teclado", "75.00"],
                ["2", "Monitor", "300.00"],
                ["3", "Mouse", "25.00"],
                ["4", "Webcam", "120.00"]
            ]
        },
        expectedSql: "SELECT * FROM Produtos WHERE Preco NOT BETWEEN 50 AND 150;",
        expectedResultTable: {
            headers: ["ProdutoID", "NomeProduto", "Preco"],
            rows: [
                ["2", "Monitor", "300.00"],
                ["3", "Mouse", "25.00"]
            ]
        }
    },
    {
        id: 22,
        difficulty: "intermediate",
        title: "Atividade 7: Clientes de Cidades Específicas",
        description: "Selecione todos os clientes que moram em 'São Paulo' ou 'Lisboa'. Use `IN`.",
        initialTable: {
            name: "Clientes",
            headers: ["ClienteID", "Nome", "Cidade"],
            rows: [
                ["1", "Ana", "São Paulo"],
                ["2", "Bruno", "Rio de Janeiro"],
                ["3", "Carla", "Lisboa"],
                ["4", "Pedro", "São Paulo"]
            ]
        },
        expectedSql: "SELECT * FROM Clientes WHERE Cidade IN ('São Paulo', 'Lisboa');",
        expectedResultTable: {
            headers: ["ClienteID", "Nome", "Cidade"],
            rows: [
                ["1", "Ana", "São Paulo"],
                ["3", "Carla", "Lisboa"],
                ["4", "Pedro", "São Paulo"]
            ]
        }
    },
    {
        id: 23,
        difficulty: "intermediate",
        title: "Atividade 8: Nomes que Terminam com 'a'",
        description: "Selecione todas as `Pessoas` cujo `Nome` termina com a letra 'a'. Use `LIKE`.",
        initialTable: {
            name: "Pessoas",
            headers: ["ID", "Nome"],
            rows: [
                ["1", "João"],
                ["2", "Maria"],
                ["3", "Ana"],
                ["4", "Carlos"]
            ]
        },
        expectedSql: "SELECT * FROM Pessoas WHERE Nome LIKE '%a';",
        expectedResultTable: {
            headers: ["ID", "Nome"],
            rows: [
                ["2", "Maria"],
                ["3", "Ana"]
            ]
        }
    },
    {
        id: 24,
        difficulty: "intermediate",
        title: "Atividade 9: Produtos Mais Caros (TOP N)",
        description: "Retorne os 2 produtos mais caros da tabela `Produtos`. Use `ORDER BY` e `LIMIT` (MySQL/PostgreSQL) ou `TOP` (SQL Server).",
        initialTable: {
            name: "Produtos",
            headers: ["ProdutoID", "NomeProduto", "Preco"],
            rows: [
                ["1", "TV", "1500.00"],
                ["2", "Fone", "100.00"],
                ["3", "Laptop", "1200.00"],
                ["4", "Teclado", "50.00"]
            ]
        },
        expectedSql: "SELECT * FROM Produtos ORDER BY Preco DESC LIMIT 2;", // Usando LIMIT como exemplo
        expectedResultTable: {
            headers: ["ProdutoID", "NomeProduto", "Preco"],
            rows: [
                ["1", "TV", "1500.00"],
                ["3", "Laptop", "1200.00"]
            ]
        }
    },
    {
        id: 25,
        difficulty: "intermediate",
        title: "Atividade 10: Ordenar Funcionários por Salário Decrescente",
        description: "Selecione o `Nome` e `Salario` da tabela `Funcionarios` e ordene-os por `Salario` em ordem decrescente.",
        initialTable: {
            name: "Funcionarios",
            headers: ["ID", "Nome", "Salario"],
            rows: [
                ["1", "Paulo", "50000.00"],
                ["2", "Alice", "70000.00"],
                ["3", "Bruno", "60000.00"]
            ]
        },
        expectedSql: "SELECT Nome, Salario FROM Funcionarios ORDER BY Salario DESC;",
        expectedResultTable: {
            headers: ["Nome", "Salario"],
            rows: [
                ["Alice", "70000.00"],
                ["Bruno", "60000.00"],
                ["Paulo", "50000.00"]
            ]
        }
    },
    {
        id: 26,
        difficulty: "intermediate",
        title: "Atividade 11: Concatenar Nome Completo",
        description: "Na tabela `Autores`, combine `FirstName` e `LastName` para criar uma coluna `FullName` separada por um espaço.",
        initialTable: {
            name: "Autores",
            headers: ["AutorID", "FirstName", "LastName"],
            rows: [
                ["1", "Maria", "Silva"],
                ["2", "João", "Santos"]
            ]
        },
        expectedSql: "SELECT CONCAT(FirstName, ' ', LastName) AS FullName FROM Autores;",
        expectedResultTable: {
            headers: ["FullName"],
            rows: [
                ["Maria Silva"],
                ["João Santos"]
            ]
        }
    },
    {
        id: 27,
        difficulty: "intermediate",
        title: "Atividade 12: Nomes de Clientes em Maiúsculas",
        description: "Selecione o `Nome` dos clientes e exiba-os em letras maiúsculas.",
        initialTable: {
            name: "Clientes",
            headers: ["ClienteID", "Nome"],
            rows: [
                ["1", "ana"],
                ["2", "carlos"]
            ]
        },
        expectedSql: "SELECT UPPER(Nome) AS NomeMaiusculo FROM Clientes;",
        expectedResultTable: {
            headers: ["NomeMaiusculo"],
            rows: [
                ["ANA"],
                ["CARLOS"]
            ]
        }
    },
    {
        id: 28,
        difficulty: "intermediate",
        title: "Atividade 13: Comprimento dos Nomes de Produtos",
        description: "Selecione o `NomeProduto` e exiba o `ComprimentoNome` de cada produto na tabela `Produtos`.",
        initialTable: {
            name: "Produtos",
            headers: ["ProdutoID", "NomeProduto"],
            rows: [
                ["1", "Celular"],
                ["2", "Carregador"]
            ]
        },
        expectedSql: "SELECT NomeProduto, LEN(NomeProduto) AS ComprimentoNome FROM Produtos;",
        expectedResultTable: {
            headers: ["NomeProduto", "ComprimentoNome"],
            rows: [
                ["Celular", "7"],
                ["Carregador", "10"]
            ]
        }
    },
    {
        id: 29,
        difficulty: "intermediate",
        title: "Atividade 14: Substituir Caracteres em Códigos",
        description: "Na tabela `Pedidos`, substitua todas as ocorrências de 'X' por 'Y' na coluna `CodigoPedido`.",
        initialTable: {
            name: "Pedidos",
            headers: ["PedidoID", "CodigoPedido"],
            rows: [
                ["1", "PED-ABC-X1"],
                ["2", "PED-DEF-X2"]
            ]
        },
        expectedSql: "SELECT REPLACE(CodigoPedido, 'X', 'Y') AS NovoCodigo FROM Pedidos;",
        expectedResultTable: {
            headers: ["NovoCodigo"],
            rows: [
                ["PED-ABC-Y1"],
                ["PED-DEF-Y2"]
            ]
        }
    },
    {
        id: 30,
        difficulty: "intermediate",
        title: "Atividade 15: Raiz Quadrada de Valores",
        description: "Para cada `Valor` na tabela `Numeros`, calcule sua raiz quadrada e exiba como `RaizQuadrada`.",
        initialTable: {
            name: "Numeros",
            headers: ["ID", "Valor"],
            rows: [
                ["1", "4"],
                ["2", "9"],
                ["3", "16"]
            ]
        },
        expectedSql: "SELECT Valor, SQRT(Valor) AS RaizQuadrada FROM Numeros;",
        expectedResultTable: {
            headers: ["Valor", "RaizQuadrada"],
            rows: [
                ["4", "2"],
                ["9", "3"],
                ["16", "4"]
            ]
        }
    },

    // Avançado (Total: 15 atividades)
    {
        id: 31,
        difficulty: "advanced",
        title: "Atividade 1: Média de Salário por Departamento (Filtrado)",
        description: "Calcule a média de `Salario` para cada `Departamento` na tabela `Funcionarios`, mas mostre apenas os departamentos onde a média salarial é inferior a 50000. Use `GROUP BY` e `HAVING`.",
        initialTable: {
            name: "Funcionarios",
            headers: ["ID", "Nome", "Departamento", "Salario"],
            rows: [
                ["1", "Ana", "TI", "60000.00"],
                ["2", "João", "TI", "55000.00"],
                ["3", "Maria", "RH", "48000.00"],
                ["4", "Pedro", "Vendas", "49000.00"],
                ["5", "Sofia", "Marketing", "52000.00"]
            ]
        },
        expectedSql: "SELECT Departamento, AVG(Salario) AS SalarioMedio FROM Funcionarios GROUP BY Departamento HAVING AVG(Salario) < 50000;",
        expectedResultTable: {
            headers: ["Departamento", "SalarioMedio"],
            rows: [
                ["RH", "48000.00"],
                ["Vendas", "49000.00"]
            ]
        }
    },
    {
        id: 32,
        difficulty: "advanced",
        title: "Atividade 2: Clientes com e sem Pedidos (LEFT JOIN)",
        description: "Liste o `NomeCliente` de todos os clientes e, se houver, o `PedidoID` associado. Inclua clientes que não fizeram pedidos. Use `LEFT JOIN`.",
        initialTable: {
            name: "Clientes",
            headers: ["ClienteID", "NomeCliente"],
            rows: [
                ["C001", "Ana Silva"],
                ["C002", "Bruno Costa"],
                ["C003", "Carla Dias"]
            ]
        },
        initialTable2: {
            name: "Pedidos",
            headers: ["PedidoID", "ClienteID", "ProdutoID"],
            rows: [
                ["P001", "C001", "PROD001"],
                ["P002", "C002", "PROD002"],
                ["P003", "C001", "PROD003"]
            ]
        },
        expectedSql: "SELECT Clientes.NomeCliente, Pedidos.PedidoID FROM Clientes LEFT JOIN Pedidos ON Clientes.ClienteID = Pedidos.ClienteID;",
        expectedResultTable: {
            headers: ["NomeCliente", "PedidoID"],
            rows: [
                ["Ana Silva", "P001"],
                ["Ana Silva", "P003"],
                ["Bruno Costa", "P002"],
                ["Carla Dias", null]
            ]
        }
    },
    {
        id: 33,
        difficulty: "advanced",
        title: "Atividade 3: Categorizar Produtos por Preço",
        description: "Crie uma nova coluna chamada `FaixaPreco` que classifica os produtos em 'Barato' (Preco < 100), 'Médio' (Preco entre 100 e 500) ou 'Caro' (Preco >= 500). Use `CASE WHEN`.",
        initialTable: {
            name: "Produtos",
            headers: ["ProdutoID", "NomeProduto", "Preco"],
            rows: [
                ["101", "Laptop", "1200.00"],
                ["102", "Mouse", "25.00"],
                ["103", "Teclado", "75.00"],
                ["104", "Monitor", "300.00"],
                ["105", "Impressora", "150.00"]
            ]
        },
        expectedSql: "SELECT NomeProduto, Preco, CASE WHEN Preco < 100 THEN 'Barato' WHEN Preco >= 100 AND Preco < 500 THEN 'Médio' ELSE 'Caro' END AS FaixaPreco FROM Produtos;",
        expectedResultTable: {
            headers: ["NomeProduto", "Preco", "FaixaPreco"],
            rows: [
                ["Laptop", "1200.00", "Caro"],
                ["Mouse", "25.00", "Barato"],
                ["Teclado", "75.00", "Barato"],
                ["Monitor", "300.00", "Médio"],
                ["Impressora", "150.00", "Médio"]
            ]
        }
    },
    {
        id: 34,
        difficulty: "advanced",
        title: "Atividade 4: Extrair Ano de Nascimento",
        description: "Selecione o `Nome` e extraia o `AnoNascimento` da coluna `DataNascimento` da tabela `Pessoas`. Use `DATEPART`.",
        initialTable: {
            name: "Pessoas",
            headers: ["PessoaID", "Nome", "DataNascimento"],
            rows: [
                ["1", "Alice", "1990-03-15"],
                ["2", "Bob", "1985-11-22"],
                ["3", "Charlie", "2000-01-01"]
            ]
        },
        expectedSql: "SELECT Nome, DATEPART(year, DataNascimento) AS AnoNascimento FROM Pessoas;",
        expectedResultTable: {
            headers: ["Nome", "AnoNascimento"],
            rows: [
                ["Alice", "1990"],
                ["Bob", "1985"],
                ["Charlie", "2000"]
            ]
        }
    },
    {
        id: 35,
        difficulty: "advanced",
        title: "Atividade 5: Combinar Nomes de Clientes e Fornecedores (UNION)",
        description: "Combine os nomes distintos da tabela `Clientes` e da tabela `Fornecedores` em uma única lista. Use `UNION`.",
        initialTable: {
            name: "Clientes",
            headers: ["ID", "Nome"],
            rows: [
                ["1", "Pedro"],
                ["2", "Ana"],
                ["3", "Maria"]
            ]
        },
        initialTable2: {
            name: "Fornecedores",
            headers: ["ID", "NomeFornecedor"],
            rows: [
                ["101", "Ana"],
                ["102", "João"],
                ["103", "Pedro"]
            ]
        },
        expectedSql: "SELECT Nome FROM Clientes UNION SELECT NomeFornecedor FROM Fornecedores;",
        expectedResultTable: {
            headers: ["Nome"],
            rows: [
                ["Pedro"],
                ["Ana"],
                ["Maria"],
                ["João"]
            ]
        }
    },
    {
        id: 36,
        difficulty: "advanced",
        title: "Atividade 6: Listar Pedidos e Nomes de Produtos (INNER JOIN)",
        description: "Liste o `PedidoID` e o `NomeProduto` para todos os pedidos que têm um produto correspondente. Use `INNER JOIN`.",
        initialTable: {
            name: "Pedidos",
            headers: ["PedidoID", "ProdutoID"],
            rows: [
                ["P001", "PROD001"],
                ["P002", "PROD002"],
                ["P003", "PROD004"] // PROD004 não existe em Produtos
            ]
        },
        initialTable2: {
            name: "Produtos",
            headers: ["ProdutoID", "NomeProduto"],
            rows: [
                ["PROD001", "Laptop"],
                ["PROD002", "Mouse"]
            ]
        },
        expectedSql: "SELECT Pedidos.PedidoID, Produtos.NomeProduto FROM Pedidos INNER JOIN Produtos ON Pedidos.ProdutoID = Produtos.ProdutoID;",
        expectedResultTable: {
            headers: ["PedidoID", "NomeProduto"],
            rows: [
                ["P001", "Laptop"],
                ["P002", "Mouse"]
            ]
        }
    },
    {
        id: 37,
        difficulty: "advanced",
        title: "Atividade 7: Listar Todos os Produtos e Seus Pedidos (RIGHT JOIN)",
        description: "Mostre todos os `NomeProduto` e, se existirem, seus `PedidoID`s associados. Inclua produtos que não foram pedidos. Use `RIGHT JOIN`.",
        initialTable: {
            name: "Pedidos",
            headers: ["PedidoID", "ProdutoID"],
            rows: [
                ["P001", "PROD001"]
            ]
        },
        initialTable2: {
            name: "Produtos",
            headers: ["ProdutoID", "NomeProduto"],
            rows: [
                ["PROD001", "TV"],
                ["PROD002", "Geladeira"] // Geladeira não tem pedido
            ]
        },
        expectedSql: "SELECT Pedidos.PedidoID, Produtos.NomeProduto FROM Pedidos RIGHT JOIN Produtos ON Pedidos.ProdutoID = Produtos.ProdutoID;",
        expectedResultTable: {
            headers: ["PedidoID", "NomeProduto"],
            rows: [
                ["P001", "TV"],
                [null, "Geladeira"]
            ]
        }
    },
    {
        id: 38,
        difficulty: "advanced",
        title: "Atividade 8: Combinar Listas de E-mails (UNION ALL)",
        description: "Combine todos os `Email`s de `Clientes` e `Funcionarios` em uma única lista, incluindo duplicatas. Use `UNION ALL`.",
        initialTable: {
            name: "Clientes",
            headers: ["ClienteID", "Email"],
            rows: [
                ["1", "ana@example.com"],
                ["2", "joao@example.com"]
            ]
        },
        initialTable2: {
            name: "Funcionarios",
            headers: ["FuncionarioID", "Email"],
            rows: [
                ["101", "joao@example.com"],
                ["102", "maria@example.com"]
            ]
        },
        expectedSql: "SELECT Email FROM Clientes UNION ALL SELECT Email FROM Funcionarios;",
        expectedResultTable: {
            headers: ["Email"],
            rows: [
                ["ana@example.com"],
                ["joao@example.com"],
                ["joao@example.com"],
                ["maria@example.com"]
            ]
        }
    },
    {
        id: 39,
        difficulty: "advanced",
        title: "Atividade 9: Encontrar Pares de Funcionários no Mesmo Departamento (SELF-JOIN)",
        description: "Na tabela `Funcionarios`, encontre pares de funcionários que trabalham no mesmo `Departamento`, mas que não são a mesma pessoa. Exiba o nome de ambos os funcionários e o departamento. Use `SELF-JOIN`.",
        initialTable: {
            name: "Funcionarios",
            headers: ["ID", "Nome", "Departamento"],
            rows: [
                ["1", "Alice", "Vendas"],
                ["2", "Bob", "Marketing"],
                ["3", "Carla", "Vendas"],
                ["4", "David", "TI"]
            ]
        },
        expectedSql: "SELECT A.Nome AS Funcionario1, B.Nome AS Funcionario2, A.Departamento FROM Funcionarios A JOIN Funcionarios B ON A.Departamento = B.Departamento AND A.ID <> B.ID;",
        expectedResultTable: {
            headers: ["Funcionario1", "Funcionario2", "Departamento"],
            rows: [
                ["Alice", "Carla", "Vendas"],
                ["Carla", "Alice", "Vendas"]
            ]
        }
    },
    {
        id: 40,
        difficulty: "advanced",
        title: "Atividade 10: Criar uma View de Produtos Caros",
        description: "Crie uma view chamada `ProdutosCaros` que inclui `NomeProduto` e `Preco` para todos os produtos com `Preco` superior a 500.",
        initialTable: {
            name: "Produtos",
            headers: ["ProdutoID", "NomeProduto", "Preco"],
            rows: [
                ["1", "Mouse", "25.00"],
                ["2", "Laptop", "1200.00"],
                ["3", "Teclado", "75.00"],
                ["4", "Monitor", "350.00"]
            ]
        },
        expectedSql: "CREATE VIEW ProdutosCaros AS SELECT NomeProduto, Preco FROM Produtos WHERE Preco > 500;",
        expectedResultTable: {
            headers: ["NomeProduto", "Preco"],
            rows: [
                ["Laptop", "1200.00"]
            ]
        }
    },
    {
        id: 41,
        difficulty: "advanced",
        title: "Atividade 11: Criar Tabela de Logs de Erro",
        description: "Crie uma nova tabela chamada `LogErros` com as colunas: `LogID` (INT PRIMARY KEY), `MensagemErro` (VARCHAR(255) NOT NULL), e `DataHora` (DATETIME DEFAULT GETDATE()).",
        initialTable: null, // No initial table needed for CREATE TABLE
        expectedSql: "CREATE TABLE LogErros ( LogID INT PRIMARY KEY, MensagemErro VARCHAR(255) NOT NULL, DataHora DATETIME DEFAULT GETDATE() );",
        expectedResultTable: {
            name: "Estrutura da Tabela LogErros (Depois)",
            headers: ["Coluna", "Tipo", "Restrições"],
            rows: [
                ["LogID", "INT", "PRIMARY KEY"],
                ["MensagemErro", "VARCHAR(255)", "NOT NULL"],
                ["DataHora", "DATETIME", "DEFAULT GETDATE()"]
            ]
        }
    },
    {
        id: 42,
        difficulty: "advanced",
        title: "Atividade 12: Adicionar Coluna 'Telefone' à Tabela Clientes",
        description: "Adicione uma nova coluna `Telefone` (VARCHAR(20)) à tabela `Clientes`.",
        initialTable: {
            name: "Clientes (Antes)",
            headers: ["ClienteID", "Nome"],
            rows: [
                ["1", "João"]
            ]
        },
        expectedSql: "ALTER TABLE Clientes ADD Telefone VARCHAR(20);",
        expectedResultTable: {
            name: "Clientes (Depois)",
            headers: ["ClienteID", "Nome", "Telefone"],
            rows: [
                ["1", "João", "NULL"]
            ]
        }
    },
    {
        id: 43,
        difficulty: "advanced",
        title: "Atividade 13: Excluir Clientes Inativos da Cidade X",
        description: "Exclua da tabela `Clientes` todos os registros onde o `Status` é 'Inativo' E a `Cidade` é 'Rio de Janeiro'.",
        initialTable: {
            name: "Clientes (Antes)",
            headers: ["ClienteID", "Nome", "Cidade", "Status"],
            rows: [
                ["1", "Ana", "São Paulo", "Ativo"],
                ["2", "Bruno", "Rio de Janeiro", "Inativo"],
                ["3", "Carla", "Rio de Janeiro", "Ativo"],
                ["4", "Daniel", "Rio de Janeiro", "Inativo"]
            ]
        },
        expectedSql: "DELETE FROM Clientes WHERE Status = 'Inativo' AND Cidade = 'Rio de Janeiro';",
        expectedResultTable: {
            name: "Clientes (Depois)",
            headers: ["ClienteID", "Nome", "Cidade", "Status"],
            rows: [
                ["1", "Ana", "São Paulo", "Ativo"],
                ["3", "Carla", "Rio de Janeiro", "Ativo"]
            ]
        }
    },
    {
        id: 44,
        difficulty: "advanced",
        title: "Atividade 14: Esvaziar Tabela de Pedidos Antigos",
        description: "Remova todas as linhas da tabela `PedidosAntigos`, mas mantenha sua estrutura vazia. Use `TRUNCATE TABLE`.",
        initialTable: {
            name: "PedidosAntigos (Antes)",
            headers: ["PedidoID", "DataPedido"],
            rows: [
                ["P001", "2022-01-01"],
                ["P002", "2022-02-15"]
            ]
        },
        expectedSql: "TRUNCATE TABLE PedidosAntigos;",
        expectedResultTable: {
            name: "PedidosAntigos (Depois)",
            headers: ["PedidoID", "DataPedido"],
            rows: [] // Tabela vazia
        }
    },
    {
        id: 45,
        difficulty: "advanced",
        title: "Atividade 15: Média de Vendas por Mês com Filtro de Média",
        description: "Calcule a média de `ValorVenda` por `Mes` na tabela `Vendas`, mostrando apenas os meses onde a média de vendas é superior a 150.",
        initialTable: {
            name: "Vendas",
            headers: ["VendaID", "Mes", "ValorVenda"],
            rows: [
                ["1", "1", "100.00"],
                ["2", "1", "200.00"],
                ["3", "2", "120.00"],
                ["4", "2", "180.00"],
                ["5", "3", "300.00"]
            ]
        },
        expectedSql: "SELECT Mes, AVG(ValorVenda) AS MediaVendas FROM Vendas GROUP BY Mes HAVING AVG(ValorVenda) > 150;",
        expectedResultTable: {
            headers: ["Mes", "MediaVendas"],
            rows: [
                ["1", "150.00"], // (100+200)/2 = 150
                ["2", "150.00"], // (120+180)/2 = 150
                ["3", "300.00"] // Média para o mês 3
            ]
        }
    }
];

const popularCommandsContainer = document.getElementById('popularCommands');
const searchInput = document.getElementById('searchInput');
const searchResultsContainer = document.getElementById('searchResults');
const commandDetailsContainer = document.getElementById('commandDetails');
const activitiesContentContainer = document.getElementById('activitiesContent'); // Para a nova página

// Função para alternar a visibilidade da categoria
function toggleCategory(categoryId) {
    const categoryCommandsDiv = document.getElementById(categoryId);
    const toggleIcon = document.querySelector(`#popularCommands .category-heading[data-target="${categoryId}"] .category-toggle-icon`);

    if (categoryCommandsDiv && toggleIcon) {
        categoryCommandsDiv.classList.toggle('collapsed');
        toggleIcon.classList.toggle('rotated'); // Rotaciona o ícone quando recolhido/expandido
    }
}

// Função para exibir os comandos populares, agora por categoria
function displayPopularCommands() {
    // Só executa se estiver na página index.html
    if (!popularCommandsContainer) return;

    popularCommandsContainer.innerHTML = '';
    const categories = {};

    // Agrupar comandos por categoria, filtrando apenas os populares para esta lista
    sqlCommands.filter(cmd => cmd.isPopular).forEach(cmd => {
        if (!categories[cmd.category]) {
            categories[cmd.category] = [];
        }
        categories[cmd.category].push(cmd);
    });

    // Ordenar categorias
    const sortedCategoryNames = Object.keys(categories).sort();

    sortedCategoryNames.forEach((categoryName, index) => {
        const categoryId = `category-${index}`; // ID único para cada lista de comandos da categoria

        // Cria o título da categoria com ícone de alternância
        const categoryHeading = document.createElement('h3');
        categoryHeading.className = 'category-heading';
        categoryHeading.setAttribute('data-target', categoryId); // Linka o título ao div de comandos
        categoryHeading.onclick = () => toggleCategory(categoryId); // Adiciona evento de clique para alternar

        // Usa o ícone de seta para a direita (rotacionado quando expandido)
        categoryHeading.innerHTML = `
            <span>${categoryName}</span>
            <svg class="category-toggle-icon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        `;
        popularCommandsContainer.appendChild(categoryHeading);

        // Cria o contêiner para os comandos dentro desta categoria
        const categoryCommandsDiv = document.createElement('div');
        categoryCommandsDiv.id = categoryId;
        // Adiciona a classe 'collapsed' aqui para que comecem recolhidas
        categoryCommandsDiv.className = 'category-commands collapsed';

        // Ordena os comandos dentro de cada categoria e os adiciona
        categories[categoryName].sort((a, b) => a.name.localeCompare(b.name)).forEach(cmd => {
            const button = document.createElement('button');
            button.className = 'popular-command-button w-full text-left px-4 py-2 rounded-lg bg-[#FF8C42] hover:bg-[#FF7A2B] focus:ring-[#FF9933] shadow-sm mb-1'; /* Laranja Itaú mais claro */
            button.textContent = cmd.name;
            button.onclick = () => displayCommandDetails(cmd);
            categoryCommandsDiv.appendChild(button);
        });
        popularCommandsContainer.appendChild(categoryCommandsDiv);
    });
}

// Função para filtrar comandos na pesquisa
function filterCommands() {
    // Só executa se estiver na página index.html
    if (!searchInput) return;

    // Obtém o termo de pesquisa e o converte para minúsculas, removendo espaços em branco extras
    const searchTerm = searchInput.value.toLowerCase().trim();
    searchResultsContainer.innerHTML = ''; // Limpa os resultados anteriores

    // Recolhe todas as categorias da barra lateral
    document.querySelectorAll('.category-commands').forEach(div => {
        div.classList.add('collapsed');
        const toggleIcon = document.querySelector(`#popularCommands .category-heading[data-target="${div.id}"] .category-toggle-icon`);
        if (toggleIcon) {
            toggleIcon.classList.remove('rotated');
        }
    });

    if (searchTerm.length > 0) {
        // Filtra TODOS os comandos (sem o filtro .isPopular) para a barra de pesquisa
        let filtered = sqlCommands.filter(cmd =>
            cmd.name.toLowerCase().includes(searchTerm) ||
            cmd.description.toLowerCase().includes(searchTerm) ||
            cmd.examples.some(ex => ex.code.toLowerCase().includes(searchTerm) || ex.explanation.toLowerCase().includes(searchTerm))
        );

        // Prioriza correspondências exatas no nome do comando
        filtered.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA === searchTerm) return -1; // Exact match comes first
            if (nameB === searchTerm) return 1;
            return nameA.localeCompare(nameB); // Otherwise, sort alphabetically
        });

        if (filtered.length > 0) {
            searchResultsContainer.classList.remove('hidden');
            filtered.forEach(cmd => {
                const div = document.createElement('div');
                div.className = 'command-button px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg';

                // Highlight the matched text in the command name and description snippet
                const highlightedName = cmd.name.replace(new RegExp(searchTerm, 'gi'), match => `<span class="highlight">${match}</span>`);
                const descriptionSnippet = cmd.description.substring(0, 70) + (cmd.description.length > 70 ? '...' : '');
                const highlightedDescription = descriptionSnippet.replace(new RegExp(searchTerm, 'gi'), match => `<span class="highlight">${match}</span>`);

                div.innerHTML = `<span class="font-semibold text-[#FC6D20]">${highlightedName}</span> - ${highlightedDescription}`; /* Cor Itaú para o nome do comando na busca */
                div.onclick = () => {
                    displayCommandDetails(cmd);
                    searchInput.value = cmd.name; // Preenche o input com o nome do comando selecionado
                    searchResultsContainer.classList.add('hidden'); // Esconde os resultados
                };
                searchResultsContainer.appendChild(div);
            });
        } else {
            searchResultsContainer.classList.add('hidden');
            const noResultsDiv = document.createElement('div');
            noResultsDiv.className = 'px-4 py-2 text-gray-500';
            noResultsDiv.textContent = 'Nenhum comando encontrado.';
            searchResultsContainer.appendChild(noResultsDiv);
        }
    } else {
        // Se o termo de pesquisa estiver vazio, garante que os resultados da pesquisa estejam ocultos
        searchResultsContainer.classList.add('hidden');
    }
}

// Helper function to render a table
function renderTable(tableName, headers, rows) {
    if (!headers || !rows || rows.length === 0) {
        return `<p class="text-gray-500 italic mt-2">Nenhum dado para exibir para ${tableName}.</p>`;
    }
    let tableHtml = `<h5 class="text-xl font-medium text-gray-800 mb-2">${tableName}</h5>`;
    tableHtml += `<table class="min-w-full divide-y divide-gray-200 shadow-md rounded-lg mb-6"><thead><tr>`;
    headers.forEach(header => {
        tableHtml += `<th class="px-6 py-3 bg-[#003060] text-left text-xs font-medium text-white uppercase tracking-wider">${header}</th>`; /* Azul escuro Itaú para o cabeçalho da tabela */
    });
    tableHtml += `</tr></thead><tbody class="bg-white divide-y divide-gray-200">`;
    rows.forEach(row => {
        tableHtml += `<tr>`;
        row.forEach(cell => {
            tableHtml += `<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${cell}</td>`;
        });
        tableHtml += `</tr>`;
    });
    tableHtml += `</tbody></table>`;
    return tableHtml;
}

// Função para exibir detalhes do comando (para index.html)
function displayCommandDetails(command) {
    // Só executa se estiver na página index.html
    if (!commandDetailsContainer) return;

    commandDetailsContainer.innerHTML = `
        <h3 class="text-3xl font-bold text-[#FC6D20] mb-3">${command.name}</h3> <p class="text-lg mb-6">${command.description}</p>
    `;

    // Adiciona as tabelas de exemplo se existirem
    if (command.tables && command.tables.length > 0) {
        commandDetailsContainer.innerHTML += `
            <h4 class="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Tabelas de Exemplo (Antes):</h4>
        `;
        command.tables.forEach(table => {
            commandDetailsContainer.innerHTML += renderTable(table.name, table.headers, table.rows);
        });
    }

    commandDetailsContainer.innerHTML += `
        <h4 class="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Exemplos de Usabilidade:</h4>
    `;

    command.examples.forEach(example => {
        const exampleDiv = document.createElement('div');
        exampleDiv.className = 'example-section mb-6';
        exampleDiv.innerHTML = `
            <h5 class="text-xl font-medium text-gray-800 mb-2">${example.title}</h5>
            <div class="code-block">
                <pre><code>${example.code}</code></pre>
            </div>
            <p class="text-md text-gray-600 mt-2">${example.explanation}</p>
        `;

        // Adiciona a tabela resultante ou o estado da tabela após o comando
        if (example.resultTable) {
            exampleDiv.innerHTML += `
                <h5 class="text-xl font-medium text-[#003060] mt-4 mb-2">Tabela Resultante:</h5> ${renderTable(example.resultTable.name || 'Resultado', example.resultTable.headers, example.resultTable.rows)}
            `;
        } else if (example.afterStateTable) {
             exampleDiv.innerHTML += `
                <h5 class="text-xl font-medium text-[#003060] mt-4 mb-2">Estado da Tabela Após o Comando:</h5> ${renderTable(example.afterStateTable.name, example.afterStateTable.headers, example.afterStateTable.rows)}
            `;
        }
        commandDetailsContainer.appendChild(exampleDiv);
    });
}

// Função para exibir as atividades de uma determinada dificuldade
function displayActivities(difficulty) {
    if (!activitiesContentContainer) return; // Garante que estamos na página de atividades

    activitiesContentContainer.innerHTML = '';
    const filteredActivities = sqlActivities.filter(activity => activity.difficulty === difficulty);

    if (filteredActivities.length === 0) {
        activitiesContentContainer.innerHTML = `<p class="text-center text-gray-500">Nenhuma atividade encontrada para a dificuldade "${difficulty}".</p>`;
        return;
    }

    filteredActivities.forEach(activity => {
        const activityDiv = document.createElement('div');
        activityDiv.className = 'activity-card mb-8 p-6 bg-white rounded-lg shadow-md';
        activityDiv.innerHTML = `
            <h3 class="text-2xl font-bold text-[#FC6D20] mb-3">${activity.title}</h3>
            <p class="text-lg mb-4">${activity.description}</p>
            ${activity.initialTable ? renderTable(activity.initialTable.name, activity.initialTable.headers, activity.initialTable.rows) : ''}
            ${activity.initialTable2 ? renderTable(activity.initialTable2.name, activity.initialTable2.headers, activity.initialTable2.rows) : ''}
            <h4 class="text-xl font-semibold text-gray-800 mb-2">Seu Código SQL:</h4>
            <textarea class="sql-input w-full p-3 border border-gray-300 rounded-md mb-4 font-mono text-sm" rows="6" placeholder="Escreva seu comando SQL aqui..."></textarea>
            <button class="check-answer-button bg-[#003060] text-white px-6 py-3 rounded-lg hover:bg-[#002040] transition-colors duration-300 shadow-md">Verificar Resposta</button>
            <div class="feedback-area mt-4 text-center font-semibold"></div>
            <div class="result-area mt-6"></div>
        `;
        activitiesContentContainer.appendChild(activityDiv);

        const sqlInput = activityDiv.querySelector('.sql-input');
        const checkButton = activityDiv.querySelector('.check-answer-button');
        const feedbackArea = activityDiv.querySelector('.feedback-area');
        const resultArea = activityDiv.querySelector('.result-area');

        checkButton.onclick = () => {
            const userAnswer = sqlInput.value.trim().replace(/\s+/g, ' ').toLowerCase(); // Normaliza e deixa minúsculas
            const correctAnswer = activity.expectedSql.trim().replace(/\s+/g, ' ').toLowerCase(); // Normaliza e deixa minúsculas

            feedbackArea.innerHTML = '';
            resultArea.innerHTML = '';

            if (userAnswer === correctAnswer) {
                feedbackArea.className = 'feedback-area mt-4 text-center font-semibold text-green-600';
                feedbackArea.textContent = 'Parabéns! Sua resposta está correta!';
                if (activity.expectedResultTable) {
                    resultArea.innerHTML = `
                        <h4 class="text-xl font-semibold text-gray-800 mt-6 mb-2">Resultado Esperado:</h4>
                        ${renderTable(activity.expectedResultTable.name || 'Resultado', activity.expectedResultTable.headers, activity.expectedResultTable.rows)}
                    `;
                }
            } else {
                feedbackArea.className = 'feedback-area mt-4 text-center font-semibold text-red-600';
                feedbackArea.textContent = 'Ops! Sua resposta está incorreta. Tente novamente.';
                if (activity.expectedResultTable) {
                     resultArea.innerHTML = `
                        <h4 class="text-xl font-semibold text-gray-800 mt-6 mb-2">Comando Correto:</h4>
                        <div class="code-block mb-4"><pre><code>${activity.expectedSql}</code></pre></div>
                        <h4 class="text-xl font-semibold text-gray-800 mt-6 mb-2">Resultado Esperado:</h4>
                        ${renderTable(activity.expectedResultTable.name || 'Resultado', activity.expectedResultTable.headers, activity.expectedResultTable.rows)}
                    `;
                }
            }
        };
    });
}

// Adiciona event listeners para os botões de aba
function setupTabListeners() {
    const tabButtons = document.querySelectorAll('.tab-button');
    if (tabButtons.length === 0) return; // Garante que estamos na página de atividades

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const difficulty = button.dataset.difficulty;
            displayActivities(difficulty);
        });
    });

    // Ativa a primeira aba por padrão ao carregar a página de atividades
    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }
}

// Esconder resultados da pesquisa ao clicar fora (para index.html)
document.addEventListener('click', function(event) {
    if (searchInput && searchResultsContainer) { // Check if elements exist (i.e., on index.html)
        if (!searchInput.contains(event.target) && !searchResultsContainer.contains(event.target)) {
            searchResultsContainer.classList.add('hidden');
        }
    }
});

// Inicializar a exibição de comandos populares ao carregar a página (para index.html)
// E configurar listeners para as atividades (para activities.html)
window.onload = () => {
    displayPopularCommands(); // Para index.html
    setupTabListeners(); // Para activities.html
};