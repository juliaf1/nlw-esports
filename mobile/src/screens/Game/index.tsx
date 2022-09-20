import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import { Background } from '../../components/Background';

export function Game() {
  return(
    <Background>
      <SafeAreaView></SafeAreaView>
    </Background>
  );
};