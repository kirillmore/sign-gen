<?
function getProductVersion($opt){
  $c=file_get_contents('../version.txt', true);
  $version=substr($c,1,strripos($c,'.')-1);
  $subversion=substr($c,strripos($c,'.')+1);
  if(!isset($opt)) return $c;
  if($opt=='next') return 'v'.$version.'.'.++$subversion;
  if($opt=='version') return $version;
  if($opt=='subversion') return $subversion;
}

if($_GET['a']=='add'){
  shell_exec("git add -A");
}

if($_GET['a']=='commit'){
  file_put_contents('../version.txt', getProductVersion('next'));
  shell_exec("git add -A");
  shell_exec("git commit -m ".getProductVersion());
}

if($_GET['a']=='pushprod'){
  file_put_contents('../version.txt', getProductVersion('next'));
  shell_exec("git add -A");
  shell_exec("git commit -m ".getProductVersion());
  shell_exec("git ftp -s prod push -P");
}

?>