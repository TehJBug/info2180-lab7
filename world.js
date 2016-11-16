$(document).ready(function(){
    
    $("#lookup").click(function(){
       
       $.get('world.php',{country:$("#country").val() , all:false},function(data){
                        
                        //alert(data);
                        $('#result').html(data);
                        
                    });
        
    });
    
    
    
})