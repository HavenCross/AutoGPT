module.exports = {
  apps: [
    {
      name: 'autogpt-frontend',
      script: 'npm',
      args: 'start',
      autorestart: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 5000,
      out_file: 'logs/autogpt-frontend/normal.log',
      error_file: 'logs/autogpt-frontend/error.log',
      combine_logs: true,
    },
  ]
};