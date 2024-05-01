


closeAllMenu();


function ResourcesMenu() {
  closeAllMenu();
  document.getElementById('resources').style.display = 'grid';
}
function InventoryMenu() {
  closeAllMenu();
  document.getElementById('inventory').style.display = 'grid';
}
function ShopMenu() {
  closeAllMenu();
  document.getElementById('shop').style.display = 'grid';
}
function WorkbenchMenu() {
  closeAllMenu();
  document.getElementById('workbench').style.display = 'grid';
}

function closeAllMenu (){
  document.getElementById('inventory').style.display = 'none';
  document.getElementById('workbench').style.display = 'none';
  document.getElementById('shop').style.display = 'none';
  document.getElementById('resources').style.display = 'none';
}




function print(a) {
    console.log(a);
};

