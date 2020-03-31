<?php snippet('header'); ?>
  <div class="layout-wrapper">
    <ul id="entries">
      <?php foreach($site->index()->listed() as $entry): ?>
        <li class="entry">
          <a href="<?= $entry->url(); ?>">
            <?= $entry->title(); ?>
          </a>
          <div class="description">
            <?= $entry->main_content()->kirbytext(); ?>
          </div>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>
<?php snippet('footer'); ?>
