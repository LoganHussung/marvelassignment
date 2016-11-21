function loadIt(){
var heroReq = $('#heroReq').val();
if (heroReq == '' || heroReq == null || heroReq == undefined) {
 alert('Your search terms were not valid')
} else {
 $.ajax({
  url:"https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=" + heroReq + "&limit=20&apikey=a799d9e6415c9aaf43e9154921a45d92"
 }).then(function(char){
   var group = $('<div class="groups col-sm-12"></div>');
       $.each(char.data.results, function(req, res){
         var subgroup = $('<div class="subgroup col-xs-12 col-sm-6 col-md-3 col-md-offset-1 col-md-pull-1"></div>');
         if (res.thumbnail.extension === 'gif' || res.thumbnail.extension === 'png' || res.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') {
           subgroup.append($('<h2></h2>').text(res.name));
           subgroup.append($('<br>' + '<img/>').attr('src', 'Images/heroplace' + '.jpg'));
           subgroup.append($('<h6 class="comics col-xs-6"></h6>') .text('Comics: ' + res.comics.available));
           subgroup.append($('<h6 class="stories col-xs-6"></h6>') .text('Stories: ' + res.stories.available));
           subgroup.append($('<h6 class="events col-xs-6"></h6>') .text('Events: ' + res.events.available));
           subgroup.append($('<h6 class="series col-xs-6"></h6>') .text('Series: ' + res.series.available));
           if (res.description === "" || res.description === " ") {
             subgroup.append($('<p></p>').text('This hero does not have a description.'));
           } else {
             subgroup.append($('<p></p>').text(res.description));
           };
           subgroup.append($('<h6></h6>').text('Card Number: ' + res.id));

         } else {
           subgroup.append($('<h2></h2>').text(res.name));
           subgroup.append($('<br>' + '<img/>').attr('src', res.thumbnail.path + '.jpg'));
           subgroup.append($('<h6 class="comics col-xs-6"></h6>') .text('Comics: ' + res.comics.available));
           subgroup.append($('<h6 class="stories col-xs-6"></h6>') .text('Stories: ' + res.stories.available));
           subgroup.append($('<h6 class="events col-xs-6"></h6>') .text('Events: ' + res.events.available));
           subgroup.append($('<h6 class="series col-xs-6"></h6>') .text('Series: ' + res.series.available));
           if (res.description === "" || res.description === " ") {
             subgroup.append($('<p></p>').text('This hero does not have a description.'));
           } else {
             subgroup.append($('<p></p>').text(res.description));
           };
           subgroup.append($('<h6></h6>').text('Card Number: ' + res.id));
       };
         group.append(subgroup)
       })
       $('.heroes').empty().append(group);
  });
};
}
$('#heroSelect').on("click", loadIt);
