# Kirby as CMS
1. Download and install [MAMP](https://www.mamp.info/en/mamp/mac/)
2. Launch MAMP and start the server. In the `htdocs` folder, make an alias to this folder. The `htdocs` folder is in `/Applications/MAMP/htdocs`. Once inside, link it:<br>
  `ln -s /Users/eric/dev/cms-workshop/1_kirby kirby`
3. Go to `http://localhost:8888/kirby/`. It should have something.
4. The Kirby CMS is at `http://localhost:8888/kirby/panel`. Make an account.
5. You can edit the panel fields for the site, by modifying `site/blueprints/site.yml`. Or you can edit the fields for each page by modifying `site/blueprints/pages/default.yml`.
6. To edit the front end, look at `site/templates` and `site/snippets`.

# API Reference
- [Kirby Docs](https://getkirby.com/docs/guide)
- [Kirby Field Docs](https://getkirby.com/docs/reference/panel/fields)
- [Kirby Field Methods](https://getkirby.com/docs/reference/templates/field-methods)
