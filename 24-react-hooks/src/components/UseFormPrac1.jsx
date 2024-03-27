import { useForm } from "react-hook-form";

export default function UseFormPrac1() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const valid = (data) => {
    console.log("form 데이터: ", data);
  };
  const invalid = (data) => {};
  return (
    <>
      <h3>실습문제1</h3>
      <form onSubmit={handleSubmit(valid, invalid)}>
        <input
          type="text"
          placeholder="이름 입력"
          {...register("username", {
            required: "이름은 필수 항목입니다",
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="number"
          placeholder="나이 입력"
          {...register("age", {
            min: {
              value: 0,
              message: "0 이상의 숫자만 입력가능합니다.",
            },
          })}
        />
        {errors.age?.message}
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
