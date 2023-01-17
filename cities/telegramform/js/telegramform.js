(function ($) {
  $(".contact-form").submit(function (event) {
    event.preventDefault();
   
    // Сообщения формы
    let successSendText = "Сообщение успешно отправлено";
    let errorSendText = "Сообщение не отправлено. Попробуйте еще раз!";
    let requiredFieldsText = "не все поля заполнены";

    // Сохраняем в переменную класс с параграфом для вывода сообщений об отправке
    let message = $(this).find(".contact-form__message");

    let form = $("#" + $(this).attr("id"))[0];
    let fd = new FormData(form);
    $.ajax({
     
      url: "telegramform/php/send-message-to-telegram.php",
      type: "POST",
      data: fd,
      processData: false,
      contentType: false,
      beforeSend: () => {
        $(".preloader").addClass("preloader_active");
      
       
      },
      success: function success(res) {
        $(".preloader").removeClass("preloader_active");
       
        // Посмотреть на статус ответа, если ошибка
        // console.log(res);
        let respond = $.parseJSON(res);
        let act = document.querySelector(".form_not")
        let side = document.querySelector(".sidebar")
        if (respond === "SUCCESS") {
          message.text(successSendText).css("color", "#21d4bb");
          act.classList.toggle('form_active');
          
          document.getElementById('form-contact').reset();

          setTimeout(() => {
            message.text("");
            act.classList.toggle('form_active');
            side.classList.toggle('open');
          }, 4000);
          
        } else if (respond === "NOTVALID") {
          message.text(requiredFieldsText).css("color", "#d42121");
          setTimeout(() => {
            message.text("");
          }, 3000);
        } else {
          message.text(errorSendText).css("color", "#d42121");
          setTimeout(() => {
            message.text("");
           
          }, 4000);
        }
      }
    });
  });
})(jQuery);

let inputs = document.querySelectorAll('.contact-form__input_file');
    Array.prototype.forEach.call(inputs, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.contact-form__file-text').innerText;

      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;

        if (countFiles)
          label.querySelector('.contact-form__file-text').innerText = 'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.contact-form__file-text').innerText = labelVal;
      });
    });

  

    (() => {
      const max_stars = 100;
      const stars = [];
      
      for (let i = 0; i < max_stars; i++) {
        const star = document.createElement('span');
        const size = (Math.floor(Math.random() * 3) + 1);
        star.className = 'star';
        star.style.width = size +'px';
        star.style.height = size + 'px';
        star.style.background = `rgba(255, 255, 177, ${Math.random()})`;
        star.style.top = Math.ceil(Math.random() * 100) + '%';
        star.style.left = Math.ceil(Math.random() * 100) + '%';
        stars.push(star);
        document.body.appendChild(star);
      }
      
      for (let j = 0; j < max_stars * 0.6;  j++) {
        const star = stars[j];
        star.style.animationName = 'glow';
        star.style.animationDelay = (Math.floor(Math.random() * 6) + 1) + 's';
        star.style.animationDuration = (Math.floor(Math.random() * 6) + 1) + 's';
      }
    })();
    
    
    