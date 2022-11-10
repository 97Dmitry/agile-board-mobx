import { stringify } from "query-string";

const DOMAIN = "http://localhost:7000/";

class Api {
  private readonly _domain: string;

  constructor(domain: string) {
    this._domain = domain;
  }

  private async perform(url: string, data?: any, config?: Record<any, any>): Promise<any> {
    const response = await fetch(`${this._domain}${url}`, {
      ...config,
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });

    const parsedResponse = await response.json();

    if (!response.ok) {
      throw new Error(parsedResponse.message);
    }

    return parsedResponse;
  }

  async get(path: string, queryParams: Record<any, any> = {}) {
    return this.perform(`${path}?${stringify(queryParams)}`);
  }

  async post(path: string, payload: any) {
    return await this.perform(path, payload, {
      method: "POST",
    });
  }

  async put(path: string) {
    return await this.perform(path, {
      method: "PUT",
    });
  }

  async delete(path: string) {
    return await this.perform(path, {
      method: "DELETE",
    });
  }
}

export default new Api(DOMAIN);
