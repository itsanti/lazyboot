<?php

/**
 * @file
 * theme-settings.php
 */

function lazyboot_form_system_theme_settings_alter(&$form, $form_state) {

  $form['custom'] = array(
    '#type' => 'vertical_tabs',
    '#prefix' => '<h2><small>' . t('Custom Settings') . '</small></h2>',
    '#weight' => -20,
  );

  $form['lazyboot_custom'] = array(
    '#type' => 'fieldset',
    '#title' => t('Control site regions'),
    '#description' => t('If toggled on, only content will be shown.'),
    '#group' => 'custom',
  );

  $form['lazyboot_custom']['lazyboot_content_only'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show content only'),
    '#description' => t('Check here if you want show only content region.'),
    '#default_value' => theme_get_setting('lazyboot_content_only'),
    '#tree' => FALSE,
  );

  return $form;
}