import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Support() {
  const [supportResponse, setSupportResponse] = useState(0);
  const dispatch = useDispatch();

  const handleSupportToNext = (event) => {
    console.log('Support Response', { supportResponse });
    dispatch({
      type: 'SET_SUPPORT_RESPONSE',
      payload: parseInt(supportResponse),
    });
    // clear fields
    setSupportResponse('');
  };
  const handleSupportUpdate = (event) => {
    console.log(supportResponse);
    setSupportResponse(event.target.value);
  };
  return (
    <>
      {/* TODO: Created header tag "Feedback!" ---> no longer needed as it's only from the admin side of things */}
      {/* TODO: progress bar with of current page (ex: 3 of 4 pages) ---> no longer needed as it's only from the admin side of things */}
      {/* TODO: "How well are you being supported?" */}
      <main className="support">
        <h2>How well are you being supported?</h2>
        <form>
          <p>Support?</p>
          <input
            data-testid="input"
            type="number"
            min={0}
            max={5}
            value={supportResponse}
            onChange={handleSupportUpdate}
          ></input>
          {/* TODO: <'Next Button'> */}
          <Button
            data-testid="next"
            variant="outlined"
            size="small"
            onClick={handleSupportToNext}
          >
            <Link to="/comments">Next</Link>
          </Button>
        </form>
      </main>
    </>
  );
}

export default Support;
