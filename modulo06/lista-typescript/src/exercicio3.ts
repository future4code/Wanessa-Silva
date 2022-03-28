enum genero {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
  }
  
  type Movie = {
    name: string,
    release: number,
    genre: genero,
    score?: number
  }
  
  function orderMovie(name: string, release: number, genre: genero, score?: number): Movie {
    const movie: Movie = { name, release, genre, score }
  
    return movie

  }console.log(orderMovie("O iluminado", 1980, genero.TERROR));