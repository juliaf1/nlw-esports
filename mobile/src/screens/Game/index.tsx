import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';

import { styles } from './styles';
import { GameParams } from '../../@types/navigation';

import { Background } from '../../components/Background';

export function Game() {
  const route = useRoute();
  const game = route.params as GameParams;

  return(
    <Background>
      <SafeAreaView></SafeAreaView>
    </Background>
  );
};