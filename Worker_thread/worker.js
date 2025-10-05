import {parentPort} from "node:worker_threads"

for(let i=0;i<90000000000;i++){
    continue;
}
parentPort.postMessage("90000000000 iteration completed")