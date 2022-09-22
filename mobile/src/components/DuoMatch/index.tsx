import { View, Text, Modal, ModalProps, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';
import * as Clipboard from 'expo-clipboard';

import { THEME } from '../../theme';
import { styles } from "./styles";

import { Heading } from '../Heading';

interface Props extends ModalProps {
  discord: string;
  closeModal: () => void;
}

export function DuoMatch({ discord, closeModal, ...rest }: Props) {
  async function handleCopyDiscord() {
    await Clipboard.setStringAsync(discord);

    Alert.alert('Usuário copiado', 'Agora é só conectar no Discord')
  };
  
  return(
    <Modal
      animationType="fade"
      transparent
      statusBarTranslucent
      {...rest}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.close}
            onPress={closeModal}
          >
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight="bold"
          />

          <Heading
            title="Let's play"
            subtitle="Agora é só começar a jogar"
            style={ { alignItems: 'center', marginTop: 24 } }
          />

          <Text style={styles.label}>
            Adicione o Discord
          </Text>

          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscord}
          >
            <Text style={styles.discord}>
              {discord}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};