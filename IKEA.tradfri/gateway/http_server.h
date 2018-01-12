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
  unsigned char padding8[4];
  unsigned char shutdown;
  unsigned char padding10[7];
  int v30;
  struct http_unk_1 unknown1;
  struct http_unk_1 unknown2;
  void* callback0;
  void* func1;
};

struct http_event {
  void* v0;
  unsigned char event_type;   // 1,2 or 3
  unsigned char b2;
  unsigned char b3;
  unsigned char b4;
};


struct http_handler {
  unsigned char padding[4];
  unsigned char v4;
  unsigned char v5;
  unsigned char v6;
  unsigned char v7;
  unsigned char v8;
  unsigned char v9;
  unsigned char v10;
  unsigned char v11;
  struct thread thread1;
  unsigned char padding1[16];
  struct thread thread2;

};
