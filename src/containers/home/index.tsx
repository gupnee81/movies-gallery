import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Heading, InputBox, Button, AppHeader, InputText, Footer, PageContainer, Error, Tag } from './styles';
import { initiateSearchRequest, addMovieToWatchList, removeMoviesFromWatchList } from './movies.actions';
import MovieTile from 'Components/movieTile';
import WatchList from 'Components/watchList';
import { setLocalStorage } from 'Utils/index';
import { IMovie, IStore } from 'Interface/common.interface';

interface IDispatchProps {
  initiateSearchRequest: (searchString: string) => void;
  addMovieToWatchList: (movies: IMovie[]) => void;
  removeMoviesFromWatchList: (movies: IMovie[]) => void;
}

interface IProps {
  moviesList: {
    Search?: IMovie[];
    Response: string;
    Error?: string;
  };
  moviesWatchList: IMovie[];
}

interface IState {
  searchText: string;
  activeTab: string;
  watchList: IMovie[];
}

export type ISearchMoviesProps = IProps & IDispatchProps;

class SearchPage extends React.Component<ISearchMoviesProps, IState> {
  constructor(props: ISearchMoviesProps) {
    super(props);
    this.state = {
      searchText: '',
      activeTab: '1',
      watchList: this.props.moviesWatchList || [],
    };
  }

  onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.currentTarget.value;
    const trimmedText = searchText.replace(/\s+$/, '');
    this.setState({ searchText: trimmedText });
  };

  handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement> & React.BaseSyntheticEvent) => {
    if (event.key === 'Enter') {
      this.props.initiateSearchRequest(this.state.searchText);
    }
  };

  addToWatchList = (movie: IMovie) => {
    console.log('MOVIE TO ADD IN THE WATCH LIST ::::: ', movie);
    const selectedMovies = this.props.moviesWatchList;
    const result = selectedMovies.find(selectedMovie => selectedMovie.imdbID === movie.imdbID);
    if (result === undefined) {
      selectedMovies.push(movie);
      this.setState({ watchList: selectedMovies }, () => {
        setLocalStorage('watchList', JSON.stringify(selectedMovies));
        this.props.addMovieToWatchList(selectedMovies);
      });
    }
  };

  removeFromWatchList = (imdbID: string) => {
    console.log('MOVIE TO BE REMOVE FROM WATCH LIST ::::: ', imdbID);
    const selectedMovies = this.props.moviesWatchList;
    const result = selectedMovies.filter(selectedMovie => selectedMovie.imdbID !== imdbID);
    this.setState({ watchList: result }, () => {
      setLocalStorage('watchList', JSON.stringify(result));
      this.props.removeMoviesFromWatchList(result);
    });
  };

  toggle = (tab: string) => {
    const { activeTab } = this.state;
    if (activeTab !== tab) this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <>
        <AppHeader>
          <Heading>Movies Search</Heading>
          <InputBox>
            <InputText
              type="text"
              value={this.state.searchText}
              onChange={this.onSearchInputChange}
              onKeyDown={this.handleKeyDown}
              placeholder="Type in to search movies"
            />
            <Button
              type="button"
              // tslint:disable-next-line: jsx-no-lambda
              onClick={() => {
                this.props.initiateSearchRequest(this.state.searchText);
              }}
            >
              Search
            </Button>
          </InputBox>
        </AppHeader>
        <PageContainer className="container">
          <Nav tabs={true}>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                // tslint:disable-next-line: jsx-no-lambda
                onClick={() => {
                  this.toggle('1');
                }}
              >
                Search results
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                // tslint:disable-next-line: jsx-no-lambda
                onClick={() => {
                  this.toggle('2');
                }}
              >
                Watchlist <Tag>{this.props.moviesWatchList.length}</Tag>
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab} style={{ height: 'calc(100% -  50px)', overflowY: 'auto' }}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  {this.props.moviesList.Search && (
                    <MovieTile movies={this.props.moviesList.Search} addToWatchList={this.addToWatchList} />
                  )}
                  {this.props.moviesList.Response && this.props.moviesList.Response === 'False' && (
                    <Error>{this.props.moviesList.Error}</Error>
                  )}
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  {this.props.moviesWatchList && this.props.moviesWatchList.length > 0 && (
                    <WatchList favList={this.state.watchList} removeFromWatchList={this.removeFromWatchList} />
                  )}
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </PageContainer>
        <Footer>
          <p>Footer</p>
        </Footer>
      </>
    );
  }
}

const mapStateToProps = (state: IStore) => {
  return {
    moviesList: state.movies.searchList,
    moviesWatchList: state.movies.moviesWatchList,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    initiateSearchRequest: (searchString: string) => {
      dispatch(initiateSearchRequest(searchString));
    },
    addMovieToWatchList: (movies: IMovie[]) => {
      dispatch(addMovieToWatchList(movies));
    },
    removeMoviesFromWatchList: (movies: IMovie[]) => {
      dispatch(removeMoviesFromWatchList(movies));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
