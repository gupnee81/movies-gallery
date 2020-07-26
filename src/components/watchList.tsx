import React from 'react';
import { ListContainer, List, Poster, Details, Button, WatchListDiv } from './styles';
import { IMovie } from 'Interface/common.interface';

interface IProps {
  favList: IMovie[];
  removeFromWatchList: (movieID: string) => void;
}

class WatchList extends React.Component<IProps, {}> {
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
              this.props.removeFromWatchList(movieDetails.imdbID);
            }}
          >
            Remove
          </Button>
        </Details>
      </List>
    );
  };

  render() {
    return (
      <React.Fragment>
        <WatchListDiv>
          <ListContainer>
            {this.props.favList.map((movie: IMovie, idx: number) => this.renderTile(movie, idx))}
          </ListContainer>
        </WatchListDiv>
      </React.Fragment>
    );
  }
}

export default WatchList;
