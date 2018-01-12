#include "queue.h"

struct worker {
  struct thread thread;
  unsigned char padding[179];
  struct queue jobs_q;

};

struct worker_job {
  void* func;
  void* arg;
};
