<?php


$tag = 'span';
$content = 'просто текст';
$repeat = 4;

function cycleElement($tag, $content, $count = 1)
{

  for ($i = 1; $i <= $count; $i++) {
    echo "<$tag>$content</$tag>\n";
}
}

cycleElement($tag, $content, $repeat);
