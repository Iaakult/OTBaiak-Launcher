export namespace main {
	
	export class LaunchProfile {
	    key: string;
	    name: string;
	
	    static createFrom(source: any = {}) {
	        return new LaunchProfile(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.key = source["key"];
	        this.name = source["name"];
	    }
	}

}

