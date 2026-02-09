import {
    View,
    Text,
    Image,
    ScrollView,
    FlatList,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
  
  const PopularworkoutPlans = [
    {
      id: '1',
      title: 'Full Body Workout',
      description: '45 minutes of full body exercise',
      duration: '45 min',
      imageUrl:
        'https://images.unsplash.com/photo-1711623350002-d97138f35bf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: '2',
      title: 'Cardio Blast',
      description: '30 minutes of intense cardio training',
      duration: '30 min',
      imageUrl:
        'https://images.unsplash.com/photo-1689876593463-6678f2e8d4f2?w=400',
    },
    {
      id: '3',
      title: 'Yoga for Flexibility',
      description: '1 hour yoga session for flexibility',
      duration: '60 min',
      imageUrl:
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  
  const IntenseWorkoutPlans = [
    {
      id: '1',
      title: 'Zumba Class',
      description: '30 minutes of zumba classes',
      duration: '30 min',
      imageUrl:
        'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: '2',
      title: 'Circuit Training',
      description: '20 minutes of circuit training',
      duration: '20 min',
      imageUrl:
        'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2lyY3VpdCUyMHRyYWluaW5nfGVufDB8fDB8fHwy',
    },
    {
      id: '3',
      title: 'Pilate Training',
      description: '60 minutes of pilate training',
      duration: '20 min',
      imageUrl:
        'https://images.unsplash.com/photo-1620134280013-e756c46affc6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const BeginnerWorkoutPlans = [
    {
      id: '1',
      title: 'Walking for Beginners',
      description: '30 minutes of easy walking',
      duration: '30 min',
      imageUrl:
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400',
    },
    {
      id: '2',
      title: 'Stretching Basics',
      description: '20 minutes of basic stretches',
      duration: '20 min',
      imageUrl:
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400',
    },
    {
      id: '3',
      title: 'Light Aerobics',
      description: '25 minutes of light aerobic exercise',
      duration: '25 min',
      imageUrl:
        'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=400',
    },
  ];

  const IntermediateWorkoutPlans = [
    {
      id: '1',
      title: 'Strength & Cardio Mix',
      description: '45 minutes of mixed workout',
      duration: '45 min',
      imageUrl:
        'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400',
    },
    {
      id: '2',
      title: 'HIIT Session',
      description: '30 minutes of high-intensity intervals',
      duration: '30 min',
      imageUrl:
        'https://images.unsplash.com/photo-1620134280013-e756c46affc6?w=400',
    },
    {
      id: '3',
      title: 'Functional Training',
      description: '40 minutes of functional movements',
      duration: '40 min',
      imageUrl:
        'https://images.unsplash.com/photo-1589579234096-25cb6b83e021?w=400',
    },
  ];
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: 'black',
    },
    section: {
      alignItems: 'center',
      marginBottom: 20,
    },
  
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#ff7f00',
    },
  
    headerbenefit: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'white',
    },
  
    text: {
      alignItems: 'center',
      fontSize: 16,
      marginBottom: 5,
      color: '#fff',
    },
    trainingTypeCard: {
      marginRight: 20,
      width: 150,
      alignItems: 'center',
    },
    trainingImage: {
      width: 150,
      height: 150,
      borderRadius: 75,
    },
    trainingTitle: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#4caf50',
    },
    workoutCard: {
      marginRight: 20,
      width: 200,
      padding: 10,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: '#fff',
      textAlign: 'center',
    },
    workoutImage: {
      width: '100%',
      height: 100,
      borderRadius: 10,
    },
    workoutTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      color: '#333',
      textAlign: 'center',
    },
    workoutDescp: {
      textAlign: 'center',
    },
    joinButton: {
      marginTop: 10,
      backgroundColor: '#ff7f00',
      paddingHorizontal: 12,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
  const renderWorkout = ({ item }) => (
    <View style={styles.workoutCard}>
      <Image source={{ uri: item.imageUrl }} style={styles.workoutImage} />
  
      <Text style={styles.workoutTitle}>{item.title}</Text>
      <Text style={styles.workoutDescp}>{item.description}</Text>
      <Text style={styles.workoutDescp} testID="workoutDescp">
        Duration: {item.duration}
      </Text>
  
      <TouchableOpacity
        style={styles.joinButton}
        onPress={() => alert(`Joined ${item.title}`)}>
        <Text style={styles.buttonText}>Join Now</Text>
      </TouchableOpacity>
    </View>
  );
  
  export default function FitnessWorld() {
    return (

      <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.header}>StartYour Fitness Journey</Text>
          <Text style={styles.workoutDescp}>
            Welcome to join fitness journey, where every rep brings you closer to
            your best self. Let’s crush your fitness goals together!
          </Text>
          <Text style={styles.headerbenefit}>
            Benefits of Our Fitness Programs
          </Text>
          <Text style={styles.text}>• Build muscle strength</Text>
          <Text style={styles.text}>• Improve cardiovascular health</Text>
          <Text style={styles.text}>• Increase flexibility and balance</Text>
          <Text style={styles.text}>• Mental clarity and focus</Text>
        </View>
  
        {/* Featured Training Types Section */}

        <View style={styles.section}>
          <Text style={styles.header}>Featured Training Types</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.trainingTypeCard}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1589579234096-25cb6b83e021?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
                style={styles.trainingImage}
              />
              <Text style={styles.trainingTitle}>Strength Training</Text>
            </View>
            <View style={styles.trainingTypeCard}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1689876593463-6678f2e8d4f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
                style={styles.trainingImage}
              />
              <Text style={styles.trainingTitle}>Cardio</Text>
            </View>
            <View style={styles.trainingTypeCard}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
                style={styles.trainingImage}
              />
              <Text style={styles.trainingTitle}>Yoga</Text>
            </View>
          </ScrollView>
        </View>
  
        {/*Popular Workout Plans Section */}
  
        <View style={styles.section}>
          <Text style={styles.header}>Popular Workout Plans</Text>
          <FlatList
            data={PopularworkoutPlans}
            renderItem={renderWorkout}
            keyExtractor={(item) => item.id}
            horizontal={true} // Display workouts horizontally
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/*Intense Workout Plans Section*/}

        <View style={styles.section}>
          <Text style={styles.header}>Intense Workout Plans</Text>
          <FlatList
            data={IntenseWorkoutPlans}
            renderItem={renderWorkout}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/*Beginner's Workout Plans Section*/}

        <View style={styles.section}>
          <Text style={styles.header}>Beginner's Workout Plan</Text>
          <FlatList
            data={BeginnerWorkoutPlans}
            renderItem={renderWorkout}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/*Intermediate Workout Plans Section*/}

        <View style={styles.section}>
          <Text style={styles.header}>Intermediate Workout Plan</Text>
          <FlatList
            data={IntermediateWorkoutPlans}
            renderItem={renderWorkout}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    );
  }