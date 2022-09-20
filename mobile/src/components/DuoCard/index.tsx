import { View } from 'react-native';

import { styles } from './styles';

import { DuoInfo } from '../DuoInfo';

export interface DuoCardProps {
  id: string;
  name: string;
  hourEnd: string;
  hourStart: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
};

interface Props {
  data: DuoCardProps;
};

export function DuoCard({ data }: Props) {
  return(
    <View style={styles.container}>
      <DuoInfo
        label="Nome"
        value={data.name}
      />

      <DuoInfo
        label="Tempo de jogo"
        value={`${data.yearsPlaying} ano(s)`}
      />

      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dia(s)`}
      />

      <DuoInfo
        label="Chamada de áudio?"
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={data.useVoiceChannel ? '#34D399' : '#F87171'}
      />
    </View>
  );
};