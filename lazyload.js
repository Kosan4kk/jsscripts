function lazyload_img($buffer) {
    return preg_replace("#]*) src=['\"](.*?)['\"]([^>]*)>#", '', $buffer);
}
ob_start("lazyload_img");
