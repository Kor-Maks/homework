<?php


$tag = 'span';
$content = 'просто текст';

function renderElement($tag, $content)
{
  echo "<$tag>$content</$tag>";
}

renderElement($tag, $content);
