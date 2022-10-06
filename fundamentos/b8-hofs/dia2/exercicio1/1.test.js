const infoLivro = require('./1')
const book = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    }
]

test('retorna informacoes dos livros', () => {
  expect(infoLivro(book)).toEqual(["As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin", "O Senhor dos Anéis - Fantasia - J. R. R. Tolkien", "Fundação - Ficção Científica - Isaac Asimov", "Duna - Ficção Científica - Frank Herbert", "A Coisa - Terror - Stephen King", "O Chamado de Cthulhu - Terror - H. P. Lovecraft"])
})