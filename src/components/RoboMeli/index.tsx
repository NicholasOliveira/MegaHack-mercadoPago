import React, { useRef, useState, useEffect } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import imgMeli from '../../assets/images/meli.svg';
import microphone from '../../assets/images/microphone.svg';
import microphone2 from '../../assets/images/microphone2.svg';
import waveGif from '../../assets/images/wave.gif';
import dots from '../../assets/images/dots.gif';
import api from '../../services/MockedApi';

import {
  Container,
  ChatMeli,
  ButtonMask,
  Labels,
  LabelItem,
  ChatMsgs,
  ChatMsgItem,
} from './styles';

const Footer = () => {
  const [activeVoz, setactive] = useState(false);
  const [activeText, setativeText] = useState('');
  const [activeDots, setactiveDots] = useState(false);
  const [chatOpen, setchatOpen] = useState(false);
  const [listMsgs, setListMsgs] = useState([{ msg: '', userId: 0 }]);
  const messagesEndRef: any = useRef(null);
  const { transcript, resetTranscript } = useSpeechRecognition();

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    const speak = (text: any) => {
      const options = new SpeechSynthesisUtterance(text);
      options.lang = 'pt-BR';
      window.speechSynthesis.speak(options);
    };
    async function resquestData() {
      const response = await api.get(
        `products/message/${listMsgs[listMsgs.length - 1].msg}`
      );
      let indice = 0;
      for (let i = 0; i < response.data.length; i++) {
        if (typeof response.data[i] === 'object') {
          indice = i;
          break;
        }
      }

      setListMsgs([
        ...listMsgs,
        { msg: response.data[indice].resposta, userId: 1 },
      ]);
      /*       if (typeof response.data[indice].resposta !== 'object') {
        speak('Não entendi sua pergunta, digite, fale ou clique nas sugestões');
      } */
      speak(response.data[indice].resposta);
    }
    if (typeof listMsgs[listMsgs.length - 1].msg !== 'undefined') {
      resquestData();
    }
  }, [listMsgs]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  function sendMsg(e: any) {
    e.preventDefault();
    setListMsgs([...listMsgs, { msg: activeText, userId: 2 }]);
    setativeText('');
    setactiveDots(false);
  }
  function handleText(e: any) {
    setativeText(e.target.value);
    setactiveDots(false);
    if (e.target.value !== '') {
      setactiveDots(true);
    }
  }

  function recMsg() {
    setactive(!activeVoz);
    if (!activeVoz) {
      SpeechRecognition.startListening({ language: 'pt-BR' });
    } else {
      SpeechRecognition.stopListening();
      setativeText(transcript);
      setListMsgs([...listMsgs, { msg: transcript, userId: 2 }]);
      setativeText('');
    }
  }
  function handleMeli() {
    setchatOpen(!chatOpen);
  }
  const msgLabels = [
    {
      msg: 'previsão futura de produtos',
    },
    {
      msg: 'qual produto devo investir',
    },
    {
      msg: 'previsão futura de vendas',
    },
  ];
  return (
    <Container>
      <ChatMeli style={chatOpen ? { display: 'block' } : { display: 'none' }}>
        <ChatMsgs>
          {listMsgs.map((msg: any, index: number) => {
            return msg.msg !== undefined && msg.msg !== '' ? (
              <ChatMsgItem
                key={index}
                className={msg.userId === 1 ? 'Right' : 'Left'}
              >
                {msg.msg}
              </ChatMsgItem>
            ) : null;
          })}
          <div ref={messagesEndRef} />
        </ChatMsgs>
        {activeDots && !activeVoz ? (
          <img src={dots} style={{ width: 'auto' }} alt="" />
        ) : (
          ''
        )}
        {activeVoz && !activeDots ? <img src={waveGif} alt="" /> : ''}
        <Labels>
          {msgLabels.map((msgLabel: any, index: number) => (
            <LabelItem
              key={index}
              onClick={() =>
                setListMsgs([...listMsgs, { msg: msgLabel.msg, userId: 2 }])
              }
            >
              {msgLabel.msg}
            </LabelItem>
          ))}
        </Labels>
        <form onSubmit={e => sendMsg(e)}>
          <label htmlFor="">
            <input
              onChange={e => handleText(e)}
              value={activeText}
              placeholder="Fale ou digite sua dúvida"
              type="text"
              readOnly={activeVoz}
            />
            <img
              onClick={() => recMsg()}
              style={{ transition: 'all 0.2s' }}
              src={activeVoz ? microphone2 : microphone}
              alt=""
            />
          </label>
        </form>
      </ChatMeli>
      <ButtonMask style={{ position: 'relative' }} onClick={() => handleMeli()}>
        <img src={imgMeli} alt="" />
      </ButtonMask>
    </Container>
  );
};

export default Footer;
