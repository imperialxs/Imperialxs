// ==UserScript==
// @name        Fast_Access
// @version      1.0
// @description  Move Inventory
// @author      Lorinthar & Imperial
// @match        http://*.drakor.com*
// ==/UserScript==
(function(){
var FastButtons = '<div id="repair-all-confirm-strategy" class="bv_button linkRepair">Repair Gear</div>'+
'<div id="load-tradeskills-Construction-patterns" class="navButton tradePatterns">Construction</div>'+
'<div id="load-tradeskills-Inscription-patterns" class="navButton tradePatterns">Inscription</div>'+
'<div id="load-tradeskills-Cooking-patterns" class="navButton tradePatterns">Cooking</div>'+
'<div id="load-tradeskills-Jewelcrafting-patterns" class="navButton tradePatterns">Jewelcrafting</div>'+
'<div id="load-tradeskills-Alchemy-patterns" class="navButton tradePatterns">Alchemy</div>'+
'<div id="load-tradeskills-Smithing-patterns" class="navButton tradePatterns">Smithing</div>'+
'<div id="load-tradeskills-Crafting-patterns" class="navButton tradePatterns">Crafting</div>';
$(FastButtons).insertAfter('#bv_topbar');
})();