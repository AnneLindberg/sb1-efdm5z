import { View } from 'react-native';
import Categories from '../components/Categories';
import { TexturedBackground } from '../components/TexturedBackground';

export default function Home() {
  return (
    <TexturedBackground>
      <Categories />
    </TexturedBackground>
  );
}