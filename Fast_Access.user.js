// ==UserScript==
// @name        Fast_Access
// @version      1.0
// @description  Mat drop list (fast access to patterns) Drakor Wiki (Buttons)
// @author      Lorinthar & Imperial
// @match        http://*.drakor.com*
// ==/UserScript==
(function(){
var FastButtons = '<a href="https://docs.google.com/spreadsheets/d/1P8vghr3Mnmxdx0ocY5Mwi6BYp5Dy4gf1VXTw1YK7dYk/edit#gid=1226207657" target="_new" class="bv_button linkRepair">Mat Drop List</a>'+
'<div id="load-tradeskills-Construction-patterns" class="navButton tradePatterns">Construction</div>'+
'<div id="load-tradeskills-Inscription-patterns" class="navButton tradePatterns">Inscription</div>'+
'<div id="load-tradeskills-Cooking-patterns" class="navButton tradePatterns">Cooking</div>'+
'<div id="load-tradeskills-Jewelcrafting-patterns" class="navButton tradePatterns">Jewelcrafting</div>'+
'<div id="load-tradeskills-Alchemy-patterns" class="navButton tradePatterns">Alchemy</div>'+
'<div id="load-tradeskills-Smithing-patterns" class="navButton tradePatterns">Smithing</div>'+
'<div id="load-tradeskills-Crafting-patterns" class="navButton tradePatterns">Crafting</div>'+
'<a href="https://sites.google.com/site/drakorpedia/" target="_new"" class="navButton gs_topmenu_item gs_item_adventure">Drakor Wiki</a>';
$(FastButtons).insertAfter('#bv_topbar');
})();
