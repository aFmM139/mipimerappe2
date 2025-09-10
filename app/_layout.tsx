import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack 
  screenOptions={{
    headerStyle: {
      backgroundColor: '#F2D5BB',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
}
  />;
}
