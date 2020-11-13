import inicio from '../../assets/icons/inicio.svg';
import ajuda from '../../assets/icons/ajuda.svg';
import assinaturas from '../../assets/icons/assinaturas.svg';
import atividade from '../../assets/icons/atividade.svg';
import convide from '../../assets/icons/convide.svg';
import dinheiro from '../../assets/icons/dinheiro.svg';
import link from '../../assets/icons/link.svg';
import negocio from '../../assets/icons/negocio.svg';
import perfil from '../../assets/icons/perfil.svg';
import receber from '../../assets/icons/receber.svg';
import relatorio from '../../assets/icons/relatorio.svg';
import sair from '../../assets/icons/sair.svg';
import transferir from '../../assets/icons/transferir.svg';
import icoMobile from '../../assets/icons/icoMobile.svg';
import desempenho from '../../assets/icons/desempenho.svg';

const menuIndex = {
  inicio: [
    {
      name: 'Início',
      url: '/',
      icon: inicio,
      class: '',
    },
    {
      name: 'Desempenho',
      url: '/desempenho',
      icon: desempenho,
      class: 'active',
    },
  ],
  data: [
    {
      name: 'Seu dinheiro',
      url: '/dinheiro',
      icon: dinheiro,
      class: '',
    },
    {
      name: 'Atividade',
      url: '/atividade',
      icon: atividade,
      class: '',
    },
    {
      name: 'Relatórios',
      url: '/relatorio',
      icon: relatorio,
      class: '',
    },
    {
      name: 'Transferir dinheiro',
      url: '/transferir',
      icon: transferir,
      class: '',
    },
    {
      name: 'Ver mais',
      children: [
        {
          name: 'Child31',
          url: '/child31',
        },
        {
          name: 'Child32',
          url: '/child32',
        },
        {
          name: 'Child33',
          url: '/child33',
        },
      ],
    },
  ],
  system: [
    {
      name: 'Receber na sua loja',
      url: '/receber',
      icon: receber,
      class: '',
    },
    {
      name: 'Link de pagamento',
      url: '/link',
      icon: link,
      class: '',
    },
    {
      name: 'Assinaturas',
      url: '/assinaturas',
      icon: assinaturas,
      class: '',
    },
    {
      name: 'Seu negócios',
      url: '/negocio',
      icon: negocio,
      class: '',
    },
  ],
  system2: [
    {
      name: 'Convide e ganhe',
      url: '/convide',
      icon: convide,
      class: '',
    },
    {
      name: 'Seu perfil',
      url: '/perfil',
      icon: perfil,
      class: '',
    },
    {
      name: 'Ajuda',
      url: '/ajuda',
      icon: ajuda,
      class: '',
    },
    {
      name: 'Sair',
      url: '/sair',
      icon: sair,
      class: '',
    },
  ],
  system3: [
    {
      name: 'Celular sua nova carteira',
      styles: 12,
      url: '/convide',
      icon: icoMobile,
      class: '',
    },
  ],
};

export default menuIndex;
