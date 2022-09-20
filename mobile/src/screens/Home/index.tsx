import { useState, useEffect } from 'react';
import { View, Image, FlatList } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png';

import { styles } from './styles';

import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';

const BASE_URL = 'http://192.168.0.109:3333';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/games`)
      .then(res => res.json())
      .then(data => setGames(data));
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
        data={games}
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