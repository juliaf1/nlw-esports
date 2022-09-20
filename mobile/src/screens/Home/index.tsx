import { useEffect } from 'react';
import { View, Image, FlatList } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png';

import { GAMES } from '../../utils/games';
import { styles } from './styles';

import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';

const BASE_URL = 'http://192.168.0.109:3333';

export function Home() {

  useEffect(() => {
    fetch(`${BASE_URL}/games`)
      .then(res => res.json())
      .then(data => console.log(data))
  }, []);

  return(
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <GameCard
                data={item}
            />
        )}
        horizontal
        contentContainerStyle={styles.contentList}
      ></FlatList>
    </View>
  )
};