<?php snippet('header'); ?>
  <div class="layout-wrapper">
    <div class="columns">
      <div class="column">
        <img src="<?= $page->hero_image()->toFile()->url(); ?>">
      </div>
      <div class="column">
        <h2><?= $page->title() ?></h2>
        <div class="text">
          <?= $page->main_content()->kirbytext(); ?>
        </div>
      </div>
    </div>
  </div>
<?php snippet('footer'); ?>
