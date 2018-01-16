#include "queue.h"

struct worker {
  struct thread thread;
  struct queue jobs_q;

};

struct worker_job {
  void* func;
  void* arg;
};
