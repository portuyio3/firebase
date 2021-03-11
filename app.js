const db=firebase.firestore();
const table=document.querySelector('#tbresult')
const form=document.querySelector('#addForm')



db.collection('Firebase').get().then((snapshot) => {
    snapshot.forEach(doc=>{
        showData(doc);
    });
});
// เพิ่มข้อมูล
form.addEventListener('submit',(e)=>{
        e.preventDefault();
        db.collection('Firebase').add({
           
            ชื่อข้อมูล1:form.ชื่อข้อมูล1.value,
            ชื่อข้อมูล2:form.ชื่อข้อมูล2.value,
            ชื่อข้อมูล3:form.ชื่อข้อมูล3.value,
            ชื่อข้อมูล4:form.ชื่อข้อมูล4.value,
            ชื่อข้อมูล5:form.ชื่อข้อมูล5.value,

        });
});


// แสดงข้อมูล
function showData(doc) {
    var row=table.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    cell1.innerHTML=doc.data().ชื่อข้อมูล1;
    cell2.innerHTML=doc.data().ชื่อข้อมูล2;
    cell3.innerHTML=doc.data().ชื่อข้อมูล3;
    cell4.innerHTML=doc.data().ชื่อข้อมูล4;
    cell5.innerHTML=doc.data().ชื่อข้อมูล5;
    
     //ลบ
    let btn=document.createElement('button');
    btn.textContent='ลบ';
    btn.setAttribute('class', 'btn btn-danger');
    btn.setAttribute('data-id', doc.id);
    cell6.appendChild(btn);

    btn.addEventListener('click',(e)=>{
               let id = e.target.getAttribute('data-id');
               db.collection('Firebase').doc(id).delete();
    });
}