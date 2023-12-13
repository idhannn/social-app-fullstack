interface Props {
  type?: string;
  place?: string;
  classes?: string;
  register?: any;
}
const Input: React.FC<Props> = ({ type, place, classes, register }) => {
  return (
    <input
      type={type}
      placeholder={place}
      {...register}
      className={
        "rounded-lg focus:outline-2 border-none focus:outline-rose-200 my-2 px-4 py-3 hover:outline-rose-200 hover:outline duration-300  outline-none bg-slate-100 "
      }
      required
    />
  );
};

export default Input;
