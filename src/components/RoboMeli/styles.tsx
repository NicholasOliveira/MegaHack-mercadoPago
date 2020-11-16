import styled from 'styled-components';
import { Button } from '@material-ui/core';
import meliCabecaChat from '../../assets/images/meli_cabeca_chat_opac.svg';

export const ButtonMask = styled(Button)`
  z-index: 1;
`;
export const ChatMsgs = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  overflow-y: auto;
  max-height: 250px;
  .Left {
    align-self: flex-start;
    background-color: #88eb74;
  }
  .Right {
    align-self: flex-end;
    background-color: #eee;
  }
`;
export const ChatMsgItem = styled.li`
  width: 60%;
  padding: 3px 5px;
  border-radius: 5px;
  margin: 10px;
  text-align: left;
  text-transform: capitalize;
`;

export const Labels = styled.div`
  display: flex;
  width: 90%;
  min-width: 250px;
  overflow-x: scroll;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 80px;
  margin: 0px 10px;
`;
export const LabelItem = styled.div`
  cursor: pointer;
  padding: 5px 15px;
  font-size: 12px;
  color: #333;
  border-radius: 5px;
  border: 1px solid #ccc;
  white-space: nowrap;
  margin: 5px;
  &:hover {
    border: 1px solid #afaadb;
    color: #3729b6;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 0;
  right: 0;
  img {
    width: 120px;
    height: 120px;
    margin: 40px;
    cursor: pointer;
  }
`;

export const ChatMeli = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 400px;
  border-radius: 10px;
  border: 2px solid #019ee2;
  position: absolute;
  bottom: 80%;
  right: 10%;
  min-width: 300px;
  min-height: 400px;
  background: url(${meliCabecaChat}) no-repeat center 20% #fff;
  background-size: 40%, 90%;
  z-index: 3;
  > img {
    width: 200px;
    opacity: 0.5;
    top: 130px;
    position: absolute;
    left: -15%;
    width: 100%;
  }
  label {
    display: flex;
    width: 90%;
    height: 40px;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    border-radius: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    img {
      width: 20px;
      height: 20px;
      margin: 0 10px 0;
    }
    input {
      width: 100%;
      height: 100%;
      padding: 10px 10px 10px;
      border: 0;
      outline: 0;
      background: transparent;
    }
    input:read-only {
      opacity: 0.2;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 120px;
  flex-direction: column;
`;
