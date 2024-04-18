let selectedRow="";

const onSubmit=()=>{
event.preventDefault();
 var formDetail=readFormData();
 console.log(formDetail);
{selectedRow == ""?insertNewRecord(formDetail):updateRecord();}
resetForm();
}

// Read form data

const readFormData=()=>{
    let formData={};
    formData['Name']=document.getElementById('name').value;
    formData.Attendence=document.getElementById('stdatten').value;
    formData['Assignment']=document.getElementById('marksAss').value;
    formData.Project=document.getElementById('markspro').value;
    return formData;

}
// insert form data
const insertNewRecord=(data)=>{
    let table=document.querySelector("tbody");  
    let newRow = table.insertRow(table.length);  
    let cell1 = newRow.insertCell(0) 
        cell1.innerHTML=`&nbsp;`
    let cell2 = newRow.insertCell(1);
        cell2.innerHTML=data.Name;
    let cell3 = newRow.insertCell(2);
        cell3.innerHTML=data.Attendence;
    let cell4 = newRow.insertCell(3);
        cell4.innerHTML=data.Assignment;
    let cell5 = newRow.insertCell(4);
        cell5.innerHTML=data.Project;
    let cell6 = newRow.insertCell(5);
        cell6.innerHTML=`<button class="btnED" onClick='onEdit(this)'><a href="#"class="linkr btnED">Edit</a></button><button  class="btnED" onClick='onDelete(this)'>Delete</button>`
}

// Reset form data
const resetForm=()=>{
    document.getElementById('name').value='';
    document.getElementById('stdatten').value='';
    document.getElementById('marksAss').value='';
    document.getElementById('markspro').value='';
    selectedRow="";
}
// Edit form data
const onEdit=(btn)=>{
    selectedRow=btn.parentElement.parentElement;
    console.log(selectedRow);
    // document.getElementById("").value=selectedRow.cells[0].innerHTML;
    document.getElementById("name").value=selectedRow.cells[1].innerText;
    document.getElementById("stdatten").value=selectedRow.cells[2].innerText;
    document.getElementById("marksAss").value=selectedRow.cells[3].innerText;
    document.getElementById("markspro").value=selectedRow.cells[4].innerText;
}
const updateRecord=()=>{
    selectedRow.cells[0].innerHTML=`&nbsp;`;
    selectedRow.cells[1].innerHTML=document.getElementById('name').value;
    selectedRow.cells[2].innerHTML=document.getElementById('stdatten').value;
    selectedRow.cells[3].innerHTML=document.getElementById('marksAss').value;
    selectedRow.cells[4].innerHTML=document.getElementById('markspro').value;
}
//Delete table data
const onDelete=(del)=>{
        row=del.parentElement.parentElement;
        document.getElementById('table').deleteRow(row.rowIndex);
    
    resetForm();
}



//  Searching functionaliy in js Crud operation
const searchFun=()=>{
    let filter = document.getElementById('myinput').value.toUpperCase();
    let myTable =document.getElementById('table');
    let tr =myTable.getElementsByTagName('tr');
    for(var i=0; i<tr.length;i++){
        let td=tr[i].getElementsByTagName('td')[1];
        if(td){
            let textvalue= td.textContent || td.innerHTML;            
            if(textvalue.toUpperCase().indexOf(filter) >-1){
                tr[i].style.display="";
            }else{
                tr[i].style.display="none";
            }
        }
    }

}
// Delete all table Data
const tableDelete=()=>{
    event.preventDefault();
    // let table = document.getElementById("table");
let tbody = document.querySelector("tbody");
console.log(tbody.firstChild);
while (tbody.firstChild) {
  tbody.removeChild(tbody.firstChild);
}
}

// Accending or decending Order
  
const sortTable=(n)=>{
  
    let table=document.querySelector("table"),
        thead=document.querySelector("thead"),
        tbody=document.querySelector("tbody"),
        bRows=[...tbody.rows];

        bRows.sort((a,b)=>{
            let x=a.getElementsByTagName('td')[n].innerHTML.toUpperCase();
            let y=b.getElementsByTagName('td')[n].innerHTML.toUpperCase();
             return (x<y)?-1:1;
        });
            // console.log(x,y);
            bRows.map((bRows)=>{
                tbody.appendChild(bRows);
            })

}

// for(i=0;i<=10;i++){
//   debugger; (console.log(i))
// }
