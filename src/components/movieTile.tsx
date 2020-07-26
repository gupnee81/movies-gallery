import React from 'react';
import { ListContainer, List, Poster, Details, Button, MoviesListDiv, ModalTitle } from './styles';
import { IMovie } from 'Interface/common.interface';

interface IProps {
  movies: IMovie[];
  addToWatchList: (movieId: IMovie) => void;
}

class MovieTile extends React.Component<IProps, {}> {
  renderTile = (movieDetails: IMovie, idx: number) => {
    return (
      <List key={idx}>
        <Poster>
          <img src={movieDetails.Poster} alt={movieDetails.Title} />
        </Poster>
        <Details>
          <div>{movieDetails.Title}</div>
          <div>{movieDetails.Year}</div>
          <Button
            type="button"
            // tslint:disable-next-line: jsx-no-lambda
            onClick={() => {
              this.props.addToWatchList(movieDetails);
            }}
          >
            Add to watchlist
          </Button>
        </Details>
      </List>
    );
  };

  render() {
    return (
      <React.Fragment>
        <MoviesListDiv>
          <ModalTitle>Search results</ModalTitle>
          <ListContainer>
            {this.props.movies.map((movie: IMovie, idx: number) => this.renderTile(movie, idx))}
          </ListContainer>
        </MoviesListDiv>
      </React.Fragment>
    );
  }
}

export default MovieTile;
