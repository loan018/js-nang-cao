
async function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const msv = document.getElementById("msv").value;
  const img = document.getElementById("img").value;
  if(!name|| !age||!msv||!img){
     alert("Hiện thị đủ thông tin");
     return;
  }
  try {
    const data ={
    name,
    age,
    msv,
    img,
  };
   await axios.post(`http://localhost:3000/student`,data)
    location.href = 'index.html'
    alert("Thêm mới thành công")
  } catch (error) {
    console.error(error)
  }
}