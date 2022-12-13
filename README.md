# Descrição

Nessa semana você fará uma *Single-Page Application* (SPA) para um cinema, usando React Router! 

# Documentação da API

- **GET** Obter lista de filmes
    - Para obter os filmes, faça uma requisição `GET` para a URL
        
        ```
        https://mock-api.driven.com.br/api/v8/cineflex/movies
        ```
        
    
    - O servidor responde a esta requisição com um *array* de objetos que representam os filmes:
        
        ```jsx
        [
        	{
                id: 1,
                title: "2067",
                posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
                overview: "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
                releaseDate: "2020-10-01T00:00:00.000Z",
            },
            {
                id: 2,
                title: "Welcome to Sudden Death",
                posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
                overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
                releaseDate: "2020-09-29T00:00:00.000Z",
            }
        ]
        ```
        
- **GET** Obter lista de sessões de um filme
    - Para obter as sessões de um filme, faça uma requisição `GET` para a URL (trocando `ID_DO_FILME` para o id do filme desejado.)
    
    ```
    https://mock-api.driven.com.br/api/v8/cineflex/movies/ID_DO_FILME/showtimes
    ```
    
    - O servidor responde a esta requisição com um objeto que representa o filme com os dias e suas sessões:
    
    ```jsx
    {
        "id": 1,
        "title": "2067",
        "posterURL": "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
        "overview": "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
        "releaseDate": "2020-10-01T00:00:00.000Z",
        "days": [
            {
                "id": 24062021,
                "weekday": "Quinta-feira",
                "date": "24/06/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 1
                    },
                    {
                        "name": "19:00",
                        "id": 2
                    }
                ]
            },
            {
                "id": 25062021,
                "weekday": "Sexta-feira",
                "date": "25/06/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 3
                    },
                    {
                        "name": "19:00",
                        "id": 4
                    }
                ]
            },
            {
                "id": 26062021,
                "weekday": "Sábado",
                "date": "26/06/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 5
                    },
                    {
                        "name": "19:00",
                        "id": 6
                    }
                ]
            },
            {
                "id": 27062021,
                "weekday": "Domingo",
                "date": "27/06/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 7
                    },
                    {
                        "name": "19:00",
                        "id": 8
                    }
                ]
            },
            {
                "id": 28062021,
                "weekday": "Segunda-feira",
                "date": "28/06/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 9
                    },
                    {
                        "name": "19:00",
                        "id": 10
                    }
                ]
            },
            {
                "id": 29062021,
                "weekday": "Terça-feira",
                "date": "29/06/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 11
                    },
                    {
                        "name": "19:00",
                        "id": 12
                    }
                ]
            },
            {
                "id": 30062021,
                "weekday": "Quarta-feira",
                "date": "30/06/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 13
                    },
                    {
                        "name": "19:00",
                        "id": 14
                    }
                ]
            },
            {
                "id": 1072021,
                "weekday": "Quinta-feira",
                "date": "01/07/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 15
                    },
                    {
                        "name": "19:00",
                        "id": 16
                    }
                ]
            }
        ]
    }
    ```
    
- **GET** Obter lista de assentos de uma sessão
    - Para obter os assentos disponíveis de uma sessão, faça uma requisição `GET` para a URL (trocando `ID_DA_SESSAO` para a id da sessão desejada.)
    
    ```
    https://mock-api.driven.com.br/api/v8/cineflex/showtimes/ID_DA_SESSAO/seats
    ```
    
    - O servidor responde a esta requisição com um objeto que representa a sessão com seus dias e seu filme:
    
    ```json
    {
        "id": 1,
        "name": "15:00",
        "day": {
    			"id": 24062021,
          "weekday": "Quinta-feira",
          "date": "24/06/2021",
    		},
        "movie": {
            "id": 1,
            "title": "2067",
            "posterURL": "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
            "overview": "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
            "releaseDate": "2020-10-01T00:00:00.000Z",
        },
        "seats": [
    				{
                "id": 1,
                "name": "1",
                "isAvailable": false,
            },
            {
                "id": 2,
                "name": "2",
                "isAvailable": true,
            },
            {
                "id": 3,
                "name": "3",
                "isAvailable": true,
            },
            {
                "id": 4,
                "name": "4",
                "isAvailable": true,
            },
            {
                "id": 5,
                "name": "5",
                "isAvailable": true,
            },
            {
                "id": 6,
                "name": "6",
                "isAvailable": true,
            },
            {
                "id": 7,
                "name": "7",
                "isAvailable": true,
            },
            {
                "id": 8,
                "name": "8",
                "isAvailable": true,
            },
            {
                "id": 9,
                "name": "9",
                "isAvailable": true,
            },
            {
                "id": 10,
                "name": "10",
                "isAvailable": true,
            },
            {
                "id": 11,
                "name": "11",
                "isAvailable": true,
            },
            {
                "id": 12,
                "name": "12",
                "isAvailable": true,
            },
            {
                "id": 13,
                "name": "13",
                "isAvailable": true,
            },
            {
                "id": 14,
                "name": "14",
                "isAvailable": true,
            },
            {
                "id": 15,
                "name": "15",
                "isAvailable": true,
            },
            {
                "id": 16,
                "name": "16",
                "isAvailable": true,
            },
            {
                "id": 17,
                "name": "17",
                "isAvailable": true,
            },
            {
                "id": 18,
                "name": "18",
                "isAvailable": true,
            },
            {
                "id": 19,
                "name": "19",
                "isAvailable": true,
            },
            {
                "id": 20,
                "name": "20",
                "isAvailable": true,
            },
            {
                "id": 21,
                "name": "21",
                "isAvailable": true,
            },
            {
                "id": 22,
                "name": "22",
                "isAvailable": true,
            },
            {
                "id": 23,
                "name": "23",
                "isAvailable": true,
            },
            {
                "id": 24,
                "name": "24",
                "isAvailable": true,
            },
            {
                "id": 25,
                "name": "25",
                "isAvailable": true,
            },
            {
                "id": 26,
                "name": "26",
                "isAvailable": true,
            },
            {
                "id": 27,
                "name": "27",
                "isAvailable": true,
            },
            {
                "id": 28,
                "name": "28",
                "isAvailable": true,
            },
            {
                "id": 29,
                "name": "29",
                "isAvailable": true,
            },
            {
                "id": 30,
                "name": "30",
                "isAvailable": true,
            },
            {
                "id": 31,
                "name": "31",
                "isAvailable": true,
            },
            {
                "id": 32,
                "name": "32",
                "isAvailable": true,
            },
            {
                "id": 33,
                "name": "33",
                "isAvailable": true,
            },
            {
                "id": 34,
                "name": "34",
                "isAvailable": true,
            },
            {
                "id": 35,
                "name": "35",
                "isAvailable": true,
            },
            {
                "id": 36,
                "name": "36",
                "isAvailable": true,
            },
            {
                "id": 37,
                "name": "37",
                "isAvailable": true,
            },
            {
                "id": 38,
                "name": "38",
                "isAvailable": true,
            },
            {
                "id": 39,
                "name": "39",
                "isAvailable": true,
            },
            {
                "id": 40,
                "name": "40",
                "isAvailable": true,
            },
            {
                "id": 41,
                "name": "41",
                "isAvailable": true,
            },
            {
                "id": 42,
                "name": "42",
                "isAvailable": true,
            },
            {
                "id": 43,
                "name": "43",
                "isAvailable": true,
            },
            {
                "id": 44,
                "name": "44",
                "isAvailable": true,
            },
            {
                "id": 45,
                "name": "45",
                "isAvailable": true,
            },
            {
                "id": 46,
                "name": "46",
                "isAvailable": true,
            },
            {
                "id": 47,
                "name": "47",
                "isAvailable": true,
            },
            {
                "id": 48,
                "name": "48",
                "isAvailable": true,
            },
            {
                "id": 49,
                "name": "49",
                "isAvailable": true,
            },
            {
                "id": 50,
                "name": "50",
                "isAvailable": true,
            },
        ]
    }
    ```
    
- **POST** Reservar assentos
    - Para reservar assentos, faça uma requisição `POST` para a URL:
    
    ```
    https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many
    ```
    
    - Enviando no corpo da requisição um objeto no formato abaixo, sendo `ids` a array de ids dos assentos que você deseja reservar:
    
    ```jsx
    {
    	ids: [1, 2, 3],
    	name: "Fulano",
    	cpf: "12345678900"
    }
    ```
    
# Requisitos

- Geral
    - [X]  Manipule o HTML usando somente React (sem usar o document nem bibliotecas como jQuery)
    - [X]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub
    - [X]  **A cada requisito implementado** faça um commit com uma mensagem descritiva do que você evoluiu. Caso queira dividir um requisito em vários commits, não há problema. Mas evite colocar mais de um requisito no mesmo commit
    - [X]  O uso de styled-components é obrigatório
    - [X]  Não é permitido o uso de context
    - [X]  É obrigatório o deploy com Vercel
- Versionamento
    - [X]  Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do GitHub
    - [X]  Faça commits a cada funcionalidade implementada
- Layout
    - [X]  Aplicar layout para mobile, seguindo figma fornecido (não é necessário implementar um layout para desktop)
    - [X]  Use as exatamente cores indicadas no Figma para assento “Disponível”, “Selecionado” e “Indisponível”
- Escolha de Filme (rota "/")
    - [X]  Buscar as informações dos filmes pela API fornecida e exibir conforme layout fornecido
    - [X]  Ao clicar em um filme, o usuário deve ser redirecionado para a rota "/sessoes/:idFilme", sendo :idFilme o id do filme clicado
- Escolha de Sessão (rota "/sessoes/:idFilme")
    - [X]  A partir do id da URL, obtenha da API as sessões disponíveis para o filme e exiba conforme o layout fornecido
    - [X]  Ao clicar em uma sessão, o usuário deve ser redirecionado para a rota "/assentos/:idSessao", onde :idSessao é o id da sessão escolhida
- Escolha de Assento (rota "/assentos/:idSessao")
    - [X]  A partir do id da sessão, buscar os dados da sessão da API e exibir o layout conforme fornecido
    - [X]  Ao clicar em um assento disponível, o assento deve ser marcado como "Selecionado"
    - [X]  Ao clicar novamente em um assento selecionado, este deve voltar para "Disponível"
    - [X]  Ao clicar em um assento indisponível, deverá ser exibido um alerta de "Esse assento não está disponível"
    - [X]  O usuário pode selecionar vários assentos
    - [X]  O usuário deve poder inserir o nome e o CPF do comprador
    - [X]  Ao clicar em "Reservar assento(s)", o pedido deve ser enviado para o servidor e o usuário deve ser redirecionado para a rota "/sucesso".  Isso fará com os assentos marcados fiquem indisponíveis para outras marcações.
- Rodapé
    - [X]  Ao longo das telas de Sessão e Assento, deve ser exibido um rodapé com as informações do filme selecionado. Estas informações virão das chamadas à API em cada tela
- Sucesso
    - [X]  Implementar layout conforme fornecido, exibindo os dados do pedido feito
    - [X]  Ao clicar em "Voltar para Home" o usuário deve voltar para a rota inicial ("/"), com o pedido zerado

# Bônus (opcional)

- Botão de voltar
    - [X]  Adicione um botão de voltar no topo do site à esquerda
    - [X]  O topo do site deve estar fora dos componentes das páginas, ou seja, dentro do `<BrowserRouter>` do React Router
    - [X]  Ao clicar no botão voltar, o usuário deve retornar para a página que estava anteriormente
    - [X]  O botão não deve ser exibido na tela inicial
- Informação de comprador por assento
    - [X]  Faça com que os campos de Nome e CPF do comprador deixem de ser um único campo para serem campos pra cada assento selecionado. Ou seja, cada assento selecionado terá seu próprio Nome e CPF
    - [X]  Conforme a pessoa for selecionando assentos, os campos devem ser exibidos abaixo na quantidade condizente com os assentos selecionados
    - [X]  Ao desmarcar um assento que já possuía dados preenchidos, pergunte ao usuário com um **confirm** se ele gostaria realmente de remover o assento e apagar os dados
    - [X]  Modifique o envio dos dados para o servidor para seguir este formato:
        
        ```jsx
        {
        	ids: [1, 2, 3], // ids dos assentos
        	compradores: [
        		{ idAssento: 1, nome: "Fulano", cpf: "12345678900" },
        		{ idAssento: 2, nome: "Fulano 2", cpf: "12345678901" },
        		{ idAssento: 3, nome: "Fulano 3", cpf: "12345678902" },
        	]
        }
        ```
        
    - [X]  Na tela de sucesso, devem ser exibidos os nomes e CPFs de todos os compradores
