// const cities = {
// 	start: { u: 271, n: 132, kr: 453 },
// 	u: { k: 212 },
// 	n: { kr: 106 },
// 	k: { p: 352 },
// 	kr: { finish: 146, k: 421 },
// 	p: { finish: 187 },
// 	finish: {}
// };

type AdjList = {
	[key: string]: { [key: string]: number }
}

type DistanceList = { [key: string]: number };

class Navigate {
	private cities: string[] = [];
	private adjList: AdjList = {};

	constructor() {
		let cities = { o: 'Odessa', n: 'Nikolaev', kr: 'KrivoiRog', u: 'Uman', k: 'Kyiv', p: 'Poltava', dp: 'Dnepr', };

		this.addCity(cities.o);
		this.addCity(cities.n);
		this.addCity(cities.kr);
		this.addCity(cities.u);
		this.addCity(cities.k);
		this.addCity(cities.p);
		this.addCity(cities.dp);

		this.addEdge(cities.o, cities.n, 132);
		this.addEdge(cities.o, cities.u, 271);
		this.addEdge(cities.o, cities.kr, 453);
		this.addEdge(cities.u, cities.k, 212);
		this.addEdge(cities.n, cities.kr, 321);
		this.addEdge(cities.kr, cities.k, 421);
		this.addEdge(cities.kr, cities.dp, 146);
		this.addEdge(cities.k, cities.p, 352);
		this.addEdge(cities.p, cities.dp, 187);
	}

	addCity(city: string): void {
		if (this.cities.includes(city)) {
			console.log(`${city} is already exist`);
		}

		this.cities.push(city);
		this.adjList[city] = {};
	}

	addEdge(city1: string, city2: string, weight: number): void {
		this.adjList[city1][city2] = weight;
	}


	findPath(to: string, from: string = 'Odessa'): void {
		let distanceList: DistanceList = {};
		let visited = new Set<string>();

		for (let i = 0; i < this.cities.length; i++) {
			if (this.cities[i] === from) {
				distanceList[from] = 0;
			} else {
				distanceList[this.cities[i]] = Infinity;
			}
		}

		let currentCity: string | null = this.cityWithMinDistance(distanceList, visited);

		while (currentCity !== null) {
			let distance = distanceList[currentCity];
			let neighbors: { [key: string]: number } = this.adjList[currentCity];

			for (let neighbor in neighbors) {
				let newDistance = distance + neighbors[neighbor];

				if (distanceList[neighbor] > newDistance) {
					distanceList[neighbor] = newDistance;
				}
			}

			visited.add(currentCity);
			currentCity = this.cityWithMinDistance(distanceList, visited);
		}

		console.log(distanceList);

		console.log(`Distance from ${from} to ${to} ${distanceList[to]}km`)
	}

	cityWithMinDistance(distanceList: { [key: string]: number }, visited: Set<string>) {
		let minDistance = Infinity;
		let minVertex = null;

		for (let vertex in distanceList) {
			let distance = distanceList[vertex];

			if (distance < minDistance && !visited.has(vertex)) {
				minDistance = distance;
				minVertex = vertex
			}
		}

		return minVertex;
	}
}

let nav = new Navigate();

nav.findPath('Kyiv');
nav.addCity('Kyiv');
console.log('End');


// type Edge = {
// 	[key: string]: number
// }

// class Graph {
// 	constructor() {
// 		let cities = { o: 'Odessa', n: 'Nikolaev', kr: 'KrivoiRog', u: 'Uman', k: 'Kyiv', p: 'Poltava', dp: 'Dnepr' };

// 		this.addVertex(cities.o);
// 		this.addVertex(cities.n);
// 		this.addVertex(cities.kr);
// 		this.addVertex(cities.u);
// 		this.addVertex(cities.k);
// 		this.addVertex(cities.p);
// 		this.addVertex(cities.dp);

// 		this.addEdge(cities.o, cities.u, 271);
// 		this.addEdge(cities.o, cities.n, 132);
// 		this.addEdge(cities.o, cities.kr, 453);
// 		this.addEdge(cities.u, cities.k, 212);
// 		this.addEdge(cities.n, cities.kr, 106);
// 		this.addEdge(cities.kr, cities.dp, 146);
// 		this.addEdge(cities.kr, cities.k, 421);
// 		this.addEdge(cities.k, cities.p, 352);
// 		this.addEdge(cities.p, cities.dp, 187);
// 	}

// 	private list = new Map<string, Edge[]>();

// 	getList = (): Map<string, Edge[]> => this.list;

// 	addVertex(vertex: string): void {
// 		this.list.set(vertex, new Array<Edge>());
// 	}

// 	addEdge(vert1: string, vert2: string, weight: number): void {
// 		this.list.get(vert1).push({ [vert2]: weight });
// 		this.list.get(vert2).push({ [vert1]: weight });
// 	}

// 	shortestPath(city: string) {
// 		let queue = [this.list.get('Odessa')];

// 		let dist = {};

// 		this.list.forEach((value, key) => {
// 			if (key === 'Odessa') {
// 				dist[key] = 0;
// 			} else {
// 				dist[key] = Infinity;
// 			}
// 		})

// 		console.log(dist);

// 		while (queue.length > 0) {
// 			let current: Edge[] = queue.shift();

// 			for (let i = 0; i < current.length; i++) {
// 				let vertex: string = Object.keys(current[i]).join('');
// 				let weight: number = current[i][vertex];

// 				if (dist[vertex] > dist['Odessa'] + weight) {

// 					dist[vertex] = dist['Odessa'] + weight;

// 					console.log(dist[vertex])

// 					queue.push(this.list.get(vertex));
// 				}

// 			}
// 		}

// 		return dist[city];
// 	}
// }

// let graph = new Graph();

// graph.shortestPath('Kyiv');

// console.log('End');


