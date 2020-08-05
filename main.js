
name_of_the_student_array = [];
phone_of_the_student_array = [];
address_of_the_student_array = [];
    
function submit()
{
    var display_student_array = [];

    for (var j = 1; j <= 4; j++) 
    {
        var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
        var phone_of_the_student = document.getElementById("phone_of_the_student_"+j).value;
        var address_of_the_student = document.getElementById("address_of_the_student_"+j).value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);
         phone_of_the_student_array.push(phone_of_the_student);
         address_of_the_student_array.push(address_of_the_student);
    }

    console.log(name_of_the_student_array);

    var lenght_of_name_of_students_array = name_of_the_student_array.length;
    console.log(lenght_of_name_of_students_array);

    for (var k = 0; k < lenght_of_name_of_students_array; k++) 
    {
        display_student_array.push("<div class='main'><div>" + name_of_the_student_array[k] + " - " + phone_of_the_student_array[k] +  " </div></BR><div>Address :  " + address_of_the_student_array[k] + "</BR></div></div>");
        console.log(display_student_array);
    }

    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;


    document.getElementById("submit_button").style.display = "none";
  

}







