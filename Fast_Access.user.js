// ==UserScript==
// @name        Fast_Access_Final
// @version      1.2
// @description  Mat drop list (fast access to patterns) Drakor Wiki (Buttons)
// @author      Lorinthar & Imperial
// @match        http://*.drakor.com*
// ==/UserScript==
(function(){
var FastButtons = '<table align="center"><td style="background-color: #5e145b;"><div style="border:3px solid #d420cd"><a href="https://docs.google.com/spreadsheets/d/1P8vghr3Mnmxdx0ocY5Mwi6BYp5Dy4gf1VXTw1YK7dYk/edit#gid=1226207657" target="_new">Mat Drop List</a></div></td>'+
'<td style="background-color: #5e145b;"><div style="border:3px solid #d420cd"> <a href="https://sites.google.com/site/drakorpedia/" target="_new">Drakor Wiki</a></td>'+
'<td style="background-color: #9a6616;"><div id="load-tradeskills-Construction-patterns" class="navButton tradePatterns">Construction</div></td>'+
'<td style="background-color: #9a6616;"><div id="load-tradeskills-Inscription-patterns" class="navButton tradePatterns">Inscription</div></td>'+
'<td style="background-color: #9a6616;"><div id="load-tradeskills-Cooking-patterns" class="navButton tradePatterns">Cooking</div></td>'+
'<td style="background-color: #9a6616;"><div id="load-tradeskills-Jewelcrafting-patterns" class="navButton tradePatterns">Jewelcrafting</div></td>'+
'<td style="background-color: #9a6616;"><div id="load-tradeskills-Alchemy-patterns" class="navButton tradePatterns">Alchemy</div></td>'+
'<td style="background-color: #9a6616;"><div id="load-tradeskills-Smithing-patterns" class="navButton tradePatterns">Smithing</div></td>'+
'<td style="background-color: #9a6616;"><div id="load-tradeskills-Crafting-patterns" class="navButton tradePatterns">Crafting</div></td></table>';
$(FastButtons).insertBefore('#gs_topmenu');
})();
