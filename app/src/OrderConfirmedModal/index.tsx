import { Modal } from 'react-native';
import { CheckCircle } from '../components/Icons/CheckCircle';
import { Text } from '../components/Text';
import { Container, OkButton } from './styles';
import { StatusBar } from 'expo-status-bar';

interface OrderConfirmedModalProps {
  visible: boolean;
  onOK: () => void;
}

export function OrderConfirmedModal({ visible, onOK }: OrderConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType='fade'
    >
      <StatusBar style='light' />

      <Container>
        <CheckCircle />
        <Text size={20} weight='600' color='#fff' style={{ marginTop: 12, marginBottom: 4 }}>
          Pedido confirmado
        </Text>
        <Text color='#fff' opacity={0.9}>
          O pedido já entrou na fila de produção
        </Text>

        <OkButton onPress={onOK}>
          <Text color='#d73035' weight='600'>
            ok
          </Text>
        </OkButton>
      </Container>
    </Modal>
  );
}
