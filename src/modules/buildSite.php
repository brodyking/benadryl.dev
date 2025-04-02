<?php


function buildBlog($isdev)
{

  global $config;
  global $parsedown;
  global $pages;
  global $pagetemplate;
  global $blogtemplate;
  global $components;
  global $blog;

  foreach ($blog as $currentPost) {
    $rawmarkdown = file_get_contents($currentPost["file.source"]);
    $rawhtml = $parsedown->text($rawmarkdown);

    $page = $blogtemplate;

    // Site Variables
    $page = str_replace("{site.name}", $config["site.name"], $page);

    // File Variables
    $page = str_replace("{file.content}", $rawhtml, $page);
    $page = str_replace("{file.namePretty}", $currentPost["file.namePretty"], $page);

    // Blog Variables
    $page = str_replace("{file.updated}", $currentPost["file.updated"], $page);
    $page = str_replace("{file.author}", $currentPost["file.author"], $page);

    // Components
    $page = str_replace("{component.nav}", file_get_contents($components["nav.html"]["component.source"]), $page);
    $page = str_replace("{component.footer}", file_get_contents($components["footer.html"]["component.source"]), $page);

    // Heading borders
    $page = str_replace("<h1>", "<h1 class='border-bottom'>", $page);
    $page = str_replace("<h2>", "<h2 class='border-bottom'>", $page);
    $page = str_replace("<h3>", "<h3 class='border-bottom'>", $page);

    // Links for dev mode
    if ($isdev) {
      $page = str_replace('href="/', 'href="/www/', $page);
    }

    file_put_contents("www/blog/" . $currentPost['file.nameOut'], $page);
  }
}

function buildPages($isdev)
{
  global $config;
  global $parsedown;
  global $pages;
  global $pagetemplate;
  global $blogtemplate;
  global $components;
  global $blog;

  foreach ($pages as $currentPage) {


    $rawmarkdown = file_get_contents($currentPage["file.source"]);
    $rawhtml = $parsedown->text($rawmarkdown);

    $page = $pagetemplate;

    // Site Variables
    $page = str_replace("{site.name}", $config["site.name"], $page);

    // File Variables
    $page = str_replace("{file.content}", $rawhtml, $page);
    $page = str_replace("{file.namePretty}", $currentPage["file.namePretty"], $page);

    // Components
    $page = str_replace("{component.nav}", file_get_contents($components["nav.html"]["component.source"]), $page);
    $page = str_replace("{component.footer}", file_get_contents($components["footer.html"]["component.source"]), $page);

    // Heading borders
    $page = str_replace("<h1>", "<h1 class='border-bottom'>", $page);
    $page = str_replace("<h2>", "<h2 class='border-bottom'>", $page);
    $page = str_replace("<h3>", "<h3 class='border-bottom'>", $page);

    // Blog Listings
    if ($currentPage["file.nameIn"] == "blog.md") {
      $bloglistrawhtml = "<table class='table table-striped'><thead><tr><th>post name</th><th>author</th><th>published</th></tr></thead></th><tbody>";
      foreach ($blog as $currentPost) {
        $bloglistrawhtml = $bloglistrawhtml . "<tr><td><a href='blog/" . $currentPost["file.nameOut"] . "'>" . $currentPost["file.namePretty"] . "</a></td><td>" . $currentPost["file.author"] . "</td><td>" . $currentPost["file.updated"] . "</td></tr>";
      }
      $bloglistrawhtml = $bloglistrawhtml . "</tbody></table>";
      $page = str_replace("{misc.blog}", $bloglistrawhtml, $page);
    }

    // Links for dev mode
    if ($isdev) {
      $page = str_replace('href="/', 'href="/www/', $page);
    }


    file_put_contents("www/" . $currentPage['file.nameOut'], $page);
  }
}

function buildSite($isdev)
{
  global $config;
  global $parsedown;
  global $pages;
  global $pagetemplate;
  global $blogtemplate;
  global $components;
  global $blog;

  deleteSite();


  if (!is_dir("www/"))
    mkdir("www");
  if (!is_dir("www/blog/"))
    mkdir("www/blog/");


  $source = "assets";
  $dest = "www/assets";

  file_put_contents("www/.htaccess", "ErrorDocument 404 /404.html");


  mkdir($dest, 0755);
  foreach ($iterator = new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($source, \RecursiveDirectoryIterator::SKIP_DOTS), \RecursiveIteratorIterator::SELF_FIRST) as $item) {
    if ($item->isDir()) {
      mkdir($dest . DIRECTORY_SEPARATOR . $iterator->getSubPathname());
    } else {
      copy($item, $dest . DIRECTORY_SEPARATOR . $iterator->getSubPathname());
    }
  }

  buildBlog($isdev);
  buildPages($isdev);

}

?>