/*var doc = new jsPDF('p', 'pt', 'a4');
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};
 
$('#cmd').click(function () {
	
    doc.fromHTML($('#print_pdf').get(0), 15, 15, {
        'width': 560,
		'margin': 1,
        'pagesplit': true,
            'elementHandlers': specialElementHandlers
			
    });
	//doc.addPage(560, 600);
    doc.save('testfile.pdf');	
	
});



*/


/*$('#cmd').click(function () {
	
   var pdf = new jsPDF('p','pt','a2');
//var source = document.getElementById('table-container').innerHTML;
//console.log(document.getElementById('print_pdf'));
var margins = {
   top: 5,
   bottom: 60,
   left: 5,
   
   width: 622
}; 
var options = {
         pagesplit: true
    };
// all coords and widths are in jsPDF instance's declared units
// 'inches' in this case
//pdf.text(20, 20, 'Hello world.');

pdf.addHTML($('#print_pdf'),  options,function() {
	//var string = pdf.output('datauristring');
   pdf.save('test.pdf');
});
	
});*/


$(function(){
      
      var doc = new jsPDF('p', 'pt', 'letter');
var specialElementHandlers = {
    
};

$('#cmd').click(function () {
    
doc.fromHTML($('#print_pdf').get(0), 15, 15, {
'width': 560,
'margin': 1,
'pagesplit': true, //This will work for multiple pages
'elementHandlers': specialElementHandlers
});
    
    doc.save('sample-file.pdf');
});

    });