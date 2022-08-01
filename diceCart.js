///////////// DATA /////////////

const sections = [
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
          "name": "Browns 3d6 Add On",
          "basePrice": 15.00,
          "image": "https://www.thesprucepets.com/thmb/meRd41is751DsQQjofaiKV_ZUBg=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg"
        },
        {
          "name": "Oranges 3d6 Add On",
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
    ${addons.map(({name, price}) => `<li addonFor="${addonFor}" ><div class="DiceRow"> ${name} ${countButtons} </div> ${makePriceRow({name, basePrice: price})} </li>`).join('\n')}
  </ul>
  `

  const makeDiceRow = (props) => `
  <section>
    <div class="DiceRow" previewUrl="${props.image}" category="${props.category}">
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
  
  $(".Sections").html(sections.map(makeSection).join('\n'))
      
  //////////////////////////////      
  function getDiscout(numberOfSets) {
    if (numberOfSets == 1){
      return numberOfSets * 0;
    } else if (numberOfSets == 2){
      return numberOfSets * 1;
    } else if (numberOfSets == 3){
      return numberOfSets * 2;
    } else if (numberOfSets == 4){
      return numberOfSets * 3;
    } else if (numberOfSets < 8){
      return numberOfSets * 3;
    } else if (numberOfSets < 12){
      return numberOfSets * 5;
    } else if (numberOfSets < 15){
      return numberOfSets * 8;
    } else if (numberOfSets >= 15){
      return numberOfSets * 10;
    }
  }

  function getAddOns(numberOfSets) {
    const addons = []
    
    if ((numberOfSets >= 2) && (numberOfSets < 4)){
      addons.push('Celestial, D20')
    }

    if (numberOfSets >= 3){
      addons.push('Odyssey Dice Enamel Pin')
    }

    if (numberOfSets >= 4){
      addons.push("Celestial, Full Set")
    }

    if ((numberOfSets >= 8) && (numberOfSets < 15)){
      addons.push("Strings of Fate, D20")
    }

    if (numberOfSets >= 15){
      addons.push("Strings of Fate, Full Set")
    }

    return addons
  }



  // const updateCart = () => {
  //   const setCount = 
  //     $(".DiceRow")
  //       .toArray()
  //       .reduce((counts, row) => {
  //         const section = $(row).attr('category')
  //         const countSpan = $(row).children(".DiceRow__count")[0]
  //         const count = (countSpan.innerHTML ? Number(countSpan.innerHTML) : 0)
  //         //debugger
  //         counts[section] = (counts[section] || 0) + count
  //         return counts
  //       }, {})
  //   const setCountDiv = $(".Cart")
  //   setCountDiv.html(JSON.stringify(setCount))
  // }
  
  const updateCart = () => {}

  updateCart()
  
  $(".DiceRow__add").click((e) => {
    const countSpan = $(e.currentTarget).siblings(".DiceRow__count")
    const currentCount = Number(countSpan.val())
    countSpan.val(currentCount + 1)
    
    const subButton = $(e.currentTarget).siblings(".DiceRow__sub")
    subButton.prop('disabled', false);

    $(e.currentTarget).parent().siblings(".AddonsList").removeClass("AddonsList--hidden")
    
    subButton.parents(".accordion-content").css("max-height", subButton.parents(".accordion-content")[0].scrollHeight + "px");
    updateCart()

  })
  
  $(".DiceRow__sub").click((e) => {
    const countSpan = $(e.currentTarget).siblings(".DiceRow__count")
    const currentCount = Number(countSpan.val())
    countSpan.val(currentCount - 1)
    
    if (currentCount == 1){
        const subButton = $(e.currentTarget)
        subButton.prop('disabled', true);
        const addonList = $(e.currentTarget).parent().siblings(".AddonsList")
        addonList.addClass("AddonsList--hidden")
        addonList.find(".DiceRow__count").val(0)

        subButton.parents(".accordion-content").css("max-height", subButton.parents(".accordion-content")[0].scrollHeight + "px");
    }
    
    updateCart()
  })
  
  $("section").hover((e) => {
    const rowDiv = $(e.currentTarget)
    $("img.Preview")
      .attr("src", $(rowDiv).children(".DiceRow").attr("previewUrl"))
  }, null)