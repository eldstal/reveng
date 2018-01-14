struct button_listeners {
  void* func[4];
};


struct button_event {
  unsigned char state;
  unsigned char b1;
  unsigned char button;
  unsigned char b3;
};
