$('#profile-submit').on('click',function(event){  
  let profile = {scores:[]};
  $('.friend-form').map(function(index){
    if (index === 0) {
      profile.name = this.value;
    } else if (index === 1) {
      profile.photo = this.value;
    } else {
      profile.scores.push(this.value || "0");
    }
  });
  $.ajax({
    method: 'POST',
    url: '/api/friends',
    datatype: 'json',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(profile)
  }).done(function(bestbud){
      let pic = $('<img>').attr('src',bestbud.photo);
      let name = $('<h2>').append(bestbud.name);
      $('#modal-content').append(pic,name);
      $('#modal').toggleClass('closed');
      $('#modal-overlay').toggleClass('closed');
  });
});

$('#close').on('click',function(event){
  $('#modal').toggleClass('closed');
 });




