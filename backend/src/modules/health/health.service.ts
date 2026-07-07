export class HealthService {
  getHealth() {
    return {
      succes: true,
      message: 'Server is running',
      timestamp: new Date().toISOString(),
    };
  }
}

export const healthService = new HealthService();
