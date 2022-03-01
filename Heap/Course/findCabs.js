class FindingCabs {
    getDistance(x, y) {
        return x * x + y * y;
    }
    findCab(arr, k) {
        let map = new Map();
        let dist = [];

        for (const [u, v, w] of arr) {
            let d = this.getDistance(v, w);
            map.set(d, u);
            dist.push(d);
        }
        // heapify first k elements
        let firstK = dist.slice(0, k);
        let heap = this.buildHeap(dist);
        
        for(let i = k ; i < dist.length ; i++){
            if(dist[i] < heap[0]){
                heap[0] = dist[i] ;
                heap = this.buildHeap(heap);
            }
        }
        let ans = [];
        for(let i = 0 ; i < heap.length ; i++){
            ans.push(map.get(heap[i]));
        }
        return ans;
    }
    buildHeap(arr, k) {
        let n = arr.length;
        let parent = Math.floor((n - 1) / 2);

        for (let i = parent; i >= 0; i--) {
            this.heapify(arr, i, n);
        }
        return arr;
    }
    heapify(arr, i, n) {
        let largest = i;
        let left = 2 * i + 1; // firstChild
        let right = 2 * i + 2; // secondChild

        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }
        if (i !== largest) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            this.heapify(arr, largest, n);
        }
    }
}

let arr = [['C1', 1, 1], ['C2', 2, 1], ['C3', 3, 2], ['C4', 0, 1], ['C5', 2, 3]];
let k = 3;
// OUTPUT : C2, C2, C4
const obj = new FindingCabs();
let ans = obj.findCab(arr, k);
console.log(ans);