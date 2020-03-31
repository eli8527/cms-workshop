<?php snippet('header'); ?>
  <div class="layout-wrapper">
    <ul class="entries">
      <?php foreach($site->index()->listed() as $entry): ?>
        <li class="entry">
          <?= $entry->title(); ?>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>
<?php snippet('footer'); ?>
