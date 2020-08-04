//current actual time (military format)
var thisHour = moment().hour()
//console.log(thisHour, "test")
//console.log(localStorage)
//for each hour block on the calendar (which has a class of "text" + displayed hour), return the value of description to the respective key hour
var hours = [8, 9, 10, 11, 12, 1, 2, 3, 4]
for (var i = 0; i < hours.length; i++) {
    var hour = hours[i]
    var description = localStorage.getItem(hour)
    $('.text' + hour).val(description)
}

//formats the current time for the display at the top of the page
$('#currentDay').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
//console.log($('.time-block'))
$(".time-block").each(function () {
    //to get the variable blockHour, take the integer from the displayed time
    var blockHour = parseFloat($(this).text())
    //for the afternoon hours, add 12 to align with the reference of military time for var thisHour
    if (blockHour < 8) {
        blockHour = blockHour + 12
    }
    //console.log(blockHour)
    if (thisHour < blockHour) {
        //console.log('true')
        $(this).addClass("future")
    } else if (thisHour > blockHour) {
        //console.log('false')
        $(this).addClass("past")
    } else if (thisHour === blockHour) {
        //console.log('now')
        $(this).addClass("present")
    }
})

//when you hit the save button next to each time block,
$('.saveBtn').on('click', function () {
    //change the icon to be a lock
    var lockIcon = $(this).children("i").removeClass("fa-unlock").addClass("fa-lock")
    //get the value of the appointment information typed in the textbox
    var descriptionBlock = $(this).siblings(".description").val()
    //get the unique class from 8 to 4 from the attributes
    var blockHour = $(this).attr('class').split(" ")[2]
    //set the blockHour as the key in localStorage and the corresponding description as the value
    localStorage.setItem(blockHour, descriptionBlock)
    //return the value from localstorage as text for the clicked saveBtn's sibling element's text content
    $(this).siblings.textContent = localStorage.getItem('description')
});

//then you hit the clear button on the bottom of the page
$('.clearBtn').on('click', function () {
    //the icon spins
    var saveIcon = $(this).children("i").addClass("spin")
    //localStorage is cleared
    localStorage.clear()
    //the description block displayed text is also cleared
    var descriptionBlock = $(".description").val('')
    });
    //the icon spins for one rotation (until done)
    $('.fa-spin').on('animationiteration', function(event) {
        if (done) {
          $(event.target).removeClass('fa-spin');
        }
      });