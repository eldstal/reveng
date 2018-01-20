
// Size: 48
struct llist_entry {
  struct llist_entry* head;
  struct llist_entry* next;
  struct llist_entry* prev;
};

// Size: 12
struct llist {
  int length;
  struct llist_entry* first_handler;
  struct llist_entry* last_handler;
};
