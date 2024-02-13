import { Button, Link } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Support() {
  const [supportResponse, setSupportResponse] = useState(0);
  const dispatch = useDispatch();

  function S_handleClickNext() {
    console.log('Support Response', { supportResponse });
    dispatch({
      type: 'SET_SUPPORT_RESPONSE',
      payload: parseInt(supportResponse),
    });
  }
  return (
    <>
      {/* TODO: Created header tag "Feedback!" ---> no longer needed as it's only from the admin side of things */}
      {/* TODO: progress bar with of current page (ex: 3 of 4 pages) ---> no longer needed as it's only from the admin side of things */}
      {/* TODO: "How well are you being supported?" */}
      <div data-testid="input">
        <h2>How well are you being supported?</h2>
        <p>Support?</p>
        <input
          type="number"
          min={0}
          max={5}
          value={supportResponse}
          onChange={(event) => setSupportResponse(event.target.value)}
        ></input>
        {/* TODO: <'Next Button'> */}
        <Link to="/comments">
          <Button
            data-testid="next"
            variant="outlined"
            size="small"
            type="submit"
            onClick={S_handleClickNext}
          >
            Next
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Support;
