import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ResponsiveHeader } from './src/components/ResponsiveHeader';
import { AdaptiveLayout, FeatureCard, StatsRow } from './src/components/AdaptiveLayout';
import { GridLayout, Card } from './src/components/GridLayout';

export default function App() {
  const content = (
    <View>
      <StatsRow stats={[
        { label: 'Users', value: '1.2K' },
        { label: 'Revenue', value: '$4.5K' },
        { label: 'Active', value: '890' }
      ]} />
      <GridLayout columns={2}>
        <Card title="Card 1" subtitle="Subtitle 1"><Text>Content 1</Text></Card>
        <Card title="Card 2" subtitle="Subtitle 2"><Text>Content 2</Text></Card>
      </GridLayout>
      <FeatureCard icon="🚀" title="Fast Performance" description="Optimized for speed and efficiency." variant="secondary" />
    </View>
  );

  return (
    <SafeAreaProvider>
      <ResponsiveHeader title="Responsive App" leftAction={{ icon: '☰', onPress: () => {} }} />
      <AdaptiveLayout content={content} footer={<Text style={{textAlign: 'center'}}>Footer Content</Text>} />
    </SafeAreaProvider>
  );
}