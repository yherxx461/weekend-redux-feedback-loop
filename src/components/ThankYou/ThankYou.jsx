import { Button } from '@mui/material';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function thankYou() {
  // TODO: Write a function that will navigate to the beginning of the survey
  // when clicked on the "Leave New Feedback" and reset/delete the previous survey data
  const handleClickNavToSurvey = () => {
    alert('Your feedback will be reset.');
    history.pushState('/feeling');
    // make axio call - .then/refresh/.catch
  };

  return (
    <>
      {/* TODO: Created header tag "Feedback!" */}

      {/* <p> Thank You! </p> */}
      <h2>Thank You!</h2>
      {/* TODO: <button onClick of 'Leave New Feedback' /> */}
      <Button onClick={handleClickNavToSurvey}>Leave New Feedback</Button>
    </>
  );
}

export default thankYou;
