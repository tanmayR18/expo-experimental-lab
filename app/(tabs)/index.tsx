import { StyleSheet, View } from 'react-native';
import Form from '@/components/rntl/form';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
