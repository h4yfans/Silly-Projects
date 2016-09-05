<?php
/**
 * Created by PhpStorm.
 * User: Kaan
 * Date: 5.09.2016
 * Time: 12:50 AM
 */

$city = $_GET["city"];

$city = str_replace(" ", "", $city);

$contents = file_get_contents("http://www.weather-forecast.com/locations/".$city."/forecasts/latest");

preg_match('/3 Day Weather Forecast Summary:<\/b><span class="read-more-small"><span class="read-more-content"> <span class="phrase">(.*?)</s', $contents, $matches);

print_r($matches[1]);
