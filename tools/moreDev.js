window.onload = function(){
  $("body").append(
    '<div style="position:fixed;bottom:10px;right:10px;background-color:#eee;padding:10px;"><a href="tools/commit.php?a=add" style="font-weight:bold;color:#303030;"><i class="fab fa-git-alt"></i> ADD</a><br><a href="tools/commit.php?a=commit" style="font-weight:bold;color:#303030;"><i class="fab fa-git-alt"></i> ADD + COMMIT</a><br><a href="tools/commit.php?a=pushprod" style="font-weight:bold;color:#303030;"><i class="fab fa-git-alt"></i> ADD + COMMIT + PUSH TO prod</a></div>');
};