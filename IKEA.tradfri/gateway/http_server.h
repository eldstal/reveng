#include "queue.h"
#include "worker.h"

// Size: 12
struct http_unk_1 {
  unsigned char padding0[4];
  struct http_handler* handler1;
  struct http_handler* handler2;
};

struct http_endpoint {
  char* POST;
  char* MIME;
  unsigned char v2; // 0-5
  unsigned char padding2[3];
  void* func1;
  int v4;
};

// Size: 572
struct http_server {
  unsigned char padding0[15];
  short int port;
  unsigned char padding5[6];
  struct thread thread;
  struct queue event_q;
  struct worker worker;
  unsigned char padding6[16];
  struct http_handler* handlers;
  struct {
    unsigned char padding0[4];
    unsigned char shutdown;
    unsigned char padding10[3];
    http_endpoint* endpoints;
  } control;
  struct http_unk_1 unknown1;
  void* callback0;
  void* callback1;
};

struct http_event_m0 {
  unsigned char padding0[152];
  void* m0;
  unsigned char padding[184];
  void* m1;
};

// Size: 8
struct http_event {
  struct http_event_m0* m0;
  unsigned char event_type;   // 1,2 or 3
  unsigned char b2;
  unsigned char b3;
  unsigned char b4;
};


struct http_buffer_m0 {
  unsigned char padding0[8];
  int counter;
  unsigned char padding3[16];
  struct http_buffer* buf;
  unsigned char padding8[12];
  int v11;
  int v12;
};

struct http_buffer {
  struct http_buffer_m0* m0;
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

// Size: 48
struct http_handler {
  unsigned char padding[4];
  struct http_handler* next;
  struct http_handler* hndl;
  unsigned char v9;
  unsigned char v10;
  unsigned char v11;
  unsigned char buf1[16];
  unsigned char padding1[16];
  //unsigned char buf2[16];
  unsigned char padding2[4];
};

