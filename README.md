## Url Shorted

Esta é um desafio simples que implementa um serviço de encurtamento de url. Este desafio faz parte do repositório [backend-br](https://github.com/backend-br).

## Requisitos

- O encurtador de URLs recebe uma URL longa como parâmetro inicial.
- O encurtamento será composto por um mínimo de 05 e um máximo de 10 caracteres.
- Apenas letras e números são permitidos no encurtamento.
- A URL encurtada será salva no banco de dados com um prazo de validade (você pode escolher a duração desejada).
  Ao receber uma chamada para a URL encurtada https://xxx.com/DXB6V, você deve fazer o redirecionamento para a URL original salva no banco de dados. Caso a URL não seja encontrada no banco, retorne o código de status HTTP 404 (Not Found).

## Como rodar o projeto

1 - Clone o repositório para sua máquina local:

```bash
git clone https://github.com/vhpporto/url-shorted
```

2 - Instale as dependências:

```bash
cd url-shorted
yarn
```

3 - Execute o projeto

```bash
yarn dev
```

O serviço estará rodando em http://localhost:3000.

## Uso

Endpoint

```
[POST] {{host}}/shorten-url
```

Corpo da requisição:

```json
{
  "url": "https://YYY.com.br"
}
```

Resposta

```json
{
  "url": "https://xxx.com/DXB6V"
}
```

Redirecionar para a URL original
Ao acessar a URL encurtada (https://xxx.com/DXB6V), o serviço redireciona para a URL original salva no banco de dados. Caso a URL não seja encontrada, retorna o código de status HTTP 404 (Not Found).
# url-shorted
