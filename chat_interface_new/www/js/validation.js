// JavaScript Document
function revalidateContact(){
	if($("#noteDescTextarea").hasClass("has-error") || $("#taskDescTextarea").hasClass("has-error")){
		 $("#noteDescTextarea").removeClass("has-error");
		 $("#taskDescTextarea").removeClass("has-error");
	};
}
function validateContact(){
	if($("#noteTextarea").val()=='' || $("#taskTextarea").val()==''){
		if($("#noteTextarea").val()==''){
			$("#noteDescTextarea").addClass("has-error");
		}
		if($("#taskTextarea").val()==''){
			$("#taskDescTextarea").addClass("has-error");
		}
	}
}

function errorValidCat(){
	if($("#inputcatname").hasClass("has-error")){
		 $("#inputcatname").removeClass("has-error");
	};
};
function check_category(){
	var bttnBouncyflip = document.getElementById( 'notification-trigger-bouncyflip' );
	
	//condition with or and include all elements
	if($("#name").val()==''){
		
		// simulate loading (for demo purposes only)
		classie.add( bttnBouncyflip, 'active' );
		classie.remove( bttnBouncyflip, 'active' );
	
		// create the notification
		if($("#name").val()==''){
			 $("#inputcatname").addClass("has-error");	
 			 $("#name").focus();
			 $('html, body').animate({ scrollTop: $('#inputcatname').offset().top - 75 }, 'slow');
			 bttnBouncyflip.disabled = true;
			 var notification = new NotificationFx({
				 message : '<span class="fa fa-flag-checkered fa-3x pull-left"></span><p>Enter valid category name<a href="#" style="display:none;">event overview</a>.</p>',
				 layout : 'attached',
				 effect : 'bouncyflip',
				 type : 'success', // notice, warning or error
				 onClose : function() {
					 bttnBouncyflip.disabled = false;
					 return false;
					 this.disabled = false;
				 }
  		 });
		}
		notification.show(); // show the notification
	}
	if($("#name").val()=='')
	{}
	else{
		add_category();
	}
};
