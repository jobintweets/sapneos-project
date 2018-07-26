
if(localStorage.getItem("employees")==null){
    localStorage.setItem("employees",JSON.stringify([]));
}
function addEmployee(employee){
    console.log(employee);
    var employees = getDataFromLocalStorage();
    console.log(employees);
    employees.push(employee);
    updateLocalStorage(employees);
    return getDataFromLocalStorage();
}

function getDataFromLocalStorage(){
    
    return JSON.parse(localStorage.getItem("employees"));
}
function updateLocalStorage(employees){
    localStorage.setItem("employees",JSON.stringify(employees));
}

function searchAndGet(keyName,keyDept){
   
    if((keyName =="") && (keyDept =="")){
        return getDataFromLocalStorage();
    }else if(keyDept == ""){
        return searchEmployeeByName(keyName);
    }else if(keyName == ""){
        return searchEmployeeByDept(keyDept);
    }else{
        return searchEmployeeByNameAndDept(keyName,keyDept);
    }
}

function searchEmployeeByName(keyName){
    var employees = getDataFromLocalStorage();
    var tempArray = [];
    
    for(var i = 0; i < employees.length; i++){
        if(employees[i].name.indexOf(keyName)!=-1){
            tempArray.push(employees[i]);
        }
    }
    return tempArray;

}

function searchEmployeeByDept(keyDept){
    var employees = getDataFromLocalStorage();
    var tempArray = [];
    
    for(var i = 0; i < employees.length; i++){
        if(employees[i].dept === keyDept){
            tempArray.push(employees[i]);
        }
    }
    return tempArray;

}
function searchEmployeeByNameAndDept(keyName,keyDept){
    var employees = getDataFromLocalStorage();
    var tempArray = [];
    
    for(var i = 0; i < employees.length; i++){
        if((employees[i].dept === keyDept) && (employees[i].name.indexOf(keyName)!=-1)){
            tempArray.push(employees[i]);
        }
    }
    return tempArray;

}

function searchEmpNumber(keyNo){
     var employees = getDataFromLocalStorage();
    for(var i = 0; i < employees.length; i++){
        if((employees[i].empno == keyNo)){
          return i;
        }
    }
    

}

 function removeEmployee(empno){
     var employees =getDataFromLocalStorage();
     var index = searchEmpNumber(empno);
     employees.splice(index,1);
     updateLocalStorage(employees);
     return getDataFromLocalStorage();
 }
function editEmployee(employee,index){
    var employees = getDataFromLocalStorage();
    employees.splice(index,1,employee);
    updateLocalStorage(employees);
    
    return getDataFromLocalStorage();
}