import { useState, useEffect } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import logoImg from '../../assets/logo-nlw-esports.png';

import { styles } from './styles';

import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Background } from '../../components/Background';

const BASE_URL = 'http://192.168.0.109:3333';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/games`)
      .then(res => res.json())
      .then(data => setGames(data));
  }, []);

  return(
    <Background>
      <SafeAreaView style={styles.container}>
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
      </SafeAreaView>
    </Background>
  );
};