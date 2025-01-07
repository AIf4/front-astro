export function validateEnv() {
    const requiredEnvVars = [
      'PUBLIC_API_BASE_URL',
    ];
  
    for (const envVar of requiredEnvVars) {
      if (!import.meta.env[envVar]) {
        throw new Error(`the environment param ${envVar} is required`);
      }
    }
  }