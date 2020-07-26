import styled from 'styled-components';
import { PageBodyBreakPoint } from 'Utils/constants';

export const ListContainer = styled.div`
  padding: 0;
  margin: 0;
  background-color: #000;
  margin-top: -5px;
`;

export const List = styled.div`
  width: 100%;
  height: auto;
  cursor: pointer;
  animation: all 0.3s ease-in-out;
  list-style: none;
  display: block;
  background-color: #2a2f39;
  color: #fff;
  margin-bottom: 3px;
  & img {
    width: 10%;
    height: 10%;
  }

  @media (max-width: ${PageBodyBreakPoint.mdMobileMax}) {
    & img {
      width: 20%;
      height: 20%;
    }
  }
`;

export const Poster = styled.div`
  display: inline;
  width: 40%;
`;

export const WatchListDiv = styled.div`
  height: 100%;
`;

export const Details = styled.div`
  vertical-align: top;
  display: inline-block;
  height: auto;
  width: 60%;
  padding: 10px 10px 0 10px;
  & div {
    margin: 10px;
  }
`;

export const Button = styled.button`
  background-color: #e7c748;
  border-radius: 24px;
  padding: 0 30px;
  height: 30px;
  color: #2e2c2b;
  border: 1px solid #e7c748;
  cursor: pointer;
  display: inline-block;
  margin: 5px;
  &:hover {
    background-color: #fbe075;
  }

  @media (max-width: ${PageBodyBreakPoint.mdMobileMax}) {
    padding: 0 20px;
    margin-bottom: 10px;
  }
`;

export const ModalTitle = styled.div`
  background-color: #2a2f39;
  height: 40px;
  color: #fff;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
`;

export const MoviesListDiv = styled.div`
  height: 100%;
`;
