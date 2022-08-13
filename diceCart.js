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
          "name": "Blazing Inferno",
          "basePrice": 70.00,
          "addOns": [
              {
              "name": "3d6 Add On",
              "price": 15.0,
              "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1652837338430-4XWLEZBLT5Z594P2GEF3/IMG_3274.jpg?format=500w"
              }
          ],
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1657938700834-73O88V6KMNHFU6C1P05L/Blazing%252Binferno%252Bheart.jpg?format=500w"
          },
  
          {
          "name": "Bleeding Heart",
          "basePrice": 70.00,
          "addOns": [
              {
              "name": "3d6 Add On",
              "price": 15.00,
              "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1652838092067-5GQOZR8CFN1JDBFUPCYC/IMG_3268.jpg?format=750w"
              } 
          ],
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1657938795154-MVDF3W4ROX20HBB8GZA8/bleeding%2Bheart%2Bupdated.jpg?format=750w"
          },
  
          {
          "name": "Blood in the Water",
          "basePrice": 70.00,
          "addOns": [
              {
              "name": "3d6 Add On",
              "price": 15.00,
              "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1655173554712-O4XOF0X477DYE12XVTEA/d6_blood_water.jpg?format=500w"
              } 
          ],
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658170266731-EVG12648G7O084GWUZXM/bLEEDING+HEART+square+square.jpg?format=500w"
          },
          
          {
          "name": "Corrupted Garden",
          "basePrice": 70.00,
          "addOns": [
              {
              "name": "3d6 Add On",
              "price": 15.00,
              "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1652826112949-32W62DC2WM1R05S9OCSP/IMG_3272.jpg?format=500w"
              } 
          ],
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658205982204-18CN1PKRVA5FG97IWDCI/D20+Square+heart.jpg?format=500w"
          },
  
          {
          "name": "Dawn",
          "basePrice": 80.00,
          "addOns": [
              {
              "name": "3d6 Add On",
              "price": 20.00,
              "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1656036026391-2Q85SWUHM6J4T5D9A9QN/IMG_3273.jpg?format=750w"
              } 
          ],
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206070415-F649SCDMTCVHFORM6PJE/dawn+heart.jpg?format=1500w"
          },
  
          {
          "name": "Dusk",
          "basePrice": 80.00,
          "addOns": [
              {
              "name": "3d6 Add On",
              "price": 20.00,
              "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1654049429358-944BZI0QB7UB8NQZK8V2/D6_Warlock+Dice.jpg?format=500w"
              } 
          ],
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206122670-46GDQPHR053H5R8EME88/DUSK+heart.jpg?format=750w"
          },
  
          {
          "name": "Dragon's Embers",
          "basePrice": 70.00,
          "addOns": [
              {
              "name": "3d6 Add On",
              "price": 15.00,
              "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1652836947334-79VCF82SX0EMY134XYCA/IMG_3266.jpg?format=500w"
              } 
          ],
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206174671-J9Z04UWOB8MEDCJP40SO/DE+Heart.jpg?format=750w"
          },
  
          {
          "name": "Fae Magic",
          "basePrice": 70.00,
          "addOns": [
              {
              "name": "3d6 Add On",
              "price": 15.00,
              "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1656035910304-TN7509XBC092WOG1GJ75/d6_faemagic.jpg?format=500w"
              } 
          ],
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206243729-YNRSUX31ISAQZ598FLGW/FM+Heart.jpg?format=750w"
          },
  
          {
          "name": "Jade Emperor",
          "basePrice": 70.00,
          "addOns": [
              {
              "name": "3d6 Add On",
              "price": 15.00,
              "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1652823921556-IVPW4ECCEWB2PI2BHOI0/IMG_3269.jpg?format=500w"
              } 
          ],
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206292897-FW9RWUI03J6SP1L0S9FA/JE+Heart.jpg?format=750w"
          },
  
          {
          "name": "Land & Sea",
          "basePrice": 70.00,
          "addOns": [
              {
              "name": "3d6 Add On",
              "price": 15.00,
              "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1652840552767-MZADHRVGEMT5QXACT5W5/IMG_3263.jpg?format=500w"
              } 
          ],
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206400227-N2OMBQWPOYICTAPKTG93/L%26S+Heart.jpg?format=750w"
          },
  
          {
          "name": "Last Breath",
          "basePrice": 70.00,
          "addOns": [
              {
              "name": "3d6 Add On",
              "price": 15.00,
              "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1652825575826-VPA7HF4KRPYUEDO7F7GG/IMG_3271.jpg?format=500w"
              } 
          ],
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206435431-TB4XB7A3ROASTL91NQSR/LB+Heart.jpg?format=750w"
          },
  
          {
          "name": "Moonlit Stream",
          "basePrice": 70.00,
          "addOns": [
              {
              "name": "3d6 Add On",
              "price": 15.00,
              "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206601075-IIJ9EQZW18I8LDVOX8RD/moonlit+d20+square.jpg?format=500w"
              } 
          ],
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1652838671927-MI5Q39GC60OQV25KNP0L/IMG_3270.jpg?format=500w"
          },
  
          {
          "name": "Odyssey's End",
          "basePrice": 70.00,
          "addOns": [
              {
              "name": "3d6 Add On",
              "price": 15.00,
              "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1656702841640-J69OTRZ280LGDKTCE0RW/d6.jpg?format=500w"
              } 
          ],
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206655952-P2PU1AQPQU3FR2OR9IYQ/odysseys+end+heart.jpg?format=750w"
          },
  
          {
          "name": "Tempest",
          "basePrice": 70.00,
          "addOns": [
              {
              "name": "3d6 Add On",
              "price": 15.00,
              "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1654746908783-J8DGGH0R0AC0MI1S0JUL/d6+main.jpg?format=500w"
              } 
          ],
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206702095-3W97Q5DN9O0B7474QLRS/tempest+heart.jpg?format=750w"
          },
  
          {
          "name": "Withered Rose",
          "basePrice": 80.00,
          "addOns": [
              {
              "name": "3d6 Add On",
              "price": 20.00,
              "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206739206-7NYMIEDJWCWPPRF3PR09/wr+d20+square.jpg?format=500w"
              } 
          ],
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1652839067579-1N82S8XCOGLD494XA08T/IMG_3267.jpg?format=500w"
          }
      ]
      },
      {
      "name": "Single D20s",
      "items": [
          {
          "name": "Blazing Inferno",
          "basePrice": 15.00,
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1657938527036-LW1USG6RP9PQB436AMWH/Inferno+D20+KS.jpg?format=500w"
          },
          {
          "name": "Bleeding Heart",
          "basePrice": 15.00,
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1657938755696-JPFUTJAMEZW94CJJP16Y/d20+bh.jpg?format=750w"
          },
          {
          "name": "Blood in the Water",
          "basePrice": 15.00,
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658170259781-TFPS4BL3NVO7S421PX97/d20+square.jpg?format=500w"
          },
          {
          "name": "Corrupted Garden",
          "basePrice": 15.00,
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658205972666-C866YHHPSJ9978YFPXFT/d20+cg.jpg?format=500w"
          },
          {
          "name": "Dawn",
          "basePrice": 20.00,
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206059498-X0WPNQ488XPYW3GMG03D/d20+square.jpg?format=750w"
          },
          {
          "name": "Dusk",
          "basePrice": 20.00,
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206119431-9ERRVN7IVU9JEUNSZROZ/dusk+d20+square.jpg?format=500w"
          },
          {
          "name": "Dragon's Embers",
          "basePrice": 15.00,
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206171536-HD9TLNBHG87N80SQX030/D20+Final.jpg?format=500w"
          },
          {
          "name": "Fae Magic",
          "basePrice": 15.00,
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206233025-GYRS4JIXCOBH08IX8VR0/fm+d20+square.jpg?format=500w"
          },
          {
          "name": "Jade Emperor",
          "basePrice": 15.00,
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206284912-74UYC841UQL00US1YB8D/D20+Square.jpg?format=500w"
          },
          {
          "name": "Land & Sea",
          "basePrice": 15.00,
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206343035-P8IAT8EY1M42THT0SPK8/d20+l%26s+square.jpg?format=500w"
          },
          {
          "name": "Last Breath",
          "basePrice": 15.00,
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206430906-938EEWE7AA0PJD3W9278/LB+D20+Square.jpg?format=500w"
          },
          {
          "name": "Moonlit Stream",
          "basePrice": 15.00,
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206601075-IIJ9EQZW18I8LDVOX8RD/moonlit+d20+square.jpg?format=500w"
          },
          {
          "name": "Odyssey's End",
          "basePrice": 15.00,
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206652218-SL76KGD9AZU2S00ANJW9/odysseys+end+d20.jpg?format=500w"
          },
          {
          "name": "Tempest",
          "basePrice": 15.00,
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206697790-UDSYF39YC3TF8PKW4T9L/tempest+square+d20.jpg?format=500w"
          },
          {
          "name": "Withered Rose",
          "basePrice": 20.00,
          "image": "https://images.squarespace-cdn.com/content/v1/61dfba241aebe967247a0635/1658206739206-7NYMIEDJWCWPPRF3PR09/wr+d20+square.jpg?format=500w"
          }
      ]
      },
      {
      "name": "Extras",
      "items": [
          {
              "name": "Odyssey Dice Enamel Pin",
              "basePrice": 12.00,
              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Safety_Pin.jpg/1200px-Safety_Pin.jpg"
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
  border: none;

  text-transform: none;
  height: calc((2 - 1) * 1.8vw + 1rem);
  font-size: calc((2 - 1) * 0.6vw + 1rem);

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
  margin-top: 4px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  display: flex;
  flex-direction: column;
  gap: 8px
}



#DiceCart {
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
    width: 350px;
    height: 350px;
  }
  
  .Sections {
    width: 0;
    flex-grow: 1;
    margin-right: auto;;
    margin-bottom: auto;
  }

  .Cart {
    width: 350px;
  }

  .Cart table {
      width: 100%;
  }

  .Sidebar {
      width: 350px;
      height: fit-content;
      position: -webkit-sticky; /* Safari */  
      position: sticky;
      top: 0px;
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
  
  const makeAddons = (addons, addonFor, image) => `
  <ul class="AddonsList AddonsList--hidden" >
    ${addons.map(({name, price}) => `<li addonFor="${addonFor}" ><div class="DiceRow" previewUrl="${image}" name="${name}" price="${price}"> ${name} ${countButtons} </div> ${makePriceRow({name, basePrice: price})} </li>`).join('\n')}
  </ul>
  `

  const makeDiceRow = (props) => `
  <section>
    <div class="DiceRow" previewUrl="${props.image}" category="${props.category}" name="${props.name}" price="${props.basePrice}">
      ${props.name} ${countButtons}
    </div>
    ${makePriceRow(props)}
    
    ${props.addOns ? makeAddons(props.addOns, props.name, props.addOnImage) : ''}
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


$("#DiceCart").html(`
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
    
    if (numberOfSets >= 4){
      addonNames.push("Celestial, Full Set")
    }

    if (numberOfSets >= 3){
      addonNames.push('Odyssey Dice Enamel Pin')
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