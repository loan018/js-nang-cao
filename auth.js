async function register(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if(!email|| !password){
     alert("Hiện thị đủ thông tin");
     return;
  }
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Email không hợp lệ");
    return;
  }

  if (password.length < 6) {
    alert("Mật khẩu phải có ít nhất 6 ký tự");
    return;
  }
  try {
    const data ={
    email,
    password
  };
     await axios.post(`http://localhost:3000/register`,data)
    location.href = 'login.html'
    alert("Đăng ký thành công")
  } catch (error) {
    console.error(error)
  }
}
async function login(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if(!email|| !password){
     alert("Hiện thị đủ thông tin");
     return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Email không hợp lệ");
    return;
  }

  if (password.length < 6) {
    alert("Mật khẩu phải có ít nhất 6 ký tự");
    return;
  }
  try {
    const data ={
    email,
    password
  };
  const res = await axios.post(`http://localhost:3000/login`, data);
  console.log(res.data); 
  const token = res.data.accessToken; 
  localStorage.setItem("token", token); 
  //location.href = 'index.html'
  alert("Đăng nhập thành công")
  } catch (error) {
    console.error(error)
  }
}

