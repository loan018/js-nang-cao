async function getList() {
try {
    const res = await axios.get(`http://localhost:3000/student`)
    const student = res.data;
    const conterHTML = student.map(xdata).join("");
    document.getElementById('listid').innerHTML=conterHTML
} catch (error) {
  console.error(error)
}
function xdata(student){
  return`
   <tr>
            <th scope="row">${student.id}</th>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.msv}</td>
            <td><img src="${student.img}" alt="" style="height: 100px;"></td>
            <td>
              <button class="btn btn-danger">Xóa</button>
              <button class="btn btn-warning">Sửa</button>
            </td>
          </tr>
  `
}
}
getList();