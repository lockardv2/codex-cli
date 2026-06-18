const form = document.querySelector("#signup-form");
const status = document.querySelector("#status");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!status) {
    return;
  }

  if (!email || !password) {
    status.textContent = "로그인 폼을 찾을 수 없습니다.";
    return;
  }

  const enteredEmail = email.value.trim();
  const enteredPassword = password.value;

  if (!enteredEmail || !enteredPassword) {
    status.textContent = "이메일과 비밀번호를 모두 입력해주세요.";
    return;
  }

  status.textContent = `${enteredEmail} 계정으로 로그인되었습니다.`;
});
