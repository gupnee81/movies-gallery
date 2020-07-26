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
    width: 20%;
    height: 20%;
  }
`;

export const Poster = styled.div`
  display: inline;
  width: 40%;
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
  text-transform: uppercase;
  border: 1px solid #e7c748;
  cursor: pointer;
  display: inline-block;
  margin: 5px;
  &:hover {
    background-color: #fbe075;
  },
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
  overflow-y: auto;
  width: 50%;
  height: 100%;
  top: 160px;
  border: 1px dotted #2a2f39;
  float: left;
  min-height: 40px;
  @media (max-width: ${PageBodyBreakPoint.mdMobileMax}) {
    width: 98%;
    margin: 5px;
    top: 19%;
  }
`;

export const WatchListDiv = styled.div`
  overflow-y: auto;
  width: 50%;
  height: 100%;
  top: 160px;
  border: 1px dotted #2a2f39;
  min-height: 42px;

  @media (max-width: ${PageBodyBreakPoint.mdMobileMax}) {
    width: 98%;
    margin: 5px;
    top: 19%;
  }
`;
