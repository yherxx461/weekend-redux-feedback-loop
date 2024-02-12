import Header from '../Header/Header';

function Feeling() {
  return (
    <>
      {/* TODO: Created header tag "Feedback!" */}
      <Header />
      {/* TODO: progress bar with of current page (ex: 1 of 4 pages) */}

      {/* TODO: "How are you feeling today?" */}
      <div data-testid="input">
        <h2>How are you feeling today?</h2>
        <p>Feeling?</p>
        <input type="number"></input>
        {/* TODO: <'Next Button'> */}
        <button type="submit" data-testid="next">
          Next
        </button>
      </div>
    </>
  );
}

export default Feeling;
