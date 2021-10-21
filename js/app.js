$(document).ready(function()
{
  //path
    url='http://195.190.127.181:4326/signature/';
  //tel
    tel_lexus_primorsky='+7 (812) 336-58-88';
    tel_lexus_parnas='+7 (812) 448-78-88';
    tel_lexus_all='+7 (812) 448-78-88';
    tel_toyota_all='+7 812 336 28 88';
    tel_toyota_primorsky='+7 812 336 38 88';
    tel_toyota_parnas='+7 812 336 28 88';
    tel_toyota_volhonsky='+7 812 448 28 88';
    tel_chery_volhonsky='+7 812 336 80 00';
    tel_hyundai_parnas='+7 (812) 337-88-88';
  //template
    template_lexus_primorsky='<table><tr><td>С уважением,<br>{имя} {фамилия}<br>{должность}<br><br>Лексус - Приморский<br>197374 | Российская Федерация <br>СПБ, ул. Школьная, 98 А<br>Тел: {tel}, {доб.} | Моб.: {mob}<br><a href="mailto:{email}">{email}</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a> | <a href="//iat.ru">www.iat.ru</a></td></tr><tr><td><img src="'+url+'logo_lexus_prim.png" alt="lexus" style="margin-top:30px;"></td></tr></table>';
    template_lexus_parnas='<table><tr><td>С уважением,<br>{имя} {фамилия}<br>{должность}<br><br>Лексус - Парнас<br>188660 | Российская Федерация<br>ЛО, Бугровское с.п., д. Порошкино, ул. Торговая, 22<br>Тел: {tel}, {доб.} | Моб.: {mob}<br><a href="mailto:{email}">{email}</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a> | <a href="//iat.ru">www.iat.ru</a></td></tr><tr><td><img src="'+url+'logo_lexus_parnas.png" alt="lexus" style="margin-top:30px;"></td></tr></table>';
    template_lexus_all='<table><tr><td>С уважением,<br>{имя} {фамилия}<br>{должность}<br><br>Лексус - Парнас<br>Лексус - Приморский<br>188660 | Российская Федерация<br>ЛО, Бугровское с.п., д. Порошкино, ул. Торговая, 22<br>Тел: {tel}, {доб.} | Моб.: {mob}<br><a href="mailto:{email}">{email}</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a> | <a href="//iat.ru">www.iat.ru</a></td></tr><tr><td><img src="'+url+'logo_lexus.png" alt="lexus" style="margin-top:30px;"></td></tr></table>';
    template_toyota_all='<table><tr><td>С уважением,<br>{имя} {фамилия}<br><br>{должность}<br>АО "Интер Авто Тим"<br>Тел.: {tel}, {доб.}<br>Моб.: {mob}<br>Схема проезда доступна по ссылке:<br><a href="https://iat.ru/contacts">https://iat.ru/contacts</a></td></tr><tr><td><img src="'+url+'logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a> | <a href="//toyotacenter.ru">www.toyotacenter.ru</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="https://apps.apple.com/ru/app/iat-cars-service/id1538134096"><img src="'+url+'logo_apple.png" alt="apple" style="margin-right:10px;"></a><a href="https://play.google.com/store/apps/details?id=com.itsites.iat"><img src="'+url+'logo_google.png" alt="google"></a></td></tr></table>';
    template_toyota_primorsky='<table><tr><td>С уважением,<br>{имя} {фамилия}<br><br>{должность}<br>Тойота Центр Приморский<br>Тел.: {tel}, {доб.}<br>Моб.: {mob}<br>Схема проезда доступна по ссылке:<br><a href="http://iat24.ru/link/e0c9">http://iat24.ru/link/</a></td></tr><tr><td><img src="'+url+'logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a> | <a href="//toyotacenter.ru">www.toyotacenter.ru</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="https://apps.apple.com/ru/app/iat-cars-service/id1538134096"><img src="'+url+'logo_apple.png" style="margin-right:10px;" alt="apple"></a><a href="https://play.google.com/store/apps/details?id=com.itsites.iat"><img src="'+url+'logo_google.png" alt="google"></a></td></tr></table>';
    template_toyota_parnas='<table><tr><td>С уважением,<br>{имя} {фамилия}<br><br>{должность}<br>Тойота Центр Парнас<br>Тел.: {tel}, {доб.}<br>Моб.: {mob}<br>Схема проезда доступна по ссылке:<br><a href="http://iat24.ru/link/63b6">http://iat24.ru/link/</a></td></tr><tr><td><img src="'+url+'logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a> | <a href="//toyotacenter.ru">www.toyotacenter.ru</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="https://apps.apple.com/ru/app/iat-cars-service/id1538134096"><img src="'+url+'logo_apple.png" style="margin-right:10px;" alt="apple"></a><a href="https://play.google.com/store/apps/details?id=com.itsites.iat"><img src="'+url+'logo_google.png" alt="google"></a></td></tr></table>';
    template_toyota_volhonsky='<table><tr><td>С уважением,<br>{имя} {фамилия}<br><br>{должность}<br>Тойота Центр Волхонский<br>Тел.: {tel}, {доб.}<br>Моб.: {mob}<br>Схема проезда доступна по ссылке:<br><a href="http://iat24.ru/link/a4d5">http://iat24.ru/link/</a></td></tr><tr><td><img src="'+url+'logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a> | <a href="//toyotacenter.ru">www.toyotacenter.ru</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="https://apps.apple.com/ru/app/iat-cars-service/id1538134096"><img src="'+url+'logo_apple.png" style="margin-right:10px;" alt="apple"></a><a href="https://play.google.com/store/apps/details?id=com.itsites.iat"><img src="'+url+'logo_google.png" alt="google"></a></td></tr></table>';
    template_chery_volhonsky='<table><tr><td>С уважением,<br>{имя} {фамилия}<br><br>{должность}<br>Chery | Exeed Волхонский<br>Тел.: {tel}, {доб.}<br>Моб.: {mob}<br>Схема проезда доступна по ссылке:<br><a href="http://iat24.ru/link/c0cd">http://iat24.ru/link/</a></td></tr><tr><td><img src="'+url+'logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a> | <a href="//toyotacenter.ru">www.toyotacenter.ru</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="https://apps.apple.com/ru/app/iat-cars-service/id1538134096"><img src="'+url+'logo_apple.png" style="margin-right:10px;" alt="apple"></a><a href="https://play.google.com/store/apps/details?id=com.itsites.iat"><img src="'+url+'logo_google.png" alt="google"></a></td></tr></table>';
    template_hyundai_parnas='<table style="font-size:9px;font-family:\'Hyundai Sans Text\',\'Hyundai Sans Text Office\',Arial;" border="0" cellpadding="0" cellspacing="0"><tr><td><img src="https://kirillmore.ru/temp/iat/images/blank.png" width="370" height="34"></td><tr><tr><td><img src="'+url+'logo_hyundai.png" width="207" height="34" style="width:207px;height:34px;"></td></tr><tr><td><img src="https://kirillmore.ru/temp/iat/images/blank.png" width="370" height="30"></td><tr><tr><td style="font-family:\'Hyundai Sans Head Medium\',\'Hyundai Sans Head Office Medium\',Arial;">{фамилия} {имя}<br>{отдел}<br></td></tr><tr><td>{должность}<br>T {tel}, {доб.}<br>М {mob}<br><a href="mailto:{email}">{email}</a>&nbsp;&nbsp;<a href="//hyundai-parnas.ru">www.hyundai-parnas.ru</a><br><br></td></tr><tr><td style="font-family:\'Hyundai Sans Head Medium\',\'Hyundai Sans Head Office Medium\',Arial;font-size:12px;">ИАТ Парнас<br></td></tr><tr><td style="font-family:\'Hyundai Sans Head Medium\',\'Hyundai Sans Head Office Medium\',Arial;font-size:9px;">Официальный дилер Hyundai</td></tr><tr><td><img src="https://kirillmore.ru/temp/iat/images/blank.png" width="370" height="16"></td><tr><tr><td><a href="https://hyundai-parnas.ru/NewCreta"><img src="'+url+'banner_creta.png" width="370" height="93" style="width:370px;"></a></td></tr></table>';

//step1
  $(".brand__logo").on('click', function(event){
    //hide all dc__items
    $(".dc__items").each(function(){$(this).addClass("hidden");});
    $(".hyundai_only").each(function(){$(this).addClass("hidden");});
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
    if($(this).attr("data-brand")=='iat'){
      $("#dc_iat").removeClass("hidden", {duration:2000});
    }
  });

//step2
  $(".dc__items__btn").on('click', function(event){
    $(".dc__items__btn").each(function(){$(this).removeClass("active");});
    $(this).addClass("active");
    $("#result").removeClass("hidden");
    $("[name='template']").val($(this).attr("data-dc"));
    $("#sandbox").html("");
    $("[name='code']").val('');

    if($(this).attr("data-dc")=='lexus_primorsky')  {$("[name='tel']").val(tel_lexus_primorsky);}
    if($(this).attr("data-dc")=='lexus_parnas')     {$("[name='tel']").val(tel_lexus_parnas);}
    if($(this).attr("data-dc")=='lexus_all')        {$("[name='tel']").val(tel_lexus_all);}
    if($(this).attr("data-dc")=='toyota_all')       {$("[name='tel']").val(tel_toyota_all);}
    if($(this).attr("data-dc")=='toyota_primorsky') {$("[name='tel']").val(tel_toyota_primorsky);}
    if($(this).attr("data-dc")=='toyota_parnas')    {$("[name='tel']").val(tel_toyota_parnas);}
    if($(this).attr("data-dc")=='toyota_volhonsky') {$("[name='tel']").val(tel_toyota_volhonsky);}
    if($(this).attr("data-dc")=='chery_volhonsky')  {$("[name='tel']").val(tel_chery_volhonsky);}
    if($(this).attr("data-dc")=='hyundai_parnas')   {
      $("[name='tel']").val(tel_hyundai_parnas);
      $(".hyundai_only").each(function(){$(this).removeClass("hidden");});
    }
  });    

  //form submit
  $("[name='form']").submit(function(){
    template=getTemplate($("[name='template']").val());
    $("#sandbox").html(template);
    $("[name='code']").val(template);
    return false;
  });

function getTemplate(tmpname){
  if(tmpname=='lexus_primorsky'){
    template=template_lexus_primorsky;
  }
  if(tmpname=='lexus_parnas'){
    template=template_lexus_parnas;
  }
  if(tmpname=='lexus_all'){
    template=template_lexus_all;
  }
  if(tmpname=='toyota_all'){
    template=template_toyota_all;
  }
  if(tmpname=='toyota_primorsky'){
    template=template_toyota_primorsky;
  }
  if(tmpname=='toyota_parnas'){
    template=template_toyota_parnas;
  }
  if(tmpname=='toyota_volhonsky'){
    template=template_toyota_volhonsky;
  }
  if(tmpname=='chery_volhonsky'){
    template=template_chery_volhonsky;
  }
  if(tmpname=='hyundai_parnas'){
    template=template_hyundai_parnas;
  }

  template=template.replace('{фамилия}',$("[name='family']").val());
  template=template.replace('{имя}',$("[name='name']").val());
  template=template.replace('{должность}',$("[name='position']").val());
  template=template.replaceAll('{email}',$("[name='email']").val());

  if($("[name='tel']").val()!==''){
    template=template.replace('{tel}',$("[name='tel']").val());
  }
  else{
    template=template.replace('Тел.: {tel}, {доб.}<br>','');
    template=template.replace('T {tel}, {доб.}<br>','');
  }

  if($("[name='mob']").val()!==''){
    template=template.replace('{mob}',$("[name='mob']").val());
  }
  else{
    template=template.replace('| Моб.: {mob}','');
    template=template.replace('Моб.: {mob}<br>','');
    template=template.replace('М {mob}<br>','');
  }

  if($("[name='otdel']").val()!==''){
    template=template.replace('{отдел}',$("[name='otdel']").val());
  }
  else{
    template=template.replace('{отдел}<br>','');
  }

  if($("[name='teladd']").val()!==''){
    template=template.replace('{доб.}','доб. '+$("[name='teladd']").val());
  }
  else{
    template=template.replace(', {доб.}','');
  }

  return template;
}

$("#copycode").click(function(){
  $("[name='code']").select();
  document.execCommand('copy');
});

});