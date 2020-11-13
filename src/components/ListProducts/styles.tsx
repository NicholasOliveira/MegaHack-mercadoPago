import styled from 'styled-components';

export const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: transparent;
  height: 100%;
  min-height: 64px;
  color: #333;
  margin: 25px 0px;
  padding: 10px;
  border-bottom: 1px solid #d8d5d5;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > h4 {
    font-size: 20px;
    font-weight: normal;
    span {
      display: block;
      font-size: 12px;
      font-weight: normal;
      color: #807f7f;
    }
    div {
      font-size: 13px;
      font-weight: normal;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      svg {
        margin-left: 5px;
      }
    }
  }

  img {
    width: 46px;
    height: 46px;
    color: #fff;
    margin-right: 10px;
  }
`;
