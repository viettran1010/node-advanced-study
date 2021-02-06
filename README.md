# node-advanced-study

By deafault, thread pool has 4 threads limit. When we call crypto functions 5 times, 4 of them will be handled by a thread pool. The 1 crypto function call left will have to wait until a thread from thread pool is avaiable. The computer we are using here is a Macbook Pro which has 2 physical CPU, each has 2 logical thread so there is a total of 4 logical threads (meaning a maximum of for tasks can be run in parallel).

![Alt text](node-thread-pool.png?raw=true "Title")

All the network tasks will be delegated to OS, whereas all the call to fs library will be handled by thread pool.

![Alt text](thread-pool-os.png?raw=true "Title")

When read/write/update/etc file, the working thread will have to interact with HDD, which might take sometime for the HDD to response. So the logical thread handling this task might 'pause' and switch to do other tasks.

![Alt text](node-fs.png?raw=true "Title")

Using cluster should be handled with care, usually the number of clusters should not be greater than the number of logical threads. This can be automatically handled by pm2 library.

![Alt text](improve-node-performance.png?raw=true "Title")

Use apache benchmark to benchmark a large number of requests:
- ab -c 50 -n 500 localhost:3000/fast : 500 requests to address, max 50 at a time

![Alt text](worker-threads.png?raw=true "Title")
