import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { ProfileCard } from './src/components/ProfileCard';
import { ContactSection } from './src/components/ContactSection';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProfileCard 
          name="John Doe" 
          role="Software Developer" 
          bio="Building native mobile apps with React Native and Expo."
        />
        <ContactSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});