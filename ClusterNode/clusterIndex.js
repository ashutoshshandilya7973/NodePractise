import express from "express"
import cluster from "cluster"
import os from "os"

// Set a sufficiently high number for the loop to demonstrate blocking
const HEAVY_LOOP_COUNT = 9000000000;

if (cluster.isPrimary) {
    console.log(cluster)
    const numCpu = os.cpus().length;
    console.log(`Primary (PID: ${process.pid}) is setting up ${numCpu} workers.`);

    for (let i = 0; i < numCpu; i++) {
        cluster.fork()
    }
   console.log(cluster)
    cluster.on("online", (worker) => {
        console.log(`Worker ${worker.id} with PID ${worker.process.pid} is online.`);
    })
    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.id} with PID ${worker.process.pid} died. Code: ${code}, Signal: ${signal}`);
        console.log("Starting a new worker...");
        cluster.fork();
    })

} else {
    // This is the worker process
    const workerPid = process.pid;
    const app = express()

    app.get("/heavy", (req, res) => {
        console.log(`[Worker ${workerPid}] Request received for /heavy (START)`);

        // Synchronous, CPU-intensive task
        for (let i = 0; i < HEAVY_LOOP_COUNT; i++) {
            continue;
        }

        console.log(`[Worker ${workerPid}] Request received for /heavy (FINISH)`);
        res.json({ 
            message: "Heavy task completed.",
            workerPid: workerPid
        });
    })

    app.get("/low", (req, res) => {
        console.log(`[Worker ${workerPid}] Request received for /low`);
        
        res.json({ 
            message: "Low task handled immediately.",
            workerPid: workerPid
        });
    })


    app.listen(3000, () => {
        console.log(`Worker ${workerPid} server is running on port 3000.`);
    })
}
