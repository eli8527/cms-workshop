<!doctype html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <?php
    $title = $page->title();
  ?>
  <?php if ($title == "Home"): ?>
    <title><?= $site->title() ?></title>
  <?php else: ?>
    <title><?= $title ?> | <?= $site->title() ?></title>
  <?php endif; ?>

  <?= css(['assets/main.css', '@auto']);?>
  <?= js(['assets/main.js', '@auto']); ?>
</head>
<body>
