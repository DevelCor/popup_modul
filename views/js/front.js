/**
* 2007-2020 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2020 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*
* Don't forget to prefix your containers with your own identifier
* to avoid any conflicts with others containers.
*/


$( document ).ready(function() {
    
    let contact = document.getElementsByClassName('contact-us');
    let close = document.getElementsByClassName('close_popup');

    let popup_background_DOM = document.getElementsByClassName('popup_background');

    let enviar = document.getElementsByClassName('send')
    
    contact[0].addEventListener('click',pop_up);
    close[0].addEventListener('click',cerrar);
    enviar[0].addEventListener('click',enviado);


    function enviado(e){
         e.preventDefault();
         enviar[0].style.background = '#5cb85c'
         enviar[0].innerText  = 'Mensaje enviado'

         setTimeout(()=>{
             cerrar(e)
         },2000)
    }

     function cerrar(e){
         e.preventDefault();
         popup_background_DOM[0].classList.remove('transitions')
         enviar[0].style.background = '#428bca'
         enviar[0].innerText  = 'Enviar'
     }



 function pop_up(e){
        e.preventDefault();
   
        popup_background_DOM[0].style.pos= 'flex'      
        popup_background_DOM[0].classList.add('transitions')
      
    }
//--------------------------------------------------//
    $("#send_popup").click(function(){
        
        let name = $("#name_popup").val()
        let number = $("#number_popup").val()
        let email = $("#email_popup").val()
        let model = $("#model_popup").val()

        test(name,email,number,model)
   
   
     
    })

    
});

function test(name,email,number,model) {

    $.ajax({
            url : codessssss,
            type : 'POST',
            cache : false,
            data : {
                ajax : true,
                name,
                email,
                number,
                model
            },
            success : function (result) {
                if(result === 'true'){
                    $("#model_popup").val("")
                    $("#name_popup").val("")
                    $("#number_popup").val("")
                    $("#email_popup").val("")
                }
            }
        });
    }

jQuery.browser = {};
    (function () {
    jQuery.browser.msie = false;
    jQuery.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
    jQuery.browser.msie = true;
    jQuery.browser.version = RegExp.$1;
    }
    })();