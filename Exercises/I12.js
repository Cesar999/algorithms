
    function getSlice(n,s,arr){
        const holes = [];
        let vol = 100000*100000*100000;
        let r,x,y,z;
		// Read in the holes.
		for (let i=0; i<n; i++) {
            r = arr[i][0];
            x = arr[i][1];
            y = arr[i][2];
            z = arr[i][3];
			holes[i] = new Sphere(r,x,y,z);
			vol -= holes[i].volume();
		}

		let slice = vol/s;
		let cur = 0;

		// Go through each slice.
		for (let i=1; i<s; i++) {

			let low = cur;
			let high = 100000;

			// Run binary search until we get the right volume.
			while (high-low > 1e-7) {
				let mid = (low+high)/2;
				let thisVol = volFromLeft(mid,n, holes);

				if (thisVol > i*slice) 	high = mid;
				else 					low = mid;
			}
			let res = (low+high)/2;

			// Print out this cut.
			console.log((res-cur)/1000);
			cur = res;
		}

		// Print out last cut.
		console.log((100000.0-cur)/1000.0);
    }


	function volFromLeft(zCut,n, holes) {
		// Volume without holes.
        let vol = 100000*100000*zCut;
        
		// Go through each hole.
		for (let i=0; i<n; i++) {

			// Whole hole is in this region.
			if (holes[i].z+holes[i].r < zCut) vol -= holes[i].volume();

			// Part of a whole, gotta to the integral (disc method of integration).
			else if (holes[i].z-holes[i].r <= zCut) {
				let limit = zCut - holes[i].z;
				let myVol = holes[i].r*holes[i].r*limit - limit*limit*limit/3.0 + 2.0/3*holes[i].r*holes[i].r*holes[i].r;
				myVol *= Math.PI;
				vol -= myVol;
			}
		}

		return vol;
	}


class Sphere {
	constructor(r, x, y,z) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.r = r;
	}

	volume() {
		return 4.0/3*Math.PI*Math.pow(this.r,3);
	}
}

getSlice(0,4);
console.log('------------');
getSlice(2,5,[[10000,10000,20000,20000],[40000,40000,50000,60000]]);