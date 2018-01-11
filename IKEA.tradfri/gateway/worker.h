struct worker_queue {
  unsigned int padding;
};


struct worker_thread {
  unsigned char padding[184];
  struct worker_queue queue;

};
