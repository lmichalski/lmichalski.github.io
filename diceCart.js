///////////// DATA /////////////

if (!window.$){
    var s = document.createElement('script');  
    s.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    // s.integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=";
    // s.crossorigin="anonymous";
    document.head.appendChild(s); 
}

function runScript() {
    // Script that does something and depends on jQuery being there.
    if( window.$ ) {
        // do your action that depends on jQuery.


if (!window.diceSections) {

    window.diceSections = [
        {
        "name": "8 Piece Sets",
        "items": [
            {
            "name": "Browns Set",
            "basePrice": 70.00,
            "addOns": [
                {
                "name": "3d6 Add On",
                "price": 15.0
                }
            ],
            "image": "https://www.thesprucepets.com/thmb/meRd41is751DsQQjofaiKV_ZUBg=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg"
            },
            {
            "name": "Oranges Set",
            "basePrice": 80.00,
            "addOns": [
                {
                "name": "3d6 Add On",
                "price": 20.00
                }
            ],
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/440px-Cat03.jpg"
            } 
        ]
        },
        {
        "name": "Single D20s",
        "items": [
            {
            "name": "Browns D20",
            "basePrice": 15.00,
            "image": "https://www.thesprucepets.com/thmb/meRd41is751DsQQjofaiKV_ZUBg=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg"
            },
            {
            "name": "Oranges D20",
            "basePrice": 20.00,
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/440px-Cat03.jpg"
            }
        ]
        },
        {
            "name": "Extras",
            "items": [
                {
                    "name": "Odyssey Dice Enamel Pin",
                    "basePrice": 12.00
                }
            ]
        }
    ]
}


////////// CSS ////////

$("head").append(`
    <style>

    @import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");

html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  font-family: "Ubuntu", sans-serif;
  color: #000;
  /* font-family: "proxima-nova","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-weight: 400;
  font-family: Poppins;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.8em;
  font-size: 1rem; */

  line-height: 1.8;
  -webkit-font-smoothing: antialiased;
}


.accordion {
  cursor: pointer;
  padding: 0.5rem;
  width: 100%;
  /* border: 1px solid #222; */
  text-align: left;
  outline: none;
  transition: all 0.4s ease-out;
  background: none;
  border: none;

  text-transform: none;
  font-size: calc((2 - 1) * 1.2vw + 1rem);

  border-bottom: rgb(204, 204, 205) 1px solid
}

.active,
.accordion:hover {
  /* background-color: #426ef0; */
}

.accordion:after {
  content: "\\02C5";
  color: #000;
  /* font-weight: reg; */
  font-size: calc((2 - 1) * 1.2vw + 1rem);
  float: right;
  margin-left: 0.5rem;
}

.active:after {
  content: "\\02C4";
  font-size: calc((2 - 1) * 1.2vw + 1rem);
  float: right;
  margin-left: 0.5rem;
}

.accordion-content {
  padding: 0 1rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  display: flex;
  flex-direction: column;
  gap: 8px
}



main {
    margin-top: 250px;
    padding-left: 80px;
    padding-right: 80px;
    display: flex;
    flex-direction: row;
    gap: 3em;
  }

  .AddonsList {
    -webkit-transition: max-height 0.2s;  
    -moz-transition: max-height 0.2s;  
    -ms-transition: max-height 0.2s;   
    -o-transition: max-height 0.2s;  
    transition: max-height 0.2s;  
    overflow: hidden;
    max-height: 100%;
    margin: 8px 0;
  }
  
  ul.AddonsList--hidden {
    max-height: 0;
  }

  .DiceRow {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 4px;
  }


  .DiceRow__sub, .DiceRow__count, .DiceRow__add {
    margin: 0;
    background: #fff;
    border: rgb(204, 204, 205) 1px solid;
  }

  .DiceRow__sub, .DiceRow__add {
    border-radius: 2000px;
    width: 30px;
  }

  .DiceRow__sub {
      margin-left: auto;
  }

  .PriceRow {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 4px;
  }
  
  .Preview {
    width: 100%;
    height: 400px;
  }
  
  .Sections {
    width: 0;
    flex-grow: 1;
    margin-right: auto;;
    margin-bottom: auto;
  }

  .Cart {
    width: 100%;
  }

  .Cart table {
      width: 100%;
  }

  .Sidebar {
      width: 400px;
  }
</style>
`);


  /////// TEMPLATES /////////////
  
  const countButtons = `
    <button class="DiceRow__sub" disabled>-</button>
      <input class="DiceRow__count" min="0" max="999" name="quantity" value="0" type="number">
    <button class="DiceRow__add">+</button>
  `

  const makePriceRow = (props) => `
  <div class="PriceRow" name=${props.name}>
    <span class="PriceRow__each" >$${Math.round(props.basePrice, 2)} ea.</span> <span class="PriceRow__total" ></span>
  </div>
  `
  
  const makeAddons = (addons, addonFor) => `
  <ul class="AddonsList AddonsList--hidden" >
    ${addons.map(({name, price}) => `<li addonFor="${addonFor}" ><div class="DiceRow" name="${name}" price="${price}"> ${name} ${countButtons} </div> ${makePriceRow({name, basePrice: price})} </li>`).join('\n')}
  </ul>
  `

  const makeDiceRow = (props) => `
  <section>
    <div class="DiceRow" previewUrl="${props.image}" category="${props.category}" name="${props.name}" price="${props.basePrice}">
      ${props.name} ${countButtons}
    </div>
    ${makePriceRow(props)}
    
    ${props.addOns ? makeAddons(props.addOns, props.name) : ''}
  </section>
  `
  
  const makeSection = (props) => `
    <button class="accordion">${props.name}</button>
    <div class="accordion-content">
      ${props.items.map((items) => makeDiceRow({...items, category: props.name})).join('\n')}
    </div> 
  `
  
  const makeReciept = (items) => {
      if (items.length == 0) return ''
      let lastCategory = null;
      let cartTotal = 0;
    return `
  <table>
  ${items.map(({ category, name, addOns, count, basePrice, unitPrice}) => {
        const maybeHeader = lastCategory == category ? '' : `<tr><th colspan="4"><em>${category}</em><th></tr>`
        lastCategory = category
        cartTotal += count * unitPrice + (addOns || []).reduce((total, {count, basePrice}) => total + count * basePrice, 0)
      return `${maybeHeader}
  <tr>
    <td>${name} ${basePrice != unitPrice ? `($${Math.round(basePrice,2)})` : ''} </td>
    ${ unitPrice > 0 ?
        `<td>${count} x $${Math.round(unitPrice,2)}</td>
        <td>$${Math.round(count * unitPrice,2)}</td>`
        : `<td></td><td></td>`
    }
 </tr>
 ${(addOns || []).map(({ name, count, basePrice }) => `<tr>
 <td>&emsp;${name}</td>
 <td>${count} x $${Math.round(basePrice,2)}</td>
 <td>$${Math.round(count * basePrice,2)}</td>
</tr>`)}
  `}).join('\n')}
  <tr style="height: 1px; background: rgb(151, 147, 145);">
    <td colspan="100%"></td>
 </tr>
  <tr>
        <td><strong>Total</strong></td>
        <td></td>
        <td><strong>$${Math.round(cartTotal,2)}</strong></td>
    </tr>
  </table>
  `}


$("main").html(`
<div class="Sections">
    ${window.diceSections.map(makeSection).join('\n')}
</div>

<div class="Sidebar">
    <img class="Preview" src="https://cdn-icons-png.flaticon.com/512/6545/6545894.png"/>
    <div class="Cart">

    </div>
</div>
<script>
let acc = document.querySelectorAll(".accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
</script>
`)
      
  ////////////// Set Listeners!         ////////////////      
  function getDiscoutPerSet(numberOfSets) {
    if (numberOfSets == 1){
      return 0;
    } else if (numberOfSets == 2){
      return 1;
    } else if (numberOfSets == 3){
      return 2;
    } else if (numberOfSets < 8){
      return 3;
    } else if (numberOfSets < 12){
      return 5;
    } else if (numberOfSets < 15){
      return 8;
    } else if (numberOfSets >= 15){
      return 10;
    }
  }

  function getAddOns(numberOfSets) {
    const addonNames = []
    
    if ((numberOfSets >= 2) && (numberOfSets < 4)){
      addonNames.push('Celestial, D20')
    }

    if (numberOfSets >= 3){
      addonNames.push('Odyssey Dice Enamel Pin')
    }

    if (numberOfSets >= 4){
      addonNames.push("Celestial, Full Set")
    }

    if ((numberOfSets >= 8) && (numberOfSets < 15)){
      addonNames.push("Strings of Fate, D20")
    }

    if (numberOfSets >= 15){
      addonNames.push("Strings of Fate, Full Set")
    }

    return addonNames.map((name) => ({name, category: "Free Extras", basePrice: 0, unitPrice: 0, count: 1}))
  }
  
  const updateCart = () => {
    let cartList = []

    $(".DiceRow").each((index, dr) => {
      const category = $(dr).attr("category") 
      const addonFor = $(dr).parent().attr("addonFor")
      const name = $(dr).attr("name")
      const count = Number($(dr).children(".DiceRow__count")[0].value)
      const basePrice = $(dr).attr("price")


      if (category && count > 0) {
        cartList.push({ category, name, addOns: [], count, basePrice})
      } else if (addonFor && count > 0) {
        const listItem = cartList.find((item) => item.name == addonFor)
        listItem.addOns.push({name, count, basePrice})
      }
      // debugger
      // console.log(dr)
    })

    const setCount = cartList.filter(({category}) => category == "8 Piece Sets").reduce((sum, {count}) => (count + sum), 0)
    const setDiscount = getDiscoutPerSet(setCount)


    const discountedCart = cartList.forEach((item) => {
      if (item.category == "8 Piece Sets") {
        item.unitPrice = item.basePrice - setDiscount
      } else {
        item.unitPrice = item.basePrice
      }
    })

    cartList = [...cartList, ...getAddOns(setCount)]


    const setCountDiv = $(".Cart")
    setCountDiv.html(makeReciept(cartList))
  }

  updateCart()
  
  $(".DiceRow__add").click((e) => {
    const countSpan = $(e.currentTarget).siblings(".DiceRow__count")
    const newCount = Number(countSpan.val()) + 1
    countSpan.val(newCount)
    
    const subButton = $(e.currentTarget).siblings(".DiceRow__sub")
    subButton.prop('disabled', false);

    $(e.currentTarget).parent().siblings(".AddonsList").removeClass("AddonsList--hidden")
    
    if (e.currentTarget.parentElement.parentElement.hasAttribute("addonfor")) {
        const parentsCount = Number($(e.currentTarget).closest('section').children(".DiceRow").children(".DiceRow__count").val())
        if (newCount >= parentsCount) {
            $(e.currentTarget).prop('disabled', true);
        }

    } else {
        $(e.currentTarget).parent().siblings(".AddonsList").find(".DiceRow__add").prop('disabled', false);
    }

    subButton.parents(".accordion-content").css("max-height", subButton.parents(".accordion-content")[0].scrollHeight + "px");
    updateCart()

  })
  
  $(".DiceRow__sub").click((e) => {
    const countSpan = $(e.currentTarget).siblings(".DiceRow__count")
    const addButton = $(e.currentTarget).siblings(".DiceRow__add")
    const newCount = Number(countSpan.val()) - 1
    countSpan.val(newCount)
    const subButton = $(e.currentTarget)

    addButton.prop('disabled', false);

    if (newCount == 0){
        subButton.prop('disabled', true);
    }

    if (e.currentTarget.parentElement.parentElement.hasAttribute("addonfor")) {
        
    } else {
        if (newCount == 0){
            const addonList = $(e.currentTarget).parent().siblings(".AddonsList")
            addonList.addClass("AddonsList--hidden")
            addonList.find(".DiceRow__count").val(0)
    
            subButton.parents(".accordion-content").css("max-height", subButton.parents(".accordion-content")[0].scrollHeight + "px");
        }

        $(e.currentTarget).parent().siblings(".AddonsList").find(".DiceRow").each((index, addon) => {
            const countEl = $(addon).children(".DiceRow__count")

            if (countEl.val() > newCount) {
                countEl.val(newCount);
            }
            
            if (countEl.val() == newCount){
                $(addon).children(".DiceRow__add").prop('disabled', true);
            }
        })
    }
    
    updateCart()
  })
  
  $("section").hover((e) => {
    const rowDiv = $(e.currentTarget)
    const newUrl = $(rowDiv).children(".DiceRow").attr("previewUrl")
    if (newUrl){
        $("img.Preview").attr("src", newUrl)
    }
  }, null)

} else {
    // wait 50 milliseconds and try again.
    window.setTimeout( runScript, 50 );
}
}
runScript();