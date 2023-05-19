<h1 align="center"> Bitcent - Controle Financeiro</h1>

<p align="center">Bitcent é uma aplicação web para controle de finanças pessoais com landing page e dashboard. O projeto utiliza o Firebase para autenticação e armazenamento de dados.</p>

| :placard: Vitrine.Dev |                                         |
| --------------------- | --------------------------------------- |
| :sparkles: Nome       | **Bitcent - Controle Financeiro**       |
| :label: Tecnologias   | NextJS, TailwindCSS, Mantine, Firebase  |
| :rocket: URL          | https://bitcent-diovane.vercel.app/            |
| :fire: Repositorio    | https://github.com/diovanealves/BitCent |

![](.github/cover.svg#vitrinedev)

<p align="center">
<img src=".github/logo.png" alt="Logo" width="100" />
</p>

<p align="center">Projeto foi desenvolvido durante a <a href="https://transformacao.dev/">Semana Tranformação.DEV</a>, que ocorreu nos dias 8 a 12 de Maio de 2023.</p>

<br>

## Tecnologias

Lista de tecnologias utilizadas no projeto:

- [React](https://reactjs.org)
- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Mantine](https://mantine.dev/)

## Executando o projeto

1. Clone o repositório:

```bash
$ git clone https://github.com/diovanealves/BitCent
$ cd Bitcent
```

2. Crie um projeto no Firebase e ative o Firestore e Autenticação com Google.

- Permissões do Firestore:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
    	allow read, write: if false;
    }

    match /finance/{email}/transactions/{id} {
  		allow read: if (request.auth != null && request.auth.token.email == email);
      allow write: if (request.auth != null && request.auth.token.email == email);
    }
  }
}
```

3. É preciso criar um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```bash
NEXT_PUBLIC_FIREBASE_PROJECTID=
NEXT_PUBLIC_FIREBASE_AUTHDOMAIN=
NEXT_PUBLIC_FIREBASE_APIKEY=
```

Usar as credenciais do seu projeto no Firebase.

4. Dentro da pasta do projeto, execute os comandos abaixo:

```bash
# Instalar as dependências
$ npm install

# Iniciar o projeto
$ npm run dev
```

O app estará disponível no endereço http://localhost:3000.

<h2 align="center">🤝 Colaboradores</h2>
<table>
  <tr>
    <td>
        <img src="https://avatars.githubusercontent.com/u/87160050?v=4" width="100px;" alt="Foto do Diovane Alves no GitHub"/>
            <a href="https://github.com/diovanealves" style="color:#4f46e5" align="center">
                <p>Github</p>
            </a>
            <a href="https://www.linkedin.com/in/diovane-alves-de-oliveira-5320a0217/" style="color:#4f46e5" align="center">
                <p>Linkedin</p>
            </a>
            <a href="https://twitter.com/deluxyfps" style="color:#4f46e5" align="center">
                <p>Twitter</p>
            </a>
    </td>
  </tr>
</table>

## License

Esse projeto está sob a [licença MIT](LICENSE.md).
