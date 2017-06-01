var product_list= [{ 
                'name': 'Triblend Android T-Shirt',  // Name or ID is required. 
                'id': '12345', 
                'price': '15.25', 
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

 function ecommerce_checkout_push(){
   window.dataLayer.push({
     'event': 'GA-event',
     'page': {
       'type': 'cart'
     },
     'user': {
       'registered': 'false',
       'status': 'logged-in',
       'id': '555'
     },
     'site': {
       'environment': 'live'
     },
     'ecommerce': {
       'checkout': {
         'actionField': {
           'step': 1,
           'option': 'Buy Now'
         },
         'products': [product_list[0]]
       }
     }
   });
 }

function confirm_purchase() {
  window.dataLayer.push({
    'event': 'GA-event',
    'couponSavings': 250.00,
    'ecommerce': {
      'currencyCode': 'GBP',
      'purchase': {
        'actionField': {
          'id': 'L12345',                         // Transaction ID. Required for purchases and refunds.
          'affiliation': 'UK Store',
          'revenue': '750.00',                     // Total transaction value (incl. tax and shipping)
          'tax': '150.00',
          'shipping': '0.00',
          'coupon': 'Rent-a-Geek'
        },
        'products': [product_list[0]]
      }
    }
  });
}
function product_click(productObj) {
  dataLayer.push({
    'event': 'GA-event',
    'ecommerce': {
      'click': {
        'actionField': {'list': 'Search Results'},      // Optional list property.
        'products': [{
          'name': productObj.name,                      // Name or ID is required.
          'id': productObj.id,
          'price': productObj.price,
          'brand': productObj.brand,
          'category': productObj.cat,
          'variant': productObj.variant,
          'position': productObj.position
         }]
       }
     }
  });
}

function product_detail(productObj) {
  dataLayer.push({
    'event': 'GA-event',
    'ecommerce': {
      'detail': {
        'actionField': {'list': 'Search Results'},      // Optional list property.
        'products': productObj
       }
     }
  });
}

function product_add_to_cart(productObj) {
  dataLayer.push({
    'event': 'GA-event',
    'ecommerce': {
      'currencyCode': 'EUR',
      'add': {                                // 'add' actionFieldObject measures.
          'products': [{                        //  adding a product to a shopping cart.
            'name': productObj.name,                      // Name or ID is required.
            'id': productObj.id,
            'price': productObj.price,
            'brand': productObj.brand,
            'category': productObj.cat,
            'variant': productObj.variant,
            'quantity': productObj.position
         }]
      }
    }
  });
}

function product_remove_to_cart(productObj) {
  dataLayer.push({
    'event': 'GA-event',
    'ecommerce': {
      'remove': {                               // 'remove' actionFieldObject measures.
        'products': [{                          //  removing a product to a shopping cart.
            'name': productObj.name,                      // Name or ID is required.
            'id': productObj.id,
            'price': productObj.price,
            'brand': productObj.brand,
            'category': productObj.cat,
            'variant': productObj.variant,
            'quantity': productObj.position
        }]
      }
    }
  });
}

//Measuring Promotion Impressions
function measuring_promotion_pressions(productObj) {
  dataLayer.push({
    'event': 'GA-event',
    'ecommerce': {
      'promoView': {
        'promotions': [                     // Array of promoFieldObjects.
         {
           'id': productObj[0].id,            // ID or Name is required.
           'name': productObj[0].name,
           'creative': productObj[0].creative,
           'position': productObj[0].position,
         },
         {
           'id': productObj[1].id,
           'name': productObj[1].name,
           'creative': productObj[1].creative,
           'position': productObj[1].position
         }]
      }
    }
  });
}

//Measuring Promotion Clicks
function onPromoClick(productObj) {
  dataLayer.push({
    'event': 'GA-event',
    'ecommerce': {
      'promoClick': {
        'promotions': [
         {
           'id': productObj.id,                         // Name or ID is required.
           'name': productObj.name,
           'creative': productObj.creative,
           'position': productObj.position
         }]
      }
    }
  });
}

//Measuring a Checkout
function onCheckout(productObj) {
  dataLayer.push({
    'event': 'GA-event',
    'ecommerce': {
      'checkout': {
        'actionField': {'step': 1, 'option': 'Visa'},
        'products': [{
          'name': productObj.name,
          'id': productObj.id,
          'price': productObj.price,
          'brand': productObj.brand,
          'category': productObj.category,
          'variant': productObj.variant,
          'quantity': productObj.quantity
       }]
     }
   }
  });
}

//Measuring Checkout Options
function onCheckoutOption(step, checkoutOption) {
  dataLayer.push({
    'event': 'GA-event',
    'ecommerce': {
      'checkout_option': {
        'actionField': {'step': step, 'option': checkoutOption}
      }
    }
  });
}

//Measuring Purchases
function measuring_purchases(productObj) {
  dataLayer.push({
    'event': 'GA-event',
    'ecommerce': {
      'purchase': {
        'actionField': {
          'id': productObj[0].id,                         // Transaction ID. Required for purchases and refunds.
          'affiliation': productObj[0].affiliation,
          'revenue': productObj[0].revenue,                    // Total transaction value (incl. tax and shipping)
          'tax': productObj[0].tax,
          'shipping': productObj[0].shipping,
          'coupon': productObj[0].coupon
        },
        'products': [{                            // List of productFieldObjects.
          'name': productObj[1].name,    // Name or ID is required.
          'id': productObj[1].id, 
          'price': productObj[1].price, 
          'brand': productObj[1].brand,
          'category': productObj[1].category, 
          'variant': productObj[1].variant,
          'quantity': productObj[1].quantity,
          'coupon': productObj[1].coupon                           // Optional fields may be omitted or set to empty string.
         },
         {
          'name': productObj[2].name, 
          'id': productObj[2].id,
          'price': productObj[2].price,
          'brand': productObj[2].brand,
          'category': productObj[2].category,
          'variant': productObj[2].variant,
          'quantity': productObj[2].quantity
         }]
      }
    }
  });
}

//Measuring Refunds
function measuring_refunds(productObj) {
  dataLayer.push({
    'event': 'GA-event',
    'ecommerce': {
      'refund': {
        'actionField': {'id': 'T12345'},        // Transaction ID.
        'products': [
              {'id': productObj[0].id, 'quantity': productObj[0].quantity},   // Product ID and quantity. Required for partial refunds.
              {'id': productObj[1].id,'quantity': productObj[1].quantity}
         ]
       }
    }
  });
}

//Passing Product-scoped Custom Dimensions
function pass_custom_dimensions(productObj) {
  dataLayer.push({
    'event': 'GA-event',
    'ecommerce': {
      'purchase': {
        'products': [{
          'name': productObj.name,
          'id': productObj.id,
          'price': productObj.price,
          'brand': productObj.brand,
          'category': productObj.category,
          'variant': productObj.variant,
          'dimension1': productObj.dimension1
         }]
       }
     }
  });
}

//Passing Product-scoped Custom Metrics
function pass_custom_metrics(productObj){
  dataLayer.push({
    'event': 'GA-event',
    'ecommerce': {
      'purchase': {
        'products': [{
          'name': productObj.name,
          'id': productObj.id,
          'brand': productObj.brand,
          'category': productObj.category,
          'variant': productObj.variant,
          'price': productObj.price,
          'quantity': productObj.quantity,
          'metric3': productObj.metric3  // Custom metric 'Cost'
         }]
       }
     }
  });
}

//Combining Impressions and Actions
function combining_impressions(productObj) {
  dataLayer.push({
    'event': 'GA-event',
    'ecommerce': {
      'impressions': [
       {
         'name': productObj[0].name,        // Name or ID is required.
         'id': productObj[0].id,
         'price': productObj[0].price,
         'brand': productObj[0].brand,
         'category': productObj[0].category,
         'variant': productObj[0].variant,
         'list': productObj[0].list,
         'position': productObj[0].position
       },
       {
         'name': productObj[1].name,
         'id': productObj[1].id,
         'price': productObj[1].price,
         'brand': productObj[1].brand,
         'category': productObj[1].category,
         'variant': productObj[1].variant,
         'list': productObj[1].list,
         'position': productObj[1].position
       }],
      'detail': {
        'actionField': {'list': productObj[2].list},  // 'detail' actions have an optional list property.
        'products': [{
          'name': productObj[2].name,       // Name or ID is required.
          'id': productObj[2].id,
          'price': productObj[2].price,
          'brand': productObj[2].brand,
          'category': productObj[2].category,
          'variant': productObj[2].variant
         }]
       }
    }
  });
}

//Using a Custom JavaScript Macro
function custom_javaScript_macro(productObj) {
  var ecommerceData = {
    'ecommerce': {
      'purchase': {
        'actionField': {'id': 'T12345'},
        'products': [
          {
          'name': productObj.name,
          'id': productObj.id,
          'brand': productObj.brand,
          'category': productObj.category,
          'variant': productObj.variant,
          'price': productObj.price,
          'quantity': productObj.quantity,
          'metric3': productObj.metric3  // Custom metric 'Cost'
         }
        ]
      }
    }
  };
  return ecommerceData;
}
var ga_wse_tracking = [];

ga_wse_tracking.product_view = function() {
  window.dataLayer.push({
     'event': 'GA-event',
     "eventDetail": { 
        'category': 'ecommerce', 
        'action': 'impressions',
        'label': 'undefined'
      }
   });
};

ga_wse_tracking.view_product_details = function() {
  window.dataLayer.push({
   'event': 'GA-event',
   "eventDetail": { 
      'category': 'ecommerce', 
      'action': 'product detail',
      'label': '[hybrid, premium]'
    }
 });
}

ga_wse_tracking.user_dashboard = function () {
    window.dataLayer.push({
     'event': 'GA-event',
     "eventDetail": { 
        'category': 'ecommerce', 
        'action': 'view order',
        'label': 'undefined'
      }
   });
}

ga_wse_tracking.assessment = function() {
  window.dataLayer.push({
   'event': 'GA-event',
   "eventDetail": { 
      'category': 'assessment', 
      'action': 'start',
      'label': 'undefined'
    }
 });
}

ga_wse_tracking.assessment_dialog_close = function() {
    window.dataLayer.push({
     'event': 'GA-event',
     "eventDetail": { 
        'category': 'assessment', 
        'action': 'dialog close',
        'label': 'undefined'
      }
   });
}

ga_wse_tracking.free_trail = function() {
  window.dataLayer.push({
   'event': 'GA-event',
   "eventDetail": { 
      'category': 'course', 
      'action': 'trial',
      'label': 'undefined'
    }
 });
}

ga_wse_tracking.member_login = function() {
    window.dataLayer.push({
     'event': 'GA-event',
     "eventDetail": { 
        'category': 'account', 
        'action': 'login',
        'label': 'member'
      }
   });
}

ga_wse_tracking.non_member_login = function() {
  window.dataLayer.push({
   'event': 'GA-event',
   "eventDetail": { 
      'category': 'account', 
      'action': 'login',
      'label': 'non member'
    }
 });
}

ga_wse_tracking.view_user_account_detail = function() {
    window.dataLayer.push({
     'event': 'GA-event',
     "eventDetail": { 
        'category': 'account', 
        'action': 'profile detail',
        'label': 'undefined'
      }
   });
}

ga_wse_tracking.learning_goal_career_growth = function() {
  window.dataLayer.push({
   'event': 'GA-event',
   "eventDetail": { 
      'category': 'lead', 
      'action': 'profile detail',
      'label': 'career growth'
    }
 });
}

ga_wse_tracking.learning_goal_travel = function() {
  window.dataLayer.push({
   'event': 'GA-event',
   "eventDetail": { 
      'category': 'lead', 
      'action': 'learning goal',
      'label': 'travel'
    }
 });
}

ga_wse_tracking.learning_goal_personal_growth = function() {
    window.dataLayer.push({
     'event': 'GA-event',
     "eventDetail": { 
        'category': 'lead', 
        'action': 'learning goal',
        'label': 'personal growth'
      }
   });
}

ga_wse_tracking.learning_goal_career_exclusive_service = function() {
  window.dataLayer.push({
   'event': 'GA-event',
   "eventDetail": { 
      'category': 'lead', 
      'action': 'learning goal',
      'label': 'exclusive service'
    }
 });
}

ga_wse_tracking.learning_goal_for_my_teen = function() {
  window.dataLayer.push({
   'event': 'GA-event',
   "eventDetail": { 
      'category': 'lead', 
      'action': 'learning goal',
      'label': 'for my teen'
    }
 });
}

ga_wse_tracking.learning_goal_personal_detail_cta = function() {
  window.dataLayer.push({
   'event': 'GA-event',
   "eventDetail": { 
      'category': 'lead', 
      'action': 'learning goal',
      'label': 'cta'
    }
 });
}

ga_wse_tracking.find_nearest_location = function() {
  window.dataLayer.push({
   'event': 'GA-event',
   "eventDetail": { 
      'category': 'search', 
      'action': 'find center',
      'label': 'start'
    }
 });
}