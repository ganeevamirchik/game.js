var inventory = document.querySelector('.inventory');
var woodClick = document.querySelector('#wood');
var stoneClick = document.querySelector('#stone');
var copperClick = document.querySelector('#copper');
var woodCounter = document.querySelector('.block-1');
var plankCounter = document.querySelector('.block-2');
var stickCounter = document.querySelector('.block-3');

// var stoneCounter = document.querySelector('');
// var copperCounter = document.querySelector('');
var blockInventory = document.getElementById("inventory");
var blockShop = document.getElementById("shop");
var blockWorkbench = document.getElementById("workbench");
var plank = document.querySelector('.plank');
var woodCount = 48;
var plankCount = 0;
var stickCount = 0;

var stoneCount = 0;
var copperCount = 0;
var woodClickCounter = 0;
var stoneClickCounter = 0;
var copperClickCounter = 0;
var discoveryPlank = false;
Update();

woodClick.addEventListener('click', () => {
    print("wood_clicked");
    woodCounter.innerHTML = `${woodCount} wood`;
    woodClickCounter++
    print(woodClickCounter)
    woodClickedCounter();
  });

stoneClick.addEventListener('click', () => {
    print("stone_clicked");
    stoneCounter.innerHTML = `${stoneCount} stone`;
    stoneClickCounter++
    print(stoneClickCounter)
    stoneClickedCounter();
  });  

copperClick.addEventListener('click', () => {
    print("copper_clicked");
    copperCounter.innerHTML = `${copperCount} copper`;
    copperClickCounter++
    print(copperClickCounter)
    copperClickedCounter();
  });


  function toggleShop() {
    if(blockShop.hidden){
        blockShop.removeAttribute("hidden")
    }
    
     else {
        blockShop.setAttribute("hidden", true);   
    }
    
  }

  function toggleInventory() {
    if(blockInventory.hidden){
        blockInventory.removeAttribute("hidden")
    } else {
        blockInventory.setAttribute("hidden", true);   
    }
    
  }
  function toggleWorkbench() {
    if(blockWorkbench.hidden){
        blockWorkbench.removeAttribute("hidden")
    } else {
        blockWorkbench.setAttribute("hidden", true);   
    }
    
  }



  function woodClickedCounter (){
    if(woodClickCounter === 8) {
      woodCount++;
      woodClickCounter = 0;
      woodCounter.innerHTML = `${woodCount} wood`;
    }
  }

function plankBuy(){
  if (woodCount >= 4){
    discoveryPlank = true;
    woodCount -= 4;
    print('ryt');
    plank.innerHTML = ` `;
    plank.remove()
    inventory.innerHTML =`<span class="block-1 blockInventory"  id="blockInventory"></span>
    <span class="block-2 blockInventory"  id="blockInventory"></span>`
    woodCounter = document.querySelector('.block-1');
    stoneCounter = document.querySelector('.block-2');
    function Update() {
      woodCounter.innerHTML = `${woodCount} wood`;
      plankCounter.innerHTML = `${plankCount} plank`;
    }
    Update()
  }
}

  function stoneClickedCounter (){
    if(stoneClickCounter === 8) {
      stoneCount += 3;
      stoneClickCounter = 0;
      stoneCounter.innerHTML = `${stoneCount} stone`;
    }
  }

  function copperClickedCounter(){
    if(copperClickCounter === 8) {
      copperCount += Math.floor(Math.random() * 4) + 1;
      copperClickCounter = 0;
      copperCounter.innerHTML = `${copperCount} copper`;
    }
  }

function Update(){
  woodCounter.innerHTML = `${woodCount} wood`;
}


















function print(a) {
    console.log(a);
};

