export const getDirectorLine = (movie) => `Director:${movie.director.name}`;

export const getShortMovies = (movies) =>
  movies.filter((movie) => movie.duration < 100);

export const findByTitle = (movies, title) =>
  movies.find((movie) => movie.title === title);

export const getOscarsLine = (movie) => `Oscars:${movie.awards?.oscars ?? 0}`;

export const sortByYear = (movies) =>
  [...movies].sort((a, b) => a.year - b.year);

export const markAsWatched = (movies, id) => {
  const movie = movies.find((movie) => movie.id === id);
  return movies;
};

export const renameActor = (movie, index, newName) => {
  const copy = { ...movie, cast: [...movie.cast] };
  copy.cast[index] = { ...copy.cast[index], name: newName };
  return copy;
};
