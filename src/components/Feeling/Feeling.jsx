import { Button, Link } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Feeling() {
  const [feelingResponse, setFeelingResponse] = useState(0);
  const dispatch = useDispatch();

  function handleClickNavNext() {
    console.log('Feeling response', { feelingResponse });
    dispatch({
      type: 'SET_FEELING_RESPONSE',
      payload: parseInt(feelingResponse),
    });
  }
  return (
    <>
      {/* TODO: Created header tag "Feedback!" ---> no longer needed as it's only from the admin side of things*/}
      {/* TODO: progress bar with of current page (ex: 1 of 4 pages) ---> no longer needed as it's only from the admin side of things*/}
      {/* TODO: "How are you feeling today?" */}
      <div data-testid="input">
        <h2>How are you feeling today?</h2>
        <p>Feeling?</p>
        <p>Rate from a scale of 0 - 5. </p>
        <input
          type="number"
          min={0}
          max={5}
          value={feelingResponse}
          onChange={(event) => setFeelingResponse(event.target.value)}
        ></input>
        {/* TODO: <'Next Button'> */}
        <Link to="/understanding">
          <Button
            data-testid="next"
            variant="outlined"
            size="small"
            type="submit"
            onClick={handleClickNavNext}
          >
            Next
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Feeling;
