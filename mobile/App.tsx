import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

function Button (props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oii</Text>
      <StatusBar style="auto"/>
      <Button title="Clique aqui"></Button>
    </View>
  );
}

interface ButtonProps {
  title: string,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'deeppink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 70,
    fontWeight: 'bold',
  }
});
