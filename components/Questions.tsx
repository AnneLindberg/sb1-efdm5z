import { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Animated } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, MoveRight, Heart } from 'lucide-react-native';
import questionsData from '../data/questions.json';
import { theme } from '../theme';

interface QuestionsProps {
  category: string;
}

export default function Questions({ category }: QuestionsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(1));

  const questions = questionsData[category as keyof typeof questionsData] || [];
  const categoryTitle = category?.charAt(0).toUpperCase() + category?.slice(1);

  const nextQuestion = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % questions.length);
    }, 300);
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => router.back()}
        style={({ pressed }) => [
          styles.backButton,
          pressed && styles.backButtonPressed,
        ]}
      >
        <ArrowLeft size={20} color={theme.colors.warmGray[600]} />
        <Text style={styles.backButtonText}>Return to Categories</Text>
      </Pressable>

      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>{categoryTitle}</Text>
          <Text style={styles.subtitle}>
            Take your time to reflect on each question. There's no rush—the best conversations unfold naturally.
          </Text>
        </View>

        <Animated.View style={[styles.questionContainer, { opacity: fadeAnim }]}>
          <Text style={styles.question}>{questions[currentIndex]}</Text>
        </Animated.View>

        <View style={styles.footer}>
          <Pressable
            onPress={nextQuestion}
            style={({ pressed }) => [
              styles.nextButton,
              pressed && styles.nextButtonPressed,
            ]}
          >
            <Text style={styles.nextButtonText}>Next Question</Text>
            <MoveRight size={20} color={theme.colors.sepia[600]} />
          </Pressable>
          
          <View style={styles.counter}>
            <Heart size={14} color={theme.colors.sepia[500]} />
            <Text style={styles.counterText}>
              Question {currentIndex + 1} of {questions.length}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 32,
    paddingVertical: 4,
  },
  backButtonPressed: {
    opacity: 0.7,
  },
  backButtonText: {
    fontFamily: 'CrimsonPro_400Regular',
    fontSize: 18,
    color: theme.colors.warmGray[600],
    fontStyle: 'italic',
  },
  card: {
    backgroundColor: theme.colors.sepia[50],
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: `${theme.colors.sepia[200]}80`,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontFamily: 'PlayfairDisplay_600SemiBold',
    fontSize: 28,
    color: theme.colors.warmGray[800],
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'CrimsonPro_400Regular',
    fontSize: 16,
    color: theme.colors.warmGray[600],
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 24,
  },
  questionContainer: {
    minHeight: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  question: {
    fontFamily: 'PlayfairDisplay_500Medium',
    fontSize: 24,
    color: theme.colors.warmGray[800],
    textAlign: 'center',
    lineHeight: 32,
  },
  footer: {
    alignItems: 'center',
    gap: 20,
  },
  nextButton: {
    backgroundColor: theme.colors.sepia[50],
    borderWidth: 1,
    borderColor: `${theme.colors.sepia[200]}80`,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  nextButtonPressed: {
    transform: [{ scale: 0.98 }],
  },
  nextButtonText: {
    fontFamily: 'PlayfairDisplay_500Medium',
    fontSize: 18,
    color: theme.colors.warmGray[800],
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  counterText: {
    fontFamily: 'CrimsonPro_400Regular',
    fontSize: 16,
    color: theme.colors.warmGray[600],
    fontStyle: 'italic',
  },
});