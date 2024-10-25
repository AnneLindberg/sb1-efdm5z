import { View, StyleSheet } from 'react-native';
import { theme } from '../theme';

interface TexturedBackgroundProps {
  children: React.ReactNode;
}

export function TexturedBackground({ children }: TexturedBackgroundProps) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.sepia[50],
  },
});