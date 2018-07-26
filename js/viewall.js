 $(function () {

     var employees = getDataFromLocalStorage();
     showEmployees(employees);

function getDataFromForm(){
       var empno = $('#idin').val();
         var name = $('#namein').val();
         var email = $('#emailin').val();
         var mobile = $('#mobilein').val();
         var dept = $('#deptin').val();
         var desg = $('#desgin').val();
         var salary = $('#salaryin').val();
         var qual = $('#qualin').val();

         $('#idin').val('');
         $('#namein').val('');
         $('#emailin').val('');
         $('#mobilein').val('');
         $('#deptin').val('');
         $('#desgin').val('');
         $('#salaryin').val('');
         $('#qualin').val('');


         var employee = {
             "empno": empno,
             "name": name,
             "email": email,
             "mobile": mobile,
             "dept": dept,
             "desg": desg,
             "salary": salary,
             "qual": qual
         }
         return employee;
}

     $('#btnsub').click(function () {
         var employee = getDataFromForm();
         var employees = addEmployee(employee);
         showEmployees(employees);
         $("#btnsub").attr("data-dismiss", "modal");
         location.reload(true);
     });


     function showEmployees(employees) {
         var data = "";

         data += "<table class='emptable display'>";
         data += "<thead><tr>";
         data += "<th>#</th>";
         data += "<th>EmpID</th>";
         data += "<th>Name</th>";
         data += "<th>Email</th>";
         data += "<th>Mobile</th>";
         data += "<th>Department</th>";
         data += "<th>Designation</th>";
         data += "<th>Qualification</th>";
         data += "<th>Salary</th>";
         data += "<th>Edit</th>";
         data += "<th>Delete</th> </tr></thead>";


         for (var i = 0; i < employees.length; i++) {
             data += "<tr>";
             data += "<td>" + (i + 1) + "</td>";
             data += "<td>" + employees[i].empno + "</td>";
             data += "<td>" + employees[i].name + "</td>";
             data += "<td>" + employees[i].email + "</td>";
             data += "<td>" + employees[i].mobile + "</td>";
             data += "<td>" + employees[i].dept + "</td>";
             data += "<td>" + employees[i].desg + "</td>";
             data += "<td>" + employees[i].qual + "</td>";
             data += "<td>" + employees[i].salary + "</td>";
             
             data += "<td><button value='" + employees[i].empno + "' class='editEmp' data-toggle='modal' data-target='#exampleModal'><i class='far fa-edit'></i></button></td>";
             data += "<td><button class='deleteEmp' id='i' value='" + employees[i].empno + "'><i class='far fa-trash-alt'></i></button></td>";
             data += "</tr>";
         }
         data += "</table>";
         $('#showcontent').html(data);
         $('.emptable').dataTable({
             destroy: true
         });

     }

     $('#searchbtn').click(function () {

         var keyName = $('#searchtxt').val();
         var keyDept = $('#searchDrop').val();

         var employees = searchAndGet(keyName, keyDept);
         showEmployees(employees);

     });

     $('.deleteEmp').click(function () {
         var isConfirm = confirm("Do you really want to delete");
         if (isConfirm) {
             var empno = $(this).val();
             var employees = removeEmployee(empno);
             showEmployees(employees);
               location.reload(true);
         }

     });

     $('.editEmp').click(function () {

         $("#btnupdate").css("display", "block");
         $('#btnsub').css("display", "none");
         var employees = getDataFromLocalStorage();
         var empno = $(this).val();
          index = searchEmpNumber(empno);
         putEmployee(index);
         $("#btnupdate").click(function(){
             
               var employee = getDataFromForm();
               var employees = editEmployee(employee,index);
               showEmployees(employees);
             
         $("#btnupdate").css("display", "none");
         $('#btnsub').css("display", "block");
         $("#btnupdate").attr("data-dismiss", "modal");
             location.reload(true);
            
         });
     });
     
     function putEmployee(i){
         $('#idin').val(employees[i].empno);
         $('#namein').val(employees[i].name);
         $('#emailin').val(employees[i].email);
         $('#mobilein').val(employees[i].mobile);
         $('#deptin').val(employees[i].dept);
         $('#desgin').val(employees[i].desg);
         $('#salaryin').val(employees[i].salary);
         $('#qualin').val(employees[i].qual);

     }


 });
