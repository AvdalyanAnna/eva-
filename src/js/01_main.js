$(function (){
    function stepItem(index){
        console.log(index)
        const $this = $(".steps-item").eq(index),
            item = $this.data('item'),
            parent = $this.data('parent'),
            show = $this.data('show')
        if($this.hasClass('active')) return false;
        $(".steps-item").removeClass('active')
        $(".steps-item").eq(item).toggleClass('active')
        $(parent).find(show).slideUp(300)
        $(parent).find(show).eq(item).slideDown(300)
        console.log( $(parent).find(show))
    }
})

document.addEventListener("DOMContentLoaded", () => {

// SELECTS

    (() => {
        var x, i, j, l, ll, a, b, c, spanText, bCont;
        /* Look for any elements with the class "custom-select": */
        x = document.getElementsByClassName("custom-select");
        l = x.length;
        for (i = 0; i < l; i++) {
            let selElmnt = x[i].getElementsByTagName("select")[0];
            const multipleCheck = selElmnt.hasAttribute('multiple');

            ll = selElmnt.length;
            /* For each element, create a new DIV that will act as the selected item: */
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");
            spanText = document.createElement("SPAN");
            spanText.innerHTML = selElmnt.options[selElmnt.selectedIndex] ? selElmnt.options[selElmnt.selectedIndex].innerHTML : 'Выбрать...';
            x[i].appendChild(a);
            a.appendChild(spanText)
            spanText.outerHTML += `<svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.53637 6.70885C3.93067 7.31591 4.81933 7.31591 5.21363 6.70885L8.24308 2.04471C8.67518 1.37943 8.19774 0.5 7.40445 0.5H1.34555C0.552263 0.5 0.0748161 1.37943 0.506922 2.0447L3.53637 6.70885Z" fill="#EB0E54" />
</svg>`
            /* For each element, create a new DIV that will contain the option list: */
            b = document.createElement("DIV");
            bCont = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            bCont.setAttribute("class", "select-items__items");
            for (j = 0; j < ll; j++) {
                /* For each option in the original select element,
                create a new DIV that will act as an option item: */
                c = document.createElement("DIV");
                    c.setAttribute('data-value', j);
                c.innerHTML = selElmnt.options[j].innerHTML;
                if (j === selElmnt.selectedIndex) {
                    c.setAttribute("class", "same-as-selected");
                }
                c.addEventListener("click", function (e) {
                    /* When an item is clicked, update the original select box,
                    and the selected item: */
                    e.stopPropagation()
                    var y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.parentNode.getElementsByTagName("select")[0];
                    sl = s.length;
                    h = this.parentNode.parentNode.previousSibling.querySelector('span');

                    for (i = 0; i < sl; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            if (multipleCheck) {
                                if (s.options[i].selected) {
                                    s.options[i].selected = false;
                                    this.removeAttribute("class", "same-as-selected");
                                } else {
                                    s.options[i].selected = true;
                                    this.setAttribute("class", "same-as-selected");
                                }

                                h.innerHTML = ''

                                for (y = 0; y < sl; y++) {
                                    if (s.options[y].selected) {
                                        if (h.innerHTML.length > 0) {
                                            h.innerHTML = h.innerHTML + `, ${s.options[y].innerHTML}`
                                        } else {
                                            h.innerHTML = `${s.options[y].innerHTML}`
                                        }
                                    }
                                }

                                if (h.innerHTML.length < 1) {
                                    h.innerHTML = 'Выбрать...'
                                }

                                break;
                            } else {
                                s.selectedIndex = i;
                                h.innerHTML = this.innerHTML;
                                y = this.parentNode.getElementsByClassName("same-as-selected");
                                yl = y.length;
                                for (k = 0; k < yl; k++) {
                                    y[k].removeAttribute("class");
                                }
                                this.setAttribute("class", "same-as-selected");
                                if (this.closest('.custom-select-link')) {
                                    const select = this.closest('.custom-select-link').querySelector('select')
                                    const selectedText = this.innerHTML.trim(); // текст, например: "Подольск"

                                    const matchedOption = Array.from(select.options).find(
                                        option => option.text.trim() === selectedText
                                    );

                                    if (matchedOption) {
                                        const url = matchedOption.value;
                                        window.location.href = url;
                                    }

                                }
                                break;
                            }
                        }
                    }
                    if (!this.closest('.off-submit') && !multipleCheck) {
                        this.closest('form').submit();
                    }

                    if (!multipleCheck) {
                        h.click();
                    }
                });
                bCont.appendChild(c);
            }
            x[i].appendChild(b);
            b.appendChild(bCont)
            a.addEventListener("click", function (e) {
                /* When the select box is clicked, close any other select boxes,
                and open/close the current select box: */
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");

            });

            x[i].addEventListener("click", function (e) {
                e.stopPropagation()
            })
        }

        function closeAllSelect(elmnt) {
            /* A function that will close all select boxes in the document,
            except the current select box: */
            var x, y, i, xl, yl, arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected");
            xl = x.length;
            yl = y.length;
            for (i = 0; i < yl; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i)
                } else {
                    y[i].classList.remove("select-arrow-active");

                }
            }
            for (i = 0; i < xl; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide");
                }
            }


        }

        /* If the user clicks anywhere outside the select box,
        then close all select boxes: */
        document.addEventListener("click", closeAllSelect);
    })()

// SELECTS END
})
$(function() {
    $('.burger, .overlay,.mobile-menu__close,.mobile-menu__before').click(function () {
        $('.burger').toggleClass('clicked');
        $('.overlay').toggleClass('show');
        $('.mobile-menu').toggleClass('show');
        $('html').toggleClass('overflow');
    });


    $(".faq-toggle").on('click', function () {
        const $this = $(this),
            parent = $this.data('parent'),
            show = $this.data('show')
        console.log(parent,show)
        $this.parent(parent).toggleClass('active')
        $this.parent(parent).children(show).slideToggle(300)
    })

    function stepItem(index, $this){
        console.log($this,'$this')
        const  item = $this.data('item'),
            parent = $this.data('parent'),
            show = $this.data('show')
        console.log(show,'show')
        console.log(item,'item')
        console.log($(parent),'$(parent)')
        console.log($(parent).find(".steps-item")   )
        if($this.hasClass('active')) return false;
        $(parent).find(".steps-item").removeClass('active')
        $(parent).find(".steps-item").eq(item).toggleClass('active')
        $(parent).find(show).slideUp(300)
        $(parent).find(show).eq(item).slideDown(300)
        console.log($(parent).find(show).eq(item),'test item')
        console.log( $(parent).find(show))
    }

    $(".steps-item").on('click', function () {
        const $this = $(this),
            item = $this.data('item')
        // stepItem(item, $this)
        // console.log($this,'$this')
        const parent = $this.parent($this.parent('parent')),
            show = $this.data('show')
        console.log(show,'show')
        console.log(item,'item')
        console.log($(parent),'$(parent)')
        console.log($(parent).find(".steps-item")   )
        if($this.hasClass('active')) return false;
        $(parent).find(".steps-item").removeClass('active')
        $(parent).find(".steps-item").eq(item).toggleClass('active')
        $(parent).find(show).slideUp(300)
        $(parent).find(show).eq(item).slideDown(300)
        console.log($(parent).find(show).eq(item),'test item')
        console.log( $(parent).find(show))
    })

    $(".custom-select .select-items__items div").on("click", function () {
        const index = $(this).data("value"); // или getAttribute('data-value')
        stepItem(index);
    });

})

$(function () {
    // Отключаем закрытие при клике внутри контейнера
    $(".modal__container").on("click", e => e.stopPropagation());

    // Открытие модального окна
    $(".open__modal").on("click", function (e) {
        e.preventDefault();
        $($(this).data("open")).fadeIn();
        $("body").css("overflow", "hidden");
        $('html').addClass('overflow');

    });

    // Закрытие модального окна
    $(".modal, .modal-close, .modal .close").on("click", function (e) {
        e.preventDefault();
        $(".modal").fadeOut(() => {
            $("body").css("overflow", "auto");
            $('html').removeClass('overflow');

        });
    });

    $('.calculator-step__item input').on('change', function (){
        const value = $(this).val();
        const parent = $(this).parent().parent().parent()
        let price = +$('.calculator__right-price span').attr('data-price')
        const next = parent.data('next')
        const prev = parent.data('prev')
        const step = $('.calculator-steps').attr('data-step')
        const index = $(this).parent().index()
        const prices = [
            [0, 5000, 5000],
            [0, 5000, 10000, 15000],
            [0, 5000, 10000, 15000],
            [0, 10000, 15000, 20000],
        ]
        console.log(prices[step - 1][index])
        console.log(price)
        price = price + prices[step - 1][index]
        console.log(price)

        $('.calculator__right-price span').html(price.toLocaleString('ru-RU'))

        $(`.calculator-step.calculator-step--${+step}`).attr('data-checked',value)
        if(prev){
            $('.calculator__left .prev').removeClass('disabled')
        }
        if(next){
            $('.calculator__left .next').removeClass('disabled')
        }


    })

    function updateNextButtonState($step) {
        if ($step.attr('data-checked') !== 'false') {
            $('.calculator__left .next').removeClass('disabled');
        } else {
            $('.calculator__left .next').addClass('disabled');
        }
    }

    $('.calculator__left .next').on('click', function () {
        if ($(this).hasClass('disabled')) return; // 🚫 кнопка заблокирована

        const $steps = $('.calculator-steps');
        const currentStep = parseInt($steps.attr('data-step'), 10);
        const nextStep = currentStep + 1;

        const $current = $(`.calculator-step.calculator-step--${currentStep}`);
        const $next = $(`.calculator-step.calculator-step--${nextStep}`);

        $current.slideUp(300);
        $next.slideDown(300);

        $('.calculator__left .prev').removeClass('disabled');
        updateNextButtonState($next); // ✅ проверяем шаг, который открыли
        $steps.attr('data-step', nextStep);
        let price = $('.calculator__right-price span').text()
        price = Number(price.replace(/\s/g, ''))
        $('.calculator__right-price span').attr('data-price', price)
    });

    $('.calculator__left .prev').on('click', function () {
        if ($(this).hasClass('disabled')) return; // 🚫 кнопка заблокирована

        const $steps = $('.calculator-steps');
        const currentStep = parseInt($steps.attr('data-step'), 10);
        const prevStep = currentStep - 1;

        const $current = $(`.calculator-step.calculator-step--${currentStep}`);
        const $prev = $(`.calculator-step.calculator-step--${prevStep}`);

        $current.slideUp(300);
        $prev.slideDown(300);

        updateNextButtonState($prev); // ✅ проверяем шаг, который открыли

        if (prevStep === 1) {
            $('.calculator__left .prev').addClass('disabled');
        }

        $steps.attr('data-step', prevStep);
    });
    const isMobile = window.matchMedia("(max-width: 750px)").matches;

    if (isMobile) {
        // Мобильный — только по клику
        // $('.has-sub__menu .header-menu__link').on('click', function (e) {
        //     e.preventDefault();
        //     $(this).parent().toggleClass('active')
        //         .find('.sub-menu').stop(true, true).slideToggle();
        // });
        $('.sub-menu__item-title').on('click', function (e) {
            e.preventDefault();
            $(this).parent().toggleClass('active')
                    .find('.sub-menu__item-list').stop(true, true).slideToggle();
        });
    } else {
        // Десктоп — по наведению
        $('.has-sub__menu').on('mouseenter', function () {
            $(this).addClass('active')
                .find('.sub-menu').stop(true, true).slideDown();
        }).on('mouseleave', function () {
            $(this).removeClass('active')
                .find('.sub-menu').stop(true, true).slideUp();
        });
        $('.sub-menu').on('mouseleave', function (){
            $(this).slideUp()
            $(this).parent().removeClass('active')

        })
    }
});




