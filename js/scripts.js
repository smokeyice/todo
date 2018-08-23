// business logic
function List(item) {
  this.listItem = item;
}
// user interface

$(document).ready(function(){
  $("form#list").submit(function(event){
    event.preventDefault();
    var inputtedItem = $("input#listItem").val();

    var newList = new List(inputtedItem);

    $("ol#whatToDo").append("<li><span class='list'>" + newList.listItem + "</span></li>")
    $(".list").last().click(function(){
      $(".list").fadeOut();
      $("ol#done").append("<li>"+ newList.listItem +"</li>")
    });

    $("input#listItem").val('');
  });
});
