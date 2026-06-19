// 회원가입 폼과 상태 메시지 영역을 미리 참조한다.
const form = document.querySelector("#signup-form");
const status = document.querySelector("#status");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form?.addEventListener("submit", (event) => {
  // 기본 폼 전송을 막고, 화면 안에서 입력값을 검증한다.
  event.preventDefault();

  if (!status) {
    return;
  }

  // 필수 입력 요소가 없으면 더 이상 진행하지 않는다.
  if (!email || !password) {
    status.textContent = "로그인 폼을 찾을 수 없습니다.";
    return;
  }

  const enteredEmail = email.value.trim();
  const enteredPassword = password.value;

  // 둘 중 하나라도 비어 있으면 사용자에게 즉시 안내한다.
  if (!enteredEmail || !enteredPassword) {
    status.textContent = "이메일과 비밀번호를 모두 입력해주세요.";
    return;
  }

  // 실제 서버 요청 대신, 현재는 입력값을 이용해 성공 메시지만 갱신한다.
  status.textContent = `${enteredEmail} 계정으로 로그인되었습니다.`;
});
