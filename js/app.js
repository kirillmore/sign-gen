$(document).ready(function() {
  //path
  url = 'http://s.iat.ru:4326/signature/';

  hyundaiBanner = 'banner_creta.png';
  hyundaiURL = 'https://www.hyundai.ru/brand/carbon-neutrality';

  //tel
  tel_lexus_primorsky = '+7 (812) 336-58-88';
  tel_lexus_parnas = '+7 (812) 448-78-88';
  tel_lexus_all = '+7 (812) 448-78-88';
  tel_toyota_all = '+7 812 336 28 88';
  tel_toyota_primorsky = '+7 812 336 38 88';
  tel_toyota_parnas = '+7 812 336 28 88';
  tel_toyota_volhonsky = '+7 812 448 28 88';
  tel_chery_volhonsky = '+7 812 336 80 00';
  tel_hyundai_parnas = '+7 (812) 337-88-88';
  tel_geely = '+7 (812) 384-88-88';
  tel_exeed = '+7 (812) 338-55-55';
  tel_omoda = '+7 (812) 337-08-80';

  //template
  template_lexus_primorsky = '<table><tr><td>С уважением,<br>{имя} {фамилия}<br>{должность}<br><br>Лексус - Приморский<br>197374 | Российская Федерация <br>СПБ, ул. Школьная, 98 А<br>Тел: {tel}, {доб.} | Моб.: {mob}<br><a href="mailto:{email}">{email}</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a> | <a href="//iat.ru">www.iat.ru</a></td></tr><tr><td><img src="' + url + 'logo_lexus_prim.png" alt="lexus" style="margin-top:30px;"></td></tr></table>';
  template_lexus_parnas = '<table><tr><td>С уважением,<br>{имя} {фамилия}<br>{должность}<br><br>Лексус - Парнас<br>188660 | Российская Федерация<br>ЛО, Бугровское с.п., д. Порошкино, ул. Торговая, 22<br>Тел: {tel}, {доб.} | Моб.: {mob}<br><a href="mailto:{email}">{email}</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a> | <a href="//iat.ru">www.iat.ru</a></td></tr><tr><td><img src="' + url + 'logo_lexus_parnas.png" alt="lexus" style="margin-top:30px;"></td></tr></table>';
  template_lexus_all = '<table><tr><td>С уважением,<br>{имя} {фамилия}<br>{должность}<br><br>Лексус - Парнас<br>Лексус - Приморский<br>188660 | Российская Федерация<br>ЛО, Бугровское с.п., д. Порошкино, ул. Торговая, 22<br>Тел: {tel}, {доб.} | Моб.: {mob}<br><a href="mailto:{email}">{email}</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a> | <a href="//iat.ru">www.iat.ru</a></td></tr><tr><td><img src="' + url + 'logo_lexus.png" alt="lexus" style="margin-top:30px;"></td></tr></table>';
  template_toyota_all = '<table><tr><td>С уважением,<br>{имя} {фамилия}<br><br>{должность}<br>АО "Интер Авто Тим"<br>Тел.: {tel}, {доб.}<br>Моб.: {mob}<br>Схема проезда доступна по ссылке:<br><a href="https://iat.ru/contacts">https://iat.ru/contacts</a></td></tr><tr><td><img src="' + url + 'logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a> | <a href="//toyotacenter.ru">www.toyotacenter.ru</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="https://apps.apple.com/ru/app/iat-cars-service/id1538134096"><img src="' + url + 'logo_apple.png" alt="apple" style="margin-right:10px;"></a><a href="https://play.google.com/store/apps/details?id=com.itsites.iat"><img src="' + url + 'logo_google.png" alt="google"></a></td></tr></table>';
  template_toyota_primorsky = '<table><tr><td>С уважением,<br>{имя} {фамилия}<br><br>{должность}<br>Тойота Центр Приморский<br>Тел.: {tel}, {доб.}<br>Моб.: {mob}<br>Схема проезда доступна по ссылке:<br><a href="http://iat24.ru/link/e0c9">http://iat24.ru/link/</a></td></tr><tr><td><img src="' + url + 'logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a> | <a href="//toyotacenter.ru">www.toyotacenter.ru</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="https://apps.apple.com/ru/app/iat-cars-service/id1538134096"><img src="' + url + 'logo_apple.png" style="margin-right:10px;" alt="apple"></a><a href="https://play.google.com/store/apps/details?id=com.itsites.iat"><img src="' + url + 'logo_google.png" alt="google"></a></td></tr></table>';
  template_toyota_parnas = '<table><tr><td>С уважением,<br>{имя} {фамилия}<br><br>{должность}<br>Тойота Центр Парнас<br>Тел.: {tel}, {доб.}<br>Моб.: {mob}<br>Схема проезда доступна по ссылке:<br><a href="http://iat24.ru/link/63b6">http://iat24.ru/link/</a></td></tr><tr><td><img src="' + url + 'logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a> | <a href="//toyotacenter.ru">www.toyotacenter.ru</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="https://apps.apple.com/ru/app/iat-cars-service/id1538134096"><img src="' + url + 'logo_apple.png" style="margin-right:10px;" alt="apple"></a><a href="https://play.google.com/store/apps/details?id=com.itsites.iat"><img src="' + url + 'logo_google.png" alt="google"></a></td></tr></table>';
  template_toyota_volhonsky = '<table><tr><td>С уважением,<br>{имя} {фамилия}<br><br>{должность}<br>Тойота Центр Волхонский<br>Тел.: {tel}, {доб.}<br>Моб.: {mob}<br>Схема проезда доступна по ссылке:<br><a href="http://iat24.ru/link/a4d5">http://iat24.ru/link/</a></td></tr><tr><td><img src="' + url + 'logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a> | <a href="//toyotacenter.ru">www.toyotacenter.ru</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="https://apps.apple.com/ru/app/iat-cars-service/id1538134096"><img src="' + url + 'logo_apple.png" style="margin-right:10px;" alt="apple"></a><a href="https://play.google.com/store/apps/details?id=com.itsites.iat"><img src="' + url + 'logo_google.png" alt="google"></a></td></tr></table>';
  template_chery_volhonsky = '<table><tr><td>С уважением,<br>{имя} {фамилия}<br><br>{должность}<br>Chery | Exeed Волхонский<br>Тел.: {tel}, {доб.}<br>Моб.: {mob}<br>Схема проезда доступна по ссылке:<br><a href="http://iat24.ru/link/c0cd">http://iat24.ru/link/</a></td></tr><tr><td><img src="' + url + 'logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a> | <a href="//toyotacenter.ru">www.toyotacenter.ru</a> | <a href="//lexuscenter.ru">www.lexuscenter.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="https://apps.apple.com/ru/app/iat-cars-service/id1538134096"><img src="' + url + 'logo_apple.png" style="margin-right:10px;" alt="apple"></a><a href="https://play.google.com/store/apps/details?id=com.itsites.iat"><img src="' + url + 'logo_google.png" alt="google"></a></td></tr></table>';
  template_hyundai_parnas = '<table style="font-size:9px;font-family:\'Hyundai Sans Text\',\'Hyundai Sans Text Office\',Arial;" border="0" cellpadding="0" cellspacing="0"><tr><td><img src="' + url + 'blank.png" width="370" height="34"></td><tr><tr><td><img src="' + url + 'logo_hyundai.png" width="207" height="34" style="width:207px;height:34px;"></td></tr><tr><td><img src="' + url + 'blank.png" width="370" height="30"></td><tr><tr><td style="font-family:\'Hyundai Sans Head Medium\',\'Hyundai Sans Head Office Medium\',Arial;">{фамилия} {имя}<br>{отдел}<br></td></tr><tr><td>{должность}<br>T {tel}, {доб.}<br>М {mob}<br><a href="mailto:{email}">{email}</a>&nbsp;&nbsp;<a href="//hyundai-parnas.ru">www.hyundai-parnas.ru</a><br><br></td></tr><tr><td style="font-family:\'Hyundai Sans Head Medium\',\'Hyundai Sans Head Office Medium\',Arial;font-size:12px;">ИАТ Парнас<br></td></tr><tr><td style="font-family:\'Hyundai Sans Head Medium\',\'Hyundai Sans Head Office Medium\',Arial;font-size:9px;">Официальный дилер Hyundai</td></tr><tr><td><img src="' + url + 'blank.png" width="370" height="16"></td><tr><tr><td><a href="' + hyundaiURL + '"><img src="' + url + hyundaiBanner + '" width="370" height="93" style="width:370px;"></a></td></tr></table>';
  template_geely = '<table style="color:#767171;font-size:13px;"><tr><td>С уважением,<br><br><b style="font-size:15px;">{имя} {фамилия}</b><br><b>{должность}</b><br>Моб.: {mob}<br>Тел: {tel}, {доб.}<br>E-mail: <a href="mailto:{email}">{email}</a><br><br><b>ООО «Иат Нео»</b><br>ул. Торговая, 22, д. Порошкино, Бугровское с.п.,<br>Санкт- Петербург, Россия, 188660<br><a href="//iat.ru">www.iat.ru</a><br><br><img src="' + url + 'logo_geely.png" style="width:180px;margin:10px 0;" width="180" alt="Geely"><br></td></tr></table>';
  template_exeed = '<table style="color:#82817d;font-family: system-ui,-apple-system,\'Segoe UI\',Roboto,\'Helvetica Neue\',Arial,\'Noto Sans\',\'Liberation Sans\',sans-serif;"><tr><td style="padding-right:15px;"><b>{имя} {фамилия}</b><br><b>{name_eng}</b><br>{position}/<br>{должность}<br>ООО "ИАТ ГОЛД"</td><td style="border-left: 1px solid #505050"><img src="' + url + 'logo_exeed.png" style="width:200px;" width="180" alt="EXEED"></td></tr><tr><td colspan="2"><hr style="margin-top:10px;margin-bottom:10px;border: none;color: #505050;background-color: #505050;height: 1px;">Adress: Санкт-Петербург, Волхонское шоссе 3 стр 1<br>Tel.: {tel}, {доб.}<br>Mobile: {mob}<br>E-mail: <a href="mailto:{email}" style="color:#82817d;text-decoration:underline;">{email}</a></td></tr></table>';
  template_omoda = '<table><tbody><tr><td style="height: 32px; width: 309px; vertical-align: middle;"><span style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;"><strong>{имя} {фамилия}</strong></span></td><td style="height: 32px; width: 5px; vertical-align: middle;" rowspan="3"><img src="https://www.chery.ru/logotype/line.png" alt="" width="1" height="120"></td><td style="width: 238px; text-align: center; vertical-align: middle;" rowspan="4"><a href="https://www.omoda.ru/" target="_blank" rel="noopener"><img style="display: block; margin-bottom: 10px; margin-top: 10px;" src="https://www.omoda.ru/logotype/omoda.png" alt="OMODA" width="230" height="29" hspace="5"></a></td></tr><tr><td style="height: 33px; width: 309px; vertical-align: middle;"><span style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;">{должность}</span></td></tr><tr><td style="height: 33px; width: 309px; vertical-align: middle;"><span style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;">OMODA ИАТ Приморский</span></td></tr></tbody></table><table><tbody><tr><td style="height: 18px; width: 564px;"><hr></td></tr><tr><td style="height: 28px; width: 600px; vertical-align: bottom;"><span style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;">Address: 197374, город Санкт-Петербург, улица Школьная, дом 98, литера А, помещение 71</span></td></tr><tr><td style="height: 18px; width: 564px;"><span style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;">Tel.: {tel} ext. {доб.}</span></td></tr><tr><td style="height: 18px; width: 564px;"><span style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;">Mobile: {mob}</span></td></tr><tr><td style="height: 24px; width: 564px; vertical-align: top;"><span style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;">E-mail: <a href="mailto:{email}" style="text-decoration:underline;">{email}</a></span></td></tr></tbody></table>';
  //step1
  $(".brand__logo").on('click', function(event) {
    //hide all dc__items
    $(".dc__items").each(function() { $(this).addClass("d-none"); });
    $(".hyundai_only").each(function() { $(this).addClass("d-none"); });
    $(".exeed_only").each(function() { $(this).addClass("d-none"); });
    $(".brand__logo").each(function() { $(this).parent().removeClass("active"); });
    $("#result").addClass("d-none");
    $("#sandbox").html("");
    $("[name='code']").val('');
    $(this).parent().addClass("active");
    if ($(this).attr("data-brand") == 'lexus') {
      $("#dc_lexus").removeClass("d-none");
    }
    if ($(this).attr("data-brand") == 'toyota') {
      $("#dc_toyota").removeClass("d-none");
    }
    if ($(this).attr("data-brand") == 'chery') {
      $("#dc_chery").removeClass("d-none");
    }
    if ($(this).attr("data-brand") == 'hyundai') {
      $("#dc_hyundai").removeClass("d-none");
    }
    if ($(this).attr("data-brand") == 'iat') {
      $("#dc_iat").removeClass("d-none");
    }
    if ($(this).attr("data-brand") == 'geely') {
      $("#dc_geely").removeClass("d-none");
    }
    if ($(this).attr("data-brand") == 'exeed') {
      $("#dc_exeed").removeClass("d-none");
    }
    if ($(this).attr("data-brand") == 'omoda') {
      $("#dc_omoda").removeClass("d-none");
    }
  });

  //step2
  $(".dc__items__btn").on('click', function(event) {
    $(".dc__items__btn").each(function() { $(this).removeClass("active"); });
    $(this).addClass("active");
    $("#result").removeClass("d-none");
    $("[name='template']").val($(this).attr("data-dc"));
    $("#sandbox").html("");
    $("[name='code']").val('');

    if ($(this).attr("data-dc") == 'lexus_primorsky') { $("[name='tel']").val(tel_lexus_primorsky); }
    if ($(this).attr("data-dc") == 'lexus_parnas') { $("[name='tel']").val(tel_lexus_parnas); }
    if ($(this).attr("data-dc") == 'lexus_all') { $("[name='tel']").val(tel_lexus_all); }
    if ($(this).attr("data-dc") == 'toyota_all') { $("[name='tel']").val(tel_toyota_all); }
    if ($(this).attr("data-dc") == 'toyota_primorsky') { $("[name='tel']").val(tel_toyota_primorsky); }
    if ($(this).attr("data-dc") == 'toyota_parnas') { $("[name='tel']").val(tel_toyota_parnas); }
    if ($(this).attr("data-dc") == 'toyota_volhonsky') { $("[name='tel']").val(tel_toyota_volhonsky); }
    if ($(this).attr("data-dc") == 'chery_volhonsky') { $("[name='tel']").val(tel_chery_volhonsky); }
    if ($(this).attr("data-dc") == 'hyundai_parnas') {
      $("[name='tel']").val(tel_hyundai_parnas);
      $(".hyundai_only").each(function() { $(this).removeClass("d-none"); });
    }
    if ($(this).attr("data-dc") == 'geely') { $("[name='tel']").val(tel_geely); }
    if ($(this).attr("data-dc") == 'exeed') {
      $("[name='tel']").val(tel_exeed);
      $(".exeed_only").each(function() { $(this).removeClass("d-none"); });
    }
    if ($(this).attr("data-dc") == 'omoda') { $("[name='tel']").val(tel_omoda); }
  });

  //form submit
  $("[name='form']").submit(function() {
    template = getTemplate($("[name='template']").val());
    $("#sandbox").html(template);
    $("[name='code']").val(template);
    return false;
  });

  function getTemplate(tmpname) {
    if (tmpname == 'lexus_primorsky') {
      template = template_lexus_primorsky;
    }
    if (tmpname == 'lexus_parnas') {
      template = template_lexus_parnas;
    }
    if (tmpname == 'lexus_all') {
      template = template_lexus_all;
    }
    if (tmpname == 'toyota_all') {
      template = template_toyota_all;
    }
    if (tmpname == 'toyota_primorsky') {
      template = template_toyota_primorsky;
    }
    if (tmpname == 'toyota_parnas') {
      template = template_toyota_parnas;
    }
    if (tmpname == 'toyota_volhonsky') {
      template = template_toyota_volhonsky;
    }
    if (tmpname == 'chery_volhonsky') {
      template = template_chery_volhonsky;
    }
    if (tmpname == 'hyundai_parnas') {
      template = template_hyundai_parnas;
    }
    if (tmpname == 'geely') {
      template = template_geely;
    }
    if (tmpname == 'exeed') {
      template = template_exeed;
    }
    if (tmpname == 'omoda') {
      template = template_omoda;
    }

    template = template.replace('{фамилия}', $("[name='family']").val());
    template = template.replace('{имя}', $("[name='name']").val());
    template = template.replace('{family}', $("[name='family_eng']").val());
    template = template.replace('{name}', $("[name='name_eng']").val());
    template = template.replace('{должность}', $("[name='position']").val());
    template = template.replaceAll('{email}', $("[name='email']").val());

    //exeptions
    if ($("[name='tel']").val() !== '') {
      template = template.replace('{tel}', $("[name='tel']").val());
    } else {
      template = template.replace('Тел.: {tel}, {доб.}<br>', '');
      template = template.replace('T {tel}, {доб.}<br>', '');
    }

    if ($("[name='mob']").val() !== '') {
      template = template.replace('{mob}', $("[name='mob']").val());
    } else {
      template = template.replace('| Моб.: {mob}', '');
      template = template.replace('Моб.: {mob}<br>', '');
      template = template.replace('М {mob}<br>', '');
      template = template.replace('<tr><td style="height: 18px; width: 564px;"><span style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;">Mobile: {mob}</span></td></tr>', '');
    }

    if ($("[name='otdel']").val() !== '') {
      template = template.replace('{отдел}', $("[name='otdel']").val());
    } else {
      template = template.replace('{отдел}<br>', '');
    }

    if ($("[name='teladd']").val() !== '') {
      template = template.replace('{доб.}', 'доб. ' + $("[name='teladd']").val());
    } else {
      template = template.replace(', {доб.}', '');
      template = template.replace('ext. {доб.}', '');
    }

    if ($("[name='name_eng']").val() !== '') {
      template = template.replace('{name_eng}', $("[name='name_eng']").val());
    } else {
      template = template.replace('<b>{name_eng}</b><br>', '');
    }

    if ($("[name='position_eng']").val() !== '') {
      template = template.replace('{position}', $("[name='position_eng']").val());
    } else {
      template = template.replace('{position}/<br>', '');
    }

    return template;
  }

  $("#copycode").click(function() {
    $("[name='code']").select();
    document.execCommand('copy');
  });


  $("#downloadcode").click(function() {
    let text = $("[name='code']").val();
    console.log(text);
    downloadAsFile(text);

    function downloadAsFile(data) {
      let a = document.createElement("a");
      let file = new Blob([data], { type: 'application/text' });
      a.href = URL.createObjectURL(file);
      a.download = "sign.html";
      a.click();
    }
  });

});