import { View, Text, Modal, ModalProps, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { THEME } from '../../theme';
import { styles } from "./styles";

interface Props extends ModalProps {
  discord: string;
  closeModal: () => void;
}

export function DuoMatch({ discord, closeModal, ...rest }: Props) {
  return(
    <Modal
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

          <Text style={styles.discord}>
            {discord}
          </Text>
        </View>
      </View>
    </Modal>
  );
};