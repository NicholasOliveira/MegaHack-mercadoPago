/* eslint-disable import/no-duplicates */
import produce from 'immer';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import FormatedMoney from '../../../utils';

const INITIAL_STATE: any = [];
export default function fulldataAddSucess(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case '@user/fulldataAddRequest': {
      action.payload[0].wharehouse = action.payload[0].wharehouse.map(
        (item: any) => ({
          ...item,
          FormatedMoney: FormatedMoney(item.income),
          ultimavendaFormatada: formatDistance(
            new Date(item.last_sale),
            new Date(),
            {
              locale: ptBR,
            }
          ),
        })
      );
      return action.payload;
    }
    default:
      return state;
  }
}
