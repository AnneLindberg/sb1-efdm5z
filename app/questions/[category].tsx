import { View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Questions from '../../components/Questions';
import { TexturedBackground } from '../../components/TexturedBackground';

export default function QuestionsScreen() {
  const { category } = useLocalSearchParams();

  return (
    <TexturedBackground>
      <Questions category={category as string} />
    </TexturedBackground>
  );
}