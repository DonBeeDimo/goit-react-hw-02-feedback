import { Component } from 'react';
import Container from './components/Container';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section/';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onChangeFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
    // console.log('+1');
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    return Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    const keys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={keys}
            onChangeFeedback={this.onChangeFeedback}
          />
        </Section>

        {this.countTotalFeedback() > 0 && (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              average={this.countPositiveFeedbackPercentage}
            />
          </Section>
        )}

        {this.countTotalFeedback() === 0 && (
          <Notification message="No feedback given" />
        )}
      </Container>
    );
  }
}

export default App;
