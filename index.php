<?
function insertValue($n){
  if(isset($_GET['mode']) AND $_GET['mode']=='test'){
    if($n=='name') $code='Олег';
    if($n=='family') $code='Борисов';
    if($n=='name_eng') $code='Oleg Borisov';
    if($n=='position') $code='Директор по послепродажному обслуживанию';
    if($n=='position_eng') $code='After Sales Director';
    if($n=='otdel') $code='Отдел разработки';
    if($n=='tel') $code='+7 (921) 371-10-92';
    if($n=='mob') $code='+7 (921) 371-10-92';
    if($n=='dob') $code='1090';
    if($n=='email') $code='borisov.o@site.com';
    return 'value="'.$code.'"';
  }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>IAT - генератор подписи</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <!--jquery-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <!--bootstrap-->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&amp;display=swap" rel="stylesheet">
  <!--less-->
  <link rel="stylesheet" type="text/css" href="css/style.css?v=<?=file_get_contents('version.txt',true);?>" />
  <!--fontawesome-->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!--fancybox-->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" integrity="sha256-Vzbj7sDDS/woiFS3uNKo8eIuni59rjyNGtXfstRzStA=" crossorigin="anonymous" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" integrity="sha256-yt2kYMy0w8AbtF89WXb2P1rfjcP/HTHLT7097U8Y5b8=" crossorigin="anonymous"></script>
  <!--fontawesome-->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!--matchHeight-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.matchHeight/0.7.2/jquery.matchHeight-min.js"></script>
</head>
<body>
  <section id="header">
    <div class="container">
      <div class="row">
        <div class="col-xs-6">
          <img src="img/logo.svg" alt="">
        </div>
      </div>
    </div>
  </section>
  <section id="brand">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-xs-12 header">
          1. Выберите бренд:
        </div>
        <div class="col-xs-12 col-sm-2 text-center" data-mh="logo"><img src="img/logo_toyota.svg" class="brand__logo" data-brand="toyota"></div>
        <div class="col-xs-12 col-sm-2 text-center" data-mh="logo"><img src="img/logo_lexus.svg" class="brand__logo" data-brand="lexus"></div>
        <div class="col-xs-12 col-sm-2 text-center" data-mh="logo"><img src="img/logo_chery.png" class="brand__logo" data-brand="chery"></div>
        <div class="col-xs-12 col-sm-2 text-center" data-mh="logo"><img src="img/logo_hyundai.svg" class="brand__logo" data-brand="hyundai"></div>
        <div class="col-xs-12 col-sm-2 text-center" data-mh="logo"><img src="img/logo_geely.png" class="brand__logo mt-5" data-brand="geely"></div>
        <div class="col-xs-12 col-sm-2 text-center" data-mh="logo"><img src="img/logo_exeed.png" class="brand__logo mt-5" data-brand="exeed"></div>
        <div class="col-xs-12 col-sm-2 text-center" data-mh="logo"><img src="img/logo_omoda.png" class="brand__logo mt-5" data-brand="omoda"></div>
        <div class="col-xs-12 col-sm-2 text-center" data-mh="logo"><img src="img/logo_black.svg" class="brand__logo" data-brand="iat"><br><span class="smtext">(для руководителей общих подразделений холдинга)</span></div>
      </div>
    </div>
  </section>
  <section id="dc">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 dc__items hidden" id="dc_lexus">
          <div class="header">2. Выберите ДЦ:</div>
          <div class="col-xs-12 col-sm-4 text-center dc__items__btn" data-dc="lexus_primorsky"><span>Приморский</span></div>
          <div class="col-xs-12 col-sm-4 text-center dc__items__btn" data-dc="lexus_parnas"><span>Парнас</span></div>
          <div class="col-xs-12 col-sm-4 text-center dc__items__btn" data-dc="lexus_all"><span>Приморский+Парнас</span></div>
        </div>
        <div class="col-xs-12 dc__items hidden" id="dc_toyota">
          <div class="header">2. Выберите ДЦ:</div>
          <div class="col-xs-12 col-sm-3 text-center dc__items__btn" data-dc="toyota_primorsky"><span>Приморский</span></div>
          <div class="col-xs-12 col-sm-3 text-center dc__items__btn" data-dc="toyota_parnas"><span>Парнас</span></div>
          <div class="col-xs-12 col-sm-3 text-center dc__items__btn" data-dc="toyota_volhonsky"><span>Волхонский</span></div>
        </div>
        <div class="col-xs-12 dc__items hidden" id="dc_chery">
          <div class="header">2. Выберите ДЦ:</div>
          <div class="col-xs-12 text-center dc__items__btn" data-dc="chery_volhonsky"><span>Волхонский</span></div>
        </div>
        <div class="col-xs-12 dc__items hidden" id="dc_hyundai">
          <div class="header">2. Выберите ДЦ:</div>
          <div class="col-xs-12 text-center dc__items__btn" data-dc="hyundai_parnas"><span>Парнас</span></div>
        </div>
        <div class="col-xs-12 dc__items hidden" id="dc_iat">
          <div class="header">2. Выберите ДЦ:</div>
          <div class="col-xs-12 col-sm-3 text-center dc__items__btn" data-dc="toyota_all"><span>Общая подпись</span></div>
        </div>
        <div class="col-xs-12 dc__items hidden" id="dc_geely">
          <div class="header">2. Выберите ДЦ:</div>
          <div class="col-xs-12 col-sm-3 text-center dc__items__btn" data-dc="geely"><span>ООО «Иат Нео»</span></div>
        </div>
        <div class="col-xs-12 dc__items hidden" id="dc_exeed">
          <div class="header">2. Выберите ДЦ:</div>
          <div class="col-xs-12 col-sm-3 text-center dc__items__btn" data-dc="exeed"><span>EXEED Волхонский</span></div>
        </div>
        <div class="col-xs-12 dc__items hidden" id="dc_omoda">
          <div class="header">2. Выберите ДЦ:</div>
          <div class="col-xs-12 col-sm-3 text-center dc__items__btn" data-dc="omoda"><span>OMODA ИАТ Приморский</span></div>
        </div>
      </div>
    </div>
  </section>
  <section id="result" class="hidden">
    <div class="container">
      <div class="row mt">
        <div class="col-xs-12 col-sm-6" id="form">
          <div class="header">
            3. Заполните форму:
          </div>
          <form name="form">
            <label>Имя:</label>
            <input type="text" name="name" placeholder="Имя" required <?=insertValue('name');?>>
            <label>Фамилия:</label>
            <input type="text" name="family" placeholder="Фамилия" required <?=insertValue('family');?>>
            <label class="exeed_only">Name + Family (eng.):*</label>
            <input class="exeed_only" type="text" name="name_eng" placeholder="Name Family" <?=insertValue('name_eng');?>>
            <label class="hyundai_only">Отдел:</label>
            <input class="hyundai_only" type="text" name="otdel" placeholder="Отдел" value="Отдел " <?=insertValue('otdel');?>>
            <label>Должность + отдел</label>
            <input type="text" name="position" placeholder="Должность" required <?=insertValue('position');?>>
            <label class="exeed_only">Position + department (eng.):*</label>
            <input class="exeed_only" type="text" name="position_eng" placeholder="Position + department" <?=insertValue('position_eng');?>>
            <label>Тел:</label>
            <input type="text" name="tel" placeholder="Телефон" required <?=insertValue('tel');?>>
            <label>Доб.:</label>
            <input type="text" name="teladd" placeholder="доб." <?=insertValue('dob');?>>
            <label>Моб:</label>
            <input type="text" name="mob" placeholder="Тел.моб." <?=insertValue('mob');?>>
            <label>E-mail:</label>
            <input type="text" name="email" placeholder="E-mail" required <?=insertValue('email');?>>
            <input type="hidden" name="template">
            <button class="btn btn-success">Готово</button>
          </form>
        </div>
        <div class="col-xs-12 col-sm-6" id="result">
          <div class="header">Ваша подпись:</div>
          <div id="sandbox"></div>
          <div class="header">Код:</div>
          <div id="code mt">
            <textarea name="code"></textarea>
            <div id="copycode" class="btn btn-sm btn-success"><i class="fas fa-copy"></i> копировать</div>
            <div id="downloadcode" class="btn btn-sm btn-success"><i class="fas fa-copy"></i> сохранить</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <script type="text/javascript" src="js/app.js?v=<?=file_get_contents('version.txt',true);?>"></script>
  <!--dev tools-->
  <?if($_SERVER['SERVER_NAME']=='localhost') echo'<script src="../_devtools/moreDev.js?path='.$current_page=str_replace("/","",strtolower(parse_url("http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]",PHP_URL_PATH))).'"></script>';?>
</body>
</html>