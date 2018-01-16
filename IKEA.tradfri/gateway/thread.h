
struct thread_list {
  int unknown1;
  struct thread_list* next;
  int unknown2;
  int event_level;
};

struct thread {
  struct smart_ptr ptr;
  unsigned char padding[172];
  void* p1;
};

