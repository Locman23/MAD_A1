import { useState } from 'react';
import HomeScreen from './screens/HomeScreen';


export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const navigate = (screenName) => setCurrentScreen(screenName);

  switch (currentScreen) {
    case 'Home':
      return <HomeScreen navigate={navigate} />;
    default:
      return <HomeScreen navigate={navigate} />;
  }
}
