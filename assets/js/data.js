
$(document).before(function() {
   populateList();
 });
 
$('div#detail').live('pageshow',function(event, ui){
  populateDetail();
}) 
 

schedule = {
	"presentation" : [
		{"title":"Registration", "start":"8:00", "end":"8:50"},
		{"title":"Opening Comments", "start":"8:50", "end":"9:00", "speaker": "Cal Evans"} ,
		{"title":"CI:IRL", "start":"9:00", "end":"9:50", "speaker": "Beth Tucker Long"} ,
		{"title":"Scaling in the Cloud with Amazon Web Services", "start":"10:00", "end":"10:50", "speaker": "Eli White", "description": "Making your web application scalable is always a tricky task. This talk will center around how you can do this more easily on the cloud, specifically using Amazon Web Services such as EC2, RDS, S3 and more features. Amazon has a very rich feature set that makes having a scalable application easier than ever before."} ,
		{"title":"What's New in PHP 5.4", "start":"11:00", "end":"11:50", "speaker": "Cal Evans", "description":"If you read all the Changelogs, have grabed the alpha code for testing, and are already working on a blog post about your favorite new shiny in PHP 5.4, this session is not for you. (Please sit quietly in the back and submit patches) For the rest of us that just need to get things done, let’s take a look at the new tools that we have in our toolbox."} ,
		{"title":"Lunch", "start":"11:50", "end":"1:20"},
		{"title":"Midday thought", "start":"1:20", "end":"1:30", "speaker": "D. Keith Casey"} ,
		{"title":"Refactoring and Other Small Animals", "start":"1:30", "end":"2:20", "speaker": "Marco Tabini"} ,
		{"title":"Front Ends for PHP", "start":"2:30", "end":"3:20", "speaker": "Terry Ryan"} ,
		{"title":"REST Best Practices", "start":"3:30", "end":"4:20", "speaker": "D. Keith Casey", "description":"Stateless.. Nouns & Verbs.. Idempotent.. HTTP Auth.. Tokens.. We’ve all heard those phrases thrown around when we talk about REST. We’ve been told our systems have to include these characteristics or they’re not RESTful. We’ve talked over and over again on how to implement them. Unfortunately, somewhere along the way, we lost the answer to “why?” What’s the point? What value do we gain by doing things the “right” way?"} ,
		{"title":"Final Comments", "start":"4:20", "end":"4:50", "speaker":"Marco Tabini"}
	]
	
	
};

function populateList(){
	
	for (i=0; i < schedule.presentation.length;i++){
		var li = "";
		
		li = li + '<li data-icon="listicon">';
		if (schedule.presentation[i].description){
			li = li + '<a href="#detail?id=' + i +'" click="populateDetail()">';
			
		}
		li = li + '<time>' + schedule.presentation[i].start +  '</time>'; 
		li = li + ' - '; 
		li = li + '<time>' + schedule.presentation[i].end +  '</time>';
		li = li + '<h1>' + schedule.presentation[i].title +  '</h1>';
		if (schedule.presentation[i].description){
			li = li + '</a>';
		}
		li = li + "</li>";
		
		$("#presentationlist").append(li);
		
		
	}
	
	$("#presentationlist").listview('refresh');
}

function populateDetail(){
	var id=$.urlParam('id');	
	presentation = schedule.presentation[id];
	$("#title").text(presentation.title);
	$("#speaker").text(presentation.speaker);
	$("#description").append("<p>" + presentation.description + "</p>");
	
}

$.urlParam = function(name){
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}
