import { HumeClient } from "hume";

class HumeClass {

    private client: HumeClient;

    constructor() {
        this.client = new HumeClient({
            apiKey: process.env.HUME_API_KEY || '',
            secretKey: process.env.HUME_SECRET_KEY || '',
        });
    }
    
    
}

export default HumeClass;


