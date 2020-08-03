var thisHour = moment().hour()
console.log(thisHour, "test")
console.log(localStorage)
var hours = [8, 9, 10, 11, 12, 1, 2, 3, 4]
for (var i = 0; i < hours.length; i++) {
    var hour = hours[i]
    var description = localStorage.getItem(hour)
    $('.text' + hour).val(description)
}

$('#currentDay').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
console.log($('.time-block'))
$(".time-block").each(function () {
    var blockHour = parseFloat($(this).text())
    var blockHourT = ($(this).text())
    var AMPM = blockHourT.slice(2)
    console.log(AMPM)
    console.log(blockHour)
    if (thisHour < blockHour) {
        console.log('true')
        $(this).addClass("future")
    } else if (thisHour > blockHour) {
        console.log('false')
        $(this).addClass("past")
    } else if (thisHour === blockHour) {
        console.log('now')
        $(this).addClass("present")
    }
})

$('.saveBtn').on('click', function () {
    var lockIcon = $(this).children("i").removeClass("fa-unlock").addClass("fa-lock")
    var descriptionBlock = $(this).siblings(".description").val()
    var blockHour = $(this).attr('class').split(" ")[2]
    localStorage.setItem(blockHour, descriptionBlock)
    $(this).siblings.textContent = localStorage.getItem('description')
});

$('.clearBtn').on('click', function () {
    var saveIcon = $(this).children("i").addClass("spin")
    localStorage.clear()
    var descriptionBlock = $(".description").val('')
    });

    $('.fa-spin').on('animationiteration', function(event) {
        if (done) {
          $(event.target).removeClass('fa-spin');
        }
      });