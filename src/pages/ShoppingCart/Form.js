import { memo } from 'react';
import { useForm } from 'react-hook-form';


const Form = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className="formOrder" onSubmit={handleSubmit}>
      <div className="user_box">
        <input
          {...register('name', {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
          className="user_box-input"
          type="text"
          placeholder="Gwen"
        />
        <label className="user_box-label">Name</label>
        {errors.name?.type === 'required' && (
          <p className="error">This field is required</p>
        )}
        {errors?.name?.type === 'pattern' && (
          <p className="error">Alphabetical characters only</p>
        )}
      </div>
      <div className="user_box">
        <input
          {...register('email', { required: true })}
          className="user_box-input"
          type="email"
          placeholder="example@example.com"
        />
        <label className="user_box-label">Email</label>
        {errors.email?.type === 'required' && (
          <p className="error">This field is required</p>
        )}
      </div>
      <div className="user_box">
        <input
          {...register('phone', {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
          className="user_box-input"
          type="text"
          placeholder="Meyers"
        />
        <label className="user_box-label">Phone</label>
        {errors.phone?.type === 'required' && (
          <p className="error">This field is required</p>
        )}
        {errors?.phone?.type === 'pattern' && (
          <p className="error">Alphabetical characters only</p>
        )}
      </div>
      <div className="user_box">
        <input
          {...register('adress', {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
          className="user_box-input"
          type="text"
          placeholder="Meyers"
        />
        <label className="user_box-label">Adress</label>
        {errors.adress?.type === 'required' && (
          <p className="error">This field is required</p>
        )}
      </div>
    </form>
  );
});

export default Form;
