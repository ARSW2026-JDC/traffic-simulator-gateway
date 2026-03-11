import { Injectable } from "@nestjs/common";

const SIMULATOR_URL = process.env.SIMULATOR_URL;

async function fetchWithRetry(url:string , options: RequestInit={}, retries = 3): Promise<Response> {
    for (let i = 0; i < retries; i++) {
        try{
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 3000); 
            const response = await fetch(url, { ...options, signal: controller.signal });
            clearTimeout(timeout);
            return response;
        }
        catch(error){
            if (i === retries - 1) throw error; 
            await new Promise(res => setTimeout(res, 500));
    }
    }
    throw new Error('Failed to fetch after retries');
}

@Injectable()
export class SimulatorJsService {
    async getHealth(){
        const response = await fetchWithRetry(`${SIMULATOR_URL}/health`);
        return response.json();
    }

    async getInitialState(){
        const response = await fetchWithRetry(`${SIMULATOR_URL}/initial-state`);
        return response.json();
    }

    async sendUpdate(payload: any){
        const response = await fetchWithRetry(`${SIMULATOR_URL}/update`, {  
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        return response.json();
    }
}