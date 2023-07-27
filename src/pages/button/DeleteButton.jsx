import { useDispatch } from 'react-redux';
import Button from './Button';
import { deleteItem } from '../../features/cart/cartSlices';

const DeleteButton = ({ pizzaId }) => {
  const dispatch = useDispatch();

  const handlerDeleteItem = () => {
    dispatch(deleteItem(pizzaId));
  };

  return (
    <Button type="small" onClick={handlerDeleteItem}>
      {' '}
      Delete
    </Button>
  );
};

export default DeleteButton;
