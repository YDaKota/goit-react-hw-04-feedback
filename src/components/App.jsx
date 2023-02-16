import React, { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistic } from "./Statistic/Statistic";
import { Notification } from "./Notification/Notification";


export const App = () => {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100 || 0);
  };

  const onLeaveFeedback = option => {
    switch (option) {
      case "good":
        setGoodFeedback(prevGood => prevGood + 1);
        break;
      case "neutral":
        setNeutralFeedback(prevNeutral => prevNeutral + 1);
        break;
      case "bad":
        setBadFeedback(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions 
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"/>
          )}
        </Section>
      </div>
    );
  };
