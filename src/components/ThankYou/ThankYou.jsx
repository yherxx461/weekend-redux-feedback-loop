import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

function thankYou() {
  const history = useHistory();
  // TODO: Write a function that will navigate to the beginning of the survey
  // when clicked on the "Leave New Feedback" and reset/delete the previous survey data
  const handleNewFeedback = () => {
    alert('Your feedback will be reset.');
    history.push('/');
  };

  return (
    <>
      {/* TODO: Created header tag "Feedback!" */}

      {/* <p> Thank You! </p> */}
      <h2>Thank You!</h2>
      <p>You've completed the survey! We appreciate your feedback!</p>
      {/* TODO: <button onClick of 'Leave New Feedback' /> */}
      <Button onClick={handleNewFeedback}>Leave New Feedback</Button>
    </>
  );
}

export default thankYou;
