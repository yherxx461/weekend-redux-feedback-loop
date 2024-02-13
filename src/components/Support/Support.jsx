import { Button, Link } from '@mui/material';
import Header from '../Header/Header';

function Support() {
  return (
    <>
      {/* TODO: Created header tag "Feedback!" */}
      <Header />
      {/* TODO: progress bar with of current page (ex: 3 of 4 pages) */}

      {/* TODO: "How well are you being supported?" */}
      <div data-testid="input">
        <h2>How well are you being supported?</h2>
        <p>Support?</p>
        <input type="number"></input>
        {/* TODO: <'Next Button'> */}
        <Link to="/comments">
          <Button type="submit" data-testid="next">
            Next
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Support;
