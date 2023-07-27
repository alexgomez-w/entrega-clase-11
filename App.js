import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/Store/store';

export default function App() {

  const [fontstLoaded] = useFonts({
    //'Agdasima': require('./src/Assets/Agdasima/Agdasima-Bold.ttf'),
    'Agdasima': require('./src/Assets/Agdasima/Agdasima-Regular.ttf')
  });

  if (!fontstLoaded) {
    return null;
  }
  //Acá se manejará el estado para seleccionar una category y un producto

  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}
