import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCustomer } from '../../state/delivery/deliverySlice';

const Form = memo(() => {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.delivery.customer);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(
      setCustomer({
        ...customer,
        [name]: value,
      })
    );
  };

  return (
    <div className="formOrder_wrapper">
      <h2 className="formOrder_title">To place an order, fill out the form</h2>
      <form className="formOrder">
        <div className="formOrder_box">
          <input
            className="formOrder_input"
            type="text"
            name="name"
            value={customer.name}
            placeholder="Gwen"
            onChange={handleInputChange}
          />
          <label className="formOrder_label">Name</label>
        </div>
        <div className="formOrder_box">
          <input
            className="formOrder_input"
            type="email"
            name="email"
            value={customer.email}
            placeholder="example@example.com"
            onChange={handleInputChange}
          />
          <label className="formOrder_label">Email</label>
        </div>
        <div className="formOrder_box">
          <input
            className="formOrder_input"
            type="text"
            name="phone"
            value={customer.phone}
            placeholder="380970000000"
            onChange={handleInputChange}
          />
          <label className="formOrder_label">Phone</label>
        </div>
        <div className="formOrder_box">
          <input
            className="formOrder_input"
            type="text"
            name="address"
            value={customer.address}
            placeholder="Center Ln., Apartment 34"
            onChange={handleInputChange}
          />
          <label className="formOrder_label">Adress</label>
        </div>
      </form>
    </div>
  );
});

export default Form;
