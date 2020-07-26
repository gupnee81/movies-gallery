import styled from 'styled-components';
import { PageBodyBreakPoint } from 'Utils/constants';

export const AppHeader = styled.div`
  background-color: #2e2c2b;
  padding: 20px;
  text-align: center;
  color: white;
  height: 140px;
`;

export const Heading = styled.h1`
  color: white;
  margin-top: 0;
`;

export const InputBox = styled.div`
  justify-content: center;
`;

export const InputText = styled.input`
  height: 30px;
  margin: 0 20px;
  text-align: center;
  border-radius: 2px;
  border: none;
  padding: 6px;
  display: inline-block;
  width: 20%;

  @media (max-width: ${PageBodyBreakPoint.mdMobileMax}) {
    width: 50%;
    margin: 0 10px;
  }
`;

export const ThumbnailGallery = styled.div`
  width: 100%;
  border: 1ps solid yellow;
  text-align: center;
  position: relative;
  margin-top: 190px;
  padding: 30px;
`;

export const Button = styled.button`
  background-color: #e7c748;
  border-radius: 24px;
  padding: 0 30px;
  height: 40px;
  color: #2e2c2b;
  border: 1px solid #e7c748;
  cursor: pointer;
  display: inline-block;
  &:hover {
    background-color: #fbe075;
  }
`;

export const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #2e2c2b;
  color: white;
  text-align: center;
  height: 50px;
`;

export const PageContainer = styled.div`
  vertical-align: top;
  height: calc(100% - 170px);
  position: fixed;
  padding-left: 0;
  padding-right: 30px;
`;

export const Error = styled.div`
  text-align: center;
  padding: 10%;
  color: red;
  font-size: 20px;
`;

export const Tag = styled.span`
  background-color: #e7c748;
  height: 30px;
  width: 30px;
  color: #2e2c2b;
  display: inline-block;
  border-radius: 15px;
  vertical-align: middle;
  box-sizing: border-box;
  padding: 4px 11px;
  font-size: 14px;
`;
