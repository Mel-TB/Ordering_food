import { useDispatch } from 'react-redux';
import Button from './Button';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../../features/cart/cartslice';

const ButtonUpdateQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();

  const handlerIncreaseQuantity = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };

  const handlerDecreaseQuantity = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };

  return (
    <div className="flex items-center gap-2 md:gap-4">
      <Button type="round" onClick={handlerDecreaseQuantity}>
        -
      </Button>

      <span className="text-sm font-semibold ">{currentQuantity}</span>

      <Button type="round" onClick={handlerIncreaseQuantity}>
        +
      </Button>
    </div>
  );
};

export default ButtonUpdateQuantity;
