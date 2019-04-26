// general strings
export const CANT_SCAN_STR = 'Can’t scan?';
export const UPC_INPUT_STR = 'Type the UPC number';
export const YES_STR = 'Yes';
export const NO_STR = 'No';
export const CANCEL_ORDER_STR = 'Are you sure you want to cancel this order?';
export const PAID_ONLINE_STR = 'Paid Online';
export const ACTIVITY_LOG_STR = 'Activity log';
export const CONTAINER_TYPE_STR = 'container';
export const LOCATION_TYPE_STR = 'location';
export const DONE_STR = 'Done';
export const AND_STR = 'and';


// refine strings
export const REFINE_ALL_STATUS_STR = 'Pick, Stage + 2 more';
export const REFINE_DISPENSE_STATUS_STR = 'Dispense, Expired';

// date format
export const YYYY_MM_DD_STR = 'YYYY-MM-DD';

// empty results
export const NO_RESULTS_STR = 'No results';
export const NO_ORDERS_STR = 'No orders';
export const CLEAR_FILTER_STR = 'Clear filters';
export const REFRESH_STR = 'Refresh';
export const DIFFERENT_SEARCH_WORDS_STR = 'Please try different search words';

// item summary
export const START_PICK_STR = 'Start picking';
export const READY_TO_PICK_STR = 'Ready to pick';
export const ADDED_STR = 'Added';
export const NIL_PICKED_STR = 'Nil picked';
export const PICKED_STR = 'Picked';

// picking
export const DID_NOT_FIND_ITEM_STR = 'Did not find item in this order';
export const INCORRECT_UPC_STR = 'The UPC entered is not part of this order';
export const END_PICK_WALK_STR = 'Are you sure you\'d like to end the pick walk? There are items remaining.';
export const PICK_ITEM_STR = 'Pick item';

// nil picking
export const CANT_PICK_STR = 'Can\'t pick item?';
export const CANT_PICK_REMAINING_STR = 'Can\'t pick remaining?';
export const NIL_PICK_ITEM_STR = 'Are you sure you want to nil pick the item?';
export const NIL_PICK_REMAINING_STR = 'Are you sure you want to nil pick the remaining quantity?';
export const TYPE_UPC_INSTEAD_STR = 'Type UPC instead';
export const NIL_PICK_CANCEL_ORDER_STR = 'Nil picking all items will cause this order to be cancelled. Do you want to continue?';
export const CANCEL_ORDER_BUTTON_STR = 'Cancel order';
export const GO_BACK_STR = 'Go back';

// containers types
export const AMBIENT_STR = 'Ambient';
export const CHILLED_STR = 'Chilled';
export const FROZEN_STR = 'Frozen';

// container flow
export const ADD_CONTAINER_STR = 'Please add a container';
export const CONTAINER_TITLE_STR = 'Add container label';
export const CONTAINER_PLACEHOLDER_STR = 'Container number';
export const STAGE_CONTAINER_TITLE_STR = 'Stage container';
export const DISPENSE_CONTAINER_TITLE_STR = 'Dispense container';
export const SCAN_NOTIFY = 'Scan the ';
export const TYPE_NOTIFY = 'Type the ';
export const NUMBER_STR = ' number';
export const LOCATION_PLACEHOLDER_STR = 'Location number';
export const CONTAINER_NOT_FOUND_STR = 'Container not found';
export const TYPE_UPC_NUMBER = 'Type UPC instead';

export const TYPE_UPC_TITTLE = 'Type UPC number';
export const UPC_PROMPT = 'UPC';
export const INPUT_UPC_NUMBER = 'UPC number';
export const ADD_ITEM_NOT_CORRECT_NUMBER = 'Nothing added';

// scan tool tips
export const SCAN_TIP_STR = {
  DEFAULT: 'Start by scanning',
  CONTAINER: 'Start by scanning a container',
  ITEM: 'Start by scanning an item'
};

// staging
export const START_STAGE_STR = 'Start staging';
export const END_STAGING_STR = 'Are you sure you\'d like to stop staging?';

// dispense
export const START_DISPENSE_STR = 'Start dispensing';
export const DISPENSE_COMPLETE_NEGATIVE_FEEDBACK_STR = 'You did not dispense the Order in 30 seconds!';
export const DISPENSE_COMPLETE_POSITIVE_FEEDBACK_STR = 'Good job! You finish dispensing the order on time';
export const GO_BACK_ORDER_LIST_STR = 'Go back to OrderList';
export const CONTINUE_DISPENSING_STR = 'Continue Dispensing';
export const COMPLETE_DISPENSING_ORDER_STR = 'Complete Dispensing Order';
export const DISPENSE_SCREEN_HINT_STR = ' This is the Dispense Screen. When you first see this text, the counter has started counting, the threshold time for dispensing is 30 seconds.';
export const QUITE_DISPENSING_CONFIRM_STR = 'You have not finished dispensing this order, are you sure you want to quit the job ?';
export const QUIT_DISPENSING_STR = 'Quit Dispensing';
export const END_DISPENSE_STR = 'Are you sure you\'d like to stop dispensing?';

// review orders
export const MEMBERS_COMMENTS = 'Member\'s comments';
export const COMMENTS_CONTENT = 'Please add some organic baby greens, if you have them';

// orders types
export const ALL_STR = 'All';
export const CANCELLED_STR = 'Cancelled';
export const DISPENSE_STR = 'Dispense';
export const DISPENSED_STR = 'Dispensed';
export const PICK_STR = 'Pick';
export const STAGE_STR = 'Stage';
export const PAY_AT_PICKUP_STR = 'Pay at Pickup';

// regex
export const NUMBER_REGEX = /^\+?[1-9][0-9]*$/;
export const SEARCH_REGEX = /[^0-9A-Za-z ]+/;

// screens
export const SCREENS = {
  ADD_ITEM: 'AddItem',
  COMMENTS: 'Comments',
  DISPENSE: 'Dispense',
  INPUT_CONTAINER: 'InputContainer',
  ITEM_DETAIL: 'ItemDetail',
  LOGIN: 'Login',
  MAIN: 'Main',
  ORDER_DETAIL: 'OrderDetail',
  ORDER_SCREEN: 'OrderScreen',
  PICK_UP_HANDLER_SCREEN: 'PickUpHandlerScreen',
  PICK_UP_PERSON: 'PickUpPerson',
  REVIEW_ORDER: 'ReviewOrder',
  SCAN_CONTAINER: 'ScanContainer',
  SPLASH: 'Splash'
};

export const PICK_COMPLETE_STR = 'All items picked';
export const STAGE_COMPLETE_STR = 'All containers staged';
export const DISPENSE_COMPLETE_STR = 'All containers are ready to dispense';

// Home Screen
export const PERFORMANCE_STR = 'Performance';
export const READY_STR = 'Ready';
export const FULL_STR = 'Full';
export const FAST_STR = 'Fast';
export const GOAL_STR = 'Goal';
export const CLUB_PICK_SPEED_STR = 'Club pick speed';
export const PICKED_ITEMS_STR = 'Number of items picked per hour';
