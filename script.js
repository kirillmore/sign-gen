$(document).ready(function()
{
  url='http://195.190.127.181:4326/';

//step1
  $(".brand__logo").on('click', function(event){
    //hide all dc__items
    $(".dc__items").each(function(){$(this).addClass("hidden");});
    $(".brand__logo").each(function(){$(this).parent().removeClass("active");});
    $("#result").addClass("hidden");
    $("#sandbox").html("");
    $("[name='code']").val('');
    $(this).parent().addClass("active");
    if($(this).attr("data-brand")=='lexus'){
      $("#dc_lexus").removeClass("hidden");
    }
    if($(this).attr("data-brand")=='toyota'){
      $("#dc_toyota").removeClass("hidden");
    }
    if($(this).attr("data-brand")=='chery'){
      $("#dc_chery").removeClass("hidden");
    }
    if($(this).attr("data-brand")=='hyundai'){
      $("#dc_hyundai").removeClass("hidden", {duration:2000});
    }
  });

//step2
  $(".dc__items__btn").on('click', function(event){
    $("#result").removeClass("hidden");
    $("[name='template']").val($(this).attr("data-dc"));
    $("#sandbox").html("");
    $("[name='code']").val('');
  });    

  //form submit
  $("[name='form']").submit(function(){
    template=getTemplate($("[name='template']").val());
    template=template.replace('%фамилия%',$("[name='family']").val());
    $("#sandbox").html(template);
    $("[name='code']").val(template);

    return false;
  });

function getTemplate(tmpname){
  if(tmpname=='lexus_primorsky'){
    template='<style>@font-face {font-family: \'favoritnormal\';src: url(\''+url+'signature/fonts/favorit-normal.woff2\') format(\'woff2\'),url(\''+url+'signature/fonts/favorit-normal.woff\') format(\'woff\');font-weight: normal;font-style: normal;}</style><table style="font-family:\'favoritnormal\',Arial;"><tr><td>С уважением,<br>%имя% %фамилия%<br>%должность%<br><br>Лексус - Приморский<br>197374 | Российская Федерация <br>СПБ, ул. Школьная, 98 А<br>Тел: +7 (812) 336 58 88, %доб.%<br>Моб.: %mob%<br><a href="mailto:%email%">%email%</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a> | <a href="//iat.ru">www.iat.ru</a></td></tr><tr><td><img src="'+url+'signature/logo_lexus_prim.png" alt="lexus" style="margin-top:30px;"></td></tr></table>';
  }
  if(tmpname=='lexus_parnas'){
    template='<style>@font-face {font-family: \'favoritnormal\';src: url(\''+url+'signature/fonts/favorit-normal.woff2\') format(\'woff2\'),url(\''+url+'signature/fonts/favorit-normal.woff\') format(\'woff\');font-weight: normal;font-style: normal;}</style><table style="font-family:\'favoritnormal\',Arial;"><tr><td>С уважением,<br>%имя% %фамилия%<br>%должность%<br><br>Лексус - Парнас<br>188660 | Российская Федерация<br>ЛО, Бугровское с.п., д. Порошкино, ул. Торговая, 22<br>Тел: +7 (812) 448 78 88, %доб.%<br>Моб.: %mob%<br><a href="mailto:%email%">%email%</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a> | <a href="//iat.ru">www.iat.ru</a></td></tr><tr><td><img src="'+url+'signature/logo_lexus_parnas.png" alt="lexus" style="margin-top:30px;"></td></tr></table>';
  }
  if(tmpname=='lexus_all'){
    template='<style>@font-face {font-family: \'favoritnormal\';src: url(\''+url+'signature/fonts/favorit-normal.woff2\') format(\'woff2\'),url(\''+url+'signature/fonts/favorit-normal.woff\') format(\'woff\');font-weight: normal;font-style: normal;}</style><table style="font-family:\'favoritnormal\',Arial;"><tr><td>С уважением,<br>%имя% %фамилия%<br>%должность%<br><br>Лексус - Парнас<br>Лексус - Приморский<br>188660 | Российская Федерация<br>ЛО, Бугровское с.п., д. Порошкино, ул. Торговая, 22<br>Тел: +7 (812) 448 78 88, %доб.%<br>Моб.: %mob%<br><a href="mailto:%email%">%email%</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a> | <a href="//iat.ru">www.iat.ru</a></td></tr><tr><td><img src="'+url+'signature/logo_lexus.png" alt="lexus" style="margin-top:30px;"></td></tr></table>';
  }
  if(tmpname=='toyota_all'){
    template='<style>@font-face {font-family: \'toyota_textregular\';src: url(\''+url+'signature/fonts/toyotatext_rg_1.woff2\') format(\'woff2\'),url(\''+url+'signature/fonts/toyotatext_rg_1.woff\') format(\'woff\');font-weight: normal;font-style: normal;}</style><table style="font-family:\'toyota_textregular\',Arial;"><tr><td>С уважением,<br>%имя% %фамилия%<br><br>%должность%<br>АО "Интер Авто Тим"<br>Тел.: +7 812 336 28 88, %доб.%<br>Моб.: %mob%<br>Схема проезда доступна по ссылке:<br><a href="http://iat24.ru/link/c0cd">http://iat24.ru/link/</a></td></tr><tr><td><img src="'+url+'signature/logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a> | <a href="//toyotacenter.ru">www.toyotacenter.ru</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="https://apps.apple.com/ru/app/iat-cars-service/id1538134096"><img src="'+url+'signature/logo_apple.png" alt="apple" style="margin-right:10px;"></a><a href="https://play.google.com/store/apps/details?id=com.itsites.iat"><img src="'+url+'signature/logo_google.png" alt="google"></a></td></tr></table>';
  }
  if(tmpname=='toyota_primorsky'){
    template='<style>@font-face {font-family: \'toyota_textregular\';src: url(\''+url+'signature/fonts/toyotatext_rg_1.woff2\') format(\'woff2\'),url(\''+url+'signature/fonts/toyotatext_rg_1.woff\') format(\'woff\');font-weight: normal;font-style: normal;}</style><table style="font-family:\'toyota_textregular\',Arial;"><tr><td>С уважением,<br>%имя% %фамилия%<br><br>%должность%<br>Тойота Центр Приморский<br>Тел.: +7 812 336 38 88, %доб.%<br>Моб.: %mob%<br>Схема проезда доступна по ссылке:<br><a href="http://iat24.ru/link/c0cd">http://iat24.ru/link/</a></td></tr><tr><td><img src="'+url+'signature/logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a> | <a href="//toyotacenter.ru">www.toyotacenter.ru</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="https://apps.apple.com/ru/app/iat-cars-service/id1538134096"><img src="'+url+'signature/logo_apple.png" style="margin-right:10px;" alt="apple"></a><a href="https://play.google.com/store/apps/details?id=com.itsites.iat"><img src="'+url+'signature/logo_google.png" alt="google"></a></td></tr></table>';
  }
  if(tmpname=='toyota_parnas'){
    template='<style>@font-face {font-family: \'toyota_textregular\';src: url(\''+url+'signature/fonts/toyotatext_rg_1.woff2\') format(\'woff2\'),url(\''+url+'signature/fonts/toyotatext_rg_1.woff\') format(\'woff\');font-weight: normal;font-style: normal;}</style><table style="font-family:\'toyota_textregular\',Arial;"><tr><td>С уважением,<br>%имя% %фамилия%<br><br>%должность%<br>Тойота Центр Парнас<br>Тел.: +7 812 336 28 88, %доб.%<br>Моб.: %mob%<br>Схема проезда доступна по ссылке:<br><a href="http://iat24.ru/link/c0cd">http://iat24.ru/link/</a></td></tr><tr><td><img src="'+url+'signature/logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a> | <a href="//toyotacenter.ru">www.toyotacenter.ru</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="https://apps.apple.com/ru/app/iat-cars-service/id1538134096"><img src="'+url+'signature/logo_apple.png" style="margin-right:10px;" alt="apple"></a><a href="https://play.google.com/store/apps/details?id=com.itsites.iat"><img src="'+url+'signature/logo_google.png" alt="google"></a></td></tr></table>';
  }
  if(tmpname=='toyota_volhonsky'){
    template='<style>@font-face {font-family: \'toyota_textregular\';src: url(\''+url+'signature/fonts/toyotatext_rg_1.woff2\') format(\'woff2\'),url(\''+url+'signature/fonts/toyotatext_rg_1.woff\') format(\'woff\');font-weight: normal;font-style: normal;}</style><table style="font-family:\'toyota_textregular\',Arial;"><tr><td>С уважением,<br>%имя% %фамилия%<br><br>%должность%<br>Тойота Центр Волхонский<br>Тел.: +7 812 448 28 88, %доб.%<br>Моб.: %mob%<br>Схема проезда доступна по ссылке:<br><a href="http://iat24.ru/link/c0cd">http://iat24.ru/link/</a></td></tr><tr><td><img src="'+url+'signature/logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a> | <a href="//toyotacenter.ru">www.toyotacenter.ru</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="https://apps.apple.com/ru/app/iat-cars-service/id1538134096"><img src="'+url+'signature/logo_apple.png" style="margin-right:10px;" alt="apple"></a><a href="https://play.google.com/store/apps/details?id=com.itsites.iat"><img src="'+url+'signature/logo_google.png" alt="google"></a></td></tr></table>';
  }
  if(tmpname=='chery_volhonsky'){
    template='<style>@font-face {font-family:\'montserratregular\';src: url(\''+url+'signature/fonts/montserrat-regular.woff2\') format(\'woff2\'),url(\''+url+'signature/fonts/montserrat-regular.woff\') format(\'woff\');font-weight: normal;font-style: normal;}</style><table style="font-family:\'montserratregular\',Arial;"><tr><td>С уважением,<br>%имя% %фамилия%<br><br>%должность%<br>Chery|Cheryexeed Волхонский<br>Тел.: +7 812 336 80 00, %доб.%<br>Моб.: %mob%<br>Схема проезда доступна по ссылке:<br><a href="http://iat24.ru/link/c0cd">http://iat24.ru/link/</a></td></tr><tr><td><img src="'+url+'signature/logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a> | <a href="//toyotacenter.ru">www.toyotacenter.ru</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="https://apps.apple.com/ru/app/iat-cars-service/id1538134096"><img src="'+url+'signature/logo_apple.png" style="margin-right:10px;" alt="apple"></a><a href="https://play.google.com/store/apps/details?id=com.itsites.iat"><img src="'+url+'signature/logo_google.png" alt="google"></a></td></tr></table>';
  }
  if(tmpname=='hyundai_parnas'){
    template='<style>@font-face {font-family:\'rus_modernhmedium\';src: url(\''+url+'signature/fonts/rus_modernh-medium.woff2\') format(\'woff2\'),url(\''+url+'signature/fonts/rus_modernh-medium.woff\') format(\'woff\');font-weight: normal;font-style: normal;}</style><table style="font-family:\'rus_modernhmedium\',Arial;"><tr><td><img src="'+url+'signature/logo_hyundai.png" style="width:207px;height:34px;margin-top:34px;margin-bottom:34px;"></td></tr><tr><td>%фамилия% %имя%<br>%отдел%<br>%должность%<br>T +7 (812) 337-88-88, %доб.%<br><a href="mailto:%email%">%email%</a>&nbsp;&nbsp;<a href="//hyundai-parnas.ru">www.hyundai-parnas.ru</a><br><br>ИАТ Парнас<br>Официальный дилер Hyundai</td></tr><tr><td><img src="'+url+'signature/banner_creta.png" style="margin-top:20px;"></td></tr></table>';
  }

  template=template.replace('%фамилия%',$("[name='family']").val());
  template=template.replace('%имя%',$("[name='name']").val());
  template=template.replace('%должность%',$("[name='position']").val());
  template=template.replace('%mob%',$("[name='mob']").val());
  template=template.replaceAll('%email%',$("[name='email']").val());

  if($("[name='otdel']").val()!==''){
    template=template.replace('%отдел%',$("[name='otdel']").val());
  }
  else {
    template=template.replace('%отдел%<br>','');
  }

  if($("[name='teladd']").val()!==''){
    template=template.replace('%доб.%','доб. '+$("[name='teladd']").val());
  }
  else {
    template=template.replace('%доб.%','');
  }

  return template;
}

$("#copycode").click(function(){
    $("[name='code']").select();
    document.execCommand('copy');
});

});