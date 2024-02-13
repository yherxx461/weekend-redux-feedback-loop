import { Button, Link } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Understanding() {
  const [understandingResponse, setUnderstandingResponse] = useState(0);
  const dispatch = useDispatch();

  function U_handleClickNext() {
    console.log('Understading response', { understandingResponse });
    dispatch({
      type: 'SET_UNDERSTANDING_RESPONSE',
      payload: parseInt(understandingResponse),
    });
  }
  return (
    <>
      {/* TODO: Created header tag "Feedback!" ---> no longer needed as it's only from the admin side of things*/}
      {/* TODO: progress bar with of current page (ex: 2 of 4 pages) ---> no longer needed as it's only from the admin side of things*/}
      {/* TODO: "How well are you understanding the content?" */}
      <div data-testid="input">
        <h2>How well are you understanding the content?</h2>
        <p>Understanding? Rate from 0-5.</p>
        <input
          type="number"
          min={0}
          max={5}
          value={understandingResponse}
          onChange={(event) => setUnderstandingResponse(event.target.value)}
        ></input>
        {/* TODO: <'Next Button'> */}
        <Link to="/support">
          <Button
            data-testid="next"
            variant="outlined"
            size="small"
            type="submit"
            onClick={U_handleClickNext}
          >
            Next
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Understanding;
