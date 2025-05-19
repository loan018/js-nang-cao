async function register(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if(!email|| !password){
     alert("Hiện thị đủ thông tin");
     return;
  }
  try {
    const data ={
    email,
    password
  };
     await axios.post(`http://localhost:3000/register`,data)
    location.href = 'index.html'
    alert("Đăng ký thành công")
  } catch (error) {
    console.error(error)
  }
}