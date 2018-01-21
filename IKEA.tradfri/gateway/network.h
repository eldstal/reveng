
struct net_unk1_m0 {
  int v1[38];
  void* network_object;
  int v2[38];
  void* func1;   // Set to NULL in one place, a function in another.
  int v10[6];
};

// Size: 364
struct network_unknown_1 {
  struct net_unk1_m0 m0;
  unsigned int feedbead;
  unsigned char padding1[8];
  void* callback3;
  void* callback2;
  void* callback1;
  void* object;   // Set to a struct http_server* once.
};

// Size: 24
struct socket {
  void* v0;
  int flag0;
  unsigned char buf1[4];
  short int v1;   // Port number?
  unsigned char buf2[2];
  int v2;
  unsigned char bool1;
  unsigned char padding1[3];
};
