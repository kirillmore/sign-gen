<?
function insertValue($n){
  if($_GET['mode']=='test'){
    if($n=='name') $code='Кирилл';
    if($n=='family') $code='Моряков';
    if($n=='position') $code='Разработчик';
    if($n=='otdel') $code='Отдел разработки';
    if($n=='tel') $code='+7 (921) 371-10-92';
    if($n=='mob') $code='+7 (921) 371-10-92';
    if($n=='dob') $code='1090';
    if($n=='email') $code='kirillmore86@gmail.com';
    return 'value="'.$code.'"';
  }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title><?=$config['title'];?></title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <!--jquery-->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <!--bootstrap-->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&amp;display=swap" rel="stylesheet">
  <!--less-->
  <link rel="stylesheet" type="text/css" href="style.css?v=<?=file_get_contents('version.txt',true);?>" />
  <link rel="stylesheet" type="text/css" href="<?=$dir?>bootstraphelper.css?v=<?=file_get_contents('version.txt',true);?>" />
  <!--fontawesome-->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!--fancybox-->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" integrity="sha256-Vzbj7sDDS/woiFS3uNKo8eIuni59rjyNGtXfstRzStA=" crossorigin="anonymous" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" integrity="sha256-yt2kYMy0w8AbtF89WXb2P1rfjcP/HTHLT7097U8Y5b8=" crossorigin="anonymous"></script>
  <!--fontawesome-->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!--matchHeight-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.matchHeight/0.7.2/jquery.matchHeight-min.js"></script>
  <!--dev tools-->
  <?if($_SERVER['SERVER_NAME']=='localhost') echo'<script src="'.$dir.'tools/moreDev.js"></script>';?>
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
      <div class="row">
        <div class="col-xs-12 header">
          1. Выберите бренд:
        </div>
        <div class="col-xs-12 col-sm-3 text-center"><img src="img/logo_toyota.svg" class="brand__logo" data-brand="toyota"></div>
        <div class="col-xs-12 col-sm-3 text-center"><img src="img/logo_lexus.svg" class="brand__logo" data-brand="lexus"></div>
        <div class="col-xs-12 col-sm-3 text-center"><img src="img/logo_chery.png" class="brand__logo" data-brand="chery"></div>
        <div class="col-xs-12 col-sm-3 text-center"><img src="img/logo_hyundai.svg" class="brand__logo" data-brand="hyundai"></div>
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
          <div class="col-xs-12 col-sm-3 text-center dc__items__btn" data-dc="toyota_all"><span>Общая подпись</span></div>
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
            <label>Должность:</label>
            <input type="text" name="position" placeholder="Должность" required <?=insertValue('position');?>>
            <label>Отдел:</label>
            <input type="text" name="otdel" placeholder="Отдел" <?=insertValue('otdel');?>>
            <label>Тел:</label>
            <input type="text" name="tel" placeholder="Телефон" required <?=insertValue('tel');?>>
            <label>Моб:</label>
            <input type="text" name="mob" placeholder="Тел.моб." <?=insertValue('mob');?>>
            <label>E-mail:</label>
            <input type="text" name="email" placeholder="E-mail" required <?=insertValue('email');?>>
            <label>Доб.:</label>
            <input type="text" name="teladd" placeholder="доб." <?=insertValue('dob');?>>
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
          </div>
        </div>
      </div>
    </div>
  </section>
  <script type="text/javascript" src="script.js?v=<?=file_get_contents('version.txt',true);?>"></script>
</body>
</html>