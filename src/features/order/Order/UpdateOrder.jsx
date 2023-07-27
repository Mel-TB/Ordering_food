import { useFetcher } from 'react-router-dom';
import Button from '../../../pages/button/Button';
import { updateOrder } from '../../../services/apiRestaurant';

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right ">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
};

export default UpdateOrder;

export const action = async ({ request, params }) => {
  const data = { priority: true };
  await updateOrder(params.orderId, data);

  return null;
};
