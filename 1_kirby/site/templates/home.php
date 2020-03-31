<?php snippet('header'); ?>
  <div class="layout-wrapper">
    <ul id="entries">
      <?php foreach($site->index()->listed() as $entry): ?>
        <li class="entry">
          <a href="<?= $entry->url(); ?>">
            <?= $entry->title(); ?>
          </a>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>
<?php snippet('footer'); ?>
