import React, { useState } from 'react';
import Layout from 'components/Layout';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import Notification from 'components/Notification';


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countLeaveFeedback = (option) => {

    if (option === 'good') {
      setGood(good + 1);
    } else if (option === 'neutral') {
      setNeutral(neutral + 1);
    } else if (option === 'bad') {
      setBad(bad + 1);
    }

  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {

    return countTotalFeedback()
      ? Math.round((good / countTotalFeedback()) * 100)
      : 0;
  };

  const options = Object.keys({ good, neutral, bad });

  return (
    <Layout>
      <Section title='Please leave feedback'>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={countLeaveFeedback}
        >
        </FeedbackOptions>
      </Section>
      <Section title='Statistics'>
        {!countTotalFeedback()
          ? (<Notification message='There is no feedback!' />)
          : (
            <Statistics good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()} />
          )}
      </Section>
    </Layout>
  );
}
export default App;
