$(document).ready(function(){
    
    $("#lookup").click(function(){
        var allVal;
        
        if($("#all").is(':checked'))
        {
            allVal = 'true';
        }
        else
        {
            allVal='false';
        }
        
        //alert(allVal);
       
       $.get('world.php',{country:$("#country").val() , all:allVal},function(data){
            //alert(data);
            $('#result').html(data);
        });
        
    });
    
    
    
})