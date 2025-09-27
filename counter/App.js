import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

// Counter Component - Functional component with useState hook
function Counter({ incrementLabel, decrementLabel }) {
  // Step 1: Use useState hook to manage count state
  const [count, setCount] = useState(0);

  // Functions to handle button presses
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.counterContainer}>
      {/* Step 2: Display the count number */}
      <Text style={styles.title}>Counter</Text>
      <Text style={styles.countDisplay}>{count}</Text>
      
      {/* Step 3: Add Increment and Decrement buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.decrementButton]} 
          onPress={handleDecrement}
        >
          {/* Step 4: Use props for button labels */}
          <Text style={styles.buttonText}>{decrementLabel}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.incrementButton]} 
          onPress={handleIncrement}
        >
          <Text style={styles.buttonText}>{incrementLabel}</Text>
        </TouchableOpacity>
      </View>
      
      {/* Display current count status */}
      <Text style={styles.statusText}>
        Current Count: {count}
      </Text>
    </View>
  );
}

// Main App Component - Parent component that passes props
export default function App() {
  return (
    <View style={styles.container}>
      {/* Step 4: Pass button labels as props from parent component */}
      <Counter 
        incrementLabel="+" 
        decrementLabel="-" 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  counterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  countDisplay: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 30,
    minWidth: 100,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginBottom: 20,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  incrementButton: {
    backgroundColor: '#4CAF50',
  },
  decrementButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  statusText: {
    fontSize: 18,
    color: '#666',
    fontWeight: 'bold',
  },
});
