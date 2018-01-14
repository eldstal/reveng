#include "queue.h"
#include "worker.h"

struct http_unk_1 {
  struct thread thread;
  struct http_handler* handler;
};

struct http_server {
  struct thread thread;
  unsigned char padding0[7];
  short int port;
  unsigned char padding5[190];
  struct queue event_q;
  struct worker worker;
  unsigned char padding8[8];
  unsigned char shutdown;
  unsigned char padding10[7];
  int v30;
  struct http_unk_1 unknown1;
  struct http_unk_1 unknown2;
  void* callback0;
  void* callback1;
};

struct http_event_m0 {
  unsigned char padding0[152];
  void* m0;
  unsigned char padding[184];
  void* m1;
};

struct http_event {
  struct http_event_m0* m0;
  unsigned char event_type;   // 1,2 or 3
  unsigned char b2;
  unsigned char b3;
  unsigned char b4;
};


struct http_buffer {
  int v0;
  int v1;
  int v2;
  struct http_buffer* next;
  int v4;
  int v5;
  short v6l;
  short v6h;
  int v7;
  int v8;
  int v9;
  int v10;
  int v11;
  short v12l;
  short v12h;
  int v13;
  int v14;
  int v15;
};

struct http_handler {
  unsigned char padding[4];
  struct http_handler* next;
  unsigned char v8;
  unsigned char v9;
  unsigned char v10;
  unsigned char v11;
  struct thread thread1;
  unsigned char padding1[16];
  struct thread thread2;

};
