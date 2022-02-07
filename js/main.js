// document.getElementById('btn').addEventListener('click', handleCopyTextFromArea());

// function handleCopyTextFromArea() {
//     const area = document.querySelector('#clipboard-area')
//     area.select();
//     document.execCommand('copy')
//   }

// function copyToClipboard(element) {
//     var $temp = $("<input>");
//     $("body").append($temp);
//     $temp.val($(element).text()).select();
//     document.execCommand("copy");
//     $temp.remove();
//   }



function copyToClipboard(element) {
    var text = $(element).clone().find('br').prepend('\r\n').end().text()
    element = $('<textarea>').appendTo('body').val(text).select()
    document.execCommand('copy')
    element.remove()
    $("#score").show();
  }

  $(document).ready(function() {
    $('#score').hide();
 });