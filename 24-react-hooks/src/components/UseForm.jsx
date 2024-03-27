import { useForm } from "react-hook-form";

export default function Form() {
  //   const forms = useForm();
  //   console.log(forms);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //   단축평가
  // &&: 여러조건중에 하나라도 false면 전체값 false
  // ||: 여러 조건 중에 하나라도 true라면 전체값 true

  //   console.log("errors", errors); //{email?, username?}
  //   console.log("email invalid message", errors.email?.message);
  console.log("watch username", watch("username"));
  //watch메소드(register로 설정한 name값) : string반환 입력할 때마다
  console.log("entire info", watch());
  //객체형태로 모든 값 반환
  const onValid = (data) => {
    console.log("valid", data);
    // data = {username: '~~'}
    //axios요청 가능
  };
  const onInValid = (data) => {
    // register의 두번째 인자에 대한 정보가 온다
    console.log("invalid", data);
    // console.log(data.username?.message); //있으면 메시지 출력
  };

  //name = "username"을 대신해서 사용
  //   const userNameRegister = register("username");
  //console.log(userNameRegister);
  return (
    <>
      <h1>useForm 사용해보기</h1>
      {/* 
      handleSubmit(func1, func2): 인자로 두개의 함수를 받을 수 있음, 두번째 인자는 선택
      func1: 필수, 유효할 때 실행
      func2: 선택, 유효하지 않을 때(유효성 검색 존재시) 실행 
      */}
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type="text"
          placeholder="username"
          {...register("username", {
            // 두 번째 인자: 유효성 검사, 아래의 value, message등은 register에서 기본제공하는 설정들
            required: "이름을 입력해주세요",
            minLength: {
              value: 2,
              message: "이름은 최소 두글자 이상 작성해주세요",
            },
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="email"
          placeholder="email"
          {...register("email", {
            required: "이메일을 입력해주세요",
            validate: {
              useGmail: (value) => {
                // value = input의 value와 같음
                // gmail.com이 포함되면 true , 포함되지 않으면 string리턴
                return (
                  value.includes("gmail.com") || "gmail로만 가입가능합니다."
                );
              },
            },
          })}
        />
        {errors.email?.message}
        <br />
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
