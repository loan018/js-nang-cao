
const id = location.search.split("=")[1];
async function getDeail() {
  if(!id) return;
  try {
      const res = await axios.get(`http://localhost:3000/student/${id}`)
      const oldStudent = res.data
      document.getElementById('name').value = oldStudent.name;
      document.getElementById('age').value = oldStudent.age;
      document.getElementById('msv').value = oldStudent.msv;
      document.getElementById('img').value = oldStudent.img;
  } catch (error) {
     console.error(error)
  }
}
getDeail();


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
  if(!id){
     await axios.post(`http://localhost:3000/student`,data)
    location.href = 'index.html'
    alert("Thêm mới thành công")
  }else{
     await axios.put(`http://localhost:3000/student/${id}`,data)
    location.href = 'index.html'
    alert("Cập nhật thành công")
  }
  } catch (error) {
    console.error(error)
  }
}