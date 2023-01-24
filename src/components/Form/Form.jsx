export const Form = ({ setBill, setPerc, setPeople }) => {
  const tipOptions = [5, 10, 15, 25, 50];

  function handlePeopleInputChange(value) {
    if (value === 0) {
      return;
    }
    setPeople(value);
  }

  return (
    <form>
      <label>
        Bill
        <input
          type="number"
          name="bill"
          onChange={e => setBill(Number(e.target.value))}
        ></input>
      </label>
      <label>
        {' '}
        Select tip %
        {tipOptions.map(item => {
          return (
            <input
              type="button"
              value={item + '%'}
              key={item}
              onClick={() => setPerc(item)}
            ></input>
          );
        })}
        <input
          type="number"
          onChange={e => setPerc(Number(e.target.value))}
        ></input>
      </label>
      <label>
        Number of people
        <input
          type="number"
          onChange={e => handlePeopleInputChange(Number(e.target.value))}
        ></input>
      </label>
    </form>
  );
};
