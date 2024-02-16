const tbody = document.querySelector("tbody");

//방명록 등록
// post /visitor
function createVisitor() {
  const form = document.forms["visitorForm"];
  const data = {
    name: form.name.value,
    comment: form.comment.value,
  };
  //간단 유효성 검사
  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert("이름과 방명록 모두를 기입해주세요!");
    return;
  }
  if (form.name.value.length > 6) {
    alert("이름은 6글자 이하로 작성해주세요");
    return;
  }
  axios({
    url: "/visitor",
    method: "post",
    data: data,
  }).then((res) => {
    console.log(res.data);
    // res.send({ id, name, comment });
    const { data } = res; //구조분해할당으로 data이름의 배열을 가져옴

    //화면에 붙여넣기 tbody의 맨밑자식으로 붙여요 append
    const html = `
    <tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.comment}</td>
        <td><button type="button" onclick="editVisitor(${data.id})">수정</button></td>
        <td><button type="button" onclick="deleteVisitor(this, ${data.id})">삭제</button></td>
    </tr>
    `;
    // tbody.append(html);
    tbody.insertAdjacentHTML("beforeend", html); //html을 맨 뒤에 붙여주겠다는 의미
  });
}

// 방명록 수정
// patch /visitor
// 1. 수정을 위한 입력창으로 변경
// 2. 수정버튼을 누르면 기존 데이터가 input의 value로 들어가게 함
// 한개의 데이터 조회가 필요
const btnGroup = document.querySelector("#btn-group");
// /visitor/id로 get 요청
function editVisitor(id) {
  console.log(id); //그 아이디 가지고 있어요

  axios({
    url: `/visitor/${id}`, //:id params로 전달됨
    method: "get",
    // params: { id: id }, req.query로 전달됨
  }).then((res) => {
    const { data } = res;
    console.log(data); //{id: 4, name: '룰루', comment: '미드룰루'}

    //현재 있는 입력창에 클릭한 데이터를 가져옴
    const form = document.forms["visitorForm"];
    form.name.value = data.name;
    form.comment.value = data.comment;
  });
  const html = `
    <button type="button" onclick="editDo(${id})">수정</button>
    <button type="button" onclick="editCancel()">취소</button>
    `;
  btnGroup.innerHTML = html;
}
//실제수정 /visitor로 patch
function editDo(id) {
  const form = document.forms["visitorForm"];
  axios({
    url: "/visitor",
    method: "patch",
    data: { id: id, name: form.name.value, comment: form.comment.value },
  }).then((res) => {
    // 데이터 받아서 바로 업데이트(새로고침없어도)
    const children = document.querySelector(`#tr_${id}`).children;
    console.log(children);
    //백에서 온 데이터 말고 프론트 데이터 그냥 사용했음
    children[1].textContent = form.name.value;
    children[2].textContent = form.comment.value;

    editCancel();
  });
}
//취소버튼을 누르거나, 수정이 끝난 후 실행
//input초기화 하고 버튼 원래대로
function editCancel() {
  const form = document.forms["visitorForm"];

  //input초기화
  form.name.value = "";
  form.comment.value = "";

  //등록버튼으로 변경
  btnGroup.innerHTML = `<button type="button" onclick="createVisitor()">방명록 등록</button>`;
}

// 방명록 삭제
// delete /visitor
function deleteVisitor(btn, id) {
  console.log(btn);
  console.log(id);

  axios({
    method: "delete",
    url: "/visitor",
    data: { id: id },
  }).then((res) => {
    console.log(res.data);
    alert(res.data); //send문자열
    // 실제 요소 지우기
    // 1. btn>td>tr.remove()
    btn.parentElement.parentElement.remove();
    // 2. closet()특정 선택자를 가진 가장 가까운 조상 요소를 찾음
    // btn.closest("tr").remove();
  });
}
