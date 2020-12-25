let i  = 3;

$('#button_click_sozdat').click(function(){
    let first = $('#First').val();
    let Last = $('#Last').val();
    let Handle = $('#Handle').val();
    


     if(first.length>0 && Last.length>0 && Handle.length>0)
     {
      
      $('#table').append(`<tr><td> ${i + 1} </td> <td>${first} </td><td> ${Last} </td> <td> ${Handle}</td></tr>`);
        i++;
     }
     
     
  });

  