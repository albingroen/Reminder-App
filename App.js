import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", reminder: {}, reminders: [], warning: "" };
  }

  handlePress = () => {
    const { text } = this.state;

    const reminder = {
      title: text,
      time: new Date().getHours()
    };

    if (reminder.title.length > 0) {
      this.setState(prevState => ({
        reminders: [...prevState.reminders, reminder],
        text: "",
        warning: ""
      }));
    } else {
      this.setState({
        warning: "Fyll i fältet ovan"
      });
    }
  };

  render() {
    const { reminders, warning } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            placeholder="Remind me to..."
            underlineColorAndroid="rgba(0,0,0,0)"
          />
          <TouchableOpacity onPress={this.handlePress} style={styles.button}>
            <Text style={styles.buttonText}>Add reminder</Text>
          </TouchableOpacity>
          <Text style={styles.warningText}>{warning}</Text>
        </View>

        <View style={styles.bottomContainer}>
          {reminders.map((reminder, index) => {
            return (
              <View key={index} style={styles.card}>
                <Text style={styles.cardTitle}>{reminder.title}</Text>
                <Text style={styles.cardTime}>{reminder.time}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: "85%",
    padding: 16,
    borderRadius: 3,
    borderColor: "#d4d4d4",
    borderWidth: 1,
    fontSize: 16
  },
  button: {
    width: "85%",
    padding: 16,
    borderRadius: 3,
    backgroundColor: "dodgerblue",
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "center",
    marginTop: 20
  },
  buttonText: {
    color: "white",
    fontSize: 16
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    padding: 7,
    justifyContent: "space-between"
  },
  card: {
    padding: 12,
    backgroundColor: "white",
    borderRadius: 3,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: "#ddd",
    shadowOpacity: 0.5,
    shadowRadius: 20,
    margin: 7,
    width: "46%"
  },
  cardTitle: {
    fontWeight: "600",
    fontSize: 17
  },
  cardTime: {
    fontSize: 14,
    opacity: 0.5,
    paddingTop: 10
  },
  warningText: {
    fontSize: 14,
    color: "orangered",
    marginTop: 10
  }
});
