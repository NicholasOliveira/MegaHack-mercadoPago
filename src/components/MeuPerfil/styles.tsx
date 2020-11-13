import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 256px;
  background-color: #008ad6;
  height: 100%;
  min-height: 64px;
  color: #fff;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    span {
      display: block;
      font-size: 11px;
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
