var product_list= [{ 
                'name': 'Test Product',  // Name or ID is required. 
                'id': '12345', 
                'price': '50', 
                'brand': 'Google', 
                'category': 'Apparel', 
                'variant': 'Gray',
                'list': 'Search Results', 
                'position': 1
            }, 
            { 
              'name': 'Donut Friday Scented T-Shirt', 
              'id': '67890', 
              'price': '33.75', 
              'brand': 'Google', 
              'category': 'Apparel',
                'variant': 'Black', 
                'list': 'Search Results',
                'position': 2
                  },
                  {                            // List of productFieldObjects.
              'name': 'product name 1',     // Name or ID is required.
              'id': 'pr-001',
              'price': '500.00',
              'brand': 'US Brand',
              'category': 'category1',
              'variant': 'variant1',
              'quantity': 1,
              'coupon': '',
              'position': 3                      
             }];

var chars = ['0','1','2','3','4','5','6','7','8','9'];

function generateMixed(n) {
     var res = "";
     for(var i = 0; i < n ; i ++) {
         var id = Math.ceil(Math.random()*9);
         res += chars[id];
     }
     return res;
}

var User_ID_generator = generateMixed(10)
var Ecommerce_ID_generator = generateMixed(8)
var Product_ID_generator = generateMixed(6)
var Promo_ID = generateMixed(7)
var Promo_Name = "zzhou" + Promo_ID

function ecommerce_product_detail() {
  dataLayer.push({
    'event': 'GA-event',
    'ecommerce': {
      'detail': {
      'products': [{                        //  adding a product to a shopping cart.
             'name': 'Test Product',  // Name or ID is required. 
             'id': '11111', 
             'price': '66', 
             'quantity': 16,
             'brand': 'Google', 
             'category': 'Apparel', 
            'variant': 'Gray',
            'list': 'Search Results', 
       }]
       }
     }
  });
}

 function ecommerce_add_to_cart(){
   window.dataLayer.push({
  'event': 'GA-event',
  'ecommerce': {
    'add': {                                // 'add' actionFieldObject measures.
      'products': [{                        //  adding a product to a shopping cart.
             'name': 'Test Product',  // Name or ID is required. 
             'id': '11111', 
             'price': '66', 
             'quantity': 16,
             'brand': 'Google', 
             'category': 'Apparel', 
            'variant': 'Gray',
            'list': 'Search Results', 
       }]
    }
  }
});
 }

function promotion_click() {
window.dataLayer.push({
  'event': 'GA-event',
  'ecommerce': {
    'promoClick': {
      'promotions': [                     // Array of promoFieldObjects.
       {
         'id': Promo_ID,            // ID or Name is required.
         'name': Promo_Name,
         'creative': 'banner1',
         'position': 'slot1'
       }],
    }
  }
})
}

function promotion_view() {
window.dataLayer.push({
  'event': 'GA-event',
  'ecommerce': {
    'promoView': {
      'promotions': [                     // Array of promoFieldObjects.
       {
         'id': Promo_ID,            // ID or Name is required.
         'name': Promo_Name,
         'creative': 'banner1',
         'position': 'slot1'
       }],
    }
  }
})
}

 function ecommerce_checkout_push1(){
   window.dataLayer.push({
     'event': 'GA-event',

     'site': {
       'environment': 'live'
     },
     'ecommerce': {
       'checkout': {
         'actionField': {
           'step': 1,'option': 'Nanjing'},
               'products': [{                            // List of productFieldObjects.
                'name': 'Test Product',  // Name or ID is required. 
                'id': '11111', 
                'price': '66', 
                'quantity': 16,
                'brand': 'Google', 
                'category': 'Apparel', 
                'variant': 'Gray',
                'list': 'Search Results', 
       }]
      }
     }
   });
 }


 function ecommerce_checkout_push2(){
   window.dataLayer.push({
     'event': 'GA-test',
     'site': {
       'environment': 'live'
     },
     'ecommerce': {
       'checkout': {
         'actionField': {
           'step': 2,
           'option': 'Alipay'},
               'products': [{                            // List of productFieldObjects.
                'name': 'Test Product',  // Name or ID is required. 
                'id': '11111', 
                'price': '66', 
                'quantity': 16,
                'brand': 'Google', 
                'category': 'Apparel', 
                'variant': 'Gray',
                'list': 'Search Results', 
       }]
      }
     }
   });
 }

 function ecommerce_checkout_push3(){
   window.dataLayer.push({
     'event': 'GA-event',
     'site': {
       'environment': 'live'
     },
     'ecommerce': {
       'checkout': {
         'actionField': {
           'step': 3,
           'option': 'Full Pay'},
               'products': [{                            // List of productFieldObjects.
                'name': 'Test Product',  // Name or ID is required. 
                'id': '11111', 
                'price': '66', 
                'quantity': 16,
                'brand': 'Google', 
                'category': 'Apparel', 
                'variant': 'Gray',
                'list': 'Search Results', 
       }]
      }
     }
   });
 }

 



function confirm_purchase() {
  window.dataLayer.push({
    'event': 'GA-event',
    'ecommerce': {

      'purchase': {
        'actionField': {
            'id': Ecommerce_ID_generator,   
        },
               'products': [{                            
                'name': 'Test Product',  // Name or ID is required. 
                'id': '11111', 
                'price': '66', 
                'quantity': 16,
                    // Optional fields may be omitted or set to empty string.
       }]
      },
 'promoView': {
      'promotions': [                     // Array of promoFieldObjects.
       {
         'id': Promo_ID,            // ID or Name is required.
         'name': Promo_Name,
         'creative': 'banner1',
         'position': 'slot1'
       }],
    }

    }
    
  });
}



