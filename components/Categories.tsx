import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { Users, Heart, Users2, HandHeart, MessageCircle } from 'lucide-react-native';
import { theme } from '../theme';

const categories = [
  { 
    id: 'friends', 
    name: 'Friends', 
    icon: Users, 
    description: 'Celebrate your friendships' 
  },
  { 
    id: 'lovers', 
    name: 'Lovers', 
    icon: Heart, 
    description: 'Deepen your romantic bond' 
  },
  { 
    id: 'parents', 
    name: 'Parents', 
    icon: Users2, 
    description: 'Connect with family' 
  },
  { 
    id: 'partners', 
    name: 'Partners', 
    icon: HandHeart, 
    description: 'Strengthen your partnership' 
  }
];

export default function Categories() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meaningful Conversations</Text>
        <View style={styles.subtitleContainer}>
          <MessageCircle size={20} color={theme.colors.sepia[600]} />
          <Text style={styles.subtitle}>Start a deeper dialogue</Text>
        </View>
        <Text style={styles.description}>
          Choose a category and explore thoughtful questions to strengthen your relationships through meaningful conversations.
        </Text>
      </View>

      <View style={styles.grid}>
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Pressable
              key={category.id}
              style={({ pressed }) => [
                styles.card,
                pressed && styles.cardPressed
              ]}
              onPress={() => router.push(`/questions/${category.id}`)}
            >
              <Icon 
                size={32}
                strokeWidth={1.5}
                color={theme.colors.sepia[700]}
                style={styles.icon}
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{category.name}</Text>
                <Text style={styles.cardDescription}>{category.description}</Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontFamily: 'PlayfairDisplay_600SemiBold',
    fontSize: 32,
    color: theme.colors.warmGray[800],
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  subtitle: {
    fontFamily: 'CrimsonPro_500Medium',
    fontSize: 18,
    fontStyle: 'italic',
    color: theme.colors.sepia[600],
  },
  description: {
    fontFamily: 'CrimsonPro_400Regular',
    fontSize: 18,
    color: theme.colors.warmGray[600],
    textAlign: 'center',
    maxWidth: 320,
    lineHeight: 24,
  },
  grid: {
    gap: 16,
  },
  card: {
    backgroundColor: theme.colors.sepia[50],
    borderRadius: 12,
    padding: 24,
    borderWidth: 1,
    borderColor: `${theme.colors.sepia[200]}80`,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 16,
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  cardContent: {
    alignItems: 'center',
  },
  cardTitle: {
    fontFamily: 'PlayfairDisplay_500Medium',
    fontSize: 24,
    color: theme.colors.warmGray[800],
    marginBottom: 8,
    textAlign: 'center',
  },
  cardDescription: {
    fontFamily: 'CrimsonPro_400Regular',
    fontSize: 16,
    color: theme.colors.warmGray[600],
    fontStyle: 'italic',
    textAlign: 'center',
  },
});