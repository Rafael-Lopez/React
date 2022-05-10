import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>May 10, 2022</div>
      <div className='expense-item__description'>
        <div>Car Insurance</div>
        <div className='expense-item__price'>$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
