<?php

/**
 * @file
 * template.php
 */

/**
* Implements template_preprocess_page().
*/
function lazyboot_preprocess_page(&$variables) {

  $value = theme_get_setting('lazyboot_content_only');
  $variables['lazyboot_content_only'] = empty($value);

}