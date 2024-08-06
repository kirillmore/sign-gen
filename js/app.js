$(document).ready(function() {
  //path
  url = 'http://s.iat.ru:4326/signature/';

  hyundaiBanner = 'banner_creta.png';
  hyundaiURL = 'https://www.hyundai.ru/brand/carbon-neutrality';
  appURL = 'https://onelink.to/9rmsse';

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
  tel_jaecoo_parnas = '+7 (812) 337-08-88';
  tel_jaecoo_primorsky = '+7 (812) 337-08-80';

  //template
  template_lexus_primorsky = '<table style="font-family:Arial;"><tr><td>С уважением,<br>{имя} {фамилия}<br><br>{должность}<br>Группа Компаний "Интер Авто Тим"<br>Тел.: {tel}, {доб.}<br>Моб.: {mob}<br></td></tr><tr><td><img src="' + url + 'logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="' + appURL + '"><img src="' + url + 'logo_apple.png" alt="apple" style="margin-right:10px;"></a><a href="' + appURL + '"><img src="' + url + 'logo_google.png" alt="google"></a></td></tr></table>';
  template_lexus_parnas = '<table style="font-family:Arial;"><tr><td>С уважением,<br>{имя} {фамилия}<br><br>{должность}<br>Группа Компаний "Интер Авто Тим"<br>Тел.: {tel}, {доб.}<br>Моб.: {mob}<br></td></tr><tr><td><img src="' + url + 'logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="' + appURL + '"><img src="' + url + 'logo_apple.png" alt="apple" style="margin-right:10px;"></a><a href="' + appURL + '"><img src="' + url + 'logo_google.png" alt="google"></a></td></tr></table>';
  template_lexus_all = '<table style="font-family:Arial;"><tr><td>С уважением,<br>{имя} {фамилия}<br><br>{должность}<br>Группа Компаний "Интер Авто Тим"<br>Тел.: {tel}, {доб.}<br>Моб.: {mob}<br></td></tr><tr><td><img src="' + url + 'logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="' + appURL + '"><img src="' + url + 'logo_apple.png" alt="apple" style="margin-right:10px;"></a><a href="' + appURL + '"><img src="' + url + 'logo_google.png" alt="google"></a></td></tr></table>';
  template_toyota_all = '<table style="font-family:Arial;"><tr><td>С уважением,<br>{имя} {фамилия}<br><br>{должность}<br>Группа Компаний "Интер Авто Тим"<br>Тел.: {tel}, {доб.}<br>Моб.: {mob}<br></td></tr><tr><td><img src="' + url + 'logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="' + appURL + '"><img src="' + url + 'logo_apple.png" alt="apple" style="margin-right:10px;"></a><a href="' + appURL + '"><img src="' + url + 'logo_google.png" alt="google"></a></td></tr></table>';
  template_toyota_primorsky = '<table style="font-family:Arial;"><tr><td>С уважением,<br>{имя} {фамилия}<br><br>{должность}<br>Группа Компаний "Интер Авто Тим"<br>Тел.: {tel}, {доб.}<br>Моб.: {mob}<br></td></tr><tr><td><img src="' + url + 'logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="' + appURL + '"><img src="' + url + 'logo_apple.png" alt="apple" style="margin-right:10px;"></a><a href="' + appURL + '"><img src="' + url + 'logo_google.png" alt="google"></a></td></tr></table>';
  template_toyota_parnas = '<table style="font-family:Arial;"><tr><td>С уважением,<br>{имя} {фамилия}<br><br>{должность}<br>Группа Компаний "Интер Авто Тим"<br>Тел.: {tel}, {доб.}<br>Моб.: {mob}<br></td></tr><tr><td><img src="' + url + 'logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="' + appURL + '"><img src="' + url + 'logo_apple.png" alt="apple" style="margin-right:10px;"></a><a href="' + appURL + '"><img src="' + url + 'logo_google.png" alt="google"></a></td></tr></table>';
  template_toyota_volhonsky = '<table style="font-family:Arial;"><tr><td>С уважением,<br>{имя} {фамилия}<br><br>{должность}<br>Группа Компаний "Интер Авто Тим"<br>Тел.: {tel}, {доб.}<br>Моб.: {mob}<br></td></tr><tr><td><img src="' + url + 'logo_iat.png" alt="iat" style="margin-top:15px;"></td></tr><tr><td style="padding-top: 15px;"><a href="//iat.ru">www.iat.ru</a></td></tr><tr><td style="padding-top: 15px;">CКАЧАЙТЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ<br><span style="color:#0088cc;">IAT CARS & SERVICE</span></td></tr><tr><td style="padding-top: 15px;"><a href="' + appURL + '"><img src="' + url + 'logo_apple.png" alt="apple" style="margin-right:10px;"></a><a href="' + appURL + '"><img src="' + url + 'logo_google.png" alt="google"></a></td></tr></table>';
  template_chery_volhonsky = '<table><tbody><tr><td style="width: 400px; vertical-align: middle;"><p style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;"><strong>{имя} {фамилия}</strong></p><p style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;">{должность}</p><p style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080; margin-bottom:0;">Chery Волхонский</p></td></tr><tr><td><img style="margin-bottom: 10px; margin-top: 10px; width: 100%; max-width: 140px; height: auto;" src="' + url + 'logo_chery_2024.png" alt="Chery"></td></tr><tr><td style="height: 28px; width: 600px; vertical-align: bottom;"><p style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;"><b>Address:</b> Ленинградская область,<br>Ломоносовский район, Виллозское городское поселение,<br>Волхонское шоссе, 3с2</p><p style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;"><b>Tel.:</b> {tel}, {доб.}<br><b>Mobile:</b> {mob}</p><p style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;"><b>Mail:</b> <a href="mailto:{email}" style="text-decoration:underline;">{email}</a><br><b>Web:</b> <a href="https://iat-chery.ru">iat-chery.ru</a></p></td></tr></tbody></table>';
  template_hyundai_parnas = '<table style="font-size:9px;font-family:\'Hyundai Sans Text\',\'Hyundai Sans Text Office\',Arial;" border="0" cellpadding="0" cellspacing="0"><tr><td><img src="' + url + 'blank.png" width="370" height="34"></td><tr><tr><td><img src="' + url + 'logo_hyundai.png" width="207" height="34" style="width:207px;height:34px;"></td></tr><tr><td><img src="' + url + 'blank.png" width="370" height="30"></td><tr><tr><td style="font-family:\'Hyundai Sans Head Medium\',\'Hyundai Sans Head Office Medium\',Arial;">{фамилия} {имя}<br>{отдел}<br></td></tr><tr><td>{должность}<br>T {tel}, {доб.}<br>М {mob}<br><a href="mailto:{email}">{email}</a>&nbsp;&nbsp;<a href="//hyundai-parnas.ru">www.hyundai-parnas.ru</a><br><br></td></tr><tr><td style="font-family:\'Hyundai Sans Head Medium\',\'Hyundai Sans Head Office Medium\',Arial;font-size:12px;">ИАТ Парнас<br></td></tr><tr><td style="font-family:\'Hyundai Sans Head Medium\',\'Hyundai Sans Head Office Medium\',Arial;font-size:9px;">Официальный дилер Hyundai</td></tr><tr><td><img src="' + url + 'blank.png" width="370" height="16"></td><tr><tr><td><a href="' + hyundaiURL + '"><img src="' + url + hyundaiBanner + '" width="370" height="93" style="width:370px;"></a></td></tr></table>';
  template_geely = '<table style="color:#767171;font-size:13px;"><tr><td>С уважением,<br><br><b style="font-size:15px;">{имя} {фамилия}</b><br><b>{должность}</b><br>Моб.: {mob}<br>Тел: {tel}, {доб.}<br>E-mail: <a href="mailto:{email}">{email}</a><br><br><b>ООО «Иат Нео»</b><br>ул. Торговая, 22, д. Порошкино, Бугровское с.п.,<br>Санкт- Петербург, Россия, 188660<br><a href="//iat.ru">www.iat.ru</a><br><br><img src="' + url + 'logo_geely.png" style="width:180px;margin:10px 0;" width="180" alt="Geely"><br></td></tr></table>';
  template_exeed = '<table style="color:#82817d;font-family: system-ui,-apple-system,\'Segoe UI\',Roboto,\'Helvetica Neue\',Arial,\'Noto Sans\',\'Liberation Sans\',sans-serif;"><tr><td style="padding-right:15px;"><b>{имя} {фамилия}</b><br><b>{name_eng}</b><br>{position}/<br>{должность}<br>EXEED ЦЕНТР ИАТ ВОЛХОНСКИЙ</td><td style="border-left: 1px solid #505050"><img src="' + url + 'logo_exeed.png" style="width:180px;" width="180" alt="EXEED"></td></tr><tr><td colspan="2"><hr style="margin-top:10px;margin-bottom:10px;border: none;color: #505050;background-color: #505050;height: 1px;">Adress: Санкт-Петербург, Волхонское шоссе 3, стр 3<br>Tel.: {tel}, {доб.}<br>Mobile: {mob}<br>E-mail: <a href="mailto:{email}" style="color:#82817d;text-decoration:underline;">{email}</a></td></tr></table>';
  template_omoda = '<table><tbody><tr><td style="height: 32px; width: 309px; vertical-align: middle;"><span style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;"><strong>{имя} {фамилия}</strong></span></td><td style="height: 32px; width: 5px; vertical-align: middle;" rowspan="3"><img src="https://www.chery.ru/logotype/line.png" alt="" width="1" height="120"></td><td style="width: 238px; text-align: center; vertical-align: middle;" rowspan="4"><a href="https://www.omoda.ru/" target="_blank" rel="noopener"><img style="display: block; margin-bottom: 10px; margin-top: 10px;" src="' + url + 'logo_omoda.png" alt="OMODA" width="230" height="29" hspace="5"></a></td></tr><tr><td style="height: 33px; width: 309px; vertical-align: middle;"><span style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;">{должность}</span></td></tr><tr><td style="height: 33px; width: 309px; vertical-align: middle;"><span style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;">OMODA ИАТ Приморский</span></td></tr></tbody></table><table><tbody><tr><td style="height: 18px; width: 564px;"><hr></td></tr><tr><td style="height: 28px; width: 600px; vertical-align: bottom;"><span style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;">Address: 197374, город Санкт-Петербург, улица Школьная, дом 98, литера А, помещение 71</span></td></tr><tr><td style="height: 18px; width: 564px;"><span style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;">Tel.: {tel} ext. {доб.}</span></td></tr><tr><td style="height: 18px; width: 564px;"><span style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;">Mobile: {mob}</span></td></tr><tr><td style="height: 24px; width: 564px; vertical-align: top;"><span style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;">E-mail: <a href="mailto:{email}" style="text-decoration:underline;">{email}</a></span></td></tr></tbody></table>';
  template_jaecoo_parnas = '<table><tbody><tr><td style="height: 32px; width: 309px; vertical-align: middle;"><span style="font-size: 10pt; line-height: 13pt; font-family: Calibri, sans-serif; color: #808080;"><strong>{имя} {фамилия}</strong></span></td><td style="height: 32px; width: 5px; vertical-align: middle;" rowspan="2"><img src="' + url + 'line.png" alt="line" width="1" height="120"></td><td style="width: 238px; text-align: center; vertical-align: middle;" rowspan="2"><img style="display: block; margin-bottom: 10px; margin-top: 10px;" src="' + url + 'logo_jaecoo.png" alt="JAECOO" width="230" height="27" hspace="5"></td></tr><tr><td style="height: 33px; width: 309px; vertical-align: middle;"><span style="font-size: 10pt; line-height: 13pt; font-family: Calibri, sans-serif; color: #808080;">{должность}</span><br><span style="font-size: 10pt; line-height: 13pt; font-family: Calibri, sans-serif; color: #808080;">JAECOO Центр ИАТ Парнас</span></td></tr></tbody></table><table><tbody><tr><td style="height: 18px; width: 564px;"><hr></td></tr><tr><td style="height: 28px; width: 600px; vertical-align: bottom;"><span style="font-size: 10pt; line-height: 13pt; font-family: Calibri, sans-serif; color: #808080;">Адрес: 188660, Ленинградская Область, д. Порошкино, ул. Торговая, 22</span></td></tr><tr><td style="height: 18px; width: 564px;"><span style="font-size: 10pt; line-height: 13pt; font-family: Calibri, sans-serif; color: #808080;">Tel.: {tel} ext. {доб.}</span></td></tr><tr><td style="height: 18px; width: 564px;"><span style="font-size: 10pt; line-height: 13pt; font-family: Calibri, sans-serif; color: #808080;">Mobile: {mob}</span></td></tr><tr><td style="height: 24px; width: 564px; vertical-align: top;"><span style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;">E-mail: <a href="mailto:{email}" style="text-decoration:underline;">{email}</a></span></td></tr></tbody></table>';
  template_jaecoo_primorsky = '<table><tbody><tr><td style="height: 32px; width: 309px; vertical-align: middle;"><span style="font-size: 10pt; line-height: 13pt; font-family: Calibri, sans-serif; color: #808080;"><strong>{имя} {фамилия}</strong></span></td><td style="height: 32px; width: 5px; vertical-align: middle;" rowspan="2"><img src="' + url + 'line.png" alt="line" width="1" height="120"></td><td style="width: 238px; text-align: center; vertical-align: middle;" rowspan="2"><img style="display: block; margin-bottom: 10px; margin-top: 10px;" src="' + url + 'logo_jaecoo.png" alt="JAECOO" width="230" height="27" hspace="5"></td></tr><tr><td style="height: 33px; width: 309px; vertical-align: middle;"><span style="font-size: 10pt; line-height: 13pt; font-family: Calibri, sans-serif; color: #808080;">{должность}</span><br><span style="font-size: 10pt; line-height: 13pt; font-family: Calibri, sans-serif; color: #808080;">JAECOO ИАТ Приморский</span></td></tr></tbody></table><table><tbody><tr><td style="height: 18px; width: 564px;"><hr></td></tr><tr><td style="height: 28px; width: 600px; vertical-align: bottom;"><span style="font-size: 10pt; line-height: 13pt; font-family: Calibri, sans-serif; color: #808080;">Адрес: 197374, город Санкт-Петербург, улица Школьная, дом 98, литера А, помещение 71</span></td></tr><tr><td style="height: 18px; width: 564px;"><span style="font-size: 10pt; line-height: 13pt; font-family: Calibri, sans-serif; color: #808080;">Tel.: {tel} ext. {доб.}</span></td></tr><tr><td style="height: 18px; width: 564px;"><span style="font-size: 10pt; line-height: 13pt; font-family: Calibri, sans-serif; color: #808080;">Mobile: {mob}</span></td></tr><tr><td style="height: 24px; width: 564px; vertical-align: top;"><span style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;">E-mail: <a href="mailto:{email}" style="text-decoration:underline;">{email}</a></span></td></tr></tbody></table>';
  template_jac_volhonsky = '<table><tbody><tr><td style="height: 32px; width: 309px; vertical-align: middle;"><span style="font-size: 10pt; line-height: 13pt; font-family: Calibri, sans-serif; color: #808080;"><strong>{имя} {фамилия}</strong></span></td><td style="height: 32px; width: 5px; vertical-align: middle;" rowspan="2"><img src="' + url + 'line.png" alt="line" width="1" height="120"></td><td style="width: 238px; text-align: center; vertical-align: middle;" rowspan="2"><img style="display: block; margin-bottom: 10px; margin-top: 10px;" src="' + url + 'logo_jac.png" alt="GAC" width="230" height="79" hspace="5"></td></tr><tr><td style="height: 33px; width: 309px; vertical-align: middle;"><span style="font-size: 10pt; line-height: 13pt; font-family: Calibri, sans-serif; color: #808080;">{должность}</span><br><span style="font-size: 10pt; line-height: 13pt; font-family: Calibri, sans-serif; color: #808080;">GAC Центр Волхонский</span></td></tr></tbody></table><table><tbody><tr><td style="height: 18px; width: 564px;"><hr></td></tr><tr><td style="height: 28px; width: 600px; vertical-align: bottom;"><span style="font-size: 10pt; line-height: 13pt; font-family: Calibri, sans-serif; color: #808080;">Адрес: г. Санкт-Петербург, Ленинградская область, Ломоносовский район, Виллозское городское поселение, 3</span></td></tr><tr><td style="height: 18px; width: 564px;"><span style="font-size: 10pt; line-height: 13pt; font-family: Calibri, sans-serif; color: #808080;">Tel.: {tel} ext. {доб.}</span></td></tr><tr><td style="height: 18px; width: 564px;"><span style="font-size: 10pt; line-height: 13pt; font-family: Calibri, sans-serif; color: #808080;">Mobile: {mob}</span></td></tr><tr><td style="height: 24px; width: 564px; vertical-align: top;"><span style="font-size: 10pt; line-height: 13pt; font-family: Arial, sans-serif; color: #808080;">E-mail: <a href="mailto:{email}" style="text-decoration:underline;">{email}</a></span></td></tr></tbody></table>';
  template_tank = '<table style="width:100%;"><tr><td style="width: 40px; vertical-align: middle;"></td><td><img src="' + url + 'logo_tank_badge.png" style="width:60px;height:auto;margin-bottom: 20px;"></td></tr><tr><td style="width: 40px; vertical-align: middle;"></td><td><div style="font-size:13pt; color:#272d2d; line-height: 13pt; font-family: Arial, sans-serif;margin-bottom: 8px;"><strong>{имя} {фамилия}</strong></div><div style="font-size:11pt; color:#272d2d; line-height: 13pt; font-family: Arial, sans-serif;margin-bottom: 16px;">{должность}</div><div style="font-size:10pt; color: #b5b4b6; line-height: 13pt; font-family: Arial, sans-serif;margin-bottom: 3px;">TANK ИАТ Парнас</div><div style="font-size:10pt; color: #b5b4b6; line-height: 13pt; font-family: Arial, sans-serif;margin-bottom: 3px;">ТЕЛЕФОН｜+7 (812) 337-78-87</div><div style="font-size:10pt; color: #b5b4b6; line-height: 13pt; font-family: Arial, sans-serif;margin-bottom: 3px;">МОБ.｜{mob}</div><div style="font-size:10pt; color: #b5b4b6; line-height: 13pt; font-family: Arial, sans-serif;margin-bottom: 3px;">EMAIL | {email}</div><div style="font-size:10pt; color: #b5b4b6; line-height: 13pt; font-family: Arial, sans-serif;margin-bottom: 3px;">АДРЕС｜ЛО, д. Порошкино, ул. Торговая, д. 22</div><div style="font-size:10pt; color: #b5b4b6; line-height: 13pt; font-family: Arial, sans-serif;margin-bottom: 26px;">САЙТ｜<a href="https://iat-tank.ru" style="color: inherit;">iat-tank.ru</a></div></td></tr></table><table style="width:100%;"><tr><td width="30" style="width: 30px; vertical-align: middle;"><img src="' + url + 'tank-line.png" style="width:100%;height:22px;"></td><td width="146"><img src="' + url + 'logo_tank.png" style="margin: 0 10px;"></td><td width="*"><img src="' + url + 'tank-line.png" style="width:100%;height:22px;"></td></tr></table>';


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
    if ($(this).attr("data-brand") == 'jaecoo') {
      $("#dc_jaecoo").removeClass("d-none");
    }
    if ($(this).attr("data-brand") == 'jac') {
      $("#dc_jac").removeClass("d-none");
    }
    if ($(this).attr("data-brand") == 'tank') {
      $("#dc_tank").removeClass("d-none");
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
    if ($(this).attr("data-dc") == 'jaecoo_parnas') { $("[name='tel']").val(tel_jaecoo_parnas); }
    if ($(this).attr("data-dc") == 'jaecoo_primorsky') { $("[name='tel']").val(tel_jaecoo_primorsky); }
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

    if (tmpname == 'jaecoo_parnas') {
      template = template_jaecoo_parnas;
    }

    if (tmpname == 'jaecoo_primorsky') {
      template = template_jaecoo_primorsky;
    }

    if (tmpname == 'jac_volhonsky') {
      template = template_jac_volhonsky;
    }

    if (tmpname == 'tank_parnas') {
      template = template_tank;
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

    $("#copy_message").removeClass('d-none');
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