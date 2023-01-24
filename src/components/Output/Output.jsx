export const Output = ({ tipPerPerson, totalPerPerson }) => {
  return (
    <div>
      <div>
        <p>
          Tip amount<span>/ person</span>
        </p>
        <span> $ {tipPerPerson} </span>
      </div>
      <div>
        <p>
          Total<span>/ person</span>
        </p>
        <span> $ {totalPerPerson} </span>
      </div>
      <button type="reset">Reset</button>
    </div>
  );
};
