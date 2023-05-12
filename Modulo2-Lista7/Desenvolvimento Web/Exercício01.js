const express = require('express');
const app = express();


app.get('/usuarios', (req, res) => {
  const usuarios = [
    {
      nomeUsuario: 'João',
      criadoEm: '2023-05-12',
      idade: 30,
      email: 'joao@example.com',
      isAdmin: false,
      telefone: ['+55 11 12345678', '+55 11 87654321'],
      endereco: ['Rua A, 123', 'São Paulo', 'SP', 'Brasil'],
    },
    {
      nomeUsuario: 'Maria',
      criadoEm: '2023-05-12',
      idade: 25,
      email: 'maria@example.com',
      isAdmin: true,
      telefone: ['+55 11 12345678', '+55 11 87654321'],
      endereco: ['Rua B, 456', 'São Paulo', 'SP', 'Brasil'],
    },
    {
        nomeUsuario: 'Junior Eloy',
        criadoEm: '1945-05-08',
        idade: 25,
        email: 'Eloy@example.com',
        isAdmin: true,
        telefone: ['+55 11 12345678', '+55 11 87654321'],
        endereco: ['Rua B, 456', 'São Paulo', 'SP', 'Brasil'],
      },
      {
        nomeUsuario: 'Manuel Gomes',
        criadoEm: '1968-09-10',
        idade: 25,
        email: 'BluePen@example.com',
        isAdmin: true,
        telefone: ['+55 11 12345678', '+55 11 87654321'],
        endereco: ['Rua B, 456', 'São Paulo', 'SP', 'Brasil'],
      },
      {
        nomeUsuario: 'Mariah',
        criadoEm: '2008-19-12',
        idade: 25,
        email: 'Shadow@example.com',
        isAdmin: true,
        telefone: ['+55 11 12345678', '+55 11 87654321'],
        endereco: ['Rua B, 456', 'São Paulo', 'SP', 'Brasil'],
      },
  ];
  
  res.send(usuarios);
});


app.get('/produtos', (req, res) => {
  const produtos = [
    {
      nomeProduto: 'Camiseta',
      descricao: 'Camiseta de algodão',
      valor: 29.90,
      criadoEm: '2023-05-11',
      emEstoque: true,
    },
    {
      nomeProduto: 'Calça',
      descricao: 'Calça jeans',
      valor: 79.90,
      criadoEm: '2023-05-11',
      emEstoque: false,
    },
    {
        nomeProduto: 'Perna de cavalo',
        descricao: 'Perna de cavalo',
        valor: 60.99,
        criadoEm: '2000-31-12',
        emEstoque: false,
    },
    {
        nomeProduto: 'Caneta azul',
        descricao: 'Calça jeans',
        valor: 1.90,
        criadoEm: '2008-13-10',
        emEstoque: false,
    },
    {
        nomeProduto: 'Esmeralda do Caos',
        descricao: 'Poder para um ser perfeito',
        valor: 99999999999999999999999999999999999999999999999999999999999999.90,
        criadoEm: '????-??-??',
        emEstoque: true,
    },

  ];
  
  res.send(produtos);
});


app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
